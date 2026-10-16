// DreamWorks Animation (+ Aardman pour Chicken Run / Wallace & Gromit, coproductions DreamWorks).
// Notes (0-9) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const SH = "Shrek";
const MAD = "Madagascar";
const KFP = "Kung Fu Panda";
const HTTYD = "Dragons|How to Train Your Dragon|Cómo entrenar a tu dragón";
const CR = "Les Croods|The Croods|Los Croods";
const TR = "Les Trolls|Trolls|Trolls";
const BAD = "Les Bad Guys|The Bad Guys|Los tipos malos";
const OH = "Nos voisins, les hommes|Over the Hedge|Vecinos invasores";
const PE = "Le Prince d'Égypte|The Prince of Egypt|El príncipe de Egipto";
const MM = "Megamind";
const CRUN = "Chicken Run";
const WG = "Wallace et Gromit|Wallace & Gromit|Wallace y Gromit";

module.exports = [
  ["Dragonne", "dragon|dragona|dragonne", SH, "3 9 3 3 3 7 5 3 7 7 4 8 3 8 0 2 4"],
  ["Ti-Biscuit", "gingy|ti biscuit|galleta|gingerbread man", SH, "8 2 4 1 3 8 6 2 2 5 7 0 0 7 7 4 7"],
  ["Prince Charmant", "prince charming|principe azul|prince charmant", SH, "6 5 2 6 5 4 1 4 3 5 2 2 8 7 8 4 8"],
  ["La Bonne Fée", "fairy godmother shrek|hada madrina shrek|la bonne fee", SH, "5 5 7 8 2 5 0 2 4 5 2 6 9 8 8 9 4"],
  ["Pinocchio (Shrek)", "pinocchio shrek", SH, "6 2 3 0 6 5 7 3 3 4 6 0 0 3 7 1 6"],
  ["Rumplestiltskin", "rumplestiltskin|rumpelstiltskin|tracassin", SH, "6 2 7 8 5 4 0 3 6 3 0 6 6 9 9 9 6"],
  ["Alex le lion", "alex|alex le lion|alex el leon", MAD, "8 8 4 0 5 6 7 4 7 6 6 3 3 6 8 3 5"],
  ["Marty", "marty|marty le zebre", MAD, "9 5 4 0 4 7 9 3 5 8 7 0 0 2 9 4 4"],
  ["Gloria", "gloria|gloria l hippopotame", MAD, "7 8 6 0 4 7 9 3 6 3 6 1 0 5 7 5 3"],
  ["Melman", "melman|melman la girafe", MAD, "8 3 5 0 8 2 8 3 3 4 5 0 0 4 7 2 9"],
  ["Roi Julian", "julian|king julien|king julian|rey julien|roi julien", MAD, "9 2 3 3 6 3 3 8 6 5 4 0 6 7 9 6 4"],
  ["Les Pingouins de Madagascar", "pingouins|penguins|pinguinos|skipper|kowalski|soldat|rico|private", MAD, "9 6 8 2 3 9 6 2 6 7 9 1 2 5 6 9 3"],
  ["Mort", "mort", MAD, "8 1 1 0 7 3 8 3 6 5 9 0 0 0 4 0 9"],
  ["Maurice", "maurice", MAD, "7 4 6 0 3 4 6 5 5 3 4 0 1 6 7 6 4"],
  ["Maître Shifu", "shifu|maitre shifu|master shifu|maestro shifu", KFP, "4 8 9 0 1 8 5 1 2 9 6 2 2 8 5 7 4"],
  ["Tigresse", "tigress|tigresa|tigresse", KFP, "2 9 7 0 1 9 6 1 2 9 3 5 1 7 3 6 3"],
  ["Singe", "monkey|mono|singe", KFP, "8 7 5 0 2 8 7 3 5 8 5 1 1 3 6 7 2"],
  ["Mante", "mantis|mantis|mante", KFP, "7 6 6 0 2 8 7 2 3 9 4 1 1 5 6 6 3"],
  ["Vipère", "viper|vibora|vipere", KFP, "4 6 7 0 1 8 8 1 2 8 6 3 1 3 6 6 2"],
  ["Grue", "crane|grulla|grue", KFP, "5 6 6 0 2 8 8 2 3 8 3 1 1 3 5 5 4"],
  ["Maître Oogway", "oogway|maitre oogway|master oogway", KFP, "6 9 9 0 1 9 9 5 4 3 6 0 1 0 5 8 1"],
  ["Lord Shen", "shen|lord shen", KFP, "2 5 8 9 1 5 0 1 2 8 1 7 9 9 6 8 6"],
  ["Kai", "kai|general kai", KFP, "4 9 5 9 2 8 0 1 4 7 0 9 2 9 8 5 4"],
  ["M. Ping", "mr ping|monsieur ping|senor ping", KFP, "8 2 5 0 4 4 9 1 6 3 7 0 3 4 9 6 3"],
  ["Harold", "hiccup|hipo|harold|harold haddock", HTTYD, "6 3 9 0 7 9 9 1 3 5 6 0 4 4 6 8 7"],
  ["Krokmou", "toothless|chimuelo|desdentao|krokmou", HTTYD, "6 9 8 0 2 9 8 3 6 9 9 6 0 5 0 6 3"],
  ["Astrid", "astrid", HTTYD, "4 7 7 0 1 9 7 1 3 8 6 2 3 7 5 6 3"],
  ["Stoïck", "stoick|estoico|stoick la brute", HTTYD, "4 9 5 0 3 9 6 1 6 4 2 5 6 8 6 4 4"],
  ["Grug", "grug", CR, "8 9 3 0 7 8 7 3 7 5 3 4 0 8 7 4 7"],
  ["Eep", "eep", CR, "6 8 5 0 4 9 7 2 5 8 6 1 0 7 7 5 4"],
  ["Poppy", "poppy|princesse poppy", TR, "8 3 5 0 5 8 9 1 4 6 9 0 4 0 9 4 3"],
  ["Branche", "branch|ramon|branche", TR, "5 5 7 0 3 7 6 2 3 5 6 1 1 9 2 6 7"],
  ["Baby Boss", "boss baby|bebe jefazo|baby boss", "Baby Boss|The Boss Baby|Un jefe en pañales", "8 2 8 3 3 7 3 2 5 4 8 0 6 8 9 8 4"],
  ["Spirit", "spirit", "Spirit, l'étalon des plaines|Spirit: Stallion of the Cimarron|Spirit: el corcel indomable", "3 8 6 0 1 9 7 1 4 9 6 1 0 8 0 7 6"],
  ["M. Loup", "mr wolf|monsieur loup|senor lobo|m loup", BAD, "8 5 8 4 2 8 6 3 5 7 4 3 5 3 8 9 4"],
  ["M. Serpent", "mr snake|monsieur serpent|senor serpiente|m serpent", BAD, "6 5 6 6 2 6 3 5 8 4 1 6 3 9 4 7 4"],
  ["RJ", "rj|rj le raton laveur", OH, "8 4 8 4 3 7 4 4 8 7 5 0 1 3 9 9 5"],
  ["Hammy", "hammy", OH, "9 2 3 0 7 6 8 1 8 9 9 0 0 1 9 1 4"],
  ["Verne", "verne", OH, "4 4 6 0 5 5 8 2 4 1 5 0 0 6 6 4 6"],
  ["Oscar", "oscar", "Gang de requins|Shark Tale|El espantatiburones", "7 3 5 2 5 5 6 5 4 6 5 0 3 4 9 7 7"],
  ["Barry B. Benson", "barry|barry b benson", "Bee Movie", "8 2 6 0 5 8 7 1 3 7 6 0 1 3 9 6 6"],
  ["Moïse", "moise|moses|moises", PE, "3 6 7 0 2 9 9 1 2 5 4 1 6 4 5 4 6"],
  ["Ramsès", "ramses|rameses", PE, "3 7 6 6 2 7 2 1 4 5 2 6 9 9 5 5 6"],
  ["Megamind", "megamind", MM, "9 4 9 5 6 7 5 2 4 4 3 4 4 7 9 8 8"],
  ["Metro Man", "metro man|metroman", MM, "5 9 6 0 2 9 7 4 4 9 3 0 6 2 7 6 1"],
  ["Z", "z la fourmi|z", "Fourmiz|Antz|Antz", "7 3 6 0 6 6 7 2 3 4 4 0 0 4 8 5 7"],
  ["M. Peabody", "mr peabody|monsieur peabody|senor peabody", "M. Peabody et Sherman|Mr. Peabody & Sherman|Las aventuras de Peabody y Sherman", "6 3 9 0 1 8 8 1 3 5 6 0 6 3 8 7 3"],
  ["Turbo", "turbo l escargot|turbo", "Turbo", "6 3 5 0 4 8 8 1 3 9 7 0 0 3 7 4 6"],
  ["Ginger", "ginger", CRUN, "4 4 8 0 2 9 8 1 3 5 6 0 0 6 6 8 7"],
  ["Rocky", "rocky|rocky le coq", CRUN, "8 5 5 1 4 6 6 3 5 7 4 0 0 3 9 7 6"],
  ["Wallace", "wallace", WG, "8 3 7 0 9 5 8 3 9 3 3 0 2 2 9 3 8"],
  ["Gromit", "gromit", WG, "6 5 9 0 1 9 9 1 4 6 8 0 0 3 0 8 5"],
  ["Shaun le mouton", "shaun|shaun the sheep|la oveja shaun", "Shaun le mouton|Shaun the Sheep|La oveja Shaun", "8 4 7 1 4 7 7 3 6 6 9 0 0 2 0 8 4"],
];
