// Juge sans IA externe : note chaque personnage à partir de la base de traits.
//
// Calcul d'un score (0-100) pour un thème :
//  1. valeur brute = moyenne pondérée des traits du thème (sur 10)
//     + critères secondaires légers pour départager les égalités
//     + talent connu (ex. "chef" pour Rémy) qui place le personnage tout en haut ;
//  2. score « le plus » = pourcentage des personnages de la base que le personnage bat sur ce thème ;
//  3. score « le moins » = 100 − score « le plus ».
const { DBS } = require("./characters");
const { THEMES } = require("./themes");
const RANKINGS = require("./data/rankings");

const UNKNOWN_SCORE = 5;
const MAX = 10;

const TRAIT_WORDS = {
  fr: {
    hum: "l'humour", str: "la force", int: "l'intelligence", evi: "la méchanceté", clu: "la maladresse",
    bra: "le courage", kin: "la gentillesse", laz: "la paresse", glu: "la gourmandise", spd: "la vitesse",
    cut: "le côté mignon", scr: "le côté effrayant", ric: "la richesse", tem: "le mauvais caractère",
    tal: "le bavardage", cun: "la ruse", unl: "la malchance",
  },
  en: {
    hum: "humour", str: "strength", int: "intelligence", evi: "wickedness", clu: "clumsiness",
    bra: "courage", kin: "kindness", laz: "laziness", glu: "appetite", spd: "speed",
    cut: "cuteness", scr: "scariness", ric: "wealth", tem: "bad temper",
    tal: "chattiness", cun: "cunning", unl: "bad luck",
  },
  es: {
    hum: "el humor", str: "la fuerza", int: "la inteligencia", evi: "la maldad", clu: "la torpeza",
    bra: "el valor", kin: "la bondad", laz: "la pereza", glu: "la glotonería", spd: "la velocidad",
    cut: "la ternura", scr: "lo aterrador", ric: "la riqueza", tem: "el mal carácter",
    tal: "lo hablador", cun: "la astucia", unl: "la mala suerte",
  },
};

// Talents connus : phrase utilisée dans l'explication.
const TAG_WORDS = {
  fr: {
    leader: "le sens du commandement", glutton: "l'appétit légendaire", survivor: "l'instinct de survie",
    teacher: "le talent de mentor", speedster: "la vitesse supersonique", dancer: "le talent de danseur",
    hero: "l'âme de héros", friend: "la loyauté en amitié", chef: "le talent de cuisinier",
    doomed: "la manie de ne jamais s'en sortir", badcook: "la cuisine catastrophique",
  },
  en: {
    leader: "leadership", glutton: "legendary appetite", survivor: "survival instinct",
    teacher: "talent as a mentor", speedster: "supersonic speed", dancer: "dancing talent",
    hero: "heroic soul", friend: "loyalty as a friend", chef: "cooking talent",
    doomed: "habit of never making it out alive", badcook: "disastrous cooking",
  },
  es: {
    leader: "el don de mando", glutton: "el apetito legendario", survivor: "el instinto de supervivencia",
    teacher: "el talento de mentor", speedster: "la velocidad supersónica", dancer: "el talento para el baile",
    hero: "el alma de héroe", friend: "la lealtad como amigo", chef: "el talento en la cocina",
    doomed: "la manía de no salir nunca con vida", badcook: "la cocina desastrosa",
  },
};

const TEXT = {
  fr: {
    high: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} est remarquable (${v}/10).`,
    mid: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} est plutôt dans la moyenne (${v}/10).`,
    low: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} reste faible (${v}/10).`,
    tag: (show, tag, name) => `Dans « ${show} », ${tag} ${de(name)} est connu de tous.`,
    ref: (show, name, n) => `Dans « ${show} », ${name} est une référence absolue sur ce thème (n°${n} de mon classement).`,
    rank: (pct) => ` Fait mieux que ${pct} % des personnages de ma base sur ce thème.`,
    unknown: { cartoon: "Personnage introuvable dans ma base de dessins animés : quelques points de consolation.", manga: "Personnage introuvable dans ma base de mangas : quelques points de consolation." },
    empty: "Aucune réponse.",
    summary: (name, character) => `${name} remporte la manche avec ${character} !`,
    noWinner: "Personne n'a marqué de points cette manche.",
  },
  en: {
    high: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is remarkable (${v}/10).`,
    mid: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is about average (${v}/10).`,
    low: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is rather weak (${v}/10).`,
    tag: (show, tag, name) => `In “${show}”, ${name}'s ${tag} is well known.`,
    ref: (show, name, n) => `In “${show}”, ${name} is an absolute reference on this theme (#${n} in my ranking).`,
    rank: (pct) => ` Beats ${pct}% of the characters in my database on this theme.`,
    unknown: { cartoon: "Character not found in my cartoon database: a few consolation points.", manga: "Character not found in my manga database: a few consolation points." },
    empty: "No answer.",
    summary: (name, character) => `${name} wins the round with ${character}!`,
    noWinner: "Nobody scored this round.",
  },
  es: {
    high: (show, trait, name, v) => `En «${show}», ${trait} de ${name} es notable (${v}/10).`,
    mid: (show, trait, name, v) => `En «${show}», ${trait} de ${name} está en la media (${v}/10).`,
    low: (show, trait, name, v) => `En «${show}», ${trait} de ${name} deja que desear (${v}/10).`,
    tag: (show, tag, name) => `En «${show}», ${tag} de ${name} es bien conocido.`,
    ref: (show, name, n) => `En «${show}», ${name} es una referencia absoluta en este tema (n.º ${n} de mi clasificación).`,
    rank: (pct) => ` Supera al ${pct} % de los personajes de mi base en este tema.`,
    unknown: { cartoon: "Personaje no encontrado en mi base de dibujos animados: unos puntos de consolación.", manga: "Personaje no encontrado en mi base de mangas: unos puntos de consolación." },
    empty: "Sin respuesta.",
    summary: (name, character) => `¡${name} gana la ronda con ${character}!`,
    noWinner: "Nadie ha puntuado en esta ronda.",
  },
};

function de(name) {
  return /^[aeiouyhâàéèêîïôûAEIOUYHÂÀÉÈÊÎÏÔÛ]/.test(name) ? `d'${name}` : `de ${name}`;
}

const toward = (v, w) => (w > 0 ? v : MAX - v);

// Position dans le classement de référence du thème (0 = n°1), ou -1.
function rankOf(c, theme, universe) {
  const list = RANKINGS[universe]?.[theme.id];
  return list ? list.indexOf(c.name) : -1;
}

// Valeur brute « le plus » d'un personnage pour un thème (environ 0 à 12).
function rawValue(c, theme, universe = "cartoon") {
  const rank = rankOf(c, theme, universe);
  if (rank >= 0) return 13 - rank * 0.01;
  if (theme.anti && c.tags.has(theme.anti)) return -1;
  let total = 0;
  let sum = 0;
  for (const [trait, w] of Object.entries(theme.weights)) {
    total += Math.abs(w) * toward(c.traits[trait], w);
    sum += Math.abs(w);
  }
  let raw = total / sum;
  for (const [trait, w] of Object.entries(theme.tie || {})) raw += w * (c.traits[trait] / MAX);
  if (theme.tag && c.tags.has(theme.tag)) raw = Math.max(raw, 9) + 1.5 + raw / 20;
  return raw;
}

// Pour chaque base et chaque thème : valeurs brutes triées, pour situer un personnage parmi tous les autres.
const DISTRIBUTIONS = new Map();
function distribution(universe, themeIndex) {
  const key = `${universe}:${themeIndex}`;
  if (!DISTRIBUTIONS.has(key)) {
    const theme = THEMES[themeIndex];
    DISTRIBUTIONS.set(key, DBS[universe].characters.map((c) => rawValue(c, theme, universe)).sort((a, b) => a - b));
  }
  return DISTRIBUTIONS.get(key);
}

function lowerBound(arr, x) {
  let lo = 0, hi = arr.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < x - 1e-9) lo = mid + 1; else hi = mid; }
  return lo;
}

// Pourcentage (0-100) des personnages de la base que ce personnage bat en mode « le plus ».
function percentile(c, universe, themeIndex) {
  const theme = THEMES[themeIndex];
  const dist = distribution(universe, themeIndex);
  const raw = rawValue(c, theme, universe);
  const below = lowerBound(dist, raw);
  const upTo = lowerBound(dist, raw + 2e-9);
  const equal = Math.max(1, upTo - below);
  return Math.round(((below + (equal - 1) / 2) / Math.max(1, dist.length - 1)) * 100);
}

function themeScore(c, theme, mode = "most", universe = "cartoon") {
  const most = percentile(c, universe, THEMES.indexOf(theme));
  return mode === "least" ? 100 - most : most;
}

// Ce qui explique le mieux le score : un talent connu, sinon le trait le plus déterminant.
function explain(c, theme, mode, score, lang, universe) {
  const t = TEXT[lang] || TEXT.fr;
  const show = c.show[lang] || c.show.fr;
  const rank = rankOf(c, theme, universe);
  if (rank >= 0) return t.ref(show, c.name, rank + 1) + t.rank(score);
  const tagWords = TAG_WORDS[lang] || TAG_WORDS.fr;
  const tag = [theme.tag, theme.anti].find((tg) => tg && c.tags.has(tg));
  if (tag) return t.tag(show, tagWords[tag], c.name) + t.rank(score);

  const good = score >= 50;
  let best = null;
  for (const [trait, w] of Object.entries(theme.weights)) {
    const v = c.traits[trait];
    const contribution = Math.abs(w) * (mode === "least" ? MAX - toward(v, w) : toward(v, w));
    if (!best || (good ? contribution > best.contribution : contribution < best.contribution)) best = { trait, contribution, v };
  }
  const level = best.v >= 7 ? "high" : best.v >= 4 ? "mid" : "low";
  const words = TRAIT_WORDS[lang] || TRAIT_WORDS.fr;
  return t[level](show, words[best.trait], c.name, best.v) + t.rank(score);
}

function lookup(answer, universe) {
  const c = DBS[universe].find(answer);
  if (c) return { c, db: universe };
  // Les personnages de mangas adaptés en animé sont aussi des dessins animés.
  if (universe === "cartoon") {
    const m = DBS.manga.find(answer);
    if (m) return { c: m, db: "manga" };
  }
  return null;
}

function knowledgeJudge({ theme, mode, universe = "cartoon", submissions, lang }) {
  const t = TEXT[lang] || TEXT.fr;
  const results = submissions.map((s) => {
    const answer = (s.answer || "").trim();
    if (!answer) {
      return { playerId: s.playerId, answer: "", character: "—", recognized: false, score: 0, explanation: t.empty };
    }
    const found = lookup(answer, universe);
    if (!found) {
      return { playerId: s.playerId, answer, character: answer, recognized: false, score: UNKNOWN_SCORE, explanation: t.unknown[universe] || t.unknown.cartoon };
    }
    const score = themeScore(found.c, theme, mode, found.db);
    const raw = rawValue(found.c, theme, found.db);
    return { playerId: s.playerId, answer, character: found.c.name, recognized: true, score, explanation: explain(found.c, theme, mode, score, lang, found.db), tie: mode === "least" ? -raw : raw };
  });

  // À score égal (arrondi), le classement de référence et les critères secondaires départagent.
  results.sort((a, b) => b.score - a.score || (b.tie ?? -99) - (a.tie ?? -99));
  for (const r of results) delete r.tie;
  const top = results[0];
  const winner = submissions.find((s) => s.playerId === top?.playerId);
  const summary = top && top.score > 0 && top.recognized ? t.summary(winner?.name || "?", top.character) : t.noWinner;
  return { results, summary };
}

module.exports = { knowledgeJudge, themeScore, rawValue, rankOf, TEXT };
