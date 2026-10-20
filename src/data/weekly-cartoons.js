// Ajouts hebdomadaires : films et séries d'animation pas encore couverts.
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const RAN = "Rango";
const FOX = "Fantastic Mr. Fox";
const CB = "Les Noces funèbres|Corpse Bride|La novia cadáver";
const DOU = "Doug";
const REC = "La Cour de récré|Recess|La escuela";
const TD = "L'Île des défis extrêmes|Total Drama Island|Drama Total";
const CW = "Star Wars: The Clone Wars";
const SHE = "She-Ra et les princesses au pouvoir|She-Ra and the Princesses of Power|She-Ra y las princesas del poder";
const TC = "Cosmocats|ThunderCats|Thundercats";
const WX = "Winx Club";
const MLP = "My Little Pony : Les amies, c'est magique|My Little Pony: Friendship Is Magic|My Little Pony: La magia de la amistad";
const DIS = "Désenchantée|Disenchantment|(Des)encanto";
const CAR = "Les Bisounours|Care Bears|Los osos amorosos";
const FIE = "Fievel et le Nouveau Monde|An American Tail|Fievel y el nuevo mundo";
const LBT = "Le Petit Dinosaure|The Land Before Time|En busca del valle encantado";
const NIN = "Ninjago";
const WG = "Wallace & Gromit";
const SHA = "Shaun le mouton|Shaun the Sheep|La oveja Shaun";
const ARL = "Le Voyage d'Arlo|The Good Dinosaur|Un gran dinosaurio";
const OCT = "Les Octonauts|Octonauts|Los Octonautas";

module.exports = [
  // Rango
  ["Rango", "rango le cameleon", RAN, "8 3 6 1 7 6 6 2 3 4 4 0 1 3 9 6 6", "hero"],
  ["Rattlesnake Jake", "jake le serpent|serpiente jake|jake la serpiente", RAN, "2 8 5 8 1 7 0 2 4 6 0 9 2 8 5 6 2"],
  ["Beans", "frijoles", RAN, "4 3 6 0 3 7 7 1 2 4 5 0 3 6 6 3 6"],
  // Fantastic Mr. Fox
  ["M. Renard", "mr fox|monsieur renard|fantastic mr fox|senor zorro|sr zorro", FOX, "6 4 8 2 3 8 6 2 5 7 5 0 4 4 8 9 4", "leader"],
  ["Ash (Fantastic Mr. Fox)", "ash fox|ash renard", FOX, "6 2 4 1 7 6 5 2 3 4 5 0 2 7 6 3 8"],
  ["Franklin Bean", "bean le fermier|frank bean|boggis bunce et bean", FOX, "2 5 7 8 2 4 0 2 2 3 0 6 7 9 5 8 3"],
  // Les Noces funèbres
  ["Victor Van Dort", "victor|victor van dort", CB, "3 2 6 0 8 4 9 2 2 3 6 0 6 2 3 2 8"],
  ["Emily (Les Noces funèbres)", "emily|la mariee cadavre|corpse bride|novia cadaver", CB, "5 3 5 0 4 6 8 1 2 4 5 5 2 5 6 3 9"],
  // Doug
  ["Doug Funnie", "doug funnie", DOU, "6 2 6 0 7 4 8 2 3 3 6 0 2 2 6 3 7"],
  ["Patti Mayonnaise", "patti|patti mayonesa", DOU, "4 5 6 0 2 6 8 1 2 6 7 0 2 2 5 3 3"],
  ["Roger Klotz", "roger klotz", DOU, "6 4 3 5 5 4 2 5 4 3 1 1 3 6 7 6 6"],
  // La Cour de récré
  ["T.J. Detweiler", "tj detweiler|t j detweiler|tj", REC, "7 3 7 1 3 8 7 2 4 5 5 0 2 3 7 8 3", "leader"],
  ["Spinelli", "ashley spinelli", REC, "5 6 4 2 3 8 5 2 3 5 4 2 3 9 5 4 3"],
  ["Mlle Finster", "miss finster|muriel finster|la senorita finster", REC, "2 6 5 5 1 6 2 1 3 5 0 7 2 9 6 6 3"],
  // L'Île des défis extrêmes
  ["Chris McLean", "chris mclean", TD, "7 3 6 7 2 4 1 4 3 3 2 3 7 5 9 8 2"],
  ["Gwen (Total Drama)", "gwen total drama|gwen defis extremes", TD, "5 4 6 1 2 7 5 3 3 4 4 3 1 6 4 6 5"],
  ["Owen (Total Drama)", "owen total drama|owen defis extremes", TD, "8 6 2 0 7 5 9 4 10 3 6 0 1 1 8 1 5", "glutton"],
  ["Heather (Total Drama)", "heather total drama|heather defis extremes", TD, "3 3 7 7 2 5 1 2 2 4 2 3 3 8 7 9 6"],
  // Star Wars: The Clone Wars
  ["Ahsoka Tano", "ahsoka|snips", CW, "5 7 7 0 3 9 7 1 2 8 5 2 2 5 6 6 6", "hero"],
  ["Anakin Skywalker", "anakin|skyguy", CW, "4 9 7 3 3 10 6 1 2 9 3 5 1 8 4 6 8", "hero|doomed"],
  ["Obi-Wan Kenobi", "obi wan|ben kenobi", CW, "6 8 9 0 1 9 8 1 2 7 3 2 1 2 7 8 4", "teacher|leader"],
  ["Capitaine Rex", "captain rex|capitan rex|ct 7567", CW, "3 7 6 0 1 9 6 1 2 6 1 3 1 4 3 5 5", "leader|survivor"],
  // She-Ra
  ["She-Ra", "adora|she ra", SHE, "4 9 5 0 6 9 9 1 3 7 5 1 2 4 5 3 5", "hero|leader"],
  ["Bow (She-Ra)", "bow she ra|arrow", SHE, "7 5 7 0 5 7 9 1 4 5 6 0 2 2 8 4 3", "friend"],
  ["Catra", "catra", SHE, "5 6 7 7 2 7 2 3 2 8 6 4 2 9 6 8 6"],
  // Cosmocats
  ["Lion-O", "lion o|starlion", TC, "3 8 4 0 5 9 8 1 3 6 3 1 4 6 3 3 4", "hero|leader"],
  ["Mumm-Ra", "mumm ra|momm ra", TC, "2 9 7 10 2 5 0 3 2 4 0 10 5 9 6 8 7"],
  ["Panthro", "panthro", TC, "3 9 8 0 1 8 6 1 3 5 1 3 2 5 3 4 3"],
  ["Snarf", "snarf", TC, "6 1 4 0 7 4 8 2 5 3 6 0 1 3 9 2 5"],
  // Winx Club
  ["Bloom", "bloom winx", WX, "4 8 6 0 4 8 8 1 2 6 7 1 4 5 5 4 5", "hero"],
  ["Stella (Winx)", "stella winx|stella de solaria", WX, "6 6 4 0 4 6 7 4 3 6 8 0 9 5 9 3 3"],
  ["Icy", "icy les trix|icy trix|ice", WX, "3 7 7 8 2 6 0 3 2 5 3 7 4 8 6 8 5"],
  // My Little Pony
  ["Twilight Sparkle", "twilight", MLP, "4 7 9 0 4 7 8 1 2 5 8 0 5 4 7 4 3", "leader|teacher"],
  ["Rainbow Dash", "rainbow", MLP, "6 6 4 1 3 9 6 5 3 10 7 0 2 6 7 3 3", "speedster"],
  ["Pinkie Pie", "pinkie", MLP, "10 4 3 0 6 6 9 2 9 7 8 0 2 1 10 2 2", "dancer|friend|chef"],
  ["Fluttershy", "fluttershy", MLP, "3 2 5 0 4 2 10 2 2 3 10 0 2 1 1 1 4", "friend"],
  ["Rarity", "rarity", MLP, "5 3 7 1 2 5 8 2 3 4 9 0 6 6 8 6 3"],
  ["Applejack", "applejack", MLP, "5 8 6 0 2 8 9 1 4 6 7 0 3 5 6 2 2", "chef"],
  // Désenchantée
  ["Bean (Désenchantée)", "princesse bean|princess bean|tiabeanie|princesa bean", DIS, "7 5 5 2 8 7 5 6 6 4 5 1 8 7 7 5 8"],
  ["Elfo", "elfo", DIS, "7 2 3 0 9 5 8 3 6 4 7 0 1 6 8 1 9", "doomed"],
  ["Luci", "luci demon|luci el demonio", DIS, "8 3 7 6 3 4 2 5 4 4 5 4 1 6 9 9 3"],
  // Les Bisounours
  ["Grognon (Bisounours)", "grumpy bear|grumpy bisounours|grunosito|osito grunon", CAR, "6 3 6 0 4 5 7 4 3 3 8 0 2 8 5 3 6"],
  ["Bisou-Ours Tendresse", "tenderheart bear|tendresse|osito tierno corazon", CAR, "3 3 5 0 2 6 10 1 3 4 9 0 2 0 6 2 2", "leader|friend"],
  // Fievel
  ["Fievel", "fievel mousekewitz|fievel souriskewitz", FIE, "5 2 4 0 6 7 9 2 4 4 9 0 0 2 6 3 9", "survivor"],
  ["Tiger (Fievel)", "tiger fievel|tigre fievel|chat tiger", FIE, "8 5 2 0 6 1 8 6 8 3 6 1 1 2 7 1 5"],
  // Le Petit Dinosaure
  ["Petit-Pied", "littlefoot|piecito", LBT, "4 4 5 0 3 8 9 1 4 5 9 0 1 2 5 3 9", "leader|survivor"],
  ["Cera", "cera", LBT, "5 7 4 1 4 7 5 2 4 5 7 1 1 9 6 3 4"],
  ["Pétrie", "petrie|petrie le pterosaure", LBT, "6 2 3 0 8 3 8 2 4 6 8 0 0 2 5 2 6"],
  ["Becky", "ducky le petit dinosaure|ducky dinosaure|patito", LBT, "7 2 3 0 4 5 10 1 4 4 10 0 0 1 8 2 4", "friend"],
  // Ninjago
  ["Lloyd Garmadon", "lloyd|ninja vert|green ninja", NIN, "4 8 6 0 3 9 8 1 3 7 5 1 3 4 4 5 6", "hero"],
  ["Kai (Ninjago)", "kai ninjago|ninja rouge|red ninja", NIN, "5 7 4 0 5 8 6 2 3 7 4 1 1 9 6 3 4"],
  ["Sensei Wu", "maitre wu|master wu|wu ninjago", NIN, "4 6 9 0 1 7 8 2 4 5 3 1 2 3 4 8 3", "teacher"],
  // Wallace & Gromit
  ["Feathers McGraw", "feathers|plumas mcgraw", WG, "1 3 9 9 0 6 0 2 3 5 6 8 2 3 0 10 3"],
  // Shaun le mouton
  ["Bitzer", "bitzer le chien|blitzer", SHA, "6 4 5 0 6 5 7 4 4 6 6 0 1 4 1 4 7"],
  ["Le Fermier (Shaun le mouton)", "the farmer|le fermier|el granjero", SHA, "6 4 3 1 8 3 5 6 5 3 3 1 2 6 2 1 7"],
  // Le Voyage d'Arlo
  ["Arlo", "arlo dinosaure", ARL, "4 6 3 0 8 6 9 2 4 4 8 0 1 2 5 2 8", "survivor"],
  ["Spot (Le Voyage d'Arlo)", "spot arlo|spot le garcon", ARL, "6 4 4 0 2 8 8 1 6 7 9 1 0 2 0 6 3"],
  // Les Octonauts
  ["Capitaine Barnacles", "captain barnacles|barnacles|capitan barnacles", OCT, "3 7 7 0 2 8 9 1 3 5 7 0 2 2 4 5 2", "leader|hero"],
  ["Kwazii", "kwazii le chaton pirate", OCT, "7 5 3 0 6 8 7 2 5 8 7 0 1 4 8 3 4"],
  // Jeunesse
  ["Jett", "jett super wings|super wings jett", "Super Wings", "5 4 5 0 3 6 9 1 3 9 8 0 1 1 6 2 2", "speedster"],
  ["Bing", "bing le lapin|bing bunny", "Bing", "5 2 3 0 6 4 7 2 5 3 9 0 1 5 6 2 4"],
];
