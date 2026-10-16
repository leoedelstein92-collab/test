// Dessins animés européens, japonais (hors mangas), jeunesse, jeux vidéo adaptés et courts métrages classiques.
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const SCH = "Les Schtroumpfs|The Smurfs|Los Pitufos";
const AST = "Astérix|Asterix|Astérix";
const TIN = "Les Aventures de Tintin|The Adventures of Tintin|Las aventuras de Tintín";
const LL = "Lucky Luke";
const SPI = "Spirou et Fantasio|Spirou & Fantasio|Spirou y Fantasio";
const U31 = "Ulysse 31|Ulysses 31|Ulises 31";
const COR = "Les Mystérieuses Cités d'or|The Mysterious Cities of Gold|Las misteriosas ciudades de oro";
const GAD = "Inspecteur Gadget|Inspector Gadget|Inspector Gadget";
const LYO = "Code Lyoko";
const TS = "Totally Spies!";
const WAK = "Wakfu";
const PN = "Le Petit Nicolas|Little Nicholas|El pequeño Nicolás";
const KAE = "Kaeloo";
const MM = "Monsieur Madame|Mr. Men|Mr. Men";
const TELE = "Les Teletubbies|Teletubbies|Teletubbies";
const GHI = "Studio Ghibli";
const MOO = "Les Moomins|Moomin|Los Mumin";
const MAYA = "Maya l'abeille|Maya the Bee|La abeja Maya";
const ZEL = "The Legend of Zelda";
const KIR = "Kirby";
const SON = "Sonic";
const MK = "Mickey";
const BARBA = "Barbapapa";

module.exports = [
  // ---------- Les Schtroumpfs ----------
  ["Schtroumpf bricoleur", "schtroumpf bricoleur|handy smurf|pitufo manitas", SCH, "5 6 8 0 2 6 8 1 4 4 6 0 0 3 5 4 3"],
  ["Schtroumpf poète", "schtroumpf poete|poet smurf|pitufo poeta", SCH, "5 2 6 0 4 3 8 4 4 3 6 0 0 3 8 3 5"],
  ["Schtroumpf coquet", "schtroumpf coquet|vanity smurf|pitufo presumido", SCH, "6 2 3 0 4 2 5 5 4 3 7 0 1 4 8 3 4"],
  ["Bébé Schtroumpf", "bebe schtroumpf|baby smurf|bebe pitufo", SCH, "6 1 1 0 6 3 8 4 5 2 10 0 0 3 1 1 3"],
  ["Schtroumpf cuisinier", "schtroumpf cuisinier|chef smurf|pitufo cocinero", SCH, "5 4 5 0 3 4 8 2 8 3 6 0 0 6 5 3 3", "chef"],
  ["Schtroumpf musicien", "schtroumpf musicien|harmony smurf|pitufo armonia", SCH, "6 2 4 0 6 4 7 3 4 3 6 0 0 2 6 2 5", "dancer"],
  ["Schtroumpf maladroit", "schtroumpf maladroit|clumsy smurf|pitufo torpe", SCH, "7 3 1 0 10 4 9 3 5 3 8 0 0 1 6 1 9"],
  ["Sassette", "sassette|sassette schtroumpfette", SCH, "7 4 5 0 4 7 7 2 4 5 9 0 0 5 8 5 4"],
  // ---------- Astérix ----------
  ["Falbala", "falbala|panacea", AST, "3 2 6 0 2 4 8 2 3 3 8 0 2 3 5 4 2"],
  ["Cétautomatix", "cetautomatix|fulliautomatix", AST, "6 8 4 1 3 7 4 3 6 4 1 2 2 9 7 3 4"],
  ["Ordralfabétix", "ordralfabetix|unhygienix|esautomatix", AST, "6 6 3 1 3 6 4 3 6 3 1 2 2 9 8 3 5"],
  ["Agecanonix", "agecanonix|geriatrix|edadepiedrix", AST, "7 5 3 0 5 7 5 4 5 2 2 1 1 8 8 3 4"],
  ["Bonemine", "bonemine|impedimenta|karabella", AST, "5 5 6 0 2 6 4 2 5 3 1 2 4 9 8 6 3", "leader"],
  ["Barbe-Rouge", "barbe rouge|redbeard|barbarroja|les pirates", AST, "8 5 3 0 6 5 5 3 6 3 1 2 1 8 7 2 10", "doomed"],
  ["Numérobis", "numerobis|edifis", AST, "8 2 6 0 7 5 7 2 4 4 4 0 1 4 9 5 6"],
  ["Amonbofis", "amonbofis|artifis", AST, "4 3 6 7 4 3 0 3 4 3 0 4 3 8 7 7 8"],
  ["Tullius Détritus", "detritus|tullius detritus|tortuous convolvulus", AST, "4 3 8 9 1 3 0 2 3 3 0 5 4 5 8 10 6"],
  ["Cléopâtre", "cleopatre|cleopatra", AST, "4 3 8 2 1 6 4 4 5 2 7 2 10 10 7 8 3", "leader"],
  // ---------- Tintin / Lucky Luke / Spirou ----------
  ["Tchang", "tchang|chang|tchang tchong jen", TIN, "5 3 6 0 2 7 9 1 3 5 7 0 0 1 5 4 6", "friend"],
  ["Nestor", "nestor", TIN, "5 4 5 0 4 4 8 2 3 3 3 0 1 2 3 3 7"],
  ["Séraphin Lampion", "lampion|seraphin lampion|jolyon wagg", TIN, "8 4 2 0 6 3 4 3 6 3 1 0 3 3 10 2 4"],
  ["Général Alcazar", "alcazar|general alcazar", TIN, "6 6 4 3 4 7 4 3 5 3 1 2 3 8 7 5 8", "leader"],
  ["Ma Dalton", "ma dalton|maman dalton", LL, "7 6 5 6 3 7 4 3 6 2 2 4 3 8 7 7 5", "leader"],
  ["Billy the Kid", "billy the kid", LL, "6 4 4 8 3 6 0 4 8 8 4 5 2 9 6 6 7", "glutton"],
  ["Calamity Jane", "calamity jane", LL, "8 8 4 1 4 9 6 2 6 7 1 3 1 8 8 5 5"],
  ["Fantasio", "fantasio", SPI, "8 4 6 0 7 7 7 3 5 5 3 0 1 8 8 5 8"],
  ["Spip", "spip", SPI, "8 2 6 0 4 4 6 4 6 5 8 0 0 8 0 5 6"],
  ["Zorglub", "zorglub", SPI, "7 3 10 7 4 4 3 2 4 3 1 4 6 7 9 8 7"],
  ["Comte de Champignac", "comte de champignac|champignac", SPI, "6 2 9 0 6 5 8 2 4 2 2 0 6 2 7 5 6"],
  // ---------- Séries françaises ----------
  ["Ulysse", "ulysse|ulysse 31|ulises", U31, "3 7 8 0 1 10 8 1 3 6 2 2 3 4 4 8 10", "hero|leader"],
  ["Nono", "nono|nono le petit robot", U31, "8 9 3 0 6 6 9 2 9 5 9 0 0 1 3 2 4", "friend|glutton"],
  ["Télémaque", "telemaque|telemachus", U31, "4 5 6 0 3 8 8 1 3 6 5 0 2 3 4 5 8"],
  ["Zia", "zia", COR, "3 3 8 0 2 7 9 1 3 4 7 0 2 2 5 4 7"],
  ["Tao", "tao", COR, "6 3 9 0 4 6 7 2 4 4 5 0 1 6 8 6 6"],
  ["Mendoza", "mendoza", COR, "4 7 8 2 1 8 5 2 4 6 1 3 3 4 5 9 4"],
  ["Sophie", "sophie gadget|penny gadget|sophie inspecteur gadget", GAD, "4 3 10 0 1 9 9 1 3 5 7 0 1 2 5 8 3", "hero"],
  ["Finot", "finot|brain gadget|sultan gadget", GAD, "7 4 8 0 3 8 9 2 5 7 7 0 0 2 0 7 8", "friend"],
  ["Jérémie Belpois", "jeremie|jeremie belpois", LYO, "4 2 10 0 4 5 7 1 4 2 4 0 2 6 7 7 5", "leader"],
  ["Aelita", "aelita|aelita stones", LYO, "5 6 8 0 3 8 9 1 4 7 8 1 1 3 5 6 7"],
  ["Ulrich Stern", "ulrich|ulrich stern", LYO, "3 8 6 0 2 9 6 2 4 9 3 1 3 6 3 5 4", "speedster"],
  ["Yumi Ishiyama", "yumi|yumi ishiyama", LYO, "4 7 7 0 2 8 7 1 4 8 5 1 2 5 4 6 4"],
  ["Odd Della Robbia", "odd|odd della robbia", LYO, "10 6 5 0 6 7 7 5 10 8 5 0 1 3 9 5 5", "glutton"],
  ["XANA", "xana", LYO, "0 8 9 10 0 5 0 1 0 6 0 9 0 6 0 9 5"],
  ["Sam (Totally Spies)", "sam totally spies|samantha totally spies", TS, "4 6 9 0 2 8 7 1 4 7 6 0 4 3 6 7 4", "hero|leader"],
  ["Clover", "clover|clover totally spies", TS, "7 6 4 0 5 7 6 3 5 7 7 0 6 6 10 5 6", "hero"],
  ["Alex (Totally Spies)", "alex totally spies", TS, "8 7 3 0 8 7 9 2 6 7 8 0 3 2 7 3 8", "hero"],
  ["Jerry (Totally Spies)", "jerry lewis woohp|jerry woohp", TS, "5 3 8 0 2 4 7 1 4 2 2 0 7 2 6 6 3", "leader"],
  ["Yugo", "yugo|yugo wakfu", WAK, "6 7 6 0 4 9 9 2 6 8 7 1 0 3 7 5 6", "hero"],
  ["Amalia", "amalia|amalia sheran sharm", WAK, "6 5 5 0 4 7 7 3 5 5 7 0 8 8 8 5 4"],
  ["Ruel Stroud", "ruel|ruel stroud", WAK, "8 6 5 1 4 5 6 5 8 3 3 1 5 6 8 7 5", "glutton"],
  ["Tristepin", "tristepin|pinpin|tristepin de percedal", WAK, "8 9 2 0 7 10 8 2 7 6 3 3 0 7 9 2 6"],
  ["Evangelyne", "evangelyne|eva wakfu", WAK, "4 6 8 0 1 8 7 1 4 7 6 1 1 5 5 6 4"],
  ["Adamaï", "adamai", WAK, "5 9 7 0 2 7 7 3 5 9 6 4 0 4 6 5 3"],
  ["Nicolas", "petit nicolas|nicolas", PN, "8 3 4 0 6 5 8 3 6 5 7 0 1 3 8 4 6"],
  ["Alceste", "alceste", PN, "7 5 2 0 6 4 8 6 10 2 5 0 1 2 5 2 4", "glutton|friend"],
  ["Clotaire", "clotaire", PN, "7 3 1 0 7 4 7 7 5 3 5 0 1 1 5 2 8"],
  ["Agnan", "agnan", PN, "4 1 8 0 4 1 5 1 4 2 4 0 2 5 7 3 6"],
  ["Kid Paddle", "kid paddle", "Kid Paddle", "9 3 4 1 6 7 5 6 6 5 4 0 1 5 8 6 5"],
  ["Cédric", "cedric", "Cédric|Cedric|Cédric", "8 3 3 0 6 5 8 5 6 4 6 0 1 4 7 4 7"],
  ["Manu", "manu titeuf", "Titeuf", "7 3 4 0 5 4 8 4 5 4 5 0 1 2 7 4 5", "friend"],
  ["Nadia", "nadia titeuf", "Titeuf", "4 3 7 0 2 5 6 2 4 4 7 0 2 5 6 5 3"],
  ["Lou", "lou|lou zep", "Lou !|Lou!|Lou!", "6 3 6 0 4 5 8 3 4 4 7 0 1 4 6 4 5"],
  ["Kaeloo", "kaeloo", KAE, "6 10 5 1 4 7 9 3 5 6 9 5 0 10 8 4 4", "leader"],
  ["Stumpy", "stumpy", KAE, "9 3 0 0 9 5 8 4 6 5 7 0 0 2 9 1 6"],
  ["Coin-Coin", "quack quack|coin coin", KAE, "6 3 9 0 3 3 6 4 4 3 7 0 0 3 0 6 9"],
  ["Mr Chat", "mr cat|mr chat|monsieur chat", KAE, "7 6 8 8 2 5 1 4 5 5 5 4 4 6 7 10 6"],
  ["Grabouillon", "grabouillon", "Grabouillon", "8 4 4 0 7 6 7 3 7 7 8 0 0 3 0 4 6"],
  ["Simon", "simon le lapin|simon super lapin", "Simon", "8 3 4 0 5 7 7 3 5 6 9 0 1 6 8 4 4"],
  ["Trotro", "trotro", "Trotro", "8 3 3 0 7 4 8 4 5 4 9 0 0 3 6 3 6"],
  ["SamSam", "samsam", "SamSam", "6 5 5 0 4 7 9 2 5 6 9 0 0 3 6 4 4", "hero"],
  ["Le Nabot", "nabot|le nabot|pierrot il etait une fois", "Il était une fois…|Once Upon a Time…|Érase una vez…", "6 4 6 7 6 4 1 3 5 4 2 3 1 7 8 7 9"],
  ["Rahan", "rahan", "Rahan", "3 8 7 0 1 9 8 1 4 8 2 2 0 4 4 7 6", "survivor|hero"],
  ["Maurice (Les As de la jungle)", "maurice as de la jungle|maurice le pingouin tigre", "Les As de la jungle|The Jungle Bunch|Los héroes de la selva", "7 8 5 0 4 10 8 2 6 7 6 2 0 4 7 5 5", "hero|leader"],
  // ---------- Royaume-Uni / Russie / Scandinavie ----------
  ["Pierre Lapin", "pierre lapin|peter rabbit|perico el conejo", "Pierre Lapin|Peter Rabbit|Perico el Conejo", "8 3 5 1 5 8 6 3 8 8 8 0 0 4 7 7 6"],
  ["Pat le facteur", "pat le facteur|postman pat|el cartero pat", "Pat le facteur|Postman Pat|El cartero Pat", "5 4 5 0 4 5 9 2 4 4 4 0 1 1 6 3 5", "friend"],
  ["Danger Mouse", "danger mouse|dm", "Danger Mouse", "8 6 7 0 3 9 7 2 4 8 5 0 2 3 8 7 4", "hero"],
  ["Duggee", "duggee|hey duggee", "Hey Duggee", "6 6 7 0 2 7 10 2 5 4 8 0 1 0 2 5 2", "teacher"],
  ["Holly", "holly|princesse holly|ben et holly", "Ben et Holly|Ben & Holly's Little Kingdom|El pequeño reino de Ben y Holly", "6 3 5 0 7 6 8 2 5 6 9 0 7 3 7 4 6"],
  ["Monsieur Chatouille", "monsieur chatouille|mr tickle|senor cosquillas", MM, "9 4 3 2 3 5 5 3 4 5 6 0 1 2 6 6 2"],
  ["Monsieur Glouton", "monsieur glouton|mr greedy|senor gloton", MM, "6 5 2 0 5 3 6 6 10 2 6 0 1 2 5 2 4", "glutton"],
  ["Monsieur Costaud", "monsieur costaud|mr strong|senor fuerte", MM, "5 10 4 0 3 7 8 2 7 5 5 0 1 2 4 2 3"],
  ["Monsieur Heureux", "monsieur heureux|mr happy|senor feliz", MM, "8 3 4 0 3 5 9 3 4 4 7 0 1 0 6 2 1"],
  ["Monsieur Rapide", "monsieur rapide|mr rush|senor prisas", MM, "6 3 4 0 6 4 5 0 4 10 5 0 1 4 6 2 4", "speedster"],
  ["Monsieur Malchance", "monsieur malchance|mr bump|mr unlucky|senor desastre", MM, "6 3 3 0 10 4 7 3 4 3 6 0 1 2 4 1 10"],
  ["Monsieur Paresseux", "monsieur paresseux|mr lazy|senor perezoso", MM, "6 3 3 0 4 2 6 10 6 0 6 0 1 0 2 2 4"],
  ["Madame Autoritaire", "madame autoritaire|little miss bossy|senorita mandona", MM, "4 5 5 2 2 6 2 1 4 4 5 1 2 9 9 5 3", "leader"],
  ["Tinky Winky", "tinky winky", TELE, "6 4 1 0 6 3 8 4 6 3 8 1 0 0 2 1 3"],
  ["Dipsy", "dipsy", TELE, "6 4 1 0 5 3 8 4 6 3 8 1 0 0 2 1 3", "dancer"],
  ["Laa-Laa", "laa laa|lala teletubbies", TELE, "7 3 1 0 5 3 9 3 6 4 9 1 0 0 3 1 3", "dancer"],
  ["Po (Teletubbies)", "po teletubbies", TELE, "7 3 1 0 6 4 8 3 6 6 9 1 0 0 3 1 3", "speedster"],
  ["Paddington", "paddington|ours paddington", "Paddington", "7 3 5 0 9 7 10 2 8 4 9 0 0 1 6 4 9", "glutton|friend"],
  ["Le Gruffalo", "gruffalo|le gruffalo|el grufalo", "Le Gruffalo|The Gruffalo|El Grúfalo", "4 9 2 3 4 6 3 4 8 5 4 8 0 6 3 1 6"],
  ["Tchebourachka", "tcheburashka|cheburashka|tchebourachka|chebi", "Tchebourachka|Cheburashka|Cheburashka", "6 2 4 0 6 4 10 2 5 3 10 0 0 0 4 2 6", "friend"],
  ["Guéna le crocodile", "gena|guena|gena the crocodile|guena le crocodile", "Tchebourachka|Cheburashka|Cheburashka", "6 6 6 0 3 6 9 2 5 3 4 2 1 2 6 4 4", "friend"],
  ["Le Loup (Nu, pogodi!)", "nu pogodi|le loup et le lievre|volk", "Nu, pogodi !|Nu, pogodi!|¡Nu, pogodí!", "8 6 3 4 9 6 2 4 6 6 2 2 0 8 3 5 10"],
  ["Moumine", "moumine|moomin|mumin|moomintroll", MOO, "5 4 5 0 4 6 9 3 6 3 9 0 1 1 5 3 4"],
  ["Petite My", "petite my|little my|pequena my", MOO, "8 4 6 4 2 9 3 3 5 6 7 2 0 9 8 7 3"],
  ["Snufkin", "snufkin|renifleur|snusmumriken", MOO, "3 4 7 0 1 7 7 5 3 5 4 0 0 1 2 5 2", "survivor"],
  ["Maya l'abeille", "maya|maya l abeille|abeja maya", MAYA, "7 3 5 0 5 8 9 2 5 7 9 0 0 2 8 4 5"],
  ["Willy", "willy maya|willy l abeille", MAYA, "7 3 2 0 6 3 8 8 8 3 7 0 0 1 5 2 6", "glutton"],
  ["Nils Holgersson", "nils|nils holgersson", "Nils Holgersson", "6 3 5 1 5 8 6 3 5 5 6 0 0 5 6 5 7", "survivor"],
  ["Vic le Viking", "vic le viking|wickie|vicky el vikingo", "Vic le Viking|Vicky the Viking|Vicky el vikingo", "6 3 9 0 3 6 8 2 4 5 7 0 1 2 6 9 3"],
  ["Barbidou", "barbidou|barbazoo", BARBA, "6 4 8 0 3 5 8 3 4 4 7 0 0 2 6 5 3"],
  ["Barbouille", "barbouille|barbabeau", BARBA, "5 4 6 0 4 4 7 4 4 3 7 0 0 4 4 3 3"],
  ["Barbamama", "barbamama", BARBA, "5 6 7 0 2 6 10 2 5 3 8 0 0 1 5 5 2", "chef"],
  // ---------- Japon (hors mangas) ----------
  ["Hello Kitty", "hello kitty|kitty white", "Hello Kitty", "4 2 4 0 3 4 9 2 5 3 10 0 3 0 0 2 2", "friend"],
  ["Anpanman", "anpanman", "Anpanman", "5 8 5 0 3 10 10 1 4 8 8 0 0 1 4 3 5", "hero|friend"],
  ["Shin-chan", "shin chan|shinchan|crayon shin chan|shinnosuke", "Shin-chan|Crayon Shin-chan|Shin-chan", "10 3 3 1 6 7 6 7 8 6 6 0 1 4 10 7 4", "dancer"],
  ["Jiji", "jiji|jiji le chat", GHI, "7 2 6 0 3 3 6 4 5 5 8 0 0 6 8 5 4"],
  ["Haku (Chihiro)", "haku chihiro|haku dragon|nigihayami kohakunushi", GHI, "2 8 8 1 0 9 8 1 3 10 6 4 1 3 3 7 7", "speedster"],
  ["Yubaba", "yubaba|zeniba", GHI, "4 6 9 7 1 6 2 2 6 6 0 8 10 10 8 9 3", "leader"],
  ["Kamaji", "kamaji", GHI, "6 7 7 0 1 6 8 4 4 7 3 4 1 6 4 5 3"],
  ["Mei et Satsuki", "satsuki|mei et satsuki", GHI, "7 3 5 0 6 8 9 2 6 7 9 0 1 4 8 4 5"],
  ["Chatbus", "chatbus|catbus|gatobus", GHI, "8 8 4 0 2 6 8 3 5 10 7 4 0 1 0 4 2", "speedster"],
  ["Sophie Hatter", "sophie hatter|sophie chateau ambulant", GHI, "5 4 7 0 4 9 9 1 4 3 5 0 2 6 6 5 9", "chef"],
  ["Ashitaka", "ashitaka", GHI, "2 8 7 0 1 10 9 1 3 8 3 2 1 3 2 5 9", "hero"],
  ["Pazu", "pazu", GHI, "5 5 7 0 3 9 9 1 5 6 5 0 0 3 6 5 6", "hero"],
  ["Sheeta", "sheeta", GHI, "3 3 7 0 2 8 9 1 4 4 7 0 4 2 4 5 9"],
  ["Muska", "muska", GHI, "2 4 9 9 1 5 0 1 3 4 0 8 6 7 7 9 7"],
  ["Arrietty", "arrietty", GHI, "5 3 7 0 3 8 8 1 5 7 9 0 0 3 5 6 6", "survivor"],
  ["Sosuke", "sosuke|sosuke ponyo", GHI, "5 3 5 0 4 8 9 1 5 5 8 0 1 1 6 3 4"],
  // ---------- Jeux vidéo adaptés en dessin animé / film ----------
  ["Link", "link", ZEL, "3 8 6 0 4 10 9 2 6 7 5 1 1 3 0 6 6", "hero|survivor"],
  ["Princesse Zelda", "zelda|princesse zelda|princess zelda", ZEL, "4 5 9 0 2 8 9 1 4 4 7 0 9 3 5 7 6", "leader"],
  ["Ganon", "ganon|ganondorf", ZEL, "2 10 8 10 1 7 0 2 5 5 0 10 6 9 5 8 7"],
  ["Rayman", "rayman", "Rayman", "8 6 5 0 5 8 8 4 6 8 6 0 0 3 6 5 5", "hero"],
  ["Pac-Man", "pac man|pacman", "Pac-Man", "6 4 3 0 4 6 7 3 10 7 7 0 0 2 2 3 4", "glutton"],
  ["Crash Bandicoot", "crash bandicoot", "Crash Bandicoot", "9 6 1 0 8 8 7 4 8 9 5 1 0 3 1 2 6", "speedster"],
  ["Mega Man", "mega man|megaman|rockman", "Mega Man", "4 8 6 0 2 10 9 1 1 8 6 1 0 3 4 5 5", "hero"],
  ["Amy Rose", "amy rose|amy sonic", SON, "6 7 4 0 4 8 8 2 4 8 8 1 1 8 8 5 4"],
  ["Shadow", "shadow|shadow the hedgehog", SON, "1 9 8 3 0 9 4 1 3 10 3 6 1 8 2 7 9", "speedster"],
  ["Roi DaDiDou", "roi dadidou|king dedede|rey dedede|dadidou", KIR, "8 8 3 6 6 6 3 6 10 3 3 3 6 9 9 5 7", "glutton"],
  ["Meta Knight", "meta knight", KIR, "2 9 9 2 0 9 6 2 4 9 6 5 2 4 2 8 3"],
  // ---------- Jeunesse ----------
  ["Franklin", "franklin|franklin la tortue", "Franklin", "5 3 5 0 4 6 9 2 5 2 8 0 1 2 6 3 4"],
  ["Georges le petit curieux", "georges le petit curieux|curious george|jorge el curioso", "Georges le petit curieux|Curious George|Jorge el curioso", "8 4 4 0 8 7 8 2 6 6 9 0 0 1 0 3 6"],
  ["Clifford", "clifford|clifford le grand chien rouge", "Clifford", "6 10 4 0 8 6 10 3 7 5 8 1 0 0 0 2 5", "friend"],
  ["Max et Ruby", "max et ruby|max and ruby|ruby lapin", "Max et Ruby|Max & Ruby|Max y Ruby", "7 3 5 0 4 5 7 3 6 4 8 0 1 4 6 5 4"],
  ["Blue (Blue's Clues)", "blues clues|blue chien|blue s clues", "Blue's Clues", "6 3 7 0 3 5 9 2 4 5 9 0 0 1 0 5 2"],
  ["Barney le dinosaure", "barney le dinosaure|barney dinosaur|barney el dinosaurio", "Barney", "6 6 3 0 4 4 10 2 5 3 7 0 0 0 7 1 3", "friend|dancer"],
  ["Oui-Oui", "oui oui|noddy", "Oui-Oui|Noddy|Noddy", "6 3 4 0 6 5 9 2 4 6 8 0 1 2 6 3 6"],
  ["Arthur (Le Tamanoir)", "arthur read|arthur le tamanoir|arthur aardvark", "Arthur", "6 3 6 0 4 5 8 2 5 3 5 0 1 3 6 4 5"],
  ["Barbie", "barbie", "Barbie", "5 4 6 0 3 7 9 1 3 5 8 0 9 2 7 4 2", "dancer"],
  // ---------- Courts métrages et bandes dessinées Disney ----------
  ["Professeur Von Drake", "von drake|ludwig von drake|professeur von drake", MK, "8 2 9 0 7 4 6 3 5 3 2 0 4 4 10 4 6", "teacher"],
  ["Oswald le lapin chanceux", "oswald|oswald le lapin chanceux|oswald the lucky rabbit", MK, "8 5 5 0 4 7 7 3 5 7 6 0 1 4 6 5 2"],
  ["Figaro", "figaro", "Pinocchio|Pinocchio|Pinocho", "7 2 4 0 5 4 6 6 6 5 9 0 0 6 0 4 4"],
  ["Cléo", "cleo|cleo le poisson", "Pinocchio|Pinocchio|Pinocho", "5 1 3 0 2 2 8 3 3 4 9 0 0 3 0 2 3"],
  ["Max Dingo", "max goof|max dingo", "Dingo et Max|A Goofy Movie|Goofy: la película", "8 5 5 0 6 7 7 4 6 6 5 0 1 4 7 5 6", "dancer"],
  ["Fantomiald", "fantomiald|paperinik|duck avenger|patomas", MK, "8 6 6 0 5 8 6 3 5 6 4 3 2 8 7 7 6", "hero"],
  ["Gus Glouton", "gus glouton|gus goose|gus ganso", MK, "6 3 2 0 5 2 5 9 10 2 4 0 1 2 3 2 3", "glutton"],
];
