// Personnages de profil dessinés en SVG (style cartoon, contour encré).
// Chaque avatar = forme de tête + yeux + bouche + accessoire + couleurs.
(() => {
  const INK = "#1d1238";
  const MOUTH = "#7a1f3d";
  const TONGUE = "#ff7aa8";
  const SW = 3.4; // épaisseur du trait

  const s = (extra = "") => `stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round" stroke-linecap="round" ${extra}`;

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
    const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // ---- Têtes (dessinées derrière les visages) ----
  const BODIES = {
    round: (c) => `<circle cx="50" cy="60" r="30" fill="${c}" ${s()}/>`,
    blob: (c) => `<path d="M21 64 C19 40 35 28 52 29 C71 30 83 43 80 63 C78 82 64 92 49 91 C32 90 22 80 21 64 Z" fill="${c}" ${s()}/>`,
    tall: (c) => `<rect x="23" y="27" width="54" height="72" rx="25" fill="${c}" ${s()}/>`,
    ghost: (c) => `<path d="M23 96 L23 56 C23 37 35 27 50 27 C65 27 77 37 77 56 L77 96 L68 89 L59 96 L50 89 L41 96 L32 89 Z" fill="${c}" ${s()}/>`,
    cat: (c) => `<path d="M24 50 L27 17 L47 34 Z" fill="${c}" ${s()}/><path d="M76 50 L73 17 L53 34 Z" fill="${c}" ${s()}/>
      <path d="M29 40 L30 25 L40 34 Z" fill="${TONGUE}"/><path d="M71 40 L70 25 L60 34 Z" fill="${TONGUE}"/>
      <circle cx="50" cy="60" r="30" fill="${c}" ${s()}/>`,
    bear: (c) => `<circle cx="27" cy="36" r="11" fill="${c}" ${s()}/><circle cx="73" cy="36" r="11" fill="${c}" ${s()}/>
      <circle cx="27" cy="36" r="5" fill="${shade(c, -0.15)}"/><circle cx="73" cy="36" r="5" fill="${shade(c, -0.15)}"/>
      <circle cx="50" cy="60" r="30" fill="${c}" ${s()}/>
      <ellipse cx="50" cy="71" rx="13" ry="9" fill="${shade(c, 0.18)}" ${s('stroke-width="2.4"')}/>`,
    bunny: (c) => `<ellipse cx="37" cy="24" rx="8" ry="20" transform="rotate(-12 37 24)" fill="${c}" ${s()}/>
      <ellipse cx="63" cy="24" rx="8" ry="20" transform="rotate(12 63 24)" fill="${c}" ${s()}/>
      <ellipse cx="37" cy="25" rx="3.5" ry="13" transform="rotate(-12 37 25)" fill="${TONGUE}"/>
      <ellipse cx="63" cy="25" rx="3.5" ry="13" transform="rotate(12 63 25)" fill="${TONGUE}"/>
      <circle cx="50" cy="62" r="29" fill="${c}" ${s()}/>`,
    robot: (c) => `<line x1="50" y1="28" x2="50" y2="14" ${s()}/><circle cx="50" cy="12" r="5" fill="#ff4f8b" ${s()}/>
      <rect x="15" y="50" width="9" height="16" rx="3" fill="${shade(c, -0.2)}" ${s()}/><rect x="76" y="50" width="9" height="16" rx="3" fill="${shade(c, -0.2)}" ${s()}/>
      <rect x="22" y="28" width="56" height="56" rx="13" fill="${c}" ${s()}/>
      <rect x="30" y="43" width="40" height="22" rx="9" fill="${shade(c, 0.25)}" opacity=".6"/>`,
    alien: (c) => `<path d="M36 34 Q30 20 22 16" fill="none" ${s()}/><circle cx="21" cy="15" r="5" fill="#ffd23f" ${s()}/>
      <path d="M64 34 Q70 20 78 16" fill="none" ${s()}/><circle cx="79" cy="15" r="5" fill="#ffd23f" ${s()}/>
      <ellipse cx="50" cy="58" rx="31" ry="29" fill="${c}" ${s()}/>`,
    dino: (c) => `<path d="M30 38 L33 22 L42 32 L48 18 L56 31 L65 20 L69 37 Z" fill="${shade(c, -0.18)}" ${s()}/>
      <circle cx="50" cy="61" r="30" fill="${c}" ${s()}/>
      <circle cx="40" cy="80" r="2.5" fill="${shade(c, -0.2)}"/><circle cx="62" cy="82" r="2" fill="${shade(c, -0.2)}"/>`,
    frog: (c) => `<circle cx="33" cy="40" r="13" fill="${c}" ${s()}/><circle cx="67" cy="40" r="13" fill="${c}" ${s()}/>
      <ellipse cx="50" cy="64" rx="33" ry="27" fill="${c}" ${s()}/>`,
    pig: (c) => `<path d="M26 44 L24 26 L40 34 Z" fill="${shade(c, -0.1)}" ${s()}/><path d="M74 44 L76 26 L60 34 Z" fill="${shade(c, -0.1)}" ${s()}/>
      <circle cx="50" cy="60" r="30" fill="${c}" ${s()}/>`,
    owl: (c) => `<path d="M24 42 L22 22 L38 32 Z" fill="${shade(c, -0.15)}" ${s()}/><path d="M76 42 L78 22 L62 32 Z" fill="${shade(c, -0.15)}" ${s()}/>
      <ellipse cx="50" cy="60" rx="30" ry="31" fill="${c}" ${s()}/>
      <ellipse cx="50" cy="78" rx="16" ry="12" fill="${shade(c, 0.2)}"/>`,
  };

  // ---- Yeux ----
  const L = 39, R = 61, EY = 55;
  const pupil = (x, y, r = 4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${x - 1.4}" cy="${y - 1.6}" r="${r * 0.38}" fill="#fff"/>`;
  const white = (x, y, r = 8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" ${s('stroke-width="2.8"')}/>`;
  const EYES = {
    big: () => white(L, EY) + white(R, EY) + pupil(L + 1, EY + 1) + pupil(R + 1, EY + 1),
    dots: () => pupil(L, EY, 3.8) + pupil(R, EY, 3.8),
    happy: () => `<path d="M32 57 Q39 48 46 57" fill="none" ${s()}/><path d="M54 57 Q61 48 68 57" fill="none" ${s()}/>`,
    sleepy: (c) => white(L, EY, 7) + white(R, EY, 7) + pupil(L, EY + 2.5, 3.4) + pupil(R, EY + 2.5, 3.4)
      + `<path d="M31.5 55 A7.5 7.5 0 0 1 46.5 55 Z" fill="${shade(c, -0.12)}" ${s('stroke-width="2.6"')}/><path d="M53.5 55 A7.5 7.5 0 0 1 68.5 55 Z" fill="${shade(c, -0.12)}" ${s('stroke-width="2.6"')}/>`,
    angry: () => white(L, EY + 1, 7.5) + white(R, EY + 1, 7.5) + pupil(L + 1, EY + 2, 3.6) + pupil(R - 1, EY + 2, 3.6)
      + `<path d="M30 44 L46 49" ${s('stroke-width="4"')}/><path d="M70 44 L54 49" ${s('stroke-width="4"')}/>`,
    cyclops: () => white(50, 52, 13) + pupil(51, 53, 6.5),
    wink: () => white(L, EY) + pupil(L + 1, EY + 1) + `<path d="M54 56 Q61 49 68 56" fill="none" ${s()}/>`,
    shades: () => `<path d="M27 49 H73 V53 Q72 64 62 64 Q53 64 52 54 H48 Q47 64 38 64 Q28 64 27 53 Z" fill="${INK}" ${s()}/>
      <path d="M31 53 L36 51" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/><path d="M56 53 L61 51" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`,
    glasses: () => pupil(L, EY, 3.5) + pupil(R, EY, 3.5)
      + `<circle cx="${L}" cy="${EY}" r="9" fill="#fff" fill-opacity=".25" ${s('stroke-width="3"')}/><circle cx="${R}" cy="${EY}" r="9" fill="#fff" fill-opacity=".25" ${s('stroke-width="3"')}/><path d="M48 55 H52" ${s('stroke-width="3"')}/>`,
    star: () => [L, R].map((x) => `<path d="M${x} ${EY - 8} L${x + 2.6} ${EY - 2.6} L${x + 8} ${EY - 2} L${x + 4} ${EY + 2} L${x + 5} ${EY + 8} L${x} ${EY + 5} L${x - 5} ${EY + 8} L${x - 4} ${EY + 2} L${x - 8} ${EY - 2} L${x - 2.6} ${EY - 2.6} Z" fill="#ffd23f" ${s('stroke-width="2.4"')}/>`).join(""),
    worried: () => white(L, EY, 7.5) + white(R, EY, 7.5) + pupil(L, EY, 3.4) + pupil(R, EY, 3.4)
      + `<path d="M31 46 L45 43" ${s('stroke-width="3.4"')}/><path d="M69 46 L55 43" ${s('stroke-width="3.4"')}/>`,
  };

  // ---- Bouches ----
  const MOUTHS = {
    smile: () => `<path d="M40 70 Q50 80 60 70" fill="none" ${s()}/>`,
    grin: () => `<path d="M36 67 Q50 86 64 67 Z" fill="${MOUTH}" ${s()}/><path d="M39 68.5 H61 L59 72 H41 Z" fill="#fff"/>`,
    open: () => `<ellipse cx="50" cy="73" rx="8" ry="9" fill="${MOUTH}" ${s()}/><ellipse cx="50" cy="78" rx="5" ry="3.5" fill="${TONGUE}"/>`,
    fangs: () => `<path d="M38 69 Q50 79 62 69" fill="none" ${s()}/><path d="M42 71.5 L44 77 L46 73 Z" fill="#fff" ${s('stroke-width="2"')}/><path d="M58 71.5 L56 77 L54 73 Z" fill="#fff" ${s('stroke-width="2"')}/>`,
    o: () => `<ellipse cx="50" cy="73" rx="4.5" ry="5.5" fill="${MOUTH}" ${s()}/>`,
    smirk: () => `<path d="M41 72 Q52 77 61 67" fill="none" ${s()}/>`,
    tongue: () => `<path d="M39 69 Q50 79 61 69" fill="none" ${s()}/><path d="M47 74 Q47 83 52 83 Q57 83 56 73.5" fill="${TONGUE}" ${s('stroke-width="2.6"')}/>`,
    teeth: () => `<path d="M38 69 Q50 77 62 69" fill="none" ${s()}/><rect x="45" y="72" width="10" height="7" rx="1.5" fill="#fff" ${s('stroke-width="2.4"')}/><path d="M50 72 V79" stroke="${INK}" stroke-width="1.6"/>`,
    wavy: () => `<path d="M38 72 Q42 68 46 72 T54 72 T62 72" fill="none" ${s()}/>`,
    beak: () => `<path d="M43 66 L57 66 L50 77 Z" fill="#ff9f1c" ${s()}/>`,
    snout: (c) => `<ellipse cx="50" cy="71" rx="11" ry="8" fill="${shade(c, 0.12)}" ${s('stroke-width="2.8"')}/><ellipse cx="46" cy="71" rx="2" ry="3" fill="${INK}"/><ellipse cx="54" cy="71" rx="2" ry="3" fill="${INK}"/>`,
    robot: () => `<rect x="38" y="69" width="24" height="9" rx="3" fill="#fff" ${s('stroke-width="2.8"')}/><path d="M44 69 V78 M50 69 V78 M56 69 V78" stroke="${INK}" stroke-width="2"/>`,
  };

  // ---- Accessoires ----
  const ACCS = {
    none: () => "",
    crown: () => `<path d="M32 33 L30 15 L40 24 L50 11 L60 24 L70 15 L68 33 Z" fill="#ffd23f" ${s()}/><circle cx="50" cy="25" r="3" fill="#ff4f8b"/>`,
    cap: () => `<path d="M24 41 Q26 18 50 18 Q74 18 76 41 Z" fill="#ff4f8b" ${s()}/><path d="M60 38 Q80 36 90 42 Q78 47 62 44 Z" fill="#ff4f8b" ${s()}/><circle cx="50" cy="18" r="3.5" fill="#ffd23f" ${s('stroke-width="2.4"')}/>`,
    bow: () => `<path d="M62 30 L52 22 L54 38 Z" fill="#ff4f8b" ${s()}/><path d="M62 30 L74 22 L72 38 Z" fill="#ff4f8b" ${s()}/><circle cx="62" cy="30" r="4" fill="#ff8fb8" ${s('stroke-width="2.6"')}/>`,
    horns: () => `<path d="M30 38 Q22 26 26 14 Q34 26 40 32 Z" fill="#fff4d6" ${s()}/><path d="M70 38 Q78 26 74 14 Q66 26 60 32 Z" fill="#fff4d6" ${s()}/>`,
    party: () => `<path d="M38 32 L52 4 L64 31 Z" fill="#3ad1ff" ${s()}/><path d="M43 22 L59 20 M40 28 L62 27" stroke="#ffd23f" stroke-width="3.4"/><circle cx="52" cy="5" r="4.5" fill="#ff4f8b" ${s('stroke-width="2.6"')}/>`,
    halo: () => `<ellipse cx="50" cy="16" rx="17" ry="5" fill="none" stroke="#ffd23f" stroke-width="5"/><ellipse cx="50" cy="16" rx="17" ry="5" fill="none" stroke="${INK}" stroke-width="1.4"/>`,
    flower: () => `<g transform="translate(70 32)">${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="0" cy="-7" rx="4.5" ry="6.5" transform="rotate(${a})" fill="#fff" ${s('stroke-width="2.2"')}/>`).join("")}<circle r="4" fill="#ffd23f" ${s('stroke-width="2.2"')}/></g>`,
    mustache: () => `<path d="M50 66 Q42 60 35 65 Q33 71 40 70 Q46 69 50 67 Q54 69 60 70 Q67 71 65 65 Q58 60 50 66 Z" fill="${INK}"/>`,
    headphones: () => `<path d="M20 58 Q20 22 50 22 Q80 22 80 58" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><rect x="13" y="50" width="12" height="20" rx="5" fill="#ff4f8b" ${s()}/><rect x="75" y="50" width="12" height="20" rx="5" fill="#ff4f8b" ${s()}/>`,
    sprout: () => `<path d="M50 31 Q49 22 50 16" fill="none" ${s()}/><path d="M50 19 Q40 8 32 14 Q40 24 50 19 Z" fill="#3ddc84" ${s('stroke-width="2.6"')}/><path d="M50 21 Q60 12 67 17 Q60 26 50 21 Z" fill="#3ddc84" ${s('stroke-width="2.6"')}/>`,
    tuft: () => `<path d="M40 33 Q38 18 47 22 Q48 12 56 18 Q64 14 62 30" fill="none" ${s()}/>`,
    beanie: () => `<path d="M23 44 Q24 17 50 17 Q76 17 77 44 Z" fill="#3ad1ff" ${s()}/><rect x="21" y="38" width="58" height="10" rx="5" fill="#2aa5d6" ${s()}/><circle cx="50" cy="14" r="5" fill="#fff" ${s('stroke-width="2.6"')}/>`,
    wizard: () => `<path d="M26 40 L50 0 L74 40 Z" fill="#6c3cf0" ${s()}/><ellipse cx="50" cy="40" rx="30" ry="6" fill="#6c3cf0" ${s()}/><path d="M48 18 L50 13 L52 18 L57 18 L53 21 L55 26 L50 23 L45 26 L47 21 L43 18 Z" fill="#ffd23f"/>`,
    pirate: () => `<path d="M22 40 Q26 16 50 16 Q74 16 78 40 Z" fill="${INK}" ${s()}/><path d="M44 28 L56 28 M47 24 L53 32 M53 24 L47 32" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`,
  };

  // [nom, tête, couleur, fond, yeux, bouche, accessoire, joues]
  const PRESETS = [
    ["Blobby", "blob", "#ff8fb8", "#ffd23f", "big", "grin", "none", 1],
    ["Miaou", "cat", "#ffb347", "#3ad1ff", "happy", "smile", "bow", 1],
    ["Nounours", "bear", "#c98b5a", "#a6f28b", "dots", "smile", "none", 1],
    ["Lapinou", "bunny", "#f4f1ff", "#ff8fb8", "big", "teeth", "none", 1],
    ["Bip-Bop", "robot", "#9ad7ff", "#ff9f1c", "cyclops", "robot", "none", 0],
    ["Zorglub", "alien", "#7ee081", "#6c3cf0", "big", "o", "none", 0],
    ["Rex", "dino", "#5ad17a", "#ffd23f", "angry", "fangs", "none", 0],
    ["Boo", "ghost", "#ffffff", "#6c3cf0", "worried", "o", "none", 1],
    ["Croâ", "frog", "#8ee36b", "#3ad1ff", "dots", "wavy", "crown", 1],
    ["Groin", "pig", "#ffb3c7", "#7ee081", "happy", "snout", "none", 1],
    ["Hulul", "owl", "#b48cff", "#ffd23f", "glasses", "beak", "none", 0],
    ["Glouton", "round", "#ff6b6b", "#ffd23f", "happy", "tongue", "party", 1],
    ["Grincheux", "tall", "#7a8cff", "#ff8fb8", "angry", "wavy", "beanie", 0],
    ["Cool Cat", "cat", "#5b55a8", "#ff4f8b", "shades", "smirk", "none", 0],
    ["Diablotin", "round", "#ff4f5e", "#2e2a4f", "angry", "fangs", "horns", 0],
    ["Ange", "blob", "#fff4d6", "#3ad1ff", "happy", "smile", "halo", 1],
    ["Professeur", "owl", "#c98b5a", "#a6f28b", "glasses", "beak", "wizard", 0],
    ["Pirate", "bear", "#8a6a4f", "#3ad1ff", "wink", "smirk", "pirate", 0],
    ["DJ Blop", "blob", "#3ad1ff", "#6c3cf0", "shades", "grin", "headphones", 0],
    ["Pousse", "round", "#a6f28b", "#ff8fb8", "big", "smile", "sprout", 1],
    ["Momo", "alien", "#ff8fb8", "#3ad1ff", "cyclops", "grin", "none", 1],
    ["Tictac", "robot", "#ffd23f", "#ff4f8b", "dots", "robot", "party", 0],
    ["Dodo", "bear", "#9ad7ff", "#6c3cf0", "sleepy", "o", "beanie", 1],
    ["Fripouille", "tall", "#ffb347", "#7ee081", "wink", "tongue", "cap", 1],
    ["Princesse", "bunny", "#ffd6e7", "#b48cff", "big", "smile", "crown", 1],
    ["Moustache", "round", "#e8c39e", "#ff9f1c", "dots", "smile", "mustache", 0],
    ["Spectre", "ghost", "#d6f5ff", "#2e2a4f", "big", "open", "none", 0],
    ["Dragonnet", "dino", "#ff8a3d", "#6c3cf0", "star", "grin", "crown", 0],
    ["Rainette", "frog", "#5ad1b5", "#ffd23f", "happy", "tongue", "flower", 1],
    ["Pompon", "pig", "#ff8fb8", "#3ad1ff", "big", "snout", "bow", 1],
    ["Mage Miou", "cat", "#b48cff", "#2e2a4f", "star", "smile", "wizard", 0],
    ["Rocky", "tall", "#9aa3b5", "#ff8a3d", "angry", "teeth", "none", 0],
    ["Fifi", "blob", "#ffd23f", "#ff4f8b", "big", "open", "flower", 1],
    ["Capitaine", "frog", "#3ddc84", "#2e2a4f", "wink", "smirk", "pirate", 0],
    ["Zip", "alien", "#3ad1ff", "#ff9f1c", "shades", "smirk", "none", 0],
    ["Choupi", "bear", "#ffb3c7", "#ffd23f", "happy", "smile", "bow", 1],
    ["Gizmo", "robot", "#b48cff", "#7ee081", "glasses", "robot", "headphones", 0],
    ["Toufou", "round", "#ff9f1c", "#3ad1ff", "worried", "wavy", "tuft", 1],
    ["Hop-Hop", "bunny", "#c98b5a", "#ff4f8b", "dots", "teeth", "cap", 1],
    ["Fantôme Fou", "ghost", "#ffd6e7", "#ff9f1c", "star", "tongue", "party", 1],
  ];

  function rays(bg) {
    const light = shade(bg, 0.12);
    let d = "";
    for (let i = 0; i < 12; i++) {
      const a1 = (i * 30 * Math.PI) / 180;
      const a2 = ((i * 30 + 15) * Math.PI) / 180;
      d += `M50 50 L${50 + 80 * Math.cos(a1)} ${50 + 80 * Math.sin(a1)} L${50 + 80 * Math.cos(a2)} ${50 + 80 * Math.sin(a2)} Z `;
    }
    return `<rect width="100" height="100" fill="${bg}"/><path d="${d}" fill="${light}"/>`;
  }

  function draw(index) {
    const [, body, color, bg, eyes, mouth, acc, cheeks] = PRESETS[index % PRESETS.length];
    const shine = `<ellipse cx="37" cy="40" rx="8" ry="4.5" transform="rotate(-30 37 40)" fill="#fff" opacity=".45"/>`;
    const blush = cheeks ? `<ellipse cx="29" cy="66" rx="5.5" ry="3.4" fill="#ff5f8f" opacity=".45"/><ellipse cx="71" cy="66" rx="5.5" ry="3.4" fill="#ff5f8f" opacity=".45"/>` : "";
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><clipPath id="avclip"><circle cx="50" cy="50" r="50"/></clipPath></defs>
      <g clip-path="url(#avclip)">${rays(bg)}<g transform="translate(0 4)">${BODIES[body](color)}${body === "robot" || body === "owl" ? "" : shine}${blush}${EYES[eyes](color)}${MOUTHS[mouth](color)}${ACCS[acc]()}</g></g>
    </svg>`;
  }

  window.AVATARS = {
    count: PRESETS.length,
    name: (i) => PRESETS[i % PRESETS.length][0],
    svg: draw,
  };
})();
