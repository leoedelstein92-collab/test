// Test de bout en bout : 2 joueurs, 3 manches en mode « le moins », univers mangas, juge = base de personnages (sans clé IA).
const { spawn } = require("child_process");
const { io } = require("socket.io-client");
const assert = require("assert");

const PORT = 3999;
const srv = spawn("node", ["server.js"], { env: { ...process.env, PORT, ANTHROPIC_API_KEY: "" }, stdio: "inherit" });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const until = (sock, pred) => new Promise((res) => {
  const h = (s) => { if (pred(s)) { sock.off("room_state", h); res(s); } };
  sock.on("room_state", h);
});

(async () => {
  for (let i = 0; i < 50; i++) { try { await fetch(`http://localhost:${PORT}/health`); break; } catch { await wait(200); } }
  const list = await (await fetch(`http://localhost:${PORT}/api/characters/manga`)).json();
  assert(list.length > 550 && list.some((c) => c.n === "Son Goku"), "character list endpoint");
  const a = io(`http://localhost:${PORT}`), b = io(`http://localhost:${PORT}`);
  const created = await new Promise((r) => a.emit("create_room", { playerId: "A", name: "Alice", avatar: "char:3", lang: "fr" }, r));
  assert(created.ok && created.code.length === 4);
  const bad = await new Promise((r) => b.emit("join_room", { code: "ZZZZ", playerId: "B", name: "Bob" }, r));
  assert.strictEqual(bad.error, "room_not_found");
  const joined = await new Promise((r) => b.emit("join_room", { code: created.code, playerId: "B", name: "Bob", avatar: "char:9" }, r));
  assert(joined.ok);
  await wait(100);
  a.emit("update_settings", { rounds: 3, timer: 30, lang: "en", mode: "least", universe: "manga" });
  b.emit("update_settings", { rounds: 10 }); // pas hôte : ignoré
  await wait(100);
  let s = until(a, (s) => s.phase === "playing" && s.round === 1);
  a.emit("start_game");
  s = await s;
  assert.strictEqual(s.totalRounds, 3);
  assert.strictEqual(s.lang, "en");
  assert.strictEqual(s.settings.mode, "least");
  assert.strictEqual(s.settings.universe, "manga");
  assert(require("../src/themes").THEMES.some((t) => t.least.en === s.theme.en), s.theme.en);
  for (let round = 1; round <= 3; round++) {
    const done = until(a, (s) => (s.phase === "results" || s.phase === "final") && s.round === round);
    a.emit("submit_answer", { answer: "Naruto" });
    b.emit("submit_answer", { answer: "Luffy" });
    s = await done;
    assert.strictEqual(s.lastResult.results.length, 2);
    assert(s.lastResult.results.every((r) => r.recognized), "characters should be found in the database");
    assert(s.lastResult.summary);
    if (round < 3) { const nx = until(a, (s) => s.phase === "playing"); a.emit("next_round"); await nx; }
  }
  assert.strictEqual(s.phase, "final");
  assert.strictEqual(s.history.length, 3);
  const total = s.history.reduce((t, h) => t + h.results.find((r) => r.playerId === "A").score, 0);
  assert.strictEqual(s.players.find((p) => p.id === "A").score, total);
  const lobby = until(a, (s) => s.phase === "lobby");
  a.emit("back_to_lobby");
  s = await lobby;
  assert(s.players.every((p) => p.score === 0));
  
  // Juge par base de personnages : cohérence des modes
  const { knowledgeJudge } = require("../src/knowledge-judge");
  const { THEMES } = require("../src/themes");
  const { CHARACTERS } = require("../src/characters");
  const { DBS } = require("../src/characters");
  const RANKINGS = require("../src/data/rankings");
  const TAGS = require("../src/data/tags");
  assert(DBS.cartoon.characters.length > 1300, "cartoon database too small");
  assert(DBS.manga.characters.length > 550, "manga database too small");
  for (const [u, db] of Object.entries(DBS)) {
    assert.deepStrictEqual(db.duplicates, [], `${u}: duplicate character names`);
    assert(db.characters.every((c) => c.values.length === 17 && c.values.every((v) => Number.isInteger(v) && v >= 0 && v <= 10)), `${u}: bad ratings`);
    const { TRAITS } = require("../src/characters");
    assert(db.characters.every((c) => TRAITS.every((t) => Number.isInteger(c.traits[t]) && c.traits[t] >= 0 && c.traits[t] <= 10)), `${u}: bad extra criteria`);
    const missing = db.characters.filter((c) => !c.profile).map((c) => c.name);
    assert.deepStrictEqual(missing, [], `${u}: characters without a profile in src/profiles/`);
    for (const c of db.characters) {
      const p = c.profile;
      assert(p.desc.fr && p.desc.en && p.desc.es && Object.keys(p.facts).length >= 3, `${u}: incomplete profile for ${c.name}`);
      for (const [k, f] of Object.entries(p.facts)) assert(TRAITS.includes(k) && f.fr && f.en && f.es, `${u}: bad fact ${k} for ${c.name}`);
    }
    const owners = new Map();
    for (const c of db.characters) for (const k of c.keys) {
      assert(!owners.has(k) || owners.get(k) === c.name, `${u}: alias "${k}" used by ${owners.get(k)} and ${c.name}`);
      owners.set(k, c.name);
    }
    const names = new Set(db.characters.map((c) => c.name));
    for (const [id, list] of Object.entries(RANKINGS[u])) {
      assert(THEMES.some((t) => t.id === id), `${u}: unknown ranking theme ${id}`);
      for (const n of list) assert(names.has(n), `${u}: ranking ${id} names unknown character ${n}`);
    }
  }
  const cartoonNames = new Set(DBS.cartoon.characters.map((c) => c.name));
  for (const n of Object.keys(TAGS)) assert(cartoonNames.has(n), `tag for unknown character ${n}`);
  assert.strictEqual(new Set(THEMES.map((t) => t.id)).size, THEMES.length, "duplicate theme ids");
  for (const t of THEMES) for (const m of ["most", "least"]) assert(["fr", "en", "es"].every((l) => t[m][l]), `${t.id}: missing ${m} text`);
  const { pickThemes } = require("../src/themes");
  const first = pickThemes(10), second = pickThemes(10, first.map((t) => t.id));
  assert(new Set(first.map((t) => t.family)).size >= 4, "a game should mix theme families");
  assert(!second.some((t) => first.includes(t)), "next game should not repeat themes");
  for (const u of ["cartoon", "manga"]) {
    const fs = require("fs");
    const names = new Set(DBS[u].characters.map((c) => c.name));
    for (const f of fs.readdirSync(`${__dirname}/../src/profiles`).filter((f) => f.startsWith(`${u}-`)))
      for (const n of Object.keys(require(`../src/profiles/${f}`))) assert(names.has(n), `${f}: profile for unknown character ${n}`);
  }
  const strong = THEMES.find((t) => t.id === "strong");
  const manga = knowledgeJudge({ theme: strong, mode: "most", universe: "manga", lang: "fr", submissions: [
    { playerId: "1", name: "A", answer: "Goku" }, { playerId: "2", name: "B", answer: "Saitama" }, { playerId: "3", name: "C", answer: "Nobita" }] });
  assert.deepStrictEqual(manga.results.map((r) => r.character), ["Saitama", "Son Goku", "Nobita Nobi"]);
  const subs = [{ playerId: "1", name: "A", answer: "Lisa" }, { playerId: "2", name: "B", answer: "homer simpsonn" }];
  const smart = THEMES.find((t) => t.weights.int === 1 && Object.keys(t.weights).length === 1);
  assert.strictEqual(knowledgeJudge({ theme: smart, mode: "most", submissions: subs, lang: "fr" }).results[0].character, "Lisa Simpson");
  assert.strictEqual(knowledgeJudge({ theme: smart, mode: "least", submissions: subs, lang: "fr" }).results[0].character, "Homer Simpson");
  console.log("ALL TESTS PASSED");
  a.close(); b.close(); srv.kill(); process.exit(0);
})().catch((e) => { console.error(e); srv.kill(); process.exit(1); });
