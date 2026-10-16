const path = require("path");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { pickThemes } = require("./src/themes");
const { judgeRound, aiEnabled } = require("./src/judge");

const PORT = process.env.PORT || 3000;
const ROUND_OPTIONS = [3, 5, 10];
const TIMER_OPTIONS = [30, 60, 90];
const LANGS = ["fr", "en", "es"];
const MODES = ["most", "least"];
const UNIVERSES = ["cartoon", "manga"];
const MAX_PLAYERS = 12;
const MAX_AVATAR_LEN = 80_000; // photo importée, déjà redimensionnée côté client

const app = express();
// Page d'accueil servie avec les textes français déjà remplis, pour que les moteurs de recherche
// (qui n'exécutent pas toujours le JavaScript) lisent le contenu du jeu.
const INDEX_HTML = (() => {
  const fs = require("fs");
  const vm = require("vm");
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, "public/i18n.js"), "utf8"), sandbox);
  const fr = sandbox.window.I18N.fr;
  const escapeHtml = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return fs
    .readFileSync(path.join(__dirname, "public/index.html"), "utf8")
    .replace(/(data-i18n="(\w+)"[^>]*>)(<\/)/g, (m, open, key, close) => (typeof fr[key] === "string" ? open + escapeHtml(fr[key]) + close : m))
    .replace(/(data-i18n-ph="(\w+)")/g, (m, attr, key) => (typeof fr[key] === "string" ? `${attr} placeholder="${escapeHtml(fr[key])}"` : m));
})();
const SITE_URL = (process.env.SITE_URL || "https://cartoon-clash.onrender.com").replace(/\/$/, "");

app.get(["/", "/index.html"], (_req, res) => res.type("html").send(INDEX_HTML));
app.get("/robots.txt", (_req, res) => res.type("text/plain").send(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`));
app.get("/sitemap.xml", (_req, res) =>
  res.type("application/xml").send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`
  )
);
app.use(express.static(path.join(__dirname, "public")));
app.get("/health", (_req, res) => res.json({ ok: true, ai: aiEnabled() }));

const server = http.createServer(app);
const io = new Server(server, { maxHttpBufferSize: 200_000 });

/** @type {Map<string, any>} */
const rooms = new Map();

function makeCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  let code;
  do {
    code = Array.from({ length: 4 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
  } while (rooms.has(code));
  return code;
}

function cleanName(name) {
  return String(name || "").trim().slice(0, 20) || "Joueur";
}

function cleanAvatar(avatar) {
  const a = String(avatar || "");
  if (/^char:\d{1,3}$/.test(a)) return a;
  if (a.startsWith("data:image/") && a.length <= MAX_AVATAR_LEN) return a;
  return "char:0";
}

function publicState(room) {
  const players = [...room.players.values()].map((p) => ({
    id: p.id,
    name: p.name,
    avatar: p.avatar,
    score: p.score,
    connected: p.connected,
    submitted: room.answers.has(p.id),
  }));
  return {
    code: room.code,
    hostId: room.hostId,
    lang: room.lang,
    phase: room.phase,
    settings: room.settings,
    round: room.round,
    totalRounds: room.themes.length || room.settings.rounds,
    theme: room.round > 0 ? room.themes[room.round - 1][room.settings.mode] : null,
    remaining: room.deadline ? Math.max(0, room.deadline - Date.now()) : null,
    players,
    lastResult: room.phase === "results" || room.phase === "final" ? room.history[room.history.length - 1] : null,
    history: room.phase === "final" ? room.history : null,
    ai: aiEnabled(),
  };
}

function broadcast(room) {
  io.to(room.code).emit("room_state", publicState(room));
}

function connectedPlayers(room) {
  return [...room.players.values()].filter((p) => p.connected);
}

function startRound(room) {
  room.round += 1;
  room.answers = new Map();
  room.phase = "playing";
  room.deadline = Date.now() + room.settings.timer * 1000;
  clearTimeout(room.timer);
  room.timer = setTimeout(() => endRound(room), room.settings.timer * 1000 + 500);
  broadcast(room);
}

async function endRound(room) {
  if (room.phase !== "playing") return;
  clearTimeout(room.timer);
  room.phase = "judging";
  room.deadline = null;
  broadcast(room);

  const theme = room.themes[room.round - 1];
  const mode = room.settings.mode;
  const submissions = [...room.players.values()].map((p) => ({
    playerId: p.id,
    name: p.name,
    answer: room.answers.get(p.id) || "",
  }));
  const verdict = await judgeRound({ theme, mode, universe: room.settings.universe, submissions, lang: room.lang });
  if (!rooms.has(room.code)) return;

  for (const r of verdict.results) {
    const p = room.players.get(r.playerId);
    if (p) {
      p.score += r.score;
      r.name = p.name;
      r.avatar = p.avatar;
    }
  }
  room.history.push({ round: room.round, theme: theme[mode], mode, universe: room.settings.universe, ...verdict });
  room.phase = room.round >= room.themes.length ? "final" : "results";
  broadcast(room);
}

function resetToLobby(room) {
  clearTimeout(room.timer);
  room.phase = "lobby";
  room.round = 0;
  room.themes = [];
  room.history = [];
  room.answers = new Map();
  room.deadline = null;
  for (const p of room.players.values()) p.score = 0;
}

io.on("connection", (socket) => {
  let room = null;
  let playerId = null;

  function join(targetRoom, data) {
    playerId = String(data.playerId || socket.id).slice(0, 64);
    const existing = targetRoom.players.get(playerId);
    if (!existing && targetRoom.phase !== "lobby") return "game_started";
    if (!existing && targetRoom.players.size >= MAX_PLAYERS) return "room_full";

    if (existing) {
      existing.connected = true;
      existing.socketId = socket.id;
      existing.name = cleanName(data.name);
      existing.avatar = cleanAvatar(data.avatar);
    } else {
      targetRoom.players.set(playerId, {
        id: playerId,
        socketId: socket.id,
        name: cleanName(data.name),
        avatar: cleanAvatar(data.avatar),
        score: 0,
        connected: true,
      });
    }
    room = targetRoom;
    socket.join(room.code);
    broadcast(room);
    return null;
  }

  socket.on("create_room", (data = {}, cb = () => {}) => {
    const code = makeCode();
    const newRoom = {
      code,
      hostId: String(data.playerId || socket.id).slice(0, 64),
      lang: LANGS.includes(data.lang) ? data.lang : "fr",
      settings: {
        rounds: 5,
        timer: 60,
        mode: MODES.includes(data.mode) ? data.mode : "most",
        universe: UNIVERSES.includes(data.universe) ? data.universe : "cartoon",
      },
      players: new Map(),
      phase: "lobby",
      round: 0,
      themes: [],
      answers: new Map(),
      history: [],
      deadline: null,
      timer: null,
    };
    rooms.set(code, newRoom);
    join(newRoom, data);
    cb({ ok: true, code, playerId });
  });

  socket.on("join_room", (data = {}, cb = () => {}) => {
    const target = rooms.get(String(data.code || "").trim().toUpperCase());
    if (!target) return cb({ ok: false, error: "room_not_found" });
    const error = join(target, data);
    if (error) return cb({ ok: false, error });
    cb({ ok: true, code: target.code, playerId });
  });

  socket.on("update_profile", (data = {}) => {
    if (!room) return;
    const p = room.players.get(playerId);
    if (!p) return;
    p.name = cleanName(data.name);
    p.avatar = cleanAvatar(data.avatar);
    broadcast(room);
  });

  socket.on("update_settings", (data = {}) => {
    if (!room || room.hostId !== playerId || room.phase !== "lobby") return;
    if (ROUND_OPTIONS.includes(data.rounds)) room.settings.rounds = data.rounds;
    if (TIMER_OPTIONS.includes(data.timer)) room.settings.timer = data.timer;
    if (LANGS.includes(data.lang)) room.lang = data.lang;
    if (MODES.includes(data.mode)) room.settings.mode = data.mode;
    if (UNIVERSES.includes(data.universe)) room.settings.universe = data.universe;
    broadcast(room);
  });

  socket.on("start_game", () => {
    if (!room || room.hostId !== playerId || room.phase !== "lobby") return;
    if (connectedPlayers(room).length < 2) return socket.emit("error_msg", "need_players");
    room.themes = pickThemes(room.settings.rounds);
    room.round = 0;
    room.history = [];
    for (const p of room.players.values()) p.score = 0;
    startRound(room);
  });

  socket.on("submit_answer", (data = {}) => {
    if (!room || room.phase !== "playing" || !room.players.has(playerId)) return;
    const answer = String(data.answer || "").trim().slice(0, 60);
    if (!answer) return;
    room.answers.set(playerId, answer);
    broadcast(room);
    if (connectedPlayers(room).every((p) => room.answers.has(p.id))) endRound(room);
  });

  socket.on("next_round", () => {
    if (!room || room.hostId !== playerId || room.phase !== "results") return;
    startRound(room);
  });

  socket.on("back_to_lobby", () => {
    if (!room || room.hostId !== playerId || room.phase !== "final") return;
    resetToLobby(room);
    broadcast(room);
  });

  function leave(remove) {
    if (!room) return;
    const p = room.players.get(playerId);
    if (p && p.socketId === socket.id) {
      if (remove || room.phase === "lobby") room.players.delete(playerId);
      else p.connected = false;
    }
    socket.leave(room.code);

    const online = connectedPlayers(room);
    if (online.length === 0) {
      clearTimeout(room.timer);
      rooms.delete(room.code);
    } else {
      if (!room.players.get(room.hostId)?.connected) room.hostId = online[0].id;
      if (room.phase === "playing" && online.every((pl) => room.answers.has(pl.id))) endRound(room);
      broadcast(room);
    }
    room = null;
  }

  socket.on("leave_room", () => leave(true));
  socket.on("disconnect", () => leave(false));
});

server.listen(PORT, () => {
  console.log(`Cartoon Clash running on http://localhost:${PORT} (judge: ${aiEnabled() ? "Claude AI" : "built-in character database"})`);
});
