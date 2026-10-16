// Thèmes du jeu. Chaque thème existe en mode « le plus » et « le moins » et indique
// quels traits de caractère (voir characters.js) comptent pour le score.
// Un poids négatif signifie que le trait compte à l'envers (ex. être maladroit pénalise la danse).
const THEMES = [
  {
    weights: { hum: 1 },
    most: { fr: "Qui est le plus drôle ?", en: "Who is the funniest?", es: "¿Quién es el más gracioso?" },
    least: { fr: "Qui est le moins drôle ?", en: "Who is the least funny?", es: "¿Quién es el menos gracioso?" },
  },
  {
    weights: { str: 1 },
    most: { fr: "Qui est le plus fort ?", en: "Who is the strongest?", es: "¿Quién es el más fuerte?" },
    least: { fr: "Qui est le moins fort ?", en: "Who is the weakest?", es: "¿Quién es el menos fuerte?" },
  },
  {
    weights: { int: 1 },
    most: { fr: "Qui est le plus intelligent ?", en: "Who is the smartest?", es: "¿Quién es el más inteligente?" },
    least: { fr: "Qui est le moins intelligent ?", en: "Who is the least smart?", es: "¿Quién es el menos inteligente?" },
  },
  {
    weights: { evi: 1 },
    most: { fr: "Qui est le plus méchant ?", en: "Who is the most evil?", es: "¿Quién es el más malvado?" },
    least: { fr: "Qui est le moins méchant ?", en: "Who is the least evil?", es: "¿Quién es el menos malvado?" },
  },
  {
    weights: { clu: 1 },
    most: { fr: "Qui est le plus maladroit ?", en: "Who is the clumsiest?", es: "¿Quién es el más torpe?" },
    least: { fr: "Qui est le moins maladroit ?", en: "Who is the least clumsy?", es: "¿Quién es el menos torpe?" },
  },
  {
    weights: { int: 2, kin: 1, bra: 1, clu: -1 },
    most: { fr: "Qui ferait le meilleur président ?", en: "Who would make the best president?", es: "¿Quién sería el mejor presidente?" },
    least: { fr: "Qui ferait le pire président ?", en: "Who would make the worst president?", es: "¿Quién sería el peor presidente?" },
  },
  {
    weights: { glu: 1 },
    most: { fr: "Qui est le plus gourmand ?", en: "Who is the greediest eater?", es: "¿Quién es el más glotón?" },
    least: { fr: "Qui est le moins gourmand ?", en: "Who is the least greedy eater?", es: "¿Quién es el menos glotón?" },
  },
  {
    weights: { str: 1, int: 1, bra: 1, cun: 1 },
    most: { fr: "Qui survivrait le plus longtemps sur une île déserte ?", en: "Who would survive longest on a desert island?", es: "¿Quién sobreviviría más tiempo en una isla desierta?" },
    least: { fr: "Qui survivrait le moins longtemps sur une île déserte ?", en: "Who would survive the shortest on a desert island?", es: "¿Quién sobreviviría menos tiempo en una isla desierta?" },
  },
  {
    weights: { laz: 1 },
    most: { fr: "Qui est le plus paresseux ?", en: "Who is the laziest?", es: "¿Quién es el más perezoso?" },
    least: { fr: "Qui est le moins paresseux ?", en: "Who is the least lazy?", es: "¿Quién es el menos perezoso?" },
  },
  {
    weights: { bra: 1 },
    most: { fr: "Qui est le plus courageux ?", en: "Who is the bravest?", es: "¿Quién es el más valiente?" },
    least: { fr: "Qui est le moins courageux ?", en: "Who is the least brave?", es: "¿Quién es el menos valiente?" },
  },
  {
    weights: { tem: 1 },
    most: { fr: "Qui a le plus mauvais caractère ?", en: "Who has the worst temper?", es: "¿Quién tiene el peor carácter?" },
    least: { fr: "Qui a le moins mauvais caractère ?", en: "Who has the calmest temper?", es: "¿Quién tiene el carácter más tranquilo?" },
  },
  {
    weights: { int: 2, kin: 1, tem: -1 },
    most: { fr: "Qui serait le meilleur prof ?", en: "Who would be the best teacher?", es: "¿Quién sería el mejor profesor?" },
    least: { fr: "Qui serait le pire prof ?", en: "Who would be the worst teacher?", es: "¿Quién sería el peor profesor?" },
  },
  {
    weights: { cut: 1 },
    most: { fr: "Qui est le plus mignon ?", en: "Who is the cutest?", es: "¿Quién es el más tierno?" },
    least: { fr: "Qui est le moins mignon ?", en: "Who is the least cute?", es: "¿Quién es el menos tierno?" },
  },
  {
    weights: { spd: 1 },
    most: { fr: "Qui est le plus rapide ?", en: "Who is the fastest?", es: "¿Quién es el más rápido?" },
    least: { fr: "Qui est le moins rapide ?", en: "Who is the slowest?", es: "¿Quién es el menos rápido?" },
  },
  {
    weights: { kin: 2, hum: 1, tem: -1, laz: -1 },
    most: { fr: "Qui ferait le meilleur colocataire ?", en: "Who would be the best roommate?", es: "¿Quién sería el mejor compañero de piso?" },
    least: { fr: "Qui ferait le pire colocataire ?", en: "Who would be the worst roommate?", es: "¿Quién sería el peor compañero de piso?" },
  },
  {
    weights: { tal: 1 },
    most: { fr: "Qui est le plus bavard ?", en: "Who is the most talkative?", es: "¿Quién es el más hablador?" },
    least: { fr: "Qui est le moins bavard ?", en: "Who is the least talkative?", es: "¿Quién es el menos hablador?" },
  },
  {
    weights: { spd: 1, hum: 1, clu: -2 },
    most: { fr: "Qui gagnerait un concours de danse ?", en: "Who would win a dance contest?", es: "¿Quién ganaría un concurso de baile?" },
    least: { fr: "Qui finirait dernier d'un concours de danse ?", en: "Who would finish last in a dance contest?", es: "¿Quién quedaría último en un concurso de baile?" },
  },
  {
    weights: { unl: 1 },
    most: { fr: "Qui est le plus malchanceux ?", en: "Who is the unluckiest?", es: "¿Quién es el más desafortunado?" },
    least: { fr: "Qui est le moins malchanceux ?", en: "Who is the luckiest?", es: "¿Quién es el menos desafortunado?" },
  },
  {
    weights: { ric: 1 },
    most: { fr: "Qui est le plus riche ?", en: "Who is the richest?", es: "¿Quién es el más rico?" },
    least: { fr: "Qui est le moins riche ?", en: "Who is the poorest?", es: "¿Quién es el menos rico?" },
  },
  {
    weights: { str: 1, bra: 1, kin: 1, spd: 1 },
    most: { fr: "Qui ferait le meilleur super-héros ?", en: "Who would make the best superhero?", es: "¿Quién sería el mejor superhéroe?" },
    least: { fr: "Qui ferait le pire super-héros ?", en: "Who would make the worst superhero?", es: "¿Quién sería el peor superhéroe?" },
  },
  {
    weights: { scr: 1 },
    most: { fr: "Qui est le plus effrayant ?", en: "Who is the scariest?", es: "¿Quién da más miedo?" },
    least: { fr: "Qui est le moins effrayant ?", en: "Who is the least scary?", es: "¿Quién da menos miedo?" },
  },
  {
    weights: { kin: 2, hum: 1 },
    most: { fr: "Qui serait le meilleur ami ?", en: "Who would be the best friend?", es: "¿Quién sería el mejor amigo?" },
    least: { fr: "Qui serait le pire ami ?", en: "Who would be the worst friend?", es: "¿Quién sería el peor amigo?" },
  },
  {
    weights: { cun: 1 },
    most: { fr: "Qui est le plus rusé ?", en: "Who is the most cunning?", es: "¿Quién es el más astuto?" },
    least: { fr: "Qui est le moins rusé ?", en: "Who is the least cunning?", es: "¿Quién es el menos astuto?" },
  },
  {
    weights: { glu: 1, int: 1, clu: -1 },
    most: { fr: "Qui ferait le meilleur chef cuisinier ?", en: "Who would be the best chef?", es: "¿Quién sería el mejor chef?" },
    least: { fr: "Qui ferait le pire chef cuisinier ?", en: "Who would be the worst chef?", es: "¿Quién sería el peor chef?" },
  },
];

function pickThemes(count) {
  const pool = THEMES.map((_, i) => i);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).map((i) => THEMES[i]);
}

module.exports = { THEMES, pickThemes };
