// Thèmes proposés par le jeu, traduits dans chaque langue supportée.
const THEMES = [
  { fr: "Qui est le plus drôle ?", en: "Who is the funniest?", es: "¿Quién es el más gracioso?" },
  { fr: "Qui est le plus fort physiquement ?", en: "Who is the strongest?", es: "¿Quién es el más fuerte?" },
  { fr: "Qui est le plus intelligent ?", en: "Who is the smartest?", es: "¿Quién es el más inteligente?" },
  { fr: "Qui est le plus méchant ?", en: "Who is the most evil?", es: "¿Quién es el más malvado?" },
  { fr: "Qui est le plus maladroit ?", en: "Who is the clumsiest?", es: "¿Quién es el más torpe?" },
  { fr: "Qui ferait le meilleur président ?", en: "Who would make the best president?", es: "¿Quién sería el mejor presidente?" },
  { fr: "Qui est le plus gourmand ?", en: "Who is the greediest eater?", es: "¿Quién es el más glotón?" },
  { fr: "Qui survivrait le plus longtemps sur une île déserte ?", en: "Who would survive longest on a desert island?", es: "¿Quién sobreviviría más tiempo en una isla desierta?" },
  { fr: "Qui est le plus paresseux ?", en: "Who is the laziest?", es: "¿Quién es el más perezoso?" },
  { fr: "Qui est le plus courageux ?", en: "Who is the bravest?", es: "¿Quién es el más valiente?" },
  { fr: "Qui a le pire caractère ?", en: "Who has the worst temper?", es: "¿Quién tiene el peor carácter?" },
  { fr: "Qui serait le meilleur prof ?", en: "Who would be the best teacher?", es: "¿Quién sería el mejor profesor?" },
  { fr: "Qui est le plus mignon ?", en: "Who is the cutest?", es: "¿Quién es el más tierno?" },
  { fr: "Qui est le plus rapide ?", en: "Who is the fastest?", es: "¿Quién es el más rápido?" },
  { fr: "Qui ferait le meilleur colocataire ?", en: "Who would be the best roommate?", es: "¿Quién sería el mejor compañero de piso?" },
  { fr: "Qui est le plus bavard ?", en: "Who is the most talkative?", es: "¿Quién es el más hablador?" },
  { fr: "Qui gagnerait un concours de danse ?", en: "Who would win a dance contest?", es: "¿Quién ganaría un concurso de baile?" },
  { fr: "Qui est le plus malchanceux ?", en: "Who is the unluckiest?", es: "¿Quién es el más desafortunado?" },
  { fr: "Qui est le plus riche ?", en: "Who is the richest?", es: "¿Quién es el más rico?" },
  { fr: "Qui ferait le meilleur super-héros ?", en: "Who would make the best superhero?", es: "¿Quién sería el mejor superhéroe?" },
  { fr: "Qui est le plus effrayant ?", en: "Who is the scariest?", es: "¿Quién da más miedo?" },
  { fr: "Qui est le meilleur ami ?", en: "Who is the best friend?", es: "¿Quién es el mejor amigo?" },
  { fr: "Qui est le plus rusé ?", en: "Who is the most cunning?", es: "¿Quién es el más astuto?" },
  { fr: "Qui ferait le meilleur chef cuisinier ?", en: "Who would be the best chef?", es: "¿Quién sería el mejor chef?" },
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
