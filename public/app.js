(() => {
  // ---------- Personnages pour la photo de profil ----------
  const CHARACTERS = [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮",
    "🐷", "🐸", "🐵", "🐔", "🐧", "🦆", "🦉", "🦄", "🐲", "🦖", "🐙", "🦀",
    "🐳", "🐬", "🦈", "🐢", "🦔", "🦇", "🐝", "🐞", "👻", "👽", "🤖", "🎃",
    "🧙", "🧛", "🧜", "🧚", "🦸", "🦹", "🥷", "🤡", "💀", "👾", "🧞", "🧌",
  ];
  const COLORS = [
    ["#ffb84d", "#ff7a59"], ["#7ad3ff", "#4f7cff"], ["#a6f28b", "#2fbf71"], ["#ff9be0", "#b157ff"],
    ["#ffe066", "#ffa94d"], ["#9be7ff", "#5ad1b5"], ["#ffc4a3", "#ff6b9a"], ["#c9b8ff", "#6c5ce7"],
  ];

  function avatarHTML(avatar) {
    if (avatar && avatar.startsWith("data:image/")) {
      return `<img src="${avatar}" alt="" />`;
    }
    const idx = Number((avatar || "char:0").split(":")[1]) || 0;
    const [a, b] = COLORS[idx % COLORS.length];
    return `<span class="emoji" style="background:linear-gradient(135deg,${a},${b})">${CHARACTERS[idx % CHARACTERS.length]}</span>`;
  }

  // ---------- État local ----------
  const store = {
    get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };

  let playerId = store.get("cc_playerId", null);
  if (!playerId) {
    playerId = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2);
    store.set("cc_playerId", playerId);
  }
  const profile = {
    name: store.get("cc_name", ""),
    lang: store.get("cc_lang", (navigator.language || "fr").slice(0, 2)),
    avatar: store.get("cc_avatar", `char:${Math.floor(Math.random() * CHARACTERS.length)}`),
    mode: store.get("cc_mode", "most") === "least" ? "least" : "most",
  };
  if (!I18N[profile.lang]) profile.lang = "fr";

  let state = null;
  let editingAnswer = false;

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  const t = (k) => I18N[profile.lang][k] ?? k;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Traductions ----------
  function applyI18n() {
    document.documentElement.lang = profile.lang;
    $("#langSelect").value = profile.lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    $$("#modePicker .mode").forEach((el) => el.classList.toggle("selected", el.dataset.mode === profile.mode));
    if (state) render();
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.add("hidden"), 2600);
  }
  const showError = (code) => toast(t("errors")[code] || code);

  // ---------- Profil ----------
  function renderProfile() {
    $("#avatarBtn").innerHTML = avatarHTML(profile.avatar);
    $("#nameInput").value = profile.name;
  }

  function saveProfile() {
    store.set("cc_name", profile.name);
    store.set("cc_avatar", profile.avatar);
    store.set("cc_lang", profile.lang);
    if (state) socket.emit("update_profile", { name: profile.name, avatar: profile.avatar });
  }

  function buildAvatarGrid() {
    const grid = $("#avatarGrid");
    grid.innerHTML = CHARACTERS.map(
      (_, i) => `<button class="avatar ${profile.avatar === "char:" + i ? "active" : ""}" data-av="char:${i}">${avatarHTML("char:" + i)}</button>`
    ).join("");
  }

  $("#avatarGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-av]");
    if (!btn) return;
    profile.avatar = btn.dataset.av;
    saveProfile();
    renderProfile();
    buildAvatarGrid();
  });

  $("#photoInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const size = 128;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const s = Math.min(img.width, img.height);
      canvas.getContext("2d").drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      profile.avatar = canvas.toDataURL("image/jpeg", 0.8);
      URL.revokeObjectURL(img.src);
      saveProfile();
      renderProfile();
      buildAvatarGrid();
      $("#avatarDialog").close();
    };
    img.onerror = () => showError("bad_image");
    img.src = URL.createObjectURL(file);
    e.target.value = "";
  });

  const openAvatars = () => { buildAvatarGrid(); $("#avatarDialog").showModal(); };
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
    applyI18n();
  });

  $("#langSelect").addEventListener("change", (e) => {
    profile.lang = e.target.value;
    store.set("cc_lang", profile.lang);
    applyI18n();
  });

  // ---------- Connexion ----------
  const socket = io();

  function payload(extra = {}) {
    return { playerId, name: profile.name, avatar: profile.avatar, lang: profile.lang, mode: profile.mode, ...extra };
  }

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
    socket.emit("create_room", payload(), (res) => {
      if (res.ok) store.set("cc_room", res.code);
    });
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
    // Reconnexion automatique (rafraîchissement de page, coupure réseau)
    const saved = store.get("cc_room", null);
    if (saved && profile.name) joinRoom(saved, true);
  });

  socket.on("room_state", (s) => {
    const prev = state;
    state = s;
    // Échéance recalculée sur l'horloge locale pour éviter les décalages d'horloge
    state.deadline = s.remaining != null ? Date.now() + s.remaining : null;
    if (!prev || prev.round !== s.round || prev.phase !== s.phase) editingAnswer = false;
    render();
  });
  socket.on("error_msg", showError);

  $$(".leaveBtn").forEach((b) =>
    b.addEventListener("click", () => {
      socket.emit("leave_room");
      store.del("cc_room");
      state = null;
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
  });
  $("#changeBtn").addEventListener("click", () => {
    editingAnswer = true;
    render();
    $("#answerInput").focus();
  });

  // ---------- Rendu ----------
  const isHost = () => state && state.hostId === playerId;
  const me = () => state?.players.find((p) => p.id === playerId);

  function show(name) {
    $$(".screen").forEach((s) => s.classList.toggle("hidden", s.id !== "screen-" + name));
  }

  function playerItem(p, extra = "", showHost = true) {
    return `<li class="${p.connected ? "" : "offline"}">
      <span class="avatar">${avatarHTML(p.avatar)}</span>
      <span class="pname">${esc(p.name)}${p.id === playerId ? ` (${t("me")})` : ""}</span>
      ${showHost && p.id === state.hostId ? `<span class="tag">👑 ${t("host")}</span>` : ""}
      ${extra}
    </li>`;
  }

  function setSeg(id, value) {
    $$(id + " button").forEach((b) => {
      b.classList.toggle("active", b.dataset.v === String(value));
      b.disabled = !isHost();
    });
  }

  const themeText = (theme) => (theme ? theme[profile.lang] || theme.fr : "");

  function render() {
    if (!state) return show("home");
    $$(".roundNum").forEach((el) => (el.textContent = `${state.round} ${t("of")} ${state.totalRounds}`));
    $$(".modeLabel").forEach((el) => (el.textContent = t(state.settings.mode === "least" ? "modeLeast" : "modeMost")));

    switch (state.phase) {
      case "lobby": {
        show("lobby");
        $("#roomCode").textContent = state.code;
        $("#playerCount").textContent = `(${state.players.length})`;
        $("#lobbyPlayers").innerHTML = state.players.map((p) => playerItem(p)).join("");
        setSeg("#roundsSeg", state.settings.rounds);
        setSeg("#timerSeg", state.settings.timer);
        setSeg("#aiLangSeg", state.lang);
        setSeg("#modeSeg", state.settings.mode);
        const enough = state.players.filter((p) => p.connected).length >= 2;
        $("#startBtn").classList.toggle("hidden", !isHost());
        $("#startBtn").disabled = !enough;
        $("#lobbyHint").textContent = !isHost() ? t("waitingHost") : enough ? "" : t("needPlayers");
        break;
      }
      case "playing": {
        show("playing");
        $("#themeText").textContent = themeText(state.theme);
        const mine = me();
        const done = mine?.submitted && !editingAnswer;
        $("#answerForm").classList.toggle("hidden", done);
        $("#submittedBox").classList.toggle("hidden", !done);
        if (done) $("#myAnswer").textContent = `« ${store.get("cc_last_answer", "")} »`;
        else if (!editingAnswer) $("#answerInput").value = "";
        $("#playingPlayers").innerHTML = state.players
          .filter((p) => p.connected)
          .map((p) => playerItem(p, `<span class="status">${p.submitted ? "✅" : "✍️"}</span>`, false))
          .join("");
        if (!done && !editingAnswer) setTimeout(() => $("#answerInput").focus(), 50);
        break;
      }
      case "judging":
        show("judging");
        break;
      case "results":
        show("results");
        renderRoundResults();
        break;
      case "final":
        show("final");
        renderFinal();
        break;
    }
  }

  function noticeFor(res) {
    return res.fallback ? t("fallback") : "";
  }

  function renderRoundResults() {
    const res = state.lastResult;
    if (!res) return;
    $("#resultsTheme").textContent = themeText(res.theme);
    $("#resultsSummary").textContent = res.summary;
    $("#resultsSummary").classList.toggle("hidden", !res.summary);
    const notice = noticeFor(res);
    $("#resultsNotice").textContent = notice;
    $("#resultsNotice").classList.toggle("hidden", !notice);
    $("#resultsList").innerHTML = res.results
      .map(
        (r, i) => `<li class="result ${i === 0 && r.score > 0 ? "winner" : ""}" style="animation-delay:${i * 120}ms">
          <div class="rank">${["🥇", "🥈", "🥉"][i] || i + 1}</div>
          <span class="avatar">${avatarHTML(r.avatar)}</span>
          <div class="grow">
            <div class="line"><strong>${esc(r.name)}</strong> → <em>${esc(r.character)}</em>
              ${r.recognized ? "" : `<span class="tag warn">${t("notRecognized")}</span>`}</div>
            <div class="explain">${esc(r.explanation)}</div>
            <div class="bar"><div style="width:${r.score}%"></div></div>
          </div>
          <div class="score">${r.score}<small>/100</small></div>
        </li>`
      )
      .join("");
    const last = state.round >= state.totalRounds;
    $("#nextBtn").textContent = last ? t("seeFinal") : t("next");
    $("#nextBtn").classList.toggle("hidden", !isHost());
    $("#waitingNext").classList.toggle("hidden", isHost());
  }

  function renderFinal() {
    const ranking = [...state.players].sort((a, b) => b.score - a.score);
    const top = ranking.slice(0, 3);
    const order = [1, 0, 2].filter((i) => top[i]);
    $("#podium").innerHTML = order
      .map(
        (i) => `<div class="step step-${i + 1}">
          <span class="avatar big">${avatarHTML(top[i].avatar)}</span>
          <div class="pname">${esc(top[i].name)}</div>
          <div class="pts">${top[i].score} ${t("pts")}</div>
          <div class="block">${["🥇", "🥈", "🥉"][i]}</div>
        </div>`
      )
      .join("");
    $("#finalList").innerHTML = ranking
      .map(
        (p, i) => `<li class="result">
          <div class="rank">${i + 1}</div>
          <span class="avatar">${avatarHTML(p.avatar)}</span>
          <div class="grow"><strong>${esc(p.name)}</strong></div>
          <div class="score">${p.score}<small> ${t("pts")}</small></div>
        </li>`
      )
      .join("");

    // Meilleur score sur un thème
    let best = null;
    for (const h of state.history || []) {
      for (const r of h.results) if (!best || r.score > best.score) best = { ...r, theme: h.theme };
    }
    $("#bestBox").innerHTML = best
      ? `<div class="best-title">⭐ ${t("bestScore")}</div>
         <div class="best-body">
           <span class="avatar big">${avatarHTML(best.avatar)}</span>
           <div><strong>${esc(best.name)}</strong> — <em>${esc(best.character)}</em><br/>
           ${t("onTheme")} « ${esc(themeText(best.theme))} »<br/>
           <span class="explain">${esc(best.explanation)}</span></div>
           <div class="score">${best.score}<small>/100</small></div>
         </div>`
      : "";

    $("#recap").innerHTML = (state.history || [])
      .map((h) => {
        const w = h.results[0];
        return `<div class="recap-item"><span class="rnum">${h.round}</span>
          <div><div class="rtheme">${esc(themeText(h.theme))}</div>
          <div>🏆 ${esc(w?.name)} — <em>${esc(w?.character)}</em> (${w?.score}/100)</div></div></div>`;
      })
      .join("");

    $("#againBtn").classList.toggle("hidden", !isHost());
    $("#waitingAgain").classList.toggle("hidden", isHost());
  }

  // ---------- Minuteur ----------
  setInterval(() => {
    if (!state || state.phase !== "playing" || !state.deadline) return;
    const left = Math.max(0, state.deadline - Date.now());
    const total = state.settings.timer * 1000;
    $("#timerBar").style.width = `${(left / total) * 100}%`;
    $("#timerBar").classList.toggle("low", left < 10000);
    $("#timerText").textContent = Math.ceil(left / 1000) + t("seconds");
  }, 200);

  // ---------- Démarrage ----------
  const roomParam = new URLSearchParams(location.search).get("room");
  if (roomParam) $("#codeInput").value = roomParam.toUpperCase().slice(0, 4);
  renderProfile();
  applyI18n();
  show("home");
})();
