// Animés japonais (séries et films, dont Studio Ghibli).
// Notes (0-9) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const DB = "Dragon Ball";
const NAR = "Naruto";
const OP = "One Piece";
const POK = "Pokémon";
const GHI = "Studio Ghibli";
const AOT = "L'Attaque des Titans|Attack on Titan|Ataque a los titanes";
const DS = "Demon Slayer";
const MHA = "My Hero Academia";
const DN = "Death Note";
const HXH = "Hunter x Hunter";
const SM = "Sailor Moon";
const DOR = "Doraemon";

module.exports = [
  ["Son Gohan", "gohan|sangohan|son gohan", DB, "5 9 8 0 4 8 9 2 7 9 6 1 2 6 5 4 3"],
  ["Trunks", "trunks", DB, "6 9 7 0 2 9 7 2 6 9 5 2 9 6 5 5 3"],
  ["Bulma", "bulma", DB, "7 2 9 0 4 6 6 2 4 3 6 0 9 8 9 7 4"],
  ["Cell", "cell", DB, "3 9 8 9 1 7 0 1 3 9 0 9 2 8 7 8 4"],
  ["Majin Boo", "buu|majin boo|majin buu|boubou", DB, "8 9 1 7 6 6 3 6 9 8 6 7 0 9 6 1 4"],
  ["Chichi", "chi chi|chichi|milk", DB, "5 7 6 0 2 7 6 1 4 6 5 3 3 9 8 4 4"],
  ["Yamcha", "yamcha", DB, "6 6 4 0 6 6 7 3 5 7 4 0 2 5 5 3 9"],
  ["Mr. Satan", "mr satan|hercule satan|mister satan", DB, "9 4 3 1 7 2 6 4 6 4 3 0 9 6 9 7 5"],
  ["Kakashi", "kakashi|kakashi hatake", NAR, "6 8 9 0 1 8 7 7 4 9 3 3 2 2 3 8 6"],
  ["Sakura Haruno", "sakura|sakura haruno", NAR, "5 8 8 0 2 8 7 1 3 7 6 2 1 8 6 6 5"],
  ["Itachi", "itachi|itachi uchiha", NAR, "1 9 9 5 0 9 6 1 3 9 3 8 2 2 2 9 9"],
  ["Gaara", "gaara", NAR, "2 9 7 5 0 9 6 1 2 6 3 7 4 6 1 6 8"],
  ["Orochimaru", "orochimaru", NAR, "2 8 9 9 1 6 0 1 2 8 0 9 3 6 6 9 5"],
  ["Jiraiya", "jiraiya|ermite pervers|ero sennin", NAR, "9 8 8 0 4 8 8 4 6 7 3 2 3 3 8 8 7"],
  ["Nami", "nami", OP, "6 4 8 1 3 6 7 2 5 6 7 1 8 8 8 9 5"],
  ["Sanji", "sanji", OP, "7 8 6 0 4 9 7 2 4 9 3 3 2 6 7 6 5"],
  ["Usopp", "usopp", OP, "9 4 6 0 6 4 8 4 5 6 5 0 1 3 9 8 7"],
  ["Chopper", "tony tony chopper|chopper", OP, "8 7 7 0 5 6 9 2 7 6 9 2 0 3 6 3 4"],
  ["Nico Robin", "nico robin", OP, "5 6 9 0 1 8 7 2 3 6 4 3 3 1 3 8 8"],
  ["Portgas D. Ace", "ace|portgas d ace", OP, "6 9 5 0 4 9 8 5 9 8 4 2 1 6 5 5 8"],
  ["Bulbizarre", "bulbasaur|bulbizarre", POK, "4 5 5 0 3 6 8 2 4 4 8 0 0 3 0 3 2"],
  ["Salamèche", "charmander|salameche", POK, "5 5 4 0 4 7 8 2 5 6 9 1 0 5 0 3 4"],
  ["Carapuce", "squirtle|carapuce", POK, "7 5 4 0 3 7 7 2 4 5 9 0 0 4 0 4 2"],
  ["Dracaufeu", "charizard|dracaufeu", POK, "3 9 5 1 2 8 4 3 6 8 3 7 0 9 0 3 3"],
  ["Évoli", "eevee|evoli", POK, "4 3 4 0 3 5 8 2 4 6 9 0 0 1 0 3 2"],
  ["Rondoudou", "jigglypuff|rondoudou", POK, "7 3 4 1 2 5 5 2 4 3 9 1 0 8 2 3 6"],
  ["Magicarpe", "magikarp|magicarpe", POK, "7 0 0 0 8 1 5 3 3 1 4 0 0 1 0 0 9"],
  ["Mew", "mew", POK, "6 8 9 0 1 7 8 2 3 9 9 0 0 1 0 8 1"],
  ["Ondine", "misty|ondine", POK, "5 5 6 0 3 7 6 1 3 5 6 0 2 9 7 5 5"],
  ["Pierre", "brock|pierre|pierre le dresseur", POK, "6 6 7 0 3 7 9 1 5 4 4 0 1 2 6 5 8"],
  ["Doraemon", "doraemon", DOR, "7 5 8 0 6 6 9 3 9 4 8 0 3 4 8 5 4"],
  ["Nobita", "nobita|nobita nobi", DOR, "7 1 2 0 9 3 8 9 6 1 6 0 1 4 6 2 9"],
  ["Chihiro", "chihiro|sen", "Le Voyage de Chihiro|Spirited Away|El viaje de Chihiro", "4 3 6 0 5 8 9 1 4 5 7 0 1 4 4 5 8"],
  ["Sans-Visage", "sans visage|no face|kaonashi|sin cara", "Le Voyage de Chihiro|Spirited Away|El viaje de Chihiro", "3 7 3 5 3 4 5 3 9 3 3 8 9 6 0 3 4"],
  ["Kiki", "kiki", "Kiki la petite sorcière|Kiki's Delivery Service|Nicky, la aprendiz de bruja", "5 3 6 0 5 7 9 1 3 8 8 0 1 4 6 4 5"],
  ["Ponyo", "ponyo", "Ponyo sur la falaise|Ponyo|Ponyo en el acantilado", "8 5 3 0 6 7 8 1 8 8 9 1 1 4 7 3 3"],
  ["Porco Rosso", "porco rosso|marco pagot", "Porco Rosso", "6 6 7 0 2 9 6 4 6 8 2 2 3 6 5 7 5"],
  ["Princesse Mononoké", "mononoke|san|princesse mononoke|princess mononoke", "Princesse Mononoké|Princess Mononoke|La princesa Mononoke", "2 8 6 2 1 9 5 1 3 9 4 7 0 9 2 6 6"],
  ["Hauru", "howl|hauru", "Le Château ambulant|Howl's Moving Castle|El castillo ambulante", "6 7 8 1 2 6 7 6 4 7 6 4 6 7 6 7 5"],
  ["Calcifer", "calcifer", "Le Château ambulant|Howl's Moving Castle|El castillo ambulante", "8 7 6 2 3 5 6 4 8 5 7 3 0 7 8 6 5"],
  ["Nausicaä", "nausicaa", "Nausicaä de la vallée du vent|Nausicaä of the Valley of the Wind|Nausicaä del Valle del Viento", "3 6 8 0 1 9 9 1 3 8 6 0 4 4 5 6 5"],
  ["Eren Jäger", "eren|eren jaeger|eren yeager", AOT, "2 9 6 7 3 9 4 1 4 8 2 8 1 9 6 5 9"],
  ["Livaï", "levi|livai|levi ackerman", AOT, "4 9 8 0 0 9 5 1 2 9 3 7 2 7 2 8 7"],
  ["Mikasa", "mikasa|mikasa ackerman", AOT, "1 9 7 0 0 9 7 1 3 9 5 5 1 6 2 6 7"],
  ["Tanjiro", "tanjiro|tanjiro kamado", DS, "5 8 7 0 3 9 9 1 4 8 6 1 0 2 6 6 8"],
  ["Nezuko", "nezuko", DS, "5 8 3 0 3 8 8 4 1 8 9 5 0 4 0 3 8"],
  ["Zenitsu", "zenitsu", DS, "9 7 4 0 7 2 6 4 5 9 4 1 0 6 9 3 8"],
  ["Izuku Midoriya", "deku|izuku|izuku midoriya", MHA, "5 9 8 0 5 9 9 1 4 8 6 1 1 2 8 7 7"],
  ["All Might", "all might", MHA, "6 9 6 0 2 9 9 1 5 9 3 2 4 2 7 5 6"],
  ["Bakugo", "bakugo|katsuki bakugo|kacchan", MHA, "4 9 7 3 1 9 3 1 4 8 2 7 2 9 7 6 5"],
  ["Light Yagami", "light|light yagami|kira", DN, "1 3 9 9 0 6 0 1 2 4 3 7 4 6 5 9 6"],
  ["L", "l|ryuzaki|l lawliet", DN, "5 3 9 0 2 7 5 3 9 3 4 3 7 2 6 9 7"],
  ["Ryuk", "ryuk", DN, "8 7 5 4 2 5 2 7 9 6 2 8 0 2 6 5 1"],
  ["Gon", "gon|gon freecss", HXH, "6 8 4 0 4 9 9 1 5 8 7 1 0 5 6 5 5"],
  ["Kirua", "killua|kirua|killua zoldyck", HXH, "5 8 8 3 1 8 6 2 8 9 6 6 8 5 5 8 6"],
  ["Sailor Moon", "usagi|bunny|sailor moon|serena", SM, "8 6 2 0 8 7 9 6 9 5 8 0 2 4 9 3 6"],
  ["Gojo Satoru", "gojo|satoru gojo", "Jujutsu Kaisen", "8 9 9 0 2 9 6 4 8 9 5 4 6 3 8 8 3"],
  ["Edward Elric", "edward|edward elric|ed elric", "Fullmetal Alchemist", "7 7 9 0 4 9 7 1 5 7 4 1 2 9 7 7 8"],
  ["Anya Forger", "anya|anya forger", "Spy x Family", "9 2 5 0 6 6 8 4 7 4 9 0 2 4 7 7 5"],
  ["Yugi Muto", "yugi|yugi muto|yugi mouto", "Yu-Gi-Oh!", "4 3 8 0 3 8 9 1 3 4 6 1 1 3 6 8 5"],
  ["Agumon", "agumon", "Digimon", "6 7 3 0 4 8 8 2 9 6 7 2 0 3 6 2 4"],
  ["Hamtaro", "hamtaro", "Hamtaro", "6 1 4 0 4 6 9 2 8 6 9 0 0 1 7 3 3"],
  ["Goldorak", "goldorak|grendizer|actarus", "Goldorak|UFO Robot Grendizer|Grendizer", "2 9 6 0 1 9 8 1 1 8 1 5 1 5 3 5 6"],
  ["Albator", "albator|captain harlock|capitan harlock", "Albator|Space Pirate Captain Harlock|Capitán Harlock", "2 7 8 1 0 9 6 3 3 6 1 6 3 5 2 8 7"],
  ["Olivier Atton", "olivier atton|tsubasa|oliver atton|olive et tom", "Olive et Tom|Captain Tsubasa|Supercampeones", "5 7 6 0 2 9 9 1 4 9 5 0 2 3 6 6 3"],
  ["Nicky Larson", "nicky larson|city hunter|ryo saeba", "Nicky Larson|City Hunter|City Hunter", "9 8 7 1 4 9 6 6 5 8 2 3 2 4 8 8 5"],
  ["Heidi", "heidi", "Heidi", "6 4 5 0 3 7 9 1 5 6 8 0 0 2 8 4 3"],
  ["Candy", "candy|candy neige|candy candy", "Candy", "6 4 5 0 5 8 9 1 4 6 7 0 1 4 7 4 9"],
  ["Seiya", "seiya|pegase seiya", "Les Chevaliers du Zodiaque|Saint Seiya|Los Caballeros del Zodiaco", "5 8 4 0 4 9 8 2 4 8 4 1 0 6 6 4 6"],
  ["Kirby", "kirby", "Kirby", "7 6 3 0 4 8 8 4 9 6 9 0 0 1 2 2 2"],
];
