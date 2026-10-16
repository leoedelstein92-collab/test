// Walt Disney Animation Studios + séries Disney.
// Notes (0-9) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const SW = "Blanche-Neige|Snow White|Blancanieves";
const PIN = "Pinocchio|Pinocchio|Pinocho";
const CIN = "Cendrillon|Cinderella|La Cenicienta";
const AL = "Alice au pays des merveilles|Alice in Wonderland|Alicia en el país de las maravillas";
const PP = "Peter Pan";
const LT = "La Belle et le Clochard|Lady and the Tramp|La dama y el vagabundo";
const D101 = "Les 101 Dalmatiens|101 Dalmatians|101 dálmatas";
const SS = "Merlin l'enchanteur|The Sword in the Stone|Merlín el encantador";
const JB = "Le Livre de la jungle|The Jungle Book|El libro de la selva";
const ARI = "Les Aristochats|The Aristocats|Los aristogatos";
const RH = "Robin des Bois|Robin Hood|Robin Hood";
const RES = "Les Aventures de Bernard et Bianca|The Rescuers|Los rescatadores";
const FH = "Rox et Rouky|The Fox and the Hound|Tod y Toby";
const LM = "La Petite Sirène|The Little Mermaid|La Sirenita";
const BB = "La Belle et la Bête|Beauty and the Beast|La bella y la bestia";
const LK = "Le Roi lion|The Lion King|El rey león";
const HUN = "Le Bossu de Notre-Dame|The Hunchback of Notre Dame|El jorobado de Notre Dame";
const HER = "Hercule|Hercules|Hércules";
const KUZ = "Kuzco, l'empereur mégalo|The Emperor's New Groove|Las locuras del emperador";
const BEAR = "Frère des ours|Brother Bear|Hermano oso";
const BOLT = "Volt, star malgré lui|Bolt|Bolt";
const PF = "La Princesse et la Grenouille|The Princess and the Frog|Tiana y el sapo";
const TG = "Raiponce|Tangled|Enredados";
const WIR = "Les Mondes de Ralph|Wreck-It Ralph|¡Rompe Ralph!";
const FRZ = "La Reine des neiges|Frozen|Frozen";
const ZOO = "Zootopie|Zootopia|Zootopia";
const MOA = "Vaiana|Moana|Vaiana";
const RAYA = "Raya et le Dernier Dragon|Raya and the Last Dragon|Raya y el último dragón";
const BH6 = "Les Nouveaux Héros|Big Hero 6|Grandes héroes";
const ATL = "Atlantide, l'empire perdu|Atlantis: The Lost Empire|Atlantis: el imperio perdido";
const TP = "La Planète au trésor|Treasure Planet|El planeta del tesoro";
const MK = "Mickey";
const DT = "La Bande à Picsou|DuckTales|Patoaventuras";
const GF = "Souvenirs de Gravity Falls|Gravity Falls|Gravity Falls";
const PH = "Phinéas et Ferb|Phineas and Ferb|Phineas y Ferb";
const KP = "Kim Possible";
const OWL = "Les Chroniques de la Maison du Hibou|The Owl House|The Owl House";
const STAR = "Star Butterfly|Star vs. the Forces of Evil|Star vs. las fuerzas del mal";
const WP = "Winnie l'ourson|Winnie the Pooh|Winnie Pooh";

module.exports = [
  ["Prof", "doc|sabio", SW, "5 4 7 0 4 5 8 2 4 3 7 0 3 3 7 3 3"],
  ["Joyeux", "happy|feliz", SW, "8 4 3 0 4 5 9 3 6 3 8 0 3 0 7 1 2"],
  ["Dormeur", "sleepy|dormilon", SW, "5 3 3 0 5 3 8 9 4 1 8 0 3 1 1 0 3"],
  ["Atchoum", "sneezy|mocoso", SW, "6 3 3 0 7 4 8 2 4 3 8 0 3 2 3 0 7"],
  ["Timide", "bashful|timido", SW, "4 3 4 0 5 2 9 2 4 3 9 0 3 0 1 1 3"],
  ["Jiminy Cricket", "jiminy|pepito grillo", PIN, "7 1 7 0 4 6 8 2 3 5 7 0 1 4 8 5 4"],
  ["Geppetto", "gepetto|geppetto", PIN, "4 2 6 0 5 5 9 1 3 1 6 0 1 1 6 2 7"],
  ["Grand Coquin", "honest john|honrado juan|gideon", PIN, "6 3 5 7 4 2 1 5 4 3 2 4 3 4 9 9 5"],
  ["Stromboli", "stromboli", PIN, "3 7 4 8 3 4 0 3 6 2 0 7 6 9 7 6 3"],
  ["Monstro", "monstro|la baleine monstro", PIN, "1 9 1 7 4 6 0 6 9 6 0 9 0 9 0 1 3"],
  ["Timothée", "timothy|timoteo", "Dumbo", "6 2 6 0 3 8 9 1 3 6 7 0 1 5 8 7 3"],
  ["Panpan", "pan pan|thumper|tambor", "Bambi", "8 3 4 0 4 5 8 3 6 8 9 0 0 2 8 4 2"],
  ["Fleur", "flower|flor", "Bambi", "5 2 3 0 4 2 9 2 3 3 9 0 0 0 3 1 2"],
  ["Gus", "gus gus|jaq", CIN, "8 2 2 0 8 6 9 2 8 5 9 0 0 1 5 2 5"],
  ["Lady Trémaine", "madame tremaine|maratre|lady tremaine|madrastra", CIN, "1 3 7 9 1 4 0 4 3 2 0 7 6 8 6 8 3"],
  ["Anastasie et Javotte", "anastasie|javotte|drizella|demasiada", CIN, "6 3 2 6 7 3 1 7 6 3 1 3 5 9 8 3 6"],
  ["Lucifer", "lucifer", CIN, "4 3 5 7 4 4 0 8 7 5 3 4 1 7 1 7 6"],
  ["La Fée marraine", "fee marraine|bonne fee|hada madrina|fairy godmother", CIN, "7 4 7 0 6 5 9 2 3 3 7 0 3 0 7 4 2"],
  ["Alice", "alice|alicia", AL, "5 2 6 0 5 7 7 2 3 4 7 0 3 4 8 4 7"],
  ["Le Chapelier fou", "chapelier fou|chapelier|mad hatter|sombrerero loco", AL, "9 2 3 1 7 4 6 3 6 5 3 2 3 7 9 3 4"],
  ["Le Chat du Cheshire", "chat du cheshire|cheshire|cheshire cat|gato de cheshire|gato rison", AL, "8 2 8 3 1 4 3 6 3 6 5 5 1 2 7 9 1"],
  ["La Reine de cœur", "reine de coeur|queen of hearts|reina de corazones", AL, "6 4 2 8 4 5 0 4 5 2 0 7 9 9 8 3 3"],
  ["Le Lapin blanc", "lapin blanc|white rabbit|conejo blanco", AL, "6 1 4 0 7 2 6 1 3 7 7 0 3 5 6 2 6"],
  ["Fée Clochette", "clochette|tinker bell|tinkerbell|campanita", PP, "5 2 6 2 2 7 6 2 3 9 9 0 1 9 2 6 3"],
  ["Wendy", "wendy darling", PP, "4 2 7 0 2 6 9 1 2 3 7 0 4 2 7 4 3"],
  ["M. Mouche", "mouche|smee|senor smee", PP, "8 2 2 1 8 2 6 4 6 3 6 0 1 2 6 1 7"],
  ["Tic-Tac le crocodile", "tic tac|crocodile|tick tock|cocodrilo", PP, "6 7 1 4 3 5 1 3 9 5 3 8 0 4 0 3 3"],
  ["Lady", "lady|reina", LT, "3 2 5 0 3 5 9 2 4 4 9 0 7 1 4 2 5"],
  ["Clochard", "tramp|golfo", LT, "7 5 7 1 2 7 6 4 7 6 6 0 0 3 7 8 3"],
  ["Aurore", "aurora|princesse aurore|belle au bois dormant|sleeping beauty", "La Belle au bois dormant|Sleeping Beauty|La bella durmiente", "3 2 5 0 3 4 9 7 2 3 8 0 8 1 5 2 7"],
  ["Pongo", "pongo", D101, "6 6 7 0 3 8 9 2 4 7 7 0 1 2 5 7 4"],
  ["Perdita", "perdita", D101, "4 4 6 0 2 7 9 2 3 6 8 0 1 3 5 5 4"],
  ["Horace et Jasper", "horace|jasper", D101, "7 6 1 6 9 3 1 6 7 3 0 4 1 6 6 2 9"],
  ["Merlin", "merlin l enchanteur", SS, "8 2 9 0 6 5 8 2 3 4 4 0 1 7 9 6 4"],
  ["Moustique", "wart|arthur|arturo", SS, "5 3 5 0 7 6 8 1 3 4 7 0 0 2 5 4 7"],
  ["Madame Mim", "mim|madam mim|maga mim", SS, "8 5 5 7 5 6 0 3 4 5 1 6 1 9 9 7 5"],
  ["Archimède", "archimede|archimedes", SS, "7 1 8 0 4 4 5 3 3 6 4 0 0 9 8 5 4"],
  ["Bagheera", "bagheera", JB, "3 7 8 0 1 7 8 1 3 8 5 3 1 6 6 6 3"],
  ["Roi Louie", "king louie|rey louie", JB, "9 7 4 4 5 5 3 6 8 5 3 3 4 5 9 6 4"],
  ["Duchesse", "duchess|duquesa", ARI, "4 2 7 0 1 6 9 2 3 4 9 0 9 1 5 4 5"],
  ["Thomas O'Malley", "o malley|thomas o malley|tomas o malley", ARI, "8 6 6 1 2 8 8 4 5 7 6 0 0 2 8 8 3"],
  ["Berlioz", "berlioz", ARI, "6 2 5 0 5 5 7 2 4 5 9 0 8 4 6 3 4"],
  ["Toulouse", "toulouse", ARI, "7 3 5 0 4 6 7 2 4 5 9 0 8 5 6 4 4"],
  ["Marie", "marie", ARI, "6 1 5 0 4 5 7 2 3 4 9 0 8 6 8 3 5"],
  ["Edgar", "edgar", ARI, "5 3 5 8 8 3 1 3 3 3 1 4 3 6 5 6 9"],
  ["Robin des Bois", "robin hood", RH, "7 6 8 0 2 9 9 1 4 8 7 0 0 2 7 9 3"],
  ["Petit Jean", "little john|pequeno juan", RH, "9 8 3 0 5 7 9 6 8 3 6 0 0 2 7 4 3"],
  ["Prince Jean", "prince john|principe juan", RH, "6 1 3 7 7 1 0 5 6 1 2 2 9 9 7 4 8"],
  ["Shérif de Nottingham", "sherif de nottingham|sheriff of nottingham", RH, "4 7 3 8 4 4 0 4 8 3 0 6 6 7 5 5 5"],
  ["Triste Sire", "sir hiss|siseo", RH, "6 1 5 5 7 2 2 3 3 4 2 3 3 6 8 5 9"],
  ["Bernard et Bianca", "bernard|bianca", RES, "6 2 7 0 6 8 9 1 3 4 8 0 1 2 6 5 4"],
  ["Médusa", "madame medusa|medusa", RES, "5 3 5 8 6 4 0 3 4 3 0 7 6 9 8 6 6"],
  ["Rox", "tod", FH, "6 4 5 0 4 6 9 2 4 7 9 0 0 2 6 5 6"],
  ["Rouky", "copper|toby", FH, "5 6 4 0 4 6 8 3 5 6 9 0 0 3 5 3 5"],
  ["Sébastien", "sebastian", LM, "9 2 6 0 5 5 8 2 3 5 6 0 2 7 9 4 6"],
  ["Polochon", "flounder", LM, "6 1 3 0 5 2 9 2 3 6 9 0 1 1 6 1 5"],
  ["Eurêka", "scuttle", LM, "9 2 1 0 7 4 8 3 4 5 5 0 1 1 9 1 4"],
  ["Le Roi Triton", "triton|king triton|rey triton", LM, "2 9 7 0 1 8 6 1 3 6 2 5 9 8 5 4 3"],
  ["Belle", "bella", BB, "5 3 9 0 2 8 9 1 2 3 8 0 2 3 6 6 4"],
  ["Big Ben", "cogsworth|din don", BB, "7 2 6 0 5 4 7 1 3 3 5 0 3 8 8 3 6"],
  ["Mme Samovar", "madame samovar|samovar|mrs potts|senora potts", BB, "5 2 6 0 2 5 9 1 3 2 8 0 3 0 7 3 4"],
  ["Zip", "chip potts", BB, "7 1 3 0 5 5 8 2 4 4 9 0 3 1 7 2 4"],
  ["LeFou", "le fou", BB, "8 3 1 3 9 3 4 3 6 3 4 0 1 2 8 2 8"],
  ["Jasmine", "jazmin|princesse jasmine", "Aladdin", "4 4 7 0 2 8 8 1 2 5 8 0 9 6 6 6 3"],
  ["Abu", "abu", "Aladdin", "8 2 4 2 7 5 6 2 7 8 8 0 1 7 2 6 7"],
  ["Iago", "yago", "Aladdin", "8 2 6 7 6 2 1 3 6 5 3 2 3 9 9 7 9"],
  ["Le Sultan", "sultan", "Aladdin", "7 1 3 0 6 3 9 6 6 2 7 0 9 1 7 1 4"],
  ["Rafiki", "rafiki", LK, "8 6 9 0 2 7 8 1 3 6 4 2 1 2 7 7 2"],
  ["Zazu", "zazu", LK, "6 1 6 0 4 4 7 1 3 7 5 0 3 7 9 3 9"],
  ["Les Hyènes", "hyenes|hyene|shenzi|banzai|hyenas", LK, "8 5 2 6 7 5 1 5 9 6 1 6 0 7 7 3 7"],
  ["Pocahontas", "pocahontas", "Pocahontas", "4 6 7 0 2 9 9 1 2 7 7 0 3 4 6 5 5"],
  ["John Smith", "john smith", "Pocahontas", "5 7 6 1 3 9 7 1 3 6 5 0 2 4 6 5 7"],
  ["Ratcliffe", "gouverneur ratcliffe", "Pocahontas", "4 4 5 9 4 3 0 5 7 2 0 6 8 9 7 6 6"],
  ["Meeko", "meeko", "Pocahontas", "8 2 4 1 5 5 6 3 9 7 9 0 0 4 0 7 4"],
  ["Quasimodo", "quasimodo", HUN, "5 9 5 0 6 8 9 1 3 4 6 5 0 1 5 2 9"],
  ["Frollo", "juge frollo|claude frollo", HUN, "1 4 8 9 1 5 0 1 2 2 0 8 7 9 6 8 4"],
  ["Esmeralda", "esmeralda", HUN, "6 6 7 0 2 9 9 1 3 8 7 0 1 6 7 8 6"],
  ["Phoebus", "febo", HUN, "7 7 6 0 3 8 8 2 4 6 5 0 3 3 6 6 5"],
  ["Philoctète", "phil|philoctete|filoctetes", HER, "8 6 6 0 5 6 6 4 6 4 4 2 1 9 9 4 6"],
  ["Mégara", "meg|megara", HER, "8 4 7 1 2 6 6 2 3 4 6 0 1 6 7 7 7"],
  ["Peine et Panique", "peine|panique|pain and panic|pena y panico", HER, "8 3 1 5 9 3 2 4 5 5 3 3 0 4 7 2 9"],
  ["Pégase", "pegase|pegasus|pegaso", HER, "6 7 4 0 3 8 8 1 5 9 7 0 0 4 0 3 2"],
  ["Shan Yu", "shan yu", "Mulan", "1 9 6 9 1 8 0 1 5 7 0 9 4 9 2 6 3"],
  ["Li Shang", "shang|capitaine shang", "Mulan", "3 8 7 0 2 9 7 1 3 7 4 1 5 7 5 5 4"],
  ["Cri-Kee", "cri kee|cricket", "Mulan", "5 1 3 0 4 5 8 2 3 6 8 0 0 2 0 2 2"],
  ["Tarzan", "tarzan", "Tarzan", "5 8 5 0 5 9 9 2 4 9 6 1 0 4 4 6 5"],
  ["Jane Porter", "jane", "Tarzan", "7 2 8 0 7 7 9 1 3 4 7 0 4 3 9 4 5"],
  ["Terk", "terk", "Tarzan", "9 5 4 0 5 6 7 4 6 8 5 0 0 5 9 6 4"],
  ["Tantor", "tantor", "Tarzan", "7 9 4 0 6 2 9 2 6 3 7 0 0 3 7 2 4"],
  ["Clayton", "clayton", "Tarzan", "4 7 6 9 2 6 0 2 4 5 0 7 5 8 6 7 6"],
  ["Kuzco", "kuzco", KUZ, "9 2 4 4 6 3 2 6 6 4 6 0 9 8 9 3 8"],
  ["Yzma", "izma", KUZ, "8 2 6 8 7 5 0 2 3 4 0 7 7 9 9 6 8"],
  ["Kronk", "kronk", KUZ, "9 8 2 3 7 5 8 3 8 5 6 2 1 1 7 1 5"],
  ["Pacha", "pacha", KUZ, "6 7 6 0 4 7 9 1 5 4 6 1 2 4 6 5 6"],
  ["Milo Thatch", "milo", ATL, "6 2 9 0 7 7 9 1 3 3 5 0 1 2 9 4 7"],
  ["Kida", "kida|kidagakash", ATL, "4 7 7 0 2 9 8 1 3 7 6 0 6 4 5 6 4"],
  ["Jim Hawkins", "jim hawkins", TP, "5 5 7 0 4 8 7 2 4 8 5 0 1 6 5 7 6"],
  ["John Silver", "long john silver|john silver", TP, "7 7 7 5 3 7 5 3 6 5 2 4 3 6 8 9 5"],
  ["Lilo", "lilo", "Lilo & Stitch", "8 3 5 1 6 7 7 2 5 5 8 1 0 8 8 6 6"],
  ["Nani", "nani", "Lilo & Stitch", "5 6 6 0 4 8 9 1 3 6 6 0 1 6 6 5 7"],
  ["Jumba", "jumba jookiba", "Lilo & Stitch", "7 8 9 6 3 6 4 2 7 3 2 5 2 7 8 6 5"],
  ["Pikly", "pleakley", "Lilo & Stitch", "9 2 6 0 8 3 6 2 4 4 4 0 2 4 9 2 6"],
  ["Kenai", "kenai", BEAR, "5 7 5 1 4 7 7 2 5 6 5 3 0 6 5 4 6"],
  ["Koda", "koda", BEAR, "8 3 4 0 5 6 9 2 7 6 9 0 0 2 9 3 6"],
  ["Chicken Little", "chicken little", "Chicken Little", "6 2 6 0 8 8 8 1 3 4 8 0 1 2 7 4 9"],
  ["Volt", "bolt", BOLT, "5 6 4 0 4 9 8 1 4 8 8 1 1 4 4 3 5"],
  ["Mittens", "mittens", BOLT, "7 3 8 0 2 6 6 4 5 6 6 0 0 6 7 9 7"],
  ["Rhino", "rhino", BOLT, "9 2 2 0 6 9 8 6 8 3 8 0 0 3 9 1 3"],
  ["Tiana", "tiana", PF, "4 5 8 0 2 8 9 0 6 6 7 0 2 4 6 6 6"],
  ["Prince Naveen", "naveen", PF, "7 4 4 0 6 6 6 8 6 5 6 0 2 3 8 4 7"],
  ["Dr Facilier", "docteur facilier|facilier|shadow man", PF, "7 4 8 9 1 5 0 2 3 5 1 9 4 7 9 9 6"],
  ["Louis", "louis", PF, "9 7 3 0 7 4 9 3 7 2 6 2 0 1 8 2 5"],
  ["Flynn Rider", "flynn|eugene fitzherbert", TG, "8 5 7 2 4 7 6 3 4 7 6 0 3 4 8 9 6"],
  ["Pascal", "pascal", TG, "7 2 6 0 3 6 8 2 3 6 9 0 0 5 0 6 2"],
  ["Maximus", "maximus", TG, "6 8 7 0 2 9 6 1 6 8 5 2 0 8 0 7 4"],
  ["Ralph la Casse", "ralph|wreck it ralph|rompe ralph", WIR, "7 9 3 1 8 7 7 3 6 3 4 3 0 8 6 2 7"],
  ["Vanellope", "vanellope von schweetz", WIR, "9 2 6 1 4 8 7 2 7 9 8 0 7 5 9 7 6"],
  ["Roi Sucreries", "king candy|rey dulce", WIR, "8 4 6 9 3 5 0 2 7 8 2 6 8 8 9 9 4"],
  ["Félix Fixe-tout", "fix it felix|felix fixe tout", WIR, "5 3 6 0 2 6 9 1 4 6 8 0 2 1 6 3 3"],
  ["Kristoff", "kristoff", FRZ, "6 7 5 0 4 8 8 3 5 6 4 0 1 5 5 4 6"],
  ["Sven", "sven", FRZ, "7 7 3 0 5 7 8 3 8 7 7 0 0 2 0 2 3"],
  ["Prince Hans", "hans", FRZ, "4 6 7 9 2 6 0 2 3 6 4 3 6 6 7 9 4"],
  ["Hiro Hamada", "hiro", BH6, "6 3 9 0 3 8 8 2 4 5 6 0 2 5 6 7 7"],
  ["Judy Hopps", "judy", ZOO, "6 5 8 0 3 9 8 0 3 8 9 0 2 4 8 7 4"],
  ["Nick Wilde", "nick", ZOO, "8 4 8 3 2 6 6 5 4 6 6 1 3 3 8 9 3"],
  ["Flash le paresseux", "flash|flash slothmore", ZOO, "9 2 4 0 3 3 7 8 4 0 5 0 2 0 1 2 4"],
  ["Chef Bogo", "bogo|jefe bogo", ZOO, "5 9 6 0 1 8 5 1 4 5 2 4 3 9 4 5 3"],
  ["Bellwether", "adjointe bellwether", ZOO, "4 1 8 9 3 3 1 1 3 3 8 5 3 6 6 9 5"],
  ["Clawhauser", "benjamin clawhauser", ZOO, "9 3 4 0 6 3 9 4 9 3 8 0 2 1 9 2 4"],
  ["Tamatoa", "tamatoa", MOA, "8 8 6 7 3 6 0 4 8 3 1 7 9 6 9 6 6"],
  ["Heihei", "hei hei", MOA, "9 1 0 0 9 4 5 3 7 3 5 0 0 0 1 0 7"],
  ["Mirabel", "mirabel madrigal", "Encanto", "8 3 7 0 6 8 9 1 4 5 7 0 4 5 9 6 7"],
  ["Bruno Madrigal", "bruno", "Encanto", "8 3 7 0 7 4 8 3 4 4 5 5 3 2 9 5 9"],
  ["Luisa", "luisa madrigal", "Encanto", "5 9 4 0 3 8 9 1 6 5 6 0 4 4 5 2 5"],
  ["Isabela", "isabela madrigal", "Encanto", "4 4 6 1 2 6 6 2 3 4 8 0 5 6 6 5 3"],
  ["Abuela Alma", "abuela|alma madrigal", "Encanto", "2 4 7 2 1 8 6 1 3 2 4 4 6 8 5 5 7"],
  ["Raya", "raya", RAYA, "5 7 8 0 2 9 7 1 3 8 5 2 3 6 5 8 6"],
  ["Sisu", "sisu", RAYA, "9 7 4 0 7 7 9 3 6 7 8 1 1 1 9 3 4"],
  ["Asha", "asha", "Wish", "5 4 6 0 5 8 9 1 3 5 7 0 1 4 8 5 6"],
  ["Roi Magnifico", "magnifico|king magnifico|rey magnifico", "Wish", "5 7 8 8 1 5 1 1 3 4 3 7 8 8 8 8 3"],
  ["Daisy Duck", "daisy|pata daisy", MK, "6 3 5 0 4 5 7 3 4 4 8 0 6 8 8 4 3"],
  ["Pat Hibulaire", "pat|pete|pedro|pete el malo", MK, "7 8 3 8 6 6 1 6 8 3 0 6 4 9 7 6 7"],
  ["Tic et Tac", "tic|tac|chip et dale|chip and dale|chip y chop", MK, "8 2 6 1 5 6 7 2 7 8 9 0 0 4 7 7 4"],
  ["Clarabelle", "clarabelle|clarabella", MK, "7 4 4 0 5 4 7 3 5 3 5 0 2 4 9 3 4"],
  ["Horace Horsecollar", "horace horsecollar|horacio", MK, "7 6 4 0 6 5 7 3 5 4 4 0 2 4 7 3 4"],
  ["Riri, Fifi et Loulou", "riri|fifi|loulou|huey dewey louie|juanito jorgito jaimito", DT, "8 3 7 2 4 7 7 3 6 6 8 0 1 4 8 7 4"],
  ["Géo Trouvetou", "gyro gearloose|ciro peraloca", DT, "6 2 9 0 6 6 8 1 3 3 4 0 3 3 7 5 6"],
  ["Les Rapetou", "rapetou|beagle boys|chicos malos", DT, "7 7 2 7 8 5 0 5 7 4 1 4 1 6 6 5 9"],
  ["Gontran Bonheur", "gontran|gladstone gander|narciso bello", DT, "5 3 3 2 2 3 3 9 4 3 4 0 4 5 7 3 0"],
  ["Miss Tick", "magica de spell|magica de hechizo|miss tick", DT, "5 3 7 7 4 6 0 2 3 5 2 6 3 8 7 8 9"],
  ["Flagada Jones", "flagada|launchpad|zapatones", DT, "9 6 2 0 9 7 8 3 5 5 4 0 1 1 8 1 8"],
  ["Myster Mask", "darkwing duck|myster mask|el pato darkwing", "Myster Mask|Darkwing Duck|El pato Darkwing", "8 5 6 0 7 8 6 2 4 5 4 2 2 7 9 5 7"],
  ["Dipper Pines", "dipper", GF, "6 2 8 0 5 8 8 1 3 4 6 0 1 4 7 7 7"],
  ["Mabel Pines", "mabel", GF, "9 3 4 0 6 7 9 2 8 5 9 0 1 1 9 4 4"],
  ["Grunkle Stan", "oncle stan|tio stan|stan pines", GF, "8 7 6 4 5 7 5 5 6 3 1 2 4 7 8 9 7"],
  ["Bill Cipher", "bill cipher", GF, "9 9 9 9 1 8 0 1 2 9 3 9 4 8 9 9 2"],
  ["Ferb", "ferb", PH, "6 5 9 0 1 8 8 1 3 6 6 0 2 0 0 7 0"],
  ["Candice", "candace", PH, "8 3 4 1 6 5 6 1 3 6 5 1 2 8 9 3 9"],
  ["Isabella", "isabella", PH, "5 4 6 0 2 7 8 1 3 5 8 0 2 4 7 6 3"],
  ["Ron Stoppable", "ron", KP, "9 3 3 0 8 5 9 5 8 4 5 0 1 3 8 2 8"],
  ["Rufus", "rufus", KP, "8 2 6 0 3 7 8 4 8 7 9 0 0 2 2 6 3"],
  ["Shego", "shego", KP, "8 8 7 7 1 8 1 4 3 8 3 6 4 8 7 8 3"],
  ["Dr Drakken", "drakken|docteur drakken", KP, "9 2 7 7 7 3 2 2 4 2 1 3 4 8 9 5 9"],
  ["Luz Noceda", "luz", OWL, "8 4 6 0 6 9 9 1 4 6 7 0 1 4 9 7 6"],
  ["Star Butterfly", "star", STAR, "9 6 4 1 6 9 8 2 5 7 8 0 7 6 9 5 5"],
  ["Porcinet", "piglet|piglet", WP, "4 1 4 0 5 2 9 2 3 3 9 0 0 0 4 1 6"],
  ["Coco Lapin", "rabbit|conejo", WP, "4 3 6 0 4 4 6 1 3 5 5 0 1 8 7 4 6"],
  ["Maître Hibou", "hibou|owl|buho", WP, "5 2 6 0 5 4 7 3 3 3 5 0 1 2 9 2 4"],
  ["Petit Gourou", "roo|rito|petit gourou", WP, "6 2 3 0 5 5 8 2 4 5 9 0 0 1 5 2 3"],
];
