(() => {
  // ---------- Utilitaires ----------
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };
  const sfx = (n) => window.SFX && SFX.play(n);

  // ---------- Avatars ----------
  const avatarIndex = (avatar) => (Number(String(avatar || "char:0").split(":")[1]) || 0) % AVATARS.count;
  function avatarHTML(avatar) {
    if (avatar && avatar.startsWith("data:image/")) return `<img src="${avatar}" alt="" />`;
    return AVATARS.svg(avatarIndex(avatar));
  }
  const avatarEl = (avatar, size = "") => `<span class="avatar ${size}">${avatarHTML(avatar)}</span>`;

  // ---------- État local ----------
  let playerId = store.get("cc_playerId", null);
  if (!playerId) {
    playerId = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2);
    store.set("cc_playerId", playerId);
  }
  const profile = {
    name: store.get("cc_name", ""),
    lang: store.get("cc_lang", (navigator.language || "fr").slice(0, 2)),
    avatar: store.get("cc_avatar", `char:${Math.floor(Math.random() * AVATARS.count)}`),
    mode: store.get("cc_mode", "most") === "least" ? "least" : "most",
  };
  if (!I18N[profile.lang]) profile.lang = "fr";

  let state = null;
  let editingAnswer = false;
  let revealedKey = null;
  let celebratedKey = null;
  let lastTick = null;
  const t = (k) => I18N[profile.lang][k] ?? k;

  // ---------- Pictogrammes statiques ----------
  function paintIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach((el) => {
      if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon);
    });
  }
  function paintMascots() {
    $("#heroMascot").innerHTML = MASCOT();
    $("#judgeMascot").innerHTML = MASCOT();
    $("#verdictMascot").innerHTML = MASCOT();
  }
  function paintSound() {
    $("#soundBtn").innerHTML = icon(SFX.muted ? "mute" : "sound");
  }

  // ---------- Traductions ----------
  function applyI18n() {
    document.documentElement.lang = profile.lang;
    $("#langSelect").value = profile.lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    $$("#modePicker .mode").forEach((el) => el.classList.toggle("selected", el.dataset.mode === profile.mode));
    if (state) render(true);
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.add("hidden"), 2600);
  }
  const showError = (code) => toast(t("errors")[code] || code);

  // ---------- Profil ----------
  const QUICK = [0, 1, 2, 3, 4, 5, 6, 7];
  function renderProfile() {
    $("#avatarBtn").innerHTML = avatarHTML(profile.avatar);
    $("#avatarName").textContent = profile.avatar.startsWith("data:") ? "📷" : AVATARS.name(avatarIndex(profile.avatar));
    $("#nameInput").value = profile.name;
    $("#quickAvatars").innerHTML =
      QUICK.map((i) => `<button class="avatar" data-av="char:${i}" title="${esc(AVATARS.name(i))}">${AVATARS.svg(i)}</button>`).join("") +
      `<button class="more" id="moreAvatars" aria-label="${esc(t("allAvatars"))}">+</button>`;
  }

  function saveProfile() {
    store.set("cc_name", profile.name);
    store.set("cc_avatar", profile.avatar);
    store.set("cc_lang", profile.lang);
    if (state) socket.emit("update_profile", { name: profile.name, avatar: profile.avatar });
  }

  function setAvatar(av) {
    profile.avatar = av;
    saveProfile();
    renderProfile();
    buildAvatarGrid();
    sfx("pop");
    const b = $("#avatarBtn");
    b.style.animation = "none";
    void b.offsetWidth;
    b.style.animation = "wobble .5s ease";
  }

  function buildAvatarGrid() {
    $("#avatarGrid").innerHTML = Array.from({ length: AVATARS.count }, (_, i) =>
      `<button class="av-choice ${profile.avatar === "char:" + i ? "active" : ""}" data-av="char:${i}">
        <span class="avatar">${AVATARS.svg(i)}</span><span>${esc(AVATARS.name(i))}</span></button>`
    ).join("");
  }

  $("#avatarGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-av]");
    if (btn) setAvatar(btn.dataset.av);
  });
  $("#quickAvatars").addEventListener("click", (e) => {
    if (e.target.closest("#moreAvatars")) return openAvatars();
    const btn = e.target.closest("[data-av]");
    if (btn) setAvatar(btn.dataset.av);
  });

  $("#photoInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const size = 160;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const s = Math.min(img.width, img.height);
      canvas.getContext("2d").drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      URL.revokeObjectURL(img.src);
      setAvatar(canvas.toDataURL("image/jpeg", 0.8));
      $("#avatarDialog").close();
    };
    img.onerror = () => showError("bad_image");
    img.src = URL.createObjectURL(file);
    e.target.value = "";
  });

  function openAvatars() { buildAvatarGrid(); $("#avatarDialog").showModal(); sfx("click"); }
  $("#avatarBtn").addEventListener("click", openAvatars);
  $("#openAvatars").addEventListener("click", openAvatars);
  $("#closeAvatars").addEventListener("click", () => $("#avatarDialog").close());

  $("#nameInput").addEventListener("input", (e) => {
    profile.name = e.target.value.slice(0, 20);
    store.set("cc_name", profile.name);
  });

  $("#modePicker").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mode]");
    if (!b) return;
    profile.mode = b.dataset.mode;
    store.set("cc_mode", profile.mode);
    sfx("pop");
    applyI18n();
  });

  $("#langSelect").addEventListener("change", (e) => {
    profile.lang = e.target.value;
    store.set("cc_lang", profile.lang);
    applyI18n();
  });

  $("#soundBtn").addEventListener("click", () => { SFX.toggle(); paintSound(); });
  document.addEventListener("click", (e) => { if (e.target.closest(".btn, .seg button")) sfx("click"); });

  // ---------- Connexion ----------
  const socket = io();
  const payload = (extra = {}) => ({ playerId, name: profile.name, avatar: profile.avatar, lang: profile.lang, mode: profile.mode, ...extra });

  function requireName() {
    if (!profile.name.trim()) {
      showError("need_name");
      $("#nameInput").focus();
      return false;
    }
    return true;
  }

  $("#createBtn").addEventListener("click", () => {
    if (!requireName()) return;
    socket.emit("create_room", payload(), (res) => res.ok && store.set("cc_room", res.code));
  });

  function joinRoom(code, silent) {
    socket.emit("join_room", payload({ code }), (res) => {
      if (res.ok) {
        store.set("cc_room", res.code);
        history.replaceState(null, "", location.pathname);
      } else {
        store.del("cc_room");
        if (!silent) showError(res.error);
      }
    });
  }

  $("#joinBtn").addEventListener("click", () => {
    if (!requireName()) return;
    const code = $("#codeInput").value.trim().toUpperCase();
    if (code.length === 4) joinRoom(code);
  });
  $("#codeInput").addEventListener("input", (e) => (e.target.value = e.target.value.toUpperCase()));
  $("#codeInput").addEventListener("keydown", (e) => e.key === "Enter" && $("#joinBtn").click());

  socket.on("connect", () => {
    const saved = store.get("cc_room", null);
    if (saved && profile.name) joinRoom(saved, true);
  });

  socket.on("room_state", (s) => {
    const prev = state;
    state = s;
    state.deadline = s.remaining != null ? Date.now() + s.remaining : null;
    if (!prev || prev.round !== s.round || prev.phase !== s.phase) editingAnswer = false;
    playTransitionSounds(prev, s);
    render();
  });
  socket.on("error_msg", showError);

  function playTransitionSounds(prev, s) {
    if (!prev) return;
    if (s.phase === "lobby" && s.players.length > prev.players.length) sfx("join");
    if (s.phase === "playing" && (prev.phase !== "playing" || prev.round !== s.round)) sfx("start");
    if (s.phase === "playing" && prev.phase === "playing") {
      const before = prev.players.filter((p) => p.submitted).length;
      if (s.players.filter((p) => p.submitted).length > before) sfx("pop");
    }
    if (s.phase === "judging" && prev.phase !== "judging") sfx("drum");
  }

  $$(".leaveBtn").forEach((b) =>
    b.addEventListener("click", () => {
      socket.emit("leave_room");
      store.del("cc_room");
      state = null;
      document.body.classList.remove("in-room");
      show("home");
    })
  );

  $("#copyLink").addEventListener("click", async () => {
    const link = `${location.origin}${location.pathname}?room=${state.code}`;
    try { await navigator.clipboard.writeText(link); toast(t("copied")); } catch { prompt("", link); }
  });

  // ---------- Réglages (hôte) ----------
  function segHandler(id, key, parse) {
    $(id).addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || !isHost()) return;
      socket.emit("update_settings", { ...state.settings, lang: state.lang, [key]: parse(b.dataset.v) });
    });
  }
  segHandler("#roundsSeg", "rounds", Number);
  segHandler("#timerSeg", "timer", Number);
  segHandler("#aiLangSeg", "lang", String);
  segHandler("#modeSeg", "mode", String);

  $("#startBtn").addEventListener("click", () => socket.emit("start_game"));
  $("#nextBtn").addEventListener("click", () => socket.emit("next_round"));
  $("#againBtn").addEventListener("click", () => socket.emit("back_to_lobby"));

  $("#answerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const answer = $("#answerInput").value.trim();
    if (!answer) return;
    editingAnswer = false;
    socket.emit("submit_answer", { answer });
    store.set("cc_last_answer", answer);
    sfx("submit");
  });
  $("#changeBtn").addEventListener("click", () => {
    editingAnswer = true;
    render();
    $("#answerInput").value = store.get("cc_last_answer", "");
    $("#answerInput").focus();
  });

  // ---------- Rendu ----------
  const isHost = () => state && state.hostId === playerId;
  const me = () => state?.players.find((p) => p.id === playerId);
  const themeText = (theme) => (theme ? theme[profile.lang] || theme.fr : "");
  const modeName = () => t(state.settings.mode === "least" ? "modeLeast" : "modeMost");

  let current = null;
  function show(name) {
    if (current === name) return;
    current = name;
    $$(".screen").forEach((s) => s.classList.toggle("hidden", s.id !== "screen-" + name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setSeg(id, value) {
    $$(id + " button").forEach((b) => {
      b.classList.toggle("active", b.dataset.v === String(value));
      b.disabled = !isHost();
    });
  }

  function render(fromI18n = false) {
    document.body.classList.toggle("in-room", Boolean(state));
    if (!state) return show("home");
    $$(".roundNum").forEach((el) => (el.textContent = `${state.round}/${state.totalRounds}`));
    $$(".modeLabel").forEach((el) => (el.innerHTML = `${icon(state.settings.mode === "least" ? "flip" : "trophy")}<span>${esc(modeName())}</span>`));

    switch (state.phase) {
      case "lobby": show("lobby"); renderLobby(); break;
      case "playing": show("playing"); renderPlaying(); break;
      case "judging": show("judging"); break;
      case "results": show("results"); renderRoundResults(fromI18n); break;
      case "final": show("final"); renderFinal(); break;
    }
  }

  function renderLobby() {
    $("#roomCode").textContent = state.code;
    $("#playerCount").textContent = state.players.length;
    const seats = state.players.map((p) => `<li class="seat ${p.id === playerId ? "me" : ""} ${p.connected ? "" : "offline"}">
        ${p.id === state.hostId ? `<span class="crown">${icon("crown")}</span>` : ""}
        ${avatarEl(p.avatar, "md")}
        <span class="pname">${esc(p.name)}${p.id === playerId ? ` (${esc(t("me"))})` : ""}</span>
      </li>`);
    const empties = Math.max(0, Math.min(12, Math.max(4, state.players.length + 1)) - state.players.length);
    for (let i = 0; i < empties; i++) seats.push(`<li class="seat empty"><span class="ghost-av">?</span><span>${esc(t("seatEmpty"))}</span></li>`);
    $("#lobbyPlayers").innerHTML = seats.join("");
    setSeg("#roundsSeg", state.settings.rounds);
    setSeg("#timerSeg", state.settings.timer);
    setSeg("#aiLangSeg", state.lang);
    setSeg("#modeSeg", state.settings.mode);
    const enough = state.players.filter((p) => p.connected).length >= 2;
    $("#startBtn").classList.toggle("hidden", !isHost());
    $("#startBtn").disabled = !enough;
    $("#lobbyHint").textContent = !isHost() ? t("waitingHost") : enough ? "" : t("needPlayers");
  }

  let themeShown = null;
  function renderPlaying() {
    const key = `${state.code}-${state.round}`;
    if (themeShown !== key) {
      themeShown = key;
      const card = $("#themeCard");
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "";
    }
    $("#themeText").textContent = themeText(state.theme);
    const done = me()?.submitted && !editingAnswer;
    $("#answerForm").classList.toggle("hidden", done);
    $("#submittedBox").classList.toggle("hidden", !done);
    if (done) $("#myAnswer").textContent = `« ${store.get("cc_last_answer", "")} »`;
    else if (!editingAnswer) $("#answerInput").value = "";
    $("#playingPlayers").innerHTML = state.players
      .filter((p) => p.connected)
      .map((p) => `<li class="${p.submitted ? "done" : ""}">
        ${avatarEl(p.avatar, "md")}
        <span class="status">${p.submitted ? icon("check") : `<span class="typing"><i></i><i></i><i></i></span>`}</span>
        <span class="pname">${esc(p.name)}</span></li>`)
      .join("");
    if (!done && !editingAnswer) setTimeout(() => $("#answerInput").focus(), 60);
    updateTimer();
  }

  // ----- Résultats d'une manche : révélation du dernier au premier -----
  let revealTimers = [];
  function renderRoundResults(fromI18n) {
    const res = state.lastResult;
    if (!res) return;
    const key = `${state.code}-${res.round}`;
    const animate = revealedKey !== key && !fromI18n;
    $("#resultsTheme").textContent = themeText(res.theme);
    $("#resultsSummary").textContent = res.summary || "…";
    const notice = res.fallback ? t("fallback") : "";
    $("#resultsNotice").textContent = notice;
    $("#resultsNotice").classList.toggle("hidden", !notice);

    $("#resultsList").innerHTML = res.results.map((r, i) => resultRow(r, i, animate)).join("");
    const last = state.round >= state.totalRounds;
    $("#nextBtn").innerHTML = `${icon(last ? "trophy" : "arrow")}<span>${esc(last ? t("seeFinal") : t("next"))}</span>`;

    const showActions = () => {
      $("#nextBtn").classList.toggle("hidden", !isHost());
      $("#waitingNext").classList.toggle("hidden", isHost());
    };
    if (!animate) {
      if (revealedKey === key && !revealTimers.length) showActions();
      fillBars(false);
      return;
    }
    revealedKey = key;
    revealTimers.forEach(clearTimeout);
    revealTimers = [];
    $("#nextBtn").classList.add("hidden");
    $("#waitingNext").classList.add("hidden");

    const items = [...$$("#resultsList .result")];
    const order = items.map((_, i) => i).reverse();
    let delay = 500;
    order.forEach((idx, n) => {
      const isWinner = idx === 0;
      if (isWinner && items.length > 1) { delay += 500; revealTimers.push(setTimeout(() => sfx("drum"), delay - 700)); }
      revealTimers.push(setTimeout(() => {
        const el = items[idx];
        el.classList.remove("pending");
        el.classList.add("revealed");
        countUp(el.querySelector(".score-num"), Number(el.dataset.score));
        const bar = el.querySelector(".bar div");
        requestAnimationFrame(() => (bar.style.width = `${el.dataset.score}%`));
        if (isWinner && Number(el.dataset.score) > 0) { sfx("win"); confetti(110); } else sfx("reveal");
        if (n === order.length - 1) { revealTimers = []; showActions(); }
      }, delay));
      delay += 750;
    });
  }

  function resultRow(r, i, pending) {
    const winner = i === 0 && r.score > 0;
    return `<li class="result rank-${i + 1} ${winner ? "winner" : ""} ${pending ? "pending" : ""}" data-score="${r.score}">
      ${winner ? `<span class="crown-top">${icon("crown")}</span>` : ""}
      <span class="rank-badge">${i + 1}</span>
      ${avatarEl(r.avatar, "md")}
      <div class="grow">
        <div class="line"><span class="who">${esc(r.name)}</span><span class="char">${esc(r.character)}</span>
          ${r.recognized ? "" : `<span class="tag-warn">${esc(t("notRecognized"))}</span>`}</div>
        <div class="explain">${esc(r.explanation)}</div>
        <div class="bar"><div></div></div>
      </div>
      <div class="score"><span class="score-num">${pending ? 0 : r.score}</span><small>/100</small></div>
    </li>`;
  }

  function fillBars(animated) {
    $$("#resultsList .result").forEach((el) => {
      const bar = el.querySelector(".bar div");
      if (!animated) bar.style.transition = "none";
      bar.style.width = `${el.dataset.score}%`;
    });
  }

  function countUp(el, target) {
    const start = performance.now();
    const dur = 900;
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ----- Classement final -----
  function renderFinal() {
    const ranking = [...state.players].sort((a, b) => b.score - a.score);
    const top = ranking.slice(0, 3);
    const order = [1, 0, 2].filter((i) => top[i]);
    $("#podium").innerHTML = order.map((i) => `<div class="step step-${i + 1}">
        ${i === 0 ? `<span class="crown-top">${icon("crown")}</span>` : ""}
        ${avatarEl(top[i].avatar, i === 0 ? "lg" : "md")}
        <div class="who">${esc(top[i].name)}</div>
        <div class="pts">${top[i].score} ${esc(t("pts"))}</div>
        <div class="block">${i + 1}</div>
      </div>`).join("");

    $("#finalList").innerHTML = ranking.map((p, i) => `<li class="result rank-${i + 1} ${i === 0 ? "winner" : ""}">
        <span class="rank-badge">${i + 1}</span>
        ${avatarEl(p.avatar)}
        <div class="grow"><span class="who" style="font-weight:900">${esc(p.name)}</span></div>
        <div class="score">${p.score}<small>${esc(t("pts"))}</small></div>
      </li>`).join("");

    let best = null;
    for (const h of state.history || []) for (const r of h.results) if (!best || r.score > best.score) best = { ...r, theme: h.theme };
    $("#bestBox").innerHTML = best
      ? `<div class="best-title">${icon("star")}<span>${esc(t("bestScore"))}</span></div>
         <div class="best-body">
           ${avatarEl(best.avatar, "lg")}
           <div class="grow"><strong>${esc(best.name)}</strong> — <span class="char">${esc(best.character)}</span>
             <div class="explain">${esc(t("onTheme"))} « ${esc(themeText(best.theme))} »</div>
             <div class="explain">${esc(best.explanation)}</div></div>
           <div class="score">${best.score}<small>/100</small></div>
         </div>`
      : "";

    $("#recap").innerHTML = (state.history || []).map((h) => {
      const w = h.results[0];
      return `<div class="recap-item"><span class="rnum">${h.round}</span>
        <div class="grow"><div class="rtheme">${esc(themeText(h.theme))}</div>
        <div class="sub2">${icon("trophy")}<b>${esc(w?.name)}</b> · ${esc(w?.character)} · ${w?.score}/100</div></div></div>`;
    }).join("");

    $("#againBtn").classList.toggle("hidden", !isHost());
    $("#waitingAgain").classList.toggle("hidden", isHost());

    const key = `${state.code}-${(state.history || []).length}-${ranking[0]?.id}`;
    if (celebratedKey !== key) {
      celebratedKey = key;
      setTimeout(() => { sfx("win"); confetti(220); }, 900);
    }
  }

  // ---------- Minuteur circulaire ----------
  const CIRC = 2 * Math.PI * 27;
  function updateTimer() {
    if (!state || state.phase !== "playing" || !state.deadline) return;
    const left = Math.max(0, state.deadline - Date.now());
    const total = state.settings.timer * 1000;
    $("#timerArc").style.strokeDashoffset = String(CIRC * (1 - left / total));
    const secs = Math.ceil(left / 1000);
    $("#timerText").textContent = secs;
    const low = left < 10000;
    $("#timerRing").classList.toggle("low", low);
    if (secs <= 5 && secs > 0 && secs !== lastTick && !(me()?.submitted && !editingAnswer)) { lastTick = secs; sfx("tick"); }
  }
  $("#timerArc").style.strokeDasharray = String(CIRC);
  setInterval(updateTimer, 200);

  // ---------- Confettis ----------
  const cv = $("#confetti");
  const cx = cv.getContext("2d");
  let parts = [];
  let raf = null;
  const COLORS = ["#ffd23f", "#ff4f8b", "#3ad1ff", "#3ddc84", "#ff9f1c", "#b48cff", "#ffffff"];
  function confetti(n) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cv.width = innerWidth * devicePixelRatio;
    cv.height = innerHeight * devicePixelRatio;
    for (let i = 0; i < n; i++) {
      const fromLeft = i % 2 === 0;
      parts.push({
        x: (fromLeft ? 0.05 : 0.95) * cv.width, y: cv.height * 0.75,
        vx: (fromLeft ? 1 : -1) * (6 + Math.random() * 10) * devicePixelRatio, vy: -(14 + Math.random() * 14) * devicePixelRatio,
        w: (8 + Math.random() * 8) * devicePixelRatio, h: (5 + Math.random() * 6) * devicePixelRatio,
        r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: COLORS[i % COLORS.length], life: 0,
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    cx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter((p) => p.y < cv.height + 40 && p.life < 400);
    for (const p of parts) {
      p.life++;
      p.vy += 0.45 * devicePixelRatio;
      p.vx *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      cx.save();
      cx.translate(p.x, p.y);
      cx.rotate(p.r);
      cx.fillStyle = p.c;
      cx.strokeStyle = "#1d1238";
      cx.lineWidth = 1.5 * devicePixelRatio;
      cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)) + 1);
      cx.restore();
    }
    raf = parts.length ? requestAnimationFrame(tick) : null;
    if (!raf) cx.clearRect(0, 0, cv.width, cv.height);
  }

  // ---------- Démarrage ----------
  const roomParam = new URLSearchParams(location.search).get("room");
  if (roomParam) $("#codeInput").value = roomParam.toUpperCase().slice(0, 4);
  paintIcons();
  paintMascots();
  paintSound();
  $("#globeIc").innerHTML = icon("globe");
  renderProfile();
  applyI18n();
  show("home");
})();
