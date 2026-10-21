// Thèmes du jeu. Chaque thème existe en mode « le plus » et « le moins » et indique
// quels traits de caractère (voir characters.js) comptent pour le score.
// Un poids négatif signifie que le trait compte à l'envers (ex. être maladroit pénalise la danse).
// tie : critères secondaires légers pour départager les personnages à égalité.
// tag : talent connu qui place le personnage tout en haut (ex. "chef" pour Rémy) ; anti : talent inverse.
const THEMES = [
  {
    id: "funny",
    weights: { hum: 1 },
    tie: { tal: 0.1, cun: 0.05 },
    most: { fr: "Qui est le plus drôle ?", en: "Who is the funniest?", es: "¿Quién es el más gracioso?" },
    least: { fr: "Qui est le moins drôle ?", en: "Who is the least funny?", es: "¿Quién es el menos gracioso?" },
  },
  {
    id: "strong",
    weights: { str: 1 },
    tie: { bra: 0.1, spd: 0.05 },
    most: { fr: "Qui est le plus fort ?", en: "Who is the strongest?", es: "¿Quién es el más fuerte?" },
    least: { fr: "Qui est le moins fort ?", en: "Who is the weakest?", es: "¿Quién es el menos fuerte?" },
  },
  {
    id: "smart",
    weights: { int: 1 },
    tie: { cun: 0.1 },
    most: { fr: "Qui est le plus intelligent ?", en: "Who is the smartest?", es: "¿Quién es el más inteligente?" },
    least: { fr: "Qui est le moins intelligent ?", en: "Who is the least smart?", es: "¿Quién es el menos inteligente?" },
  },
  {
    id: "evil",
    weights: { evi: 1 },
    tie: { scr: 0.1, cun: 0.05 },
    most: { fr: "Qui est le plus méchant ?", en: "Who is the most evil?", es: "¿Quién es el más malvado?" },
    least: { fr: "Qui est le moins méchant ?", en: "Who is the least evil?", es: "¿Quién es el menos malvado?" },
  },
  {
    id: "clumsy",
    weights: { clu: 1 },
    tie: { unl: 0.1 },
    most: { fr: "Qui est le plus maladroit ?", en: "Who is the clumsiest?", es: "¿Quién es el más torpe?" },
    least: { fr: "Qui est le moins maladroit ?", en: "Who is the least clumsy?", es: "¿Quién es el menos torpe?" },
  },
  {
    id: "president",
    weights: { int: 2, kin: 1, bra: 1, clu: -1 },
    tie: { cun: 0.05 }, tag: "leader",
    most: { fr: "Qui ferait le meilleur président ?", en: "Who would make the best president?", es: "¿Quién sería el mejor presidente?" },
    least: { fr: "Qui ferait le pire président ?", en: "Who would make the worst president?", es: "¿Quién sería el peor presidente?" },
  },
  {
    id: "greedy",
    weights: { glu: 1 },
    tie: { laz: 0.05 }, tag: "glutton",
    most: { fr: "Qui est le plus gourmand ?", en: "Who is the greediest eater?", es: "¿Quién es el más glotón?" },
    least: { fr: "Qui est le moins gourmand ?", en: "Who is the least greedy eater?", es: "¿Quién es el menos glotón?" },
  },
  {
    id: "island",
    weights: { str: 1, int: 1, bra: 1, cun: 1 },
    tie: { spd: 0.05 }, tag: "survivor", anti: "doomed",
    most: { fr: "Qui survivrait le plus longtemps sur une île déserte ?", en: "Who would survive longest on a desert island?", es: "¿Quién sobreviviría más tiempo en una isla desierta?" },
    least: { fr: "Qui survivrait le moins longtemps sur une île déserte ?", en: "Who would survive the shortest on a desert island?", es: "¿Quién sobreviviría menos tiempo en una isla desierta?" },
  },
  {
    id: "lazy",
    weights: { laz: 1 },
    tie: { glu: 0.05 },
    most: { fr: "Qui est le plus paresseux ?", en: "Who is the laziest?", es: "¿Quién es el más perezoso?" },
    least: { fr: "Qui est le moins paresseux ?", en: "Who is the least lazy?", es: "¿Quién es el menos perezoso?" },
  },
  {
    id: "brave",
    weights: { bra: 1 },
    tie: { str: 0.1 },
    most: { fr: "Qui est le plus courageux ?", en: "Who is the bravest?", es: "¿Quién es el más valiente?" },
    least: { fr: "Qui est le moins courageux ?", en: "Who is the least brave?", es: "¿Quién es el menos valiente?" },
  },
  {
    id: "temper",
    weights: { tem: 1 },
    tie: { evi: 0.05, tal: 0.05 },
    most: { fr: "Qui a le plus mauvais caractère ?", en: "Who has the worst temper?", es: "¿Quién tiene el peor carácter?" },
    least: { fr: "Qui a le moins mauvais caractère ?", en: "Who has the calmest temper?", es: "¿Quién tiene el carácter más tranquilo?" },
  },
  {
    id: "teacher",
    weights: { int: 2, kin: 1, tem: -1 },
    tie: { tal: 0.05 }, tag: "teacher",
    most: { fr: "Qui serait le meilleur prof ?", en: "Who would be the best teacher?", es: "¿Quién sería el mejor profesor?" },
    least: { fr: "Qui serait le pire prof ?", en: "Who would be the worst teacher?", es: "¿Quién sería el peor profesor?" },
  },
  {
    id: "cute",
    weights: { cut: 1 },
    tie: { kin: 0.1 },
    most: { fr: "Qui est le plus mignon ?", en: "Who is the cutest?", es: "¿Quién es el más tierno?" },
    least: { fr: "Qui est le moins mignon ?", en: "Who is the least cute?", es: "¿Quién es el menos tierno?" },
  },
  {
    id: "fast",
    weights: { spd: 1 },
    tie: { str: 0.05 }, tag: "speedster",
    most: { fr: "Qui est le plus rapide ?", en: "Who is the fastest?", es: "¿Quién es el más rápido?" },
    least: { fr: "Qui est le moins rapide ?", en: "Who is the slowest?", es: "¿Quién es el menos rápido?" },
  },
  {
    id: "roommate",
    weights: { kin: 2, hum: 1, tem: -1, laz: -1 },
    tie: { cut: 0.05 },
    most: { fr: "Qui ferait le meilleur colocataire ?", en: "Who would be the best roommate?", es: "¿Quién sería el mejor compañero de piso?" },
    least: { fr: "Qui ferait le pire colocataire ?", en: "Who would be the worst roommate?", es: "¿Quién sería el peor compañero de piso?" },
  },
  {
    id: "talkative",
    weights: { tal: 1 },
    tie: { hum: 0.1 },
    most: { fr: "Qui est le plus bavard ?", en: "Who is the most talkative?", es: "¿Quién es el más hablador?" },
    least: { fr: "Qui est le moins bavard ?", en: "Who is the least talkative?", es: "¿Quién es el menos hablador?" },
  },
  {
    id: "dance",
    weights: { spd: 1, hum: 1, clu: -2 },
    tag: "dancer",
    most: { fr: "Qui gagnerait un concours de danse ?", en: "Who would win a dance contest?", es: "¿Quién ganaría un concurso de baile?" },
    least: { fr: "Qui finirait dernier d'un concours de danse ?", en: "Who would finish last in a dance contest?", es: "¿Quién quedaría último en un concurso de baile?" },
  },
  {
    id: "unlucky",
    weights: { unl: 1 },
    tie: { clu: 0.1 },
    most: { fr: "Qui est le plus malchanceux ?", en: "Who is the unluckiest?", es: "¿Quién es el más desafortunado?" },
    least: { fr: "Qui est le moins malchanceux ?", en: "Who is the luckiest?", es: "¿Quién es el menos desafortunado?" },
  },
  {
    id: "rich",
    weights: { ric: 1 },
    tie: { cun: 0.05 },
    most: { fr: "Qui est le plus riche ?", en: "Who is the richest?", es: "¿Quién es el más rico?" },
    least: { fr: "Qui est le moins riche ?", en: "Who is the poorest?", es: "¿Quién es el menos rico?" },
  },
  {
    id: "superhero",
    weights: { str: 1, bra: 1, kin: 1, spd: 1 },
    tag: "hero",
    most: { fr: "Qui ferait le meilleur super-héros ?", en: "Who would make the best superhero?", es: "¿Quién sería el mejor superhéroe?" },
    least: { fr: "Qui ferait le pire super-héros ?", en: "Who would make the worst superhero?", es: "¿Quién sería el peor superhéroe?" },
  },
  {
    id: "scary",
    weights: { scr: 1 },
    tie: { evi: 0.1, str: 0.05 },
    most: { fr: "Qui est le plus effrayant ?", en: "Who is the scariest?", es: "¿Quién da más miedo?" },
    least: { fr: "Qui est le moins effrayant ?", en: "Who is the least scary?", es: "¿Quién da menos miedo?" },
  },
  {
    id: "friend",
    weights: { kin: 2, hum: 1 },
    tag: "friend",
    most: { fr: "Qui serait le meilleur ami ?", en: "Who would be the best friend?", es: "¿Quién sería el mejor amigo?" },
    least: { fr: "Qui serait le pire ami ?", en: "Who would be the worst friend?", es: "¿Quién sería el peor amigo?" },
  },
  {
    id: "cunning",
    weights: { cun: 1 },
    tie: { int: 0.1 },
    most: { fr: "Qui est le plus rusé ?", en: "Who is the most cunning?", es: "¿Quién es el más astuto?" },
    least: { fr: "Qui est le moins rusé ?", en: "Who is the least cunning?", es: "¿Quién es el menos astuto?" },
  },
  {
    id: "chef",
    weights: { glu: 0.5, int: 1, clu: -1 },
    tag: "chef", anti: "badcook",
    most: { fr: "Qui ferait le meilleur chef cuisinier ?", en: "Who would be the best chef?", es: "¿Quién sería el mejor chef?" },
    least: { fr: "Qui ferait le pire chef cuisinier ?", en: "Who would be the worst chef?", es: "¿Quién sería el peor chef?" },
  },
];

// Thèmes de base (traits de caractère, métiers) + familles de themes-more.js.
const MORE = require("./themes-more");
for (const t of THEMES) t.family = "traits";
THEMES.push(...MORE);

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

// Tire `count` thèmes en alternant les familles (traits, quotidien, apparence, idées…)
// et en évitant les thèmes déjà joués dans la salle (`played` : identifiants), tant qu'il en reste.
function pickThemes(count, played = []) {
  const seen = new Set(played);
  const fresh = THEMES.filter((t) => !seen.has(t.id));
  const pool = fresh.length >= count ? fresh : THEMES;
  const families = new Map();
  for (const t of shuffle([...pool])) {
    if (!families.has(t.family)) families.set(t.family, []);
    families.get(t.family).push(t);
  }
  const order = shuffle([...families.values()]);
  const picked = [];
  while (picked.length < count && order.some((l) => l.length)) {
    for (const list of order) if (list.length && picked.length < count) picked.push(list.pop());
  }
  return shuffle(picked);
}

module.exports = { THEMES, pickThemes };
