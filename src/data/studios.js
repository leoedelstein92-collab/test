// Autres studios de cinéma : Illumination, Blue Sky, Sony, Warner, Nintendo, etc.
// Notes (0-9) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const DM = "Moi, moche et méchant|Despicable Me|Mi villano favorito";
const PETS = "Comme des bêtes|The Secret Life of Pets|La vida secreta de tus mascotas";
const SING = "Tous en scène|Sing|¡Canta!";
const MARIO = "Super Mario Bros. le film|The Super Mario Bros. Movie|Super Mario Bros. La película";
const ICE = "L'Âge de glace|Ice Age|La era de hielo";
const RIO = "Rio";
const SPV = "Spider-Man : New Generation|Spider-Man: Into the Spider-Verse|Spider-Man: Un nuevo universo";
const HT = "Hôtel Transylvanie|Hotel Transylvania|Hotel Transilvania";
const LEGO = "La Grande Aventure Lego|The Lego Movie|La gran aventura Lego";
const SONIC = "Sonic";

module.exports = [
  ["Margo", "margo", DM, "5 2 7 0 2 7 8 1 3 4 7 0 0 6 6 6 3"],
  ["Edith", "edith", DM, "8 4 4 1 5 8 6 2 4 6 7 0 0 6 6 6 4"],
  ["Lucy Wilde", "lucy wilde", DM, "8 7 6 0 6 8 8 1 4 8 6 0 2 3 9 7 4"],
  ["Vector", "vector|victor perkins", DM, "7 3 6 6 7 4 2 3 6 4 2 3 8 6 8 6 9"],
  ["Dr Néfario", "nefario|dr nefario|docteur nefario", DM, "6 2 9 4 5 4 6 2 3 1 3 3 3 6 5 6 6"],
  ["Balthazar Bratt", "balthazar bratt|bratt", DM, "8 4 6 8 5 6 0 2 5 4 0 5 6 8 7 7 7"],
  ["Max", "max", PETS, "6 4 5 0 4 6 8 3 5 6 8 0 0 4 7 4 6"],
  ["Pompon", "snowball|pompon|bola de nieve", PETS, "9 3 6 6 3 8 4 2 5 7 9 2 0 9 9 7 5"],
  ["Gidget", "gidget", PETS, "7 7 5 0 3 9 8 1 4 7 9 0 0 7 7 6 3"],
  ["Chloé", "chloe", PETS, "8 4 4 0 2 4 4 9 9 3 6 0 0 4 4 4 3"],
  ["Buster Moon", "buster moon|buster", SING, "7 2 6 1 6 7 7 1 3 4 6 0 1 4 9 8 9"],
  ["Rosita", "rosita", SING, "6 3 7 0 3 6 9 0 4 4 7 0 1 3 6 5 4"],
  ["Meena", "meena", SING, "4 7 5 0 5 5 9 2 4 3 8 0 1 1 2 2 5"],
  ["Gunter", "gunter", SING, "9 3 3 0 4 7 9 1 6 5 7 0 1 1 9 2 3"],
  ["Le Grinch", "grinch|el grinch", "Le Grinch|The Grinch|El Grinch", "8 6 7 7 4 6 2 4 4 5 2 6 2 9 6 9 4"],
  ["Le Lorax", "lorax", "Le Lorax|The Lorax|El Lorax", "7 4 6 0 3 7 6 2 4 3 6 0 0 8 8 5 6"],
  ["Mario", "super mario", MARIO, "6 6 5 0 5 9 9 1 6 7 6 0 1 4 6 5 5"],
  ["Luigi", "luigi", MARIO, "7 4 5 0 7 4 9 2 5 6 7 0 1 2 5 3 8"],
  ["Princesse Peach", "peach|princess peach|princesa peach", MARIO, "4 6 7 0 2 9 8 1 4 6 8 0 9 3 5 6 3"],
  ["Bowser", "bowser|koopa|roi koopa", MARIO, "8 9 4 8 5 8 1 3 7 4 2 8 8 9 7 5 7"],
  ["Toad", "toad", MARIO, "7 2 4 0 5 8 9 1 5 6 8 0 1 4 8 3 5"],
  ["Donkey Kong", "donkey kong|dk", MARIO, "7 9 3 2 5 7 5 3 9 6 3 4 3 8 7 3 5"],
  ["Yoshi", "yoshi", MARIO, "6 5 3 0 4 6 8 2 9 8 9 0 0 1 2 3 3"],
  ["Manny", "manny|manfred", ICE, "5 9 6 0 3 8 8 2 4 3 3 3 0 7 4 5 6"],
  ["Sid le paresseux", "sid|sid le paresseux|sid sloth", ICE, "9 2 1 0 9 4 9 6 7 3 5 0 0 1 9 1 9"],
  ["Diego", "diego", ICE, "5 8 7 2 2 8 6 2 5 8 4 6 0 6 5 7 5"],
  ["Scrat", "scrat", ICE, "9 4 4 0 9 7 3 2 9 7 7 0 0 7 0 5 9"],
  ["Blu", "blu|blue", RIO, "6 2 8 0 8 4 8 2 3 3 7 0 1 4 7 4 8"],
  ["Nigel", "nigel", RIO, "5 6 6 8 3 5 0 2 4 7 0 7 1 9 7 7 6"],
  ["Miles Morales", "miles|miles morales|spider man miles", SPV, "6 7 7 0 6 8 9 1 3 8 6 0 1 4 7 7 7"],
  ["Gwen Stacy", "gwen|spider gwen|gwen stacy", SPV, "5 7 7 0 1 8 7 1 3 9 6 0 1 5 5 7 7"],
  ["Spider-Cochon", "spider ham|spider cochon|peter porker", SPV, "9 6 5 0 6 8 7 2 6 7 8 0 0 3 8 6 4"],
  ["Dracula", "drac|dracula", HT, "7 8 7 1 4 6 8 2 3 9 4 6 8 7 7 6 5"],
  ["Mavis", "mavis", HT, "6 6 6 0 3 7 8 1 3 9 8 3 7 4 6 4 4"],
  ["Flint Lockwood", "flint|flint lockwood", "Tempête de boulettes géantes|Cloudy with a Chance of Meatballs|Lluvia de hamburguesas", "8 2 8 0 8 7 8 1 5 4 5 0 1 3 9 4 8"],
  ["Boog", "boog", "Les Rebelles de la forêt|Open Season|Open Season", "7 8 3 0 7 4 7 6 9 3 7 2 0 4 6 3 6"],
  ["Emmet", "emmet", LEGO, "8 3 2 0 7 7 9 1 4 4 6 0 1 1 8 2 6"],
  ["Lord Business", "lord business|president business|lord business", LEGO, "6 5 7 8 3 4 0 2 4 3 0 6 9 9 8 7 4"],
  ["Lola Bunny", "lola|lola bunny", "Space Jam", "6 7 7 0 1 8 7 1 3 9 8 0 2 6 6 7 2"],
  ["Tails", "tails|miles prower", SONIC, "6 3 9 0 4 7 9 1 4 8 8 0 1 2 6 5 4"],
  ["Knuckles", "knuckles", SONIC, "6 9 3 0 5 9 6 2 5 7 4 3 1 8 5 2 7"],
  ["Dr Robotnik", "robotnik|eggman|dr eggman|dr robotnik", SONIC, "8 3 9 8 4 5 0 2 6 3 0 6 7 9 9 8 7"],
  ["Anastasia", "anastasia romanov", "Anastasia", "6 4 6 0 4 8 8 1 3 5 6 0 9 6 7 6 6"],
  ["Raspoutine", "raspoutine|rasputin|rasputin", "Anastasia", "6 3 6 9 7 5 0 2 3 3 0 8 2 9 8 7 9"],
  ["Le Géant de fer", "geant de fer|iron giant|gigante de hierro", "Le Géant de fer|The Iron Giant|El gigante de hierro", "6 9 5 0 6 9 9 2 6 5 6 3 0 1 4 2 5"],
  ["Ferdinand", "ferdinand|ferdinand le taureau", "Ferdinand", "6 9 4 0 6 6 9 3 5 4 8 2 0 0 5 2 6"],
  ["Coraline", "coraline", "Coraline", "5 3 7 0 4 9 6 2 3 4 6 3 2 7 6 7 6"],
  ["L'Autre Mère", "autre mere|other mother|beldam|la otra madre", "Coraline", "2 6 8 9 1 5 0 1 3 6 1 9 4 8 7 9 3"],
  ["Jack Skellington", "jack skellington", "L'Étrange Noël de monsieur Jack|The Nightmare Before Christmas|Pesadilla antes de Navidad", "6 4 6 1 5 7 7 1 3 5 3 8 3 3 8 5 6"],
  ["Oogie Boogie", "oogie boogie|oogie", "L'Étrange Noël de monsieur Jack|The Nightmare Before Christmas|Pesadilla antes de Navidad", "7 6 4 8 4 5 0 3 7 3 0 9 2 8 8 6 7"],
];
