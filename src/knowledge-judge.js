// Juge sans IA externe : note chaque personnage à partir de la base de traits (characters.js).
const { findCharacter } = require("./characters");

const UNKNOWN_SCORE = 5;

// Nom du trait avec article défini, pour les phrases d'explication.
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

const TEXT = {
  fr: {
    high: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} est remarquable (${v}/10).`,
    mid: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} est plutôt dans la moyenne (${v}/10).`,
    low: (show, trait, name, v) => `Dans « ${show} », ${trait} ${de(name)} reste faible (${v}/10).`,
    unknown: "Personnage introuvable dans ma base de dessins animés : quelques points de consolation.",
    empty: "Aucune réponse.",
    summary: (name, character) => `${name} remporte la manche avec ${character} !`,
    noWinner: "Personne n'a marqué de points cette manche.",
  },
  en: {
    high: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is remarkable (${v}/10).`,
    mid: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is about average (${v}/10).`,
    low: (show, trait, name, v) => `In “${show}”, ${name}'s ${trait} is rather weak (${v}/10).`,
    unknown: "Character not found in my cartoon database: a few consolation points.",
    empty: "No answer.",
    summary: (name, character) => `${name} wins the round with ${character}!`,
    noWinner: "Nobody scored this round.",
  },
  es: {
    high: (show, trait, name, v) => `En «${show}», ${trait} de ${name} es notable (${v}/10).`,
    mid: (show, trait, name, v) => `En «${show}», ${trait} de ${name} está en la media (${v}/10).`,
    low: (show, trait, name, v) => `En «${show}», ${trait} de ${name} deja que desear (${v}/10).`,
    unknown: "Personaje no encontrado en mi base de dibujos animados: unos puntos de consolación.",
    empty: "Sin respuesta.",
    summary: (name, character) => `¡${name} gana la ronda con ${character}!`,
    noWinner: "Nadie ha puntuado en esta ronda.",
  },
};

function de(name) {
  return /^[aeiouyhâàéèêîïôûAEIOUYHÂÀÉÈÊÎÏÔÛ]/.test(name) ? `d'${name}` : `de ${name}`;
}

// Score « le plus » de 0 à 100 pour un personnage et un thème.
function themeScore(character, weights) {
  let total = 0;
  let sum = 0;
  for (const [trait, w] of Object.entries(weights)) {
    const v = character.traits[trait];
    total += Math.abs(w) * (w > 0 ? v : 9 - v);
    sum += Math.abs(w);
  }
  return Math.round((total / sum / 9) * 100);
}

// Trait qui explique le mieux le score : celui qui pèse le plus pour un bon score,
// ou celui qui pénalise le plus pour un mauvais score.
function keyTrait(character, weights, mode, score) {
  const good = score >= 50;
  let best = null;
  for (const [trait, w] of Object.entries(weights)) {
    const v = character.traits[trait];
    const towardMost = w > 0 ? v : 9 - v;
    const contribution = Math.abs(w) * (mode === "least" ? 9 - towardMost : towardMost);
    const better = good ? contribution > best?.contribution : contribution < best?.contribution;
    if (!best || better) best = { trait, contribution, v };
  }
  return best;
}

function knowledgeJudge({ theme, mode, submissions, lang }) {
  const t = TEXT[lang] || TEXT.fr;
  const words = TRAIT_WORDS[lang] || TRAIT_WORDS.fr;

  const results = submissions.map((s) => {
    const answer = (s.answer || "").trim();
    if (!answer) {
      return { playerId: s.playerId, answer: "", character: "—", recognized: false, score: 0, explanation: t.empty };
    }
    const c = findCharacter(answer);
    if (!c) {
      return { playerId: s.playerId, answer, character: answer, recognized: false, score: UNKNOWN_SCORE, explanation: t.unknown };
    }
    const most = themeScore(c, theme.weights);
    const score = mode === "least" ? 100 - most : most;
    const k = keyTrait(c, theme.weights, mode, score);
    const level = k.v >= 7 ? "high" : k.v >= 4 ? "mid" : "low";
    const explanation = t[level](c.show[lang] || c.show.fr, words[k.trait], c.name, k.v);
    return { playerId: s.playerId, answer, character: c.name, recognized: true, score, explanation };
  });

  results.sort((a, b) => b.score - a.score);
  const top = results[0];
  const winner = submissions.find((s) => s.playerId === top?.playerId);
  const summary = top && top.score > 0 && top.recognized ? t.summary(winner?.name || "?", top.character) : t.noWinner;
  return { results, summary };
}

module.exports = { knowledgeJudge, themeScore, TEXT };
