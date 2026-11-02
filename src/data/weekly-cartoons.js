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
const MH = "Monster High";
const MMY = "Martin Mystère|Martin Mystery|Martin Misterio";
const ZZ = "Les Zinzins de l'espace|Space Goofs|Los marcianos";
const CBE = "Corneil et Bernie|Watch My Chops|Corneil y Bernie";
const RBY = "Robotboy";
const POC = "Pocoyo";
const YAK = "Yakari";
const TTN = "Tom-Tom et Nana|Tom-Tom and Nana|Tom-Tom y Nana";
const RBW = "Rocky et Bullwinkle|The Rocky and Bullwinkle Show|Rocky y Bullwinkle";
const TSP = "Super Baloo|TaleSpin|Aventureros del aire";
const FSP = "Final Space";
const TRH = "Chasseurs de Trolls|Trollhunters|Cazatrolls";
const RDB = "Ron débloque|Ron's Gone Wrong|Ron da error";
const BAH = "Le Garçon et le Héron|The Boy and the Heron|El chico y la garza";
const YNA = "Your Name";
const GRF = "Le Tombeau des lucioles|Grave of the Fireflies|La tumba de las luciérnagas";
const YKW = "Yo-kai Watch";
const RRB = "Qui veut la peau de Roger Rabbit|Who Framed Roger Rabbit|¿Quién engañó a Roger Rabbit?";
const ADF = "La Famille Addams|The Addams Family|Los locos Addams";
const KUB = "Kubo et l'armure magique|Kubo and the Two Strings|Kubo y las dos cuerdas mágicas";
const FRW = "Frankenweenie";
const MTR = "Bienvenue chez les Robinson|Meet the Robinsons|La familia del futuro";
const RLO = "Le Roi et l'Oiseau|The King and the Mockingbird|El rey y el pájaro";
const MIN = "Arthur et les Minimoys|Arthur and the Invisibles|Arthur y los Minimoys";
const SWR = "Star Wars Rebels";
const CSA = "Cartoon Saloon";
const TSW = "Tom Sawyer";
const CUP = "Le Cuphead Show !|The Cuphead Show!|¡El show de Cuphead!";
const CPE = "Cyberpunk: Edgerunners";
const SMF = "Smiling Friends";
const SIN = "Sinbad : La Légende des sept mers|Sinbad: Legend of the Seven Seas|Simbad: La leyenda de los siete mares";
const OWL = "Les Chroniques de la Maison du Hibou|The Owl House|The Owl House";

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
  // Monster High
  ["Frankie Stein", "frankie", MH, "6 6 6 0 8 6 9 1 3 4 8 2 3 2 7 2 6", "friend"],
  ["Draculaura", "draculaura", MH, "6 3 6 0 3 5 9 1 1 4 9 2 7 2 8 3 3", "friend"],
  ["Clawdeen Wolf", "clawdeen", MH, "5 7 6 1 2 7 7 2 4 8 7 3 4 6 7 4 3"],
  // Martin Mystère
  ["Martin Mystère", "martin mystery|martin misterio", MMY, "8 4 4 0 8 7 6 6 7 5 5 0 2 4 9 3 6", "hero"],
  ["Diana Lombard", "diana lombard|diana martin mystere", MMY, "3 4 8 0 2 7 7 1 2 5 6 0 3 6 6 5 4"],
  ["Java", "java l'homme des cavernes|java caveman", MMY, "7 9 2 0 7 6 8 3 7 4 5 2 0 2 3 1 5"],
  // Les Zinzins de l'espace
  ["Etno", "etno polino", ZZ, "7 3 9 1 6 6 4 3 4 4 3 1 1 7 8 6 9", "leader"],
  ["Candy (Les Zinzins)", "candy zinzins|candy caramella", ZZ, "7 2 4 0 5 4 8 3 6 3 6 0 1 3 8 3 7", "chef"],
  ["Gorgious", "gorgious klatoo|gorgeous", ZZ, "6 5 2 1 7 5 4 9 10 3 4 2 1 6 5 2 7", "glutton"],
  // Corneil et Bernie
  ["Corneil", "corneil le chien|chops", CBE, "6 4 9 0 2 6 6 4 4 5 6 0 2 5 8 9 5"],
  ["Bernie", "bernie fontaine|bernie corneil", CBE, "7 3 4 0 8 5 8 4 5 4 6 0 2 2 6 2 8"],
  // Robotboy
  ["Robotboy", "robot boy", RBY, "6 9 6 0 5 8 8 1 1 8 7 1 1 4 6 3 4", "hero"],
  ["Tommy Turnbull", "tommy robotboy", RBY, "5 2 7 0 4 7 8 2 4 4 6 0 1 3 6 5 6", "friend"],
  // Pocoyo
  ["Pocoyo", "pocoyo", POC, "7 2 3 0 8 5 7 3 5 4 10 0 0 4 3 2 4"],
  ["Elly (Pocoyo)", "elly pocoyo|elly l'elephante", POC, "5 6 5 0 5 4 8 2 5 3 9 0 1 2 4 2 3"],
  ["Pato (Pocoyo)", "pato pocoyo|pato le canard", POC, "5 3 4 0 6 4 5 4 4 5 8 0 1 8 2 2 7"],
  // Yakari
  ["Yakari", "yakari", YAK, "5 3 6 0 4 8 9 1 3 5 8 0 1 2 6 5 3", "hero"],
  ["Petit Tonnerre", "little thunder|pequeno trueno", YAK, "4 7 5 0 2 7 8 1 4 9 8 0 0 3 4 3 2", "speedster"],
  // Tom-Tom et Nana
  ["Tom-Tom", "tom tom dubouchon|tom-tom", TTN, "7 2 4 1 7 5 7 4 6 5 7 0 1 3 7 5 6"],
  ["Nana (Tom-Tom et Nana)", "nana dubouchon|nana tom tom", TTN, "7 3 6 2 5 6 6 3 6 5 6 0 1 6 7 7 5"],
  // Rocky et Bullwinkle
  ["Rocky l'écureuil volant", "rocky the flying squirrel|rocky ecureuil|rocky la ardilla", RBW, "6 3 6 0 2 8 8 1 3 7 7 0 1 2 6 5 3", "hero"],
  ["Bullwinkle", "bullwinkle j moose|bullwinkle l'elan", RBW, "9 6 1 0 9 5 8 4 6 3 5 0 1 1 7 1 6"],
  // Super Baloo
  ["Kit Cloudkicker", "kit nuage|kit super baloo", TSP, "5 3 6 0 3 8 8 1 4 7 7 0 0 3 5 6 4"],
  ["Don Karnage", "don karnage", TSP, "8 5 4 7 6 6 1 2 4 5 1 4 4 8 9 5 9"],
  // Final Space
  ["Gary Goodspeed", "gary final space", FSP, "9 5 3 1 8 8 7 5 8 5 4 0 1 4 9 3 9", "hero"],
  ["Mooncake", "mooncake|petit gateau", FSP, "5 10 3 0 1 5 9 2 3 7 10 3 0 1 1 2 3"],
  // Chasseurs de Trolls
  ["Jim Lake Jr.", "jim lake|jim chasseur de trolls", TRH, "4 7 6 0 4 9 9 1 3 6 5 1 1 3 5 5 6", "hero|chef"],
  ["Blinky (Chasseurs de Trolls)", "blinkous galadrigal|blinky troll", TRH, "6 5 9 0 3 6 8 1 4 3 3 3 1 3 10 4 4", "teacher"],
  ["AAARRRGGHH!!!", "aaarrrgghh|argh troll", TRH, "5 10 3 0 4 7 9 4 8 3 7 4 0 2 1 1 3", "friend"],
  // Ron débloque
  ["Ron (Ron débloque)", "ron b bot|ron debloque|ron bot", RDB, "8 6 2 0 9 5 8 1 0 6 8 0 1 2 9 1 6", "friend"],
  ["Barney Pudowski", "barney pudowski", RDB, "4 2 5 0 6 5 8 2 3 3 6 0 1 3 3 3 8"],
  // Le Garçon et le Héron
  ["Mahito Maki", "mahito", BAH, "1 4 7 1 2 8 6 1 2 5 5 0 6 5 2 5 7"],
  ["Le Héron cendré", "heron cendre|grey heron|the heron|la garza", BAH, "6 5 7 6 4 4 3 3 4 7 1 7 1 6 9 9 3"],
  // Your Name
  ["Taki Tachibana", "taki", YNA, "5 4 6 0 5 8 7 2 4 5 5 0 3 5 5 4 7"],
  ["Mitsuha Miyamizu", "mitsuha", YNA, "5 3 6 0 5 8 8 2 4 4 6 0 2 4 6 4 9", "doomed"],
  // Le Tombeau des lucioles
  ["Seita", "seita yokokawa", GRF, "2 4 5 1 3 6 8 1 4 5 4 0 1 5 3 4 10", "doomed"],
  ["Setsuko", "setsuko yokokawa", GRF, "4 1 2 0 3 5 9 2 6 2 10 0 0 3 6 1 10", "doomed"],
  // Yo-kai Watch
  ["Jibanyan", "jibanyan", YKW, "7 4 2 0 7 5 6 7 7 6 9 0 0 5 6 2 10", "glutton"],
  ["Whisper (Yo-kai Watch)", "whisper yokai|whisper yo kai", YKW, "7 2 5 1 7 2 6 4 5 4 5 1 0 4 10 5 5"],
  // Digimon
  ["Tai Kamiya", "tai|taichi|taichi yagami|tai kamiya", "Digimon", "5 5 5 0 4 9 7 2 4 6 4 0 1 6 6 4 4", "leader|hero"],
  ["Gabumon", "gabumon", "Digimon", "3 6 5 0 2 7 8 2 3 6 7 0 0 2 3 3 3"],
  // Qui veut la peau de Roger Rabbit
  ["Roger Rabbit", "roger le lapin|roger rabbit", RRB, "10 3 2 0 10 5 8 2 4 7 7 0 2 3 10 2 9"],
  ["Jessica Rabbit", "jessica", RRB, "5 4 7 0 1 7 7 1 2 5 6 0 4 3 5 7 3"],
  ["Juge Demort", "judge doom|juez doom|demort", RRB, "3 7 8 10 1 5 0 1 2 5 0 10 6 9 6 8 4"],
  // La Famille Addams
  ["Mercredi Addams", "mercredi|wednesday|wednesday addams|merlina|merlina addams", ADF, "6 4 8 6 1 9 2 2 2 5 4 8 7 6 2 8 3"],
  ["Gomez Addams", "gomez", ADF, "8 5 5 2 6 7 7 2 4 6 2 4 9 2 8 4 2"],
  // Autres séries et films
  ["Grizzy", "grizzy l'ours", "Grizzy et les Lemmings|Grizzy & the Lemmings|Grizzy y los Lemmings", "7 9 3 2 7 6 3 6 9 6 6 3 1 8 0 4 8", "glutton"],
  ["Ariol", "ariol l'ane", "Ariol", "6 2 5 0 6 4 8 5 6 3 8 0 2 3 6 3 5"],
  ["Clarence", "clarence wendle", "Clarence", "8 3 3 0 8 5 10 4 7 4 7 0 1 1 9 2 4", "friend"],
  ["Le Petit Spirou", "petit spirou|little spirou", "Le Petit Spirou|Little Spirou|El pequeño Spirou", "8 3 5 2 5 6 6 6 5 5 6 0 2 4 8 7 6"],
  ["Princesse Sofia", "sofia|sofia the first|princesa sofia", "Princesse Sofia|Sofia the First|La princesa Sofía", "3 2 6 0 4 7 10 1 2 4 9 0 9 1 6 3 4", "friend"],
  ["Carmen Sandiego", "carmen sandiego|black sheep|la oveja negra", "Carmen Sandiego", "4 6 9 2 1 8 6 1 2 8 5 2 6 3 4 10 3"],
  ["Le Chat (Flow)", "chat noir flow|flow cat|le chat de flow|gato flow", "Flow", "1 4 6 0 3 7 6 2 3 7 9 0 0 3 0 5 7", "survivor"],
  ["Elio", "elio solis", "Elio", "6 2 6 0 7 6 7 2 3 4 7 0 1 4 6 5 7"],
  ["Suzume Iwato", "suzume", "Suzume", "4 4 6 0 4 9 8 1 3 6 6 0 2 4 5 4 6", "hero"],
  ["Charlotte aux fraises", "strawberry shortcake|rosita fresita|fraisinette", "Charlotte aux fraises|Strawberry Shortcake|Rosita Fresita", "4 2 5 0 3 5 10 1 6 4 9 0 2 1 6 2 2", "chef|friend"],
  ["Capitaine Planète", "captain planet|capitaine planete|capitan planeta", "Capitaine Planète|Captain Planet and the Planeteers|Capitán Planeta", "5 10 5 0 1 10 8 0 2 9 3 1 1 4 6 2 1", "hero"],
  ["Mark Evans", "mamoru endo|endou mamoru|mark evans", "Inazuma Eleven", "5 6 4 0 4 9 9 1 4 6 5 0 1 3 7 3 3", "leader"],
  ["Lady Oscar", "oscar de jarjayes|oscar francois de jarjayes", "Lady Oscar|The Rose of Versailles|Lady Oscar", "2 7 7 0 1 10 8 0 2 7 4 2 8 6 4 5 9", "hero|doomed"],
  ["Princesse Sarah", "sara crewe|sarah crewe|princesse sara|princesita sara", "Princesse Sarah|Princess Sarah|La princesita Sara", "2 2 7 0 2 7 10 1 2 3 8 0 6 1 6 2 10", "survivor"],
  ["Rémi sans famille", "remi|remi sans famille|nobody's boy remi", "Rémi sans famille|Nobody's Boy: Remi|Remi, el niño de nadie", "3 3 5 0 3 8 9 1 3 5 7 0 0 1 4 3 10", "survivor"],
  // Kubo et l'armure magique
  ["Kubo", "kubo", KUB, "5 3 7 0 3 9 8 1 3 5 7 1 1 3 7 6 9", "hero|survivor"],
  ["Singe (Kubo)", "monkey kubo|singe kubo|mono kubo", KUB, "3 7 8 0 1 9 8 1 3 6 3 3 1 6 4 7 8", "doomed"],
  // Frankenweenie
  ["Victor Frankenstein (Frankenweenie)", "victor frankenstein|victor frankenweenie", FRW, "3 2 9 0 4 6 8 1 2 3 5 1 2 2 3 4 7"],
  ["Sparky", "sparky frankenweenie", FRW, "5 4 2 0 6 7 10 2 4 7 9 4 0 1 0 1 8", "friend"],
  // Bienvenue chez les Robinson
  ["Lewis Robinson", "lewis|cornelius robinson", MTR, "4 2 10 0 6 7 8 1 2 4 6 0 3 3 6 5 8"],
  ["L'homme au chapeau melon", "bowler hat guy|goob|chapeau melon|el hombre del bombin", MTR, "8 3 3 6 9 4 3 4 4 4 2 3 1 7 9 5 9"],
  // Le Roi et l'Oiseau
  ["Le Roi (Le Roi et l'Oiseau)", "charles v et trois font huit et huit font seize|le roi charles|king charles", RLO, "2 3 5 9 3 2 0 4 3 2 0 6 10 9 3 6 3"],
  ["L'Oiseau (Le Roi et l'Oiseau)", "l'oiseau moqueur|the mockingbird|el pajaro", RLO, "8 4 8 1 2 9 7 2 3 7 4 0 1 6 10 9 3", "hero"],
  // Arthur et les Minimoys
  ["Arthur (Minimoys)", "arthur minimoys|arthur montgolfier", MIN, "4 4 7 0 4 9 8 1 3 6 6 0 2 3 5 6 5", "hero"],
  ["Sélénia", "selenia", MIN, "4 7 6 0 2 9 6 1 3 7 7 0 6 8 5 5 3"],
  ["Maltazard", "maltazard le maudit|malthazar", MIN, "3 8 7 10 2 5 0 2 3 4 0 9 6 9 5 8 5"],
  // Star Wars Rebels / The Clone Wars
  ["Ezra Bridger", "ezra", SWR, "6 6 6 1 4 8 7 2 4 7 6 1 0 4 6 8 5", "hero|survivor"],
  ["Hera Syndulla", "hera", SWR, "4 6 8 0 2 9 8 1 3 6 5 1 2 5 5 6 3", "leader"],
  ["Chopper (Star Wars Rebels)", "c1 10p|chopper rebels|chopper droide", SWR, "7 4 5 3 5 6 3 2 0 4 3 2 0 9 3 6 5"],
  ["Asajj Ventress", "ventress|asajj", "Star Wars: The Clone Wars", "4 8 7 7 1 8 3 1 2 8 2 7 2 7 4 8 7", "doomed"],
  ["Padmé Amidala", "padme|padme amidala|reine amidala|queen amidala", "Star Wars: The Clone Wars", "3 5 8 0 2 8 9 1 2 5 6 0 7 3 6 6 8", "leader|doomed"],
  ["Omega (The Bad Batch)", "omega bad batch|omega clone", "Star Wars: The Bad Batch", "5 3 7 0 4 8 9 1 3 5 9 0 0 2 6 6 6", "survivor"],
  // Cartoon Saloon
  ["Robyn Goodfellowe", "robyn wolfwalkers", "Le Peuple Loup|Wolfwalkers|Wolfwalkers", "5 5 6 0 5 9 8 1 3 6 7 1 1 6 5 5 6", "hero"],
  ["Mebh", "mebh og mactire|mebh wolfwalkers", "Le Peuple Loup|Wolfwalkers|Wolfwalkers", "7 6 4 0 3 8 7 2 6 8 8 3 0 6 7 4 5"],
  ["Saoirse", "saoirse selkie", "Le Chant de la mer|Song of the Sea|La canción del mar", "4 3 5 0 3 6 8 1 3 4 10 0 0 1 0 3 7"],
  ["Ben (Le Chant de la mer)", "ben chant de la mer|ben song of the sea", "Le Chant de la mer|Song of the Sea|La canción del mar", "4 3 5 1 6 7 6 2 3 4 6 0 0 6 5 3 7"],
  ["Brendan", "brendan kells", "Brendan et le Secret de Kells|The Secret of Kells|El secreto del libro de Kells", "3 2 7 0 4 8 8 1 3 4 7 0 0 2 4 4 6"],
  // Tom Sawyer
  ["Tom Sawyer", "tom sawyer", TSW, "8 4 6 1 4 8 6 6 5 6 5 0 2 4 8 9 5"],
  ["Huckleberry Finn", "huck finn|huckleberry finn", TSW, "7 5 5 0 3 8 7 7 4 6 4 0 0 2 5 7 5", "survivor"],
  // Le Cuphead Show
  ["Cuphead", "cuphead", CUP, "7 4 2 1 8 8 6 3 4 7 6 0 0 5 7 4 8"],
  ["Mugman", "mugman", CUP, "5 3 5 0 6 4 8 2 4 5 7 0 0 2 5 3 6"],
  ["Le Diable (Cuphead)", "the devil cuphead|diablo cuphead|devil cuphead", CUP, "7 9 6 8 4 5 0 3 4 6 1 7 8 8 9 8 4"],
  // Cyberpunk: Edgerunners
  ["David Martinez", "david edgerunners", CPE, "4 9 5 3 3 10 7 1 3 9 3 6 1 6 4 4 10", "doomed"],
  ["Lucy (Edgerunners)", "lucy edgerunners|lucyna kushinada", CPE, "2 5 8 2 1 7 6 2 2 7 5 3 2 5 2 8 9"],
  // Smiling Friends
  ["Charlie (Smiling Friends)", "charlie smiling friends", SMF, "8 3 4 1 4 4 4 6 4 3 1 0 1 7 6 3 7"],
  ["Pim", "pim pimling", SMF, "7 2 3 0 6 5 10 2 4 3 7 0 1 1 7 1 8", "friend"],
  // Sinbad
  ["Sinbad", "sinbad le marin|simbad", SIN, "7 7 7 2 2 9 5 4 4 7 3 0 4 4 8 9 4", "hero"],
  ["Éris (Sinbad)", "eris sinbad|eris deesse du chaos|eris goddess of discord", SIN, "7 9 8 9 1 5 0 4 3 9 2 7 7 6 8 10 2"],
  // Les Chroniques de la Maison du Hibou
  ["Amity Blight", "amity", OWL, "4 6 9 2 3 7 7 1 3 5 7 2 8 6 4 5 4"],
  ["Hooty", "hooty", OWL, "9 3 1 0 8 4 8 2 7 3 5 4 0 1 10 1 6", "friend"],
  // Invincible
  ["Debbie Grayson", "debbie", "Invincible", "4 4 7 0 2 8 9 1 3 3 4 0 4 6 5 4 9"],
  // Films et séries divers
  ["Norman Babcock", "norman babcock|paranorman", "L'Étrange Pouvoir de Norman|ParaNorman|El alucinante mundo de Norman", "4 3 6 0 4 8 8 1 3 4 5 1 1 3 3 3 8", "hero"],
  ["Madame Souza", "souza|madame souza", "Les Triplettes de Belleville|The Triplets of Belleville|Las trillizas de Belleville", "4 6 7 0 2 10 9 0 2 4 2 0 1 4 0 7 3"],
  ["Marjane", "marjane satrapi|marji", "Persepolis", "6 3 8 0 4 8 6 2 4 4 5 0 3 6 7 4 8", "survivor"],
  ["Courgette", "icare courgette|zucchini", "Ma vie de Courgette|My Life as a Zucchini|La vida de Calabacín", "3 2 5 0 4 6 8 1 3 3 8 0 0 3 3 3 10", "survivor"],
  ["Bouffe-Tout", "slimer|moquette|pegajoso", "SOS Fantômes|The Real Ghostbusters|Los verdaderos cazafantasmas", "8 3 1 0 9 3 7 5 10 6 6 3 0 1 2 1 4", "glutton"],
  ["Freakazoid", "freakazoid|dexter douglas", "Freakazoid!", "10 7 6 0 7 7 6 2 4 9 2 1 1 3 10 3 3", "hero"],
  ["Earthworm Jim", "jim le ver de terre|earthworm jim", "Earthworm Jim", "9 6 2 0 8 8 6 2 4 6 3 0 0 4 8 2 7", "hero"],
  ["Jem", "jerrica benton|jem et les hologrammes", "Jem et les Hologrammes|Jem and the Holograms|Jem y los Hologramas", "4 4 6 0 2 7 8 1 2 5 7 0 7 3 6 5 3", "dancer"],
  ["Le Renard (Le Grand Méchant Renard)", "grand mechant renard|big bad fox", "Le Grand Méchant Renard|The Big Bad Fox|El gran zorro malvado", "7 2 3 3 9 3 7 3 6 4 6 1 0 5 6 3 9"],
  ["Pat et Mat", "pat a mat|pat and mat|pat y mat", "Pat et Mat|Pat & Mat|Pat y Mat", "9 4 2 0 10 6 8 1 3 4 6 0 1 1 0 3 9"],
  ["La Petite Taupe", "krtek|the little mole|el pequeno topo|taupe", "La Petite Taupe|The Little Mole|El pequeño topo", "6 2 5 0 4 5 9 1 3 4 10 0 0 1 1 3 4", "friend"],
  ["Comte Duckula", "count duckula|duckula|conde patula", "Comte Duckula|Count Duckula|Conde Pátula", "8 2 3 1 7 3 6 6 7 3 4 3 7 4 7 2 6"],
  ["Doremi Harukaze", "doremi|magical doremi", "Magical DoReMi|Magical DoReMi|Magical DoReMi", "8 2 3 0 9 6 8 4 7 4 7 0 1 5 8 2 10", "glutton"],
  ["Creamy", "yu morisawa|creamy mami", "Creamy, merveilleuse Creamy|Creamy Mami, the Magic Angel|El broche encantado", "4 2 5 0 4 5 8 2 3 4 8 0 3 3 6 4 4", "dancer"],
  ["Phileas Fogg (Willy Fog)", "willy fog|phileas fogg", "Le Tour du monde en 80 jours|Around the World with Willy Fog|La vuelta al mundo de Willy Fog", "3 5 8 0 1 8 7 1 3 6 4 0 8 2 3 6 4", "leader"],
  ["Kimba", "kimba le lion blanc|leo le roi leo|kimba the white lion", "Le Roi Léo|Kimba the White Lion|Kimba, el león blanco", "4 7 6 0 3 8 9 1 3 7 8 1 2 3 5 4 6", "leader|hero"],
  ["Sébastien (Belle et Sébastien)", "sebastien belle|sebastien montagne", "Belle et Sébastien|Belle and Sebastian|Nobi", "5 3 5 0 4 8 9 1 3 5 8 0 0 3 5 4 7", "survivor"],
  ["Mizu", "mizu blue eye samurai", "Blue Eye Samurai", "2 8 8 4 1 10 3 1 2 9 2 7 1 9 2 8 7"],
  ["Spear", "spear primal", "Primal", "1 9 4 3 1 10 6 1 5 8 1 7 0 7 0 5 9", "survivor"],
  ["Craig Williams", "craig of the creek|craig du ruisseau", "Craig of the Creek", "6 3 7 0 3 7 8 2 4 5 6 0 1 2 6 6 3", "leader"],
  ["Doc McStuffins", "dottie mcstuffins|docteur la peluche", "Docteur La Peluche|Doc McStuffins|Doctora Juguetes", "4 2 7 0 2 6 10 1 2 4 9 0 1 1 6 3 2", "friend"],
  ["Blaze (Monster Machines)", "blaze monster machines|blaze camion", "Blaze et les Monster Machines|Blaze and the Monster Machines|Blaze y los Monster Machines", "5 7 6 0 2 8 8 1 2 10 7 0 1 2 6 4 2", "speedster|hero"],
  ["Everest (Abominable)", "everest yeti|abominable yeti", "Abominable", "6 9 3 0 6 5 9 2 7 7 9 3 0 2 0 2 5", "friend"],
];
