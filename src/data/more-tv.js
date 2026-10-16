// Séries animées (seconds rôles et séries supplémentaires).
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const SIMP = "Les Simpson|The Simpsons|Los Simpson";
const FG = "Les Griffin|Family Guy|Padre de familia";
const AD = "American Dad!";
const FUT = "Futurama";
const SP = "South Park";
const RM = "Rick et Morty|Rick and Morty|Rick y Morty";
const BOB = "Bob's Burgers";
const BJ = "BoJack Horseman";
const KOTH = "Les Rois du Texas|King of the Hill|El rey de la colina";
const ARC = "Archer";
const ARCANE = "Arcane";
const CV = "Castlevania";
const INV = "Invincible";
const HH = "Hazbin Hotel";
const HB = "Helluva Boss";
const TADC = "The Amazing Digital Circus";
const BLUEY = "Bluey";
const PEP = "Peppa Pig";
const SB = "Bob l'éponge|SpongeBob SquarePants|Bob Esponja";
const RUG = "Les Razmoket|Rugrats|Rugrats";
const HA = "Hé Arnold !|Hey Arnold!|¡Oye, Arnold!";
const AV = "Avatar, le dernier maître de l'air|Avatar: The Last Airbender|Avatar: la leyenda de Aang";
const LOK = "La Légende de Korra|The Legend of Korra|La leyenda de Korra";
const FOP = "Mes parrains sont magiques|The Fairly OddParents|Los padrinos mágicos";
const JN = "Jimmy Neutron";
const DP = "Danny Fantôme|Danny Phantom|Danny Phantom";
const ZIM = "Invader Zim";
const LOUD = "Bienvenue chez les Loud|The Loud House|The Loud House";
const PAW = "La Pat' Patrouille|PAW Patrol|La Patrulla Canina";
const DORA = "Dora l'exploratrice|Dora the Explorer|Dora, la exploradora";
const TMNT = "Les Tortues Ninja|Teenage Mutant Ninja Turtles|Las Tortugas Ninja";
const AT = "Adventure Time|Adventure Time|Hora de aventura";
const RS = "Regular Show|Regular Show|Un show más";
const SU = "Steven Universe";
const GUM = "Le Monde incroyable de Gumball|The Amazing World of Gumball|El increíble mundo de Gumball";
const EDS = "Ed, Edd et Eddy|Ed, Edd n Eddy|Ed, Edd y Eddy";
const PPG = "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas";
const FOS = "Foster, la maison des amis imaginaires|Foster's Home for Imaginary Friends|Mansión Foster para amigos imaginarios";
const BEN = "Ben 10";
const OTGW = "Over the Garden Wall";
const BAT = "Batman, la série animée|Batman: The Animated Series|Batman: la serie animada";
const JL = "La Ligue des justiciers|Justice League|La Liga de la Justicia";
const XM = "X-Men";
const MARV = "Spider-Man et ses amis|Marvel animated|Marvel animado";
const LT = "Looney Tunes";
const TT = "Les Tiny Toons|Tiny Toon Adventures|Tiny Toons";
const FL = "Les Pierrafeu|The Flintstones|Los Picapiedra";
const JET = "Les Jetson|The Jetsons|Los Supersónicos";
const HBR = "Hanna-Barbera";
const GF = "Souvenirs de Gravity Falls|Gravity Falls|Gravity Falls";
const PH = "Phinéas et Ferb|Phineas and Ferb|Phineas y Ferb";
const OWL = "Les Chroniques de la Maison du Hibou|The Owl House|The Owl House";
const PJ = "Pyjamasques|PJ Masks|PJ Masks";
const MIR = "Miraculous";
const TJ = "Tom et Jerry|Tom and Jerry|Tom y Jerry";

module.exports = [
  // ---------- Les Simpson ----------
  ["Kent Brockman", "kent brockman", SIMP, "6 3 5 3 3 3 3 3 4 2 1 1 6 5 9 5 4"],
  ["Professeur Frink", "frink|professeur frink|profesor frink", SIMP, "8 1 9 1 8 4 6 2 4 3 3 0 2 3 10 4 7"],
  ["Dr Hibbert", "hibbert|dr hibbert|docteur hibbert", SIMP, "8 3 7 2 2 4 5 3 5 2 2 1 7 2 6 5 2"],
  ["Lenny et Carl", "lenny|lenny et carl|carl carlson|lenny leonard", SIMP, "7 4 4 0 5 4 7 6 7 2 3 0 2 2 6 3 6", "friend"],
  ["Otto", "otto|otto mann", SIMP, "8 3 1 0 8 4 6 8 6 6 2 0 0 1 6 2 7"],
  ["Martin Prince", "martin prince", SIMP, "5 1 8 0 6 2 6 1 3 2 4 0 3 4 9 3 9"],
  ["Rod et Todd Flanders", "rod et todd|rod flanders|todd flanders", SIMP, "5 1 3 0 4 2 9 1 3 3 8 1 3 0 5 1 5"],
  ["Gros Tony", "gros tony|fat tony|tony el gordo", SIMP, "5 7 6 8 2 5 2 3 7 2 0 7 8 6 5 8 3"],
  ["Snake", "snake|snake jailbird|serpiente", SIMP, "6 6 4 7 4 6 1 4 4 7 0 5 1 7 5 6 8"],
  ["Troy McClure", "troy mcclure", SIMP, "7 3 2 1 4 3 4 4 4 2 3 0 4 2 9 5 7"],
  ["Lionel Hutz", "lionel hutz|hutz", SIMP, "8 2 2 2 7 3 3 6 6 2 1 0 0 3 8 6 9"],
  ["Maude Flanders", "maude|maude flanders", SIMP, "3 2 5 0 3 3 8 1 3 2 4 0 4 2 6 2 9"],
  ["Agnès Skinner", "agnes skinner", SIMP, "4 3 5 5 2 5 1 2 4 1 0 6 2 10 8 5 3"],
  ["Petit Papa Noël", "petit papa noel|santa s little helper|ayudante de santa|le chien des simpson", SIMP, "7 4 1 0 7 4 8 6 8 7 7 0 0 2 0 1 7", "friend"],
  ["Itchy et Scratchy", "itchy|scratchy|itchy et scratchy|tomy y daly", SIMP, "8 5 3 8 5 6 0 3 4 6 4 7 1 9 2 6 8"],
  // ---------- Les Griffin ----------
  ["Cleveland Brown", "cleveland|cleveland brown", FG, "6 3 4 0 6 3 8 4 5 2 3 0 2 1 6 2 9"],
  ["Joe Swanson", "joe swanson", FG, "6 9 5 1 3 9 6 2 5 3 2 3 2 8 7 4 7", "hero"],
  ["Mort Goldman", "mort goldman", FG, "6 1 4 0 6 1 6 2 4 1 2 0 4 3 7 3 8"],
  ["Ernie le poulet", "ernie|ernie le poulet|ernie the giant chicken", FG, "6 9 2 5 4 9 1 3 5 6 1 6 0 9 0 3 7"],
  ["Adam West", "adam west", FG, "9 3 1 0 8 6 6 4 4 3 2 0 4 2 8 1 3", "leader"],
  // ---------- American Dad! ----------
  ["Stan Smith", "stan smith", AD, "8 7 4 3 6 8 4 2 5 5 1 3 3 9 8 5 7"],
  ["Klaus (American Dad)", "klaus american dad|klaus le poisson", AD, "7 0 6 3 3 2 3 6 4 0 4 0 0 7 8 6 9"],
  ["Steve Smith", "steve smith", AD, "8 2 6 0 7 4 6 4 5 3 4 0 1 4 8 5 8"],
  ["Francine Smith", "francine|francine smith", AD, "7 4 4 1 6 5 7 4 5 3 5 1 3 4 8 4 5"],
  ["Hayley Smith", "hayley|hayley smith", AD, "6 4 6 1 3 6 6 6 5 4 4 0 1 7 7 5 5"],
  // ---------- Futurama ----------
  ["Hermes Conrad", "hermes|hermes conrad", FUT, "7 4 7 1 2 5 5 1 5 4 2 0 3 6 8 5 5"],
  ["Amy Wong", "amy|amy wong", FUT, "7 3 6 0 7 5 6 4 5 4 6 0 9 3 8 4 5"],
  ["Kif Kroker", "kif|kif kroker", FUT, "4 2 6 0 5 3 9 2 4 2 6 0 1 1 3 2 9"],
  ["Zapp Brannigan", "zapp|zapp brannigan", FUT, "9 4 1 3 9 6 2 4 6 3 1 1 3 6 10 2 7", "leader"],
  ["Nibbler", "nibbler|grignoteur", FUT, "6 7 10 0 2 7 6 7 10 6 9 2 0 2 2 9 3", "glutton"],
  ["Maman (Futurama)", "mom futurama|maman futurama|mama futurama", FUT, "4 7 8 9 1 5 0 2 4 3 0 8 10 10 6 9 3"],
  ["Hypnocrapaud", "hypnotoad|hypnocrapaud|hipnosapo", FUT, "5 2 6 3 0 4 3 9 5 0 3 6 0 0 0 10 1"],
  ["Calculon", "calculon", FUT, "8 7 5 2 4 5 3 3 2 4 1 2 7 8 9 4 6"],
  // ---------- South Park ----------
  ["Chef", "chef|chef south park|jerome mcelroy", SP, "8 6 6 0 3 6 8 3 6 3 2 0 3 2 8 5 6", "chef|teacher"],
  ["M. Garrison", "mr garrison|monsieur garrison|herbert garrison", SP, "8 4 3 5 6 4 2 5 5 3 1 3 2 8 8 4 7"],
  ["M. Mackey", "mr mackey|monsieur mackey", SP, "8 2 4 0 6 3 5 2 4 2 2 0 2 4 8 2 6", "teacher"],
  ["Wendy Testaburger", "wendy testaburger", SP, "5 6 8 0 2 8 6 1 3 5 5 0 2 7 7 6 3"],
  ["Timmy (South Park)", "timmy south park", SP, "9 2 2 0 6 7 8 3 5 4 7 0 1 2 1 2 5"],
  ["Tweek", "tweek|tweek tweak", SP, "7 2 4 0 7 1 6 1 5 6 5 0 1 6 8 2 8"],
  ["Craig Tucker", "craig tucker", SP, "5 4 5 1 2 5 4 6 4 3 2 1 1 4 1 6 4"],
  ["M. Hankey", "mr hankey|monsieur hankey|el senor mojon", SP, "8 1 3 0 4 3 8 2 3 2 5 4 0 1 7 2 7"],
  ["PC Principal", "pc principal|proviseur pc", SP, "7 9 3 3 3 6 4 2 5 5 1 4 2 9 8 3 4"],
  ["Jimmy Valmer", "jimmy valmer", SP, "8 2 6 1 5 6 6 2 4 2 4 0 1 3 7 6 5"],
  ["Ike Broflovski", "ike|ike broflovski", SP, "6 4 8 1 3 7 4 2 4 5 7 0 1 4 2 6 6"],
  ["Terrance et Philip", "terrance|philip|terrance et philip", SP, "8 2 1 0 6 3 5 4 4 3 2 0 4 1 7 2 5"],
  // ---------- Rick et Morty ----------
  ["Birdperson", "birdperson|homme oiseau", RM, "2 8 8 0 1 9 7 2 3 7 2 4 1 2 2 7 9", "friend"],
  ["Squanchy", "squanchy", RM, "9 7 3 2 5 7 6 6 9 5 4 4 0 7 8 4 5"],
  ["M. Meeseeks", "mr meeseeks|meeseeks|monsieur meeseeks", RM, "9 4 4 2 6 6 7 0 3 7 4 3 0 9 9 3 8"],
  ["Evil Morty", "evil morty|morty malefique|morty malvado", RM, "1 4 10 8 0 6 1 2 3 3 2 7 4 3 2 10 3", "leader"],
  ["Pickle Rick", "pickle rick|rick cornichon|pepinillo rick", RM, "10 8 10 4 2 9 2 3 3 6 3 4 1 8 9 9 5", "survivor"],
  ["Krombopulos Michael", "krombopulos michael", RM, "7 7 5 7 2 7 3 3 5 6 2 5 4 1 8 6 7"],
  ["Scary Terry", "scary terry|terry le terrifiant", RM, "7 6 4 6 4 5 4 3 4 5 1 8 1 5 7 4 5"],
  ["Noob-Noob", "noob noob", RM, "7 2 2 0 6 3 9 3 5 3 6 0 0 1 6 1 8"],
  // ---------- Bob's Burgers / BoJack / Rois du Texas / Archer ----------
  ["Linda Belcher", "linda|linda belcher", BOB, "9 4 4 0 6 6 9 4 6 4 3 0 1 3 10 4 6", "dancer"],
  ["Gene Belcher", "gene|gene belcher", BOB, "10 3 3 0 7 5 7 6 9 4 5 0 0 3 10 3 5"],
  ["Jimmy Pesto", "jimmy pesto", BOB, "5 5 4 5 3 4 2 3 5 3 1 2 6 6 6 6 3"],
  ["Princess Carolyn", "princess carolyn", BJ, "6 4 8 0 2 7 7 0 4 6 5 0 5 5 9 8 7"],
  ["Diane Nguyen", "diane nguyen", BJ, "5 3 9 0 4 6 7 3 4 3 3 0 3 5 6 6 7"],
  ["Peggy Hill", "peggy|peggy hill", KOTH, "6 4 4 0 6 5 6 2 4 3 2 0 2 6 9 4 6"],
  ["Bobby Hill", "bobby|bobby hill", KOTH, "8 2 4 0 6 4 7 7 9 2 4 0 1 2 8 5 5"],
  ["Dale Gribble", "dale|dale gribble", KOTH, "8 3 2 0 8 3 5 4 5 3 1 1 1 5 9 4 8"],
  ["Boomhauer", "boomhauer", KOTH, "7 4 5 0 3 5 6 6 5 5 2 0 1 1 9 5 3"],
  ["Sterling Archer", "archer|sterling archer", ARC, "9 7 5 4 5 8 2 6 7 7 2 3 6 7 9 6 7"],
  ["Lana Kane", "lana|lana kane", ARC, "5 8 7 1 1 9 5 1 4 7 4 3 3 8 6 6 5"],
  ["Malory Archer", "malory|malory archer", ARC, "6 3 7 7 2 5 1 3 4 2 0 4 8 9 7 9 3"],
  ["Krieger", "krieger|algernop krieger", ARC, "7 3 9 6 3 5 3 3 4 3 1 6 2 3 5 6 4"],
  ["Pam Poovey", "pam|pam poovey", ARC, "9 8 5 1 4 8 6 4 8 5 2 3 1 4 9 5 4", "glutton"],
  // ---------- Arcane ----------
  ["Jinx", "jinx|powder", ARCANE, "8 6 9 7 4 8 3 2 4 8 5 8 1 10 8 7 9"],
  ["Vi", "vi|violet arcane", ARCANE, "5 9 5 1 3 10 7 2 5 8 3 5 1 8 4 4 9", "hero"],
  ["Caitlyn", "caitlyn|caitlyn kiramman", ARCANE, "3 5 8 0 2 8 7 1 4 6 5 2 9 5 4 7 6"],
  ["Jayce", "jayce|jayce talis", ARCANE, "4 7 9 1 3 8 6 1 4 5 3 2 6 6 6 5 5", "leader"],
  ["Viktor", "viktor", ARCANE, "3 3 10 3 3 7 7 1 3 2 2 4 1 2 4 6 9"],
  ["Silco", "silco", ARCANE, "2 6 9 9 0 7 3 1 3 4 0 9 6 6 5 10 6", "leader"],
  ["Vander", "vander", ARCANE, "4 9 6 0 1 9 9 1 5 4 2 4 2 3 4 6 9", "leader"],
  ["Ekko", "ekko", ARCANE, "6 6 9 0 2 9 8 1 4 9 6 2 1 3 5 8 5", "leader"],
  ["Heimerdinger", "heimerdinger", ARCANE, "6 1 10 0 4 4 8 2 4 2 9 0 4 1 9 4 6", "teacher"],
  ["Mel Medarda", "mel medarda", ARCANE, "3 4 9 2 0 6 5 1 3 4 4 2 10 2 5 9 6"],
  // ---------- Castlevania / Invincible ----------
  ["Trevor Belmont", "trevor|trevor belmont", CV, "8 8 6 1 3 9 5 6 7 7 1 5 0 6 7 6 7"],
  ["Sypha Belnades", "sypha|sypha belnades", CV, "6 7 8 0 2 9 8 1 4 6 5 3 0 6 7 6 5"],
  ["Alucard (Castlevania)", "alucard castlevania|adrian tepes", CV, "3 9 9 1 0 8 6 3 3 9 4 5 6 3 3 7 8"],
  ["Dracula (Castlevania)", "dracula castlevania|vlad tepes", CV, "1 10 9 9 0 7 2 3 3 6 0 10 8 9 5 8 9"],
  ["Invincible", "invincible|mark grayson", INV, "6 9 6 0 4 9 8 2 6 9 4 4 2 6 6 4 9", "hero"],
  ["Omni-Man", "omni man|omniman|nolan grayson", INV, "2 10 8 8 1 9 3 1 5 10 1 9 3 7 4 8 5"],
  ["Atom Eve", "atom eve|eve wilkins", INV, "5 8 8 0 2 9 9 1 4 7 5 2 7 4 5 5 5", "hero"],
  ["Allen l'Alien", "allen the alien|allen l alien", INV, "8 9 4 0 4 9 9 2 6 7 4 3 1 2 8 3 6", "hero"],
  // ---------- Hazbin Hotel / Helluva Boss ----------
  ["Charlie Morningstar", "charlie morningstar", HH, "8 6 4 0 6 9 10 1 4 5 8 1 9 2 10 3 7", "leader|dancer"],
  ["Alastor", "alastor|radio demon|demon de la radio", HH, "8 9 9 8 0 7 2 3 6 7 3 10 5 3 9 10 2", "dancer|chef"],
  ["Angel Dust", "angel dust", HH, "9 7 5 3 4 6 5 5 6 6 5 3 2 5 10 7 8", "dancer"],
  ["Vaggie", "vaggie", HH, "4 7 6 0 2 8 7 1 4 6 5 3 1 9 6 5 4"],
  ["Husk", "husk", HH, "6 7 6 2 3 5 5 8 6 4 3 4 1 6 4 6 7"],
  ["Lucifer Morningstar", "lucifer morningstar|lucifer hazbin", HH, "8 10 7 2 6 6 6 4 5 7 4 6 10 5 9 6 5", "dancer"],
  ["Blitzø", "blitzo|blitz", HB, "9 7 5 5 6 7 4 3 6 6 3 5 1 8 10 7 8", "leader"],
  ["Moxxie", "moxxie", HB, "6 5 6 1 6 5 7 1 4 4 6 2 1 5 6 3 7"],
  ["Millie", "millie", HB, "8 8 3 3 4 9 7 2 6 6 6 4 1 4 7 3 4"],
  ["Loona", "loona", HB, "6 7 5 3 2 6 3 9 6 7 5 5 1 9 2 5 4"],
  ["Stolas", "stolas", HB, "7 8 8 2 5 5 7 4 5 4 4 4 9 3 9 5 8"],
  // ---------- The Amazing Digital Circus ----------
  ["Pomni", "pomni", TADC, "6 2 6 0 8 4 8 2 3 6 9 0 0 5 6 3 10"],
  ["Jax", "jax", TADC, "9 5 7 5 2 4 1 7 4 6 3 3 0 6 8 8 3"],
  ["Caine", "caine", TADC, "9 9 6 3 4 5 5 2 3 8 3 5 1 6 10 5 4", "leader"],
  ["Ragatha", "ragatha", TADC, "5 4 6 0 5 6 9 1 4 4 8 0 0 2 7 4 7", "friend"],
  ["Gangle", "gangle", TADC, "4 2 5 0 6 3 8 3 4 3 8 0 0 2 4 2 9"],
  ["Kinger", "kinger", TADC, "8 2 4 0 9 3 7 4 5 3 6 0 1 4 7 2 8"],
  ["Zooble", "zooble", TADC, "6 3 6 1 3 5 4 6 4 4 4 1 0 7 3 5 6"],
  // ---------- Bluey / Peppa Pig ----------
  ["Chilli", "chilli|maman de bluey", BLUEY, "8 5 8 0 3 7 9 2 5 5 5 0 2 3 7 6 3"],
  ["Muffin", "muffin bluey", BLUEY, "9 4 3 1 6 7 5 4 7 6 8 1 1 9 9 4 4"],
  ["Socks", "socks bluey", BLUEY, "8 4 2 0 6 6 7 4 6 7 9 0 1 4 1 3 4"],
  ["Calypso", "calypso bluey", BLUEY, "6 3 8 0 1 6 10 1 4 3 6 0 2 0 6 6 2", "teacher"],
  ["Suzy Mouton", "suzy|suzy sheep|suzy mouton", PEP, "6 3 5 1 3 5 6 2 4 4 8 0 2 5 9 4 4", "friend"],
  ["Danny Chien", "danny dog|danny chien", PEP, "7 4 4 0 4 6 7 2 4 5 8 0 2 3 7 3 3"],
  ["Rebecca Lapin", "rebecca rabbit|rebecca lapin", PEP, "6 3 4 0 4 5 8 2 5 6 9 0 1 2 6 3 3"],
  ["Pedro Poney", "pedro pony|pedro poney", PEP, "6 3 4 0 7 4 7 4 4 3 8 0 2 1 5 2 6"],
  ["Papi Pig", "grandpa pig|papi pig|grand pere pig", PEP, "7 4 7 0 3 6 9 3 6 2 6 0 4 4 7 5 3"],
  ["Madame Gazelle", "madame gazelle|mme gazelle", PEP, "6 4 7 0 2 6 9 2 4 3 5 0 2 2 7 4 2", "teacher|dancer"],
  // ---------- Bob l'éponge ----------
  ["Karen", "karen|karen plankton", SB, "7 2 9 3 1 5 3 2 0 3 3 2 1 6 7 8 4"],
  ["Calamarcel", "squilliam|calamarcel|calamardo guapo", SB, "3 2 6 5 2 3 1 3 4 2 1 2 9 6 7 6 3"],
  ["Super Héros Man et Super Boy", "mermaid man|barnacle boy|super heros man|super boy", SB, "9 5 2 0 8 7 7 6 5 3 3 1 2 6 8 2 6", "hero"],
  ["Le Hollandais volant", "hollandais volant|flying dutchman|holandes errante", SB, "6 8 5 7 3 7 1 4 4 7 0 9 4 9 8 6 5"],
  ["Patchy le pirate", "patchy|patchy le pirate|patchy the pirate", SB, "8 3 2 0 8 5 7 3 5 3 3 0 1 5 9 2 8"],
  // ---------- Nickelodeon ----------
  ["Chuckie Finster", "chuckie|chuckie finster", RUG, "6 2 5 0 7 2 9 2 4 3 7 0 1 3 6 2 8"],
  ["Phil et Lil", "lil|phil et lil|phil y lil", RUG, "9 3 2 0 6 6 6 4 9 4 8 0 1 4 7 3 4"],
  ["Reptar", "reptar", RUG, "6 10 2 3 4 9 4 3 6 6 5 7 1 7 1 2 4", "hero"],
  ["Stu Pickles", "stu|stu pickles", RUG, "6 3 7 0 7 5 7 3 5 3 3 0 3 3 6 4 7"],
  ["Gérald", "gerald|gerald johanssen", HA, "6 4 6 0 2 6 8 3 4 5 4 0 1 2 8 6 3", "friend"],
  ["Big Bob Pataki", "big bob|big bob pataki", HA, "5 6 4 3 3 5 2 2 6 3 0 3 8 9 9 6 5"],
  ["Appa", "appa", AV, "6 9 3 0 4 8 9 7 9 7 9 1 0 2 0 1 5", "friend"],
  ["Momo", "momo avatar", AV, "8 2 4 0 5 5 7 3 9 8 9 0 0 3 0 4 4", "glutton"],
  ["Korra", "korra", LOK, "7 9 5 0 5 10 7 2 7 7 4 3 1 8 7 4 8", "hero"],
  ["Mako", "mako", LOK, "3 8 7 0 2 8 6 2 4 7 3 3 1 4 2 6 6"],
  ["Bolin", "bolin", LOK, "9 7 3 0 7 7 9 3 7 5 6 1 1 2 9 3 6", "friend"],
  ["Amon", "amon", LOK, "1 8 9 8 0 7 1 1 3 6 0 8 3 4 6 9 7", "leader"],
  ["Tenzin", "tenzin", LOK, "5 7 8 0 2 8 8 1 4 6 3 1 1 6 6 5 5", "teacher|leader"],
  ["Vicky", "vicky", FOP, "4 5 6 9 2 5 0 5 5 5 1 6 2 9 6 7 4"],
  ["Denzel Crocker", "crocker|denzel crocker|monsieur crocker", FOP, "8 3 6 6 9 5 1 2 4 3 0 4 1 9 9 3 10"],
  ["Jorgen Von Strangle", "jorgen|jorgen von strangle", FOP, "6 10 3 2 4 8 3 2 6 5 1 6 4 9 7 3 3"],
  ["Poof", "poof", FOP, "6 2 2 0 4 3 7 4 6 4 10 0 1 1 0 1 3"],
  ["Carl Wheezer", "carl wheezer|carl jimmy neutron", JN, "7 1 3 0 8 2 8 3 6 2 5 0 1 1 7 1 9"],
  ["Sheen Estevez", "sheen|sheen estevez", JN, "9 3 1 0 8 6 7 4 6 6 4 0 1 3 10 2 5"],
  ["Goddard", "goddard", JN, "6 8 9 0 2 8 9 1 2 8 8 1 0 1 0 6 3", "friend"],
  ["Sam Manson", "sam manson", DP, "5 5 8 0 3 8 7 2 3 5 4 3 7 6 6 6 4"],
  ["Tucker Foley", "tucker|tucker foley", DP, "8 3 7 0 6 5 8 4 8 4 4 0 2 3 8 5 6", "glutton"],
  ["Vlad Plasmius", "vlad plasmius|vlad masters|plasmius", DP, "4 8 9 8 1 6 1 2 4 6 0 7 10 7 6 9 8"],
  ["Zim", "zim|invader zim", ZIM, "8 4 6 7 8 7 1 2 4 5 3 3 1 10 10 5 9"],
  ["GIR", "gir", ZIM, "10 5 0 1 9 6 7 5 9 6 9 1 0 1 9 0 4", "glutton"],
  ["Dib", "dib|dib membrane", ZIM, "6 3 8 0 6 8 6 1 4 4 3 2 3 7 9 5 9"],
  ["Rocko", "rocko", "La Vie moderne de Rocko|Rocko's Modern Life|La vida moderna de Rocko", "6 3 6 0 6 4 9 2 4 3 7 0 1 2 5 3 8"],
  ["Heffer", "heffer|heffer wolfe", "La Vie moderne de Rocko|Rocko's Modern Life|La vida moderna de Rocko", "9 6 2 0 7 4 8 7 10 2 5 0 1 1 7 2 5", "glutton|friend"],
  ["ChienChat", "catdog|chienchat|gatoperro", "ChienChat|CatDog|CatDog", "8 4 4 0 7 4 7 4 6 4 6 0 0 6 8 3 8"],
  ["Ren et Stimpy", "ren|stimpy|ren et stimpy|ren y stimpy", "Ren et Stimpy|The Ren & Stimpy Show|Ren y Stimpy", "9 4 2 3 8 4 5 5 7 4 3 4 0 9 7 3 7"],
  ["Lori Loud", "lori|lori loud", LOUD, "5 5 6 0 3 6 6 3 4 5 5 1 2 7 9 5 4", "leader"],
  ["Luna Loud", "luna loud", LOUD, "8 5 5 0 4 7 8 3 4 6 5 0 1 2 8 4 3", "dancer"],
  ["Lola Loud", "lola loud", LOUD, "5 3 6 4 2 5 3 2 4 5 9 2 2 9 8 8 3"],
  ["Lana Loud", "lana loud", LOUD, "8 5 4 0 6 8 7 3 6 6 8 1 0 3 7 4 3"],
  ["Lucy Loud", "lucy loud", LOUD, "5 2 7 0 2 5 6 3 3 4 6 7 0 1 2 6 4"],
  ["Lisa Loud", "lisa loud", LOUD, "5 2 10 1 2 5 5 2 3 3 7 1 1 4 9 7 3"],
  ["Luan Loud", "luan|luan loud", LOUD, "10 3 5 1 4 6 7 3 4 5 6 0 1 2 9 6 4"],
  ["Lynn Loud", "lynn|lynn loud", LOUD, "6 8 4 0 3 8 6 2 6 9 5 1 1 7 6 4 6"],
  ["Leni Loud", "leni|leni loud", LOUD, "8 3 1 0 8 4 9 3 4 4 7 0 1 0 8 1 5"],
  ["Clyde McBride", "clyde|clyde mcbride", LOUD, "6 2 6 0 7 3 8 2 5 3 6 0 2 2 7 3 7", "friend"],
  ["Rocky (Pat' Patrouille)", "rocky pat patrouille|rocky paw patrol", PAW, "5 5 7 0 3 6 8 2 4 6 9 0 0 2 6 5 3"],
  ["Zuma", "zuma", PAW, "6 5 5 0 3 7 8 3 4 7 9 0 0 1 6 4 3"],
  ["Everest", "everest pat patrouille|everest paw patrol", PAW, "6 6 5 0 3 8 9 2 4 7 9 0 0 2 6 4 3"],
  ["Maire Hollinger", "maire hollinger|mayor humdinger|alcalde ricardo", PAW, "7 3 6 6 7 4 2 3 5 4 1 2 5 7 8 7 9"],
  ["Diego (Dora)", "diego marquez|diego dora", DORA, "4 6 6 0 2 8 9 1 4 7 8 0 1 1 8 4 2", "hero"],
  ["Sac à dos", "sac a dos|backpack|mochila", DORA, "7 2 6 0 2 4 9 2 3 2 7 0 0 1 9 3 2", "friend"],
  ["April O'Neil", "april|april o neil", TMNT, "5 5 7 0 4 9 8 1 4 6 5 0 2 4 8 6 7"],
  ["Casey Jones", "casey jones", TMNT, "8 8 2 1 6 9 6 3 6 6 1 4 0 9 8 3 6"],
  ["Krang", "krang", TMNT, "6 3 8 8 4 5 0 2 4 2 2 8 4 9 9 7 8"],
  ["Bebop et Rocksteady", "bebop|rocksteady|bebop et rocksteady", TMNT, "9 9 0 6 9 5 2 5 8 4 0 5 1 6 7 1 10"],
  // ---------- Cartoon Network ----------
  ["Gunter (Adventure Time)", "gunter adventure time|gunter manchot", AT, "6 3 5 4 4 3 4 4 5 3 9 2 0 4 0 6 4"],
  ["Princesse Flamme", "princesse flamme|flame princess|princesa flama", AT, "4 8 5 2 3 7 6 2 4 7 6 5 7 9 4 4 5"],
  ["Majordome Menthe", "peppermint butler|majordome menthe|mayordomo menta", AT, "5 4 8 5 1 6 6 2 4 4 7 6 1 2 4 8 3"],
  ["Comte de Citronnelle", "lemongrab|comte de citronnelle|conde de limonagrio", AT, "7 4 5 6 5 3 1 2 4 2 1 6 4 10 10 3 8"],
  ["La Liche", "the lich|la liche|el lich", AT, "0 10 9 10 0 7 0 2 3 4 0 10 0 3 3 8 3"],
  ["Madame Tronc", "tree trunks|madame tronc|tronquitos", AT, "6 3 4 0 4 6 9 3 6 2 9 0 0 1 7 3 7", "chef"],
  ["Benson", "benson", RS, "5 4 6 0 3 5 5 1 4 3 1 1 1 10 8 4 6"],
  ["Skips", "skips", RS, "4 9 8 0 2 8 8 2 5 7 1 3 0 2 3 6 3", "teacher"],
  ["Pops", "pops", RS, "8 3 4 0 6 6 10 3 6 2 6 0 9 0 8 1 5"],
  ["Muscle Man", "muscle man|muscleman|musculoso", RS, "9 6 2 2 4 5 4 6 7 5 1 2 0 4 9 4 4"],
  ["Connie Maheswaran", "connie maheswaran|connie steven universe", SU, "5 7 8 0 2 9 8 1 4 7 6 0 3 3 6 6 4", "hero|friend"],
  ["Lapis Lazuli", "lapis|lapis lazuli", SU, "3 9 6 1 1 6 6 5 3 6 6 4 0 5 2 4 9"],
  ["Peridot", "peridot", SU, "8 4 9 1 6 5 6 2 4 4 7 1 0 8 9 6 6"],
  ["Jasper (Steven Universe)", "jasper steven universe", SU, "2 10 4 6 1 9 2 1 4 7 0 7 0 9 4 4 7"],
  ["Rose Quartz", "rose quartz|rose", SU, "6 8 7 2 2 9 9 2 4 5 7 1 0 1 6 7 5", "leader"],
  ["Greg Universe", "greg universe", SU, "8 4 5 0 5 6 10 6 6 3 4 0 3 0 7 3 5", "friend"],
  ["Lion", "lion steven universe|lion rose", SU, "5 9 5 0 2 7 6 9 6 10 7 3 0 4 0 4 2", "speedster"],
  ["Penny Fitzgerald", "penny fitzgerald", GUM, "5 6 6 0 4 7 9 2 4 5 8 2 2 3 6 4 5"],
  ["Nicole Watterson", "nicole|nicole watterson", GUM, "5 9 7 0 3 9 7 0 4 9 4 7 1 10 6 6 6"],
  ["Richard Watterson", "richard watterson", GUM, "10 3 0 0 9 4 8 10 10 2 6 0 1 1 9 2 8", "glutton"],
  ["Banana Joe", "banana joe", GUM, "10 2 2 0 5 4 7 4 4 4 6 0 1 1 9 2 4"],
  ["Rolf", "rolf", EDS, "8 8 4 0 4 7 6 2 6 5 1 2 1 5 8 4 4", "chef"],
  ["Jonny et Planche", "jonny|plank|jonny 2x4|planche", EDS, "8 3 1 0 7 6 7 4 5 4 3 1 0 2 9 2 7", "friend"],
  ["Sarah", "sarah ed edd n eddy|sarah eds", EDS, "4 7 4 5 2 6 2 3 4 5 2 4 1 10 8 5 4"],
  ["Nazz", "nazz", EDS, "5 4 5 0 3 5 7 3 4 5 6 0 2 2 6 4 3"],
  ["Mandark", "mandark", "Le Laboratoire de Dexter|Dexter's Laboratory|El laboratorio de Dexter", "7 2 9 7 4 4 1 1 3 3 2 4 4 8 9 8 7"],
  ["Fuzzy Lumpkins", "fuzzy|fuzzy lumpkins", PPG, "6 8 2 4 5 5 2 5 6 3 3 4 0 10 5 2 6"],
  ["Princesse Plus-de-sous", "princess morbucks|princesse plus de sous|princesa morbucks", PPG, "5 5 5 7 3 5 0 3 4 6 4 3 10 9 7 6 6"],
  ["Le Maire de Townsville", "maire de townsville|mayor of townsville|alcalde de saltadilla", PPG, "8 1 1 0 9 2 7 6 8 2 4 0 5 2 7 1 6", "leader"],
  ["Bloo", "bloo|blou", FOS, "9 3 5 3 5 6 4 5 6 6 6 0 0 6 10 7 5"],
  ["Mac", "mac fosters|mac foster", FOS, "5 2 7 0 4 6 8 2 4 4 7 0 1 4 6 5 6", "friend"],
  ["Eduardo", "eduardo|eduardo fosters", FOS, "6 9 2 0 6 1 10 3 6 3 8 4 0 2 4 1 5"],
  ["Chowder", "chowder", "Chowder", "9 3 2 0 8 5 7 4 10 4 9 0 0 3 9 2 6", "glutton"],
  ["Mung Daal", "mung daal|mung", "Chowder", "7 4 7 0 4 5 8 3 6 3 2 0 2 3 8 5 4", "chef|teacher"],
  ["Johnny Test", "johnny test", "Johnny Test", "8 4 3 1 7 8 5 5 6 7 4 0 2 5 8 5 7"],
  ["Gwen Tennyson", "gwen tennyson", BEN, "4 6 9 0 2 8 7 1 4 6 6 1 2 6 7 7 3", "hero"],
  ["Grand-père Max", "grand pere max|max tennyson|abuelo max", BEN, "7 8 8 0 2 9 9 2 7 4 3 2 2 2 7 6 4", "teacher|chef"],
  ["Vilgax", "vilgax", BEN, "1 10 7 9 1 8 0 1 4 6 0 9 6 9 5 7 7"],
  ["Kevin Levin", "kevin levin|kevin 11", BEN, "5 9 6 4 2 8 4 3 5 6 2 5 2 8 5 7 6"],
  ["Wirt", "wirt", OTGW, "5 2 6 0 7 4 7 3 4 3 4 0 1 5 7 3 8"],
  ["Greg (Over the Garden Wall)", "greg otgw|greg over the garden wall", OTGW, "10 3 2 0 7 9 10 3 6 5 9 0 0 0 9 3 4", "friend"],
  ["Beatrice", "beatrice otgw|beatrice", OTGW, "6 4 7 2 3 6 5 2 4 6 4 1 0 7 7 7 7"],
  ["La Bête (Over the Garden Wall)", "la bete otgw|the beast otgw", OTGW, "0 9 8 10 0 6 0 3 3 3 0 10 0 3 3 9 4"],
  ["Slade", "slade|deathstroke", "Teen Titans", "1 9 9 8 0 8 1 1 3 8 0 9 5 4 3 10 3"],
  ["Vache et Poulet", "vache et poulet|cow and chicken|vaca y pollito", "Vache et Poulet|Cow and Chicken|Vaca y Pollito", "9 7 2 0 8 6 7 4 7 5 5 0 0 5 8 2 8"],
  ["Beavis et Butt-Head", "beavis|butt head|beavis et butt head", "Beavis et Butt-Head|Beavis and Butt-Head|Beavis y Butt-Head", "8 3 0 2 9 3 2 9 7 3 0 2 0 6 6 2 8"],
  ["Huey Freeman", "huey|huey freeman", "The Boondocks", "6 5 9 1 1 8 4 2 4 5 3 3 1 7 6 8 4"],
  ["Riley Freeman", "riley|riley freeman", "The Boondocks", "9 5 3 4 4 7 3 6 6 5 3 3 1 8 9 6 5"],
  // ---------- DC / Marvel ----------
  ["Harley Quinn", "harley|harley quinn", BAT, "9 6 8 7 4 8 4 3 5 7 6 6 3 8 10 7 8"],
  ["Catwoman", "catwoman|selina kyle", BAT, "5 7 8 5 1 8 4 3 4 9 6 3 6 5 5 10 4"],
  ["Poison Ivy", "poison ivy|pamela isley", BAT, "3 5 9 7 1 7 3 3 3 5 5 7 3 7 5 8 4"],
  ["Le Pingouin", "pingouin|penguin batman|oswald cobblepot|el pinguino", BAT, "6 4 8 8 4 5 1 3 7 3 0 6 9 8 8 9 6"],
  ["Double-Face", "double face|two face|harvey dent|dos caras", BAT, "2 7 7 8 2 7 2 2 3 4 0 8 5 9 5 7 9"],
  ["L'Épouvantail", "epouvantail|scarecrow|espantapajaros", BAT, "2 4 9 9 2 4 0 2 2 4 0 10 3 6 6 8 6"],
  ["Mr. Freeze", "mr freeze|monsieur freeze|victor fries", BAT, "1 8 9 6 1 6 4 2 2 3 0 7 4 4 3 7 9"],
  ["Bane", "bane", BAT, "2 10 8 8 1 8 1 1 4 6 0 9 3 9 5 8 5"],
  ["Alfred", "alfred|alfred pennyworth", BAT, "7 4 9 0 1 8 9 1 4 4 2 0 6 1 6 7 3", "chef|friend"],
  ["Robin (Batman)", "robin batman|dick grayson", BAT, "7 7 7 0 3 9 8 2 5 9 5 1 3 5 8 6 6", "hero"],
  ["Superman", "superman|clark kent", JL, "4 10 8 0 3 10 10 1 6 10 4 2 3 2 5 4 4", "hero|speedster"],
  ["Wonder Woman", "wonder woman|diana prince", JL, "4 10 8 0 1 10 9 1 4 9 5 3 6 5 4 6 4", "hero|leader"],
  ["Lex Luthor", "lex|lex luthor", JL, "2 5 10 9 0 6 1 1 3 3 0 7 10 8 7 10 5"],
  ["Aquaman", "aquaman|arthur curry", JL, "4 9 6 0 2 9 6 2 5 9 2 4 7 7 5 5 6", "hero|leader"],
  ["Green Lantern", "green lantern|hal jordan|john stewart", JL, "5 9 7 0 2 10 7 2 4 9 2 3 2 6 6 6 5", "hero"],
  ["The Flash", "the flash|barry allen|wally west", JL, "9 6 7 0 5 9 9 3 9 10 5 0 2 3 9 5 6", "speedster|hero"],
  ["Martian Manhunter", "martian manhunter|j onn j onzz|limier martien", JL, "2 10 9 0 1 9 8 2 5 7 2 5 2 2 3 7 9", "hero"],
  ["Wolverine", "wolverine|serval|logan", XM, "6 9 6 2 2 10 6 3 6 7 1 7 1 10 5 6 8", "hero|survivor"],
  ["Tornade", "tornade|storm x men|ororo", XM, "3 9 7 0 1 9 8 1 3 8 4 5 2 6 4 6 5", "hero|leader"],
  ["Cyclope", "cyclope|cyclops|scott summers", XM, "2 8 8 0 2 9 7 1 3 6 2 3 2 6 5 7 6", "hero|leader"],
  ["Magneto", "magneto", XM, "2 10 10 7 0 9 3 1 3 6 0 8 5 7 6 9 8", "leader"],
  ["Professeur Xavier", "professeur x|professor x|charles xavier", XM, "3 3 10 0 1 8 9 1 3 1 2 2 9 2 6 9 6", "teacher|leader"],
  ["Venom", "venom|eddie brock", MARV, "6 10 4 7 3 8 3 3 10 8 1 10 1 9 7 4 7", "glutton"],
  ["Docteur Octopus", "docteur octopus|doc ock|doctor octopus|otto octavius", MARV, "2 8 10 8 1 6 1 1 3 5 0 8 4 9 6 8 7"],
  ["Le Bouffon vert", "bouffon vert|green goblin|duende verde|norman osborn", MARV, "8 8 9 10 2 7 0 1 4 8 0 9 9 9 8 9 6"],
  ["Iron Man", "iron man|tony stark", MARV, "9 8 10 1 2 9 6 3 6 8 2 2 10 6 9 8 5", "hero|leader"],
  ["Hulk", "hulk|bruce banner", MARV, "5 10 3 2 6 8 5 3 7 6 2 9 1 10 2 1 8", "hero"],
  ["Captain America", "captain america|steve rogers", MARV, "3 9 7 0 1 10 9 1 5 7 3 2 2 3 5 6 6", "hero|leader"],
  ["Thor", "thor", MARV, "7 10 4 0 4 10 7 2 8 8 2 4 8 6 7 3 5", "hero|glutton"],
  ["Deadpool", "deadpool|wade wilson", MARV, "10 8 6 5 5 9 4 5 8 8 2 6 2 6 10 7 9", "survivor"],
  // ---------- Looney Tunes / Tiny Toons / Tom et Jerry ----------
  ["Gossamer", "gossamer", LT, "6 9 1 4 6 5 3 3 7 5 3 8 0 6 0 1 5"],
  ["Michigan J. Frog", "michigan j frog|grenouille chantante", LT, "8 2 4 1 2 4 4 5 3 4 6 0 0 3 9 6 2", "dancer"],
  ["Petunia Pig", "petunia|petunia pig", LT, "5 2 4 0 3 3 7 2 4 3 7 0 1 5 6 3 4"],
  ["Hector le bouledogue", "hector bulldog|hector le bouledogue", LT, "5 8 3 1 5 6 6 4 6 4 2 4 0 6 2 3 5"],
  ["Scrappy-Doo", "scrappy|scrappy doo", "Scooby-Doo", "8 4 3 0 6 10 7 2 6 7 8 0 0 7 9 4 5"],
  ["Spike", "spike|spike tom et jerry|spike le bouledogue", TJ, "6 9 3 2 4 8 6 5 6 5 2 5 0 8 5 3 5"],
  ["Tuffy", "tuffy|nibbles|tuffy tom et jerry", TJ, "8 2 5 0 5 7 7 2 8 6 10 0 0 3 3 5 3", "glutton"],
  ["Buster Bunny", "buster bunny", TT, "9 4 7 1 2 7 6 3 5 8 6 0 1 3 8 8 2"],
  ["Babs Bunny", "babs bunny", TT, "9 4 6 1 3 7 6 3 5 8 7 0 1 4 9 8 2"],
  ["Plucky Duck", "plucky|plucky duck", TT, "8 3 3 3 8 4 3 5 5 5 4 0 1 8 9 6 9"],
  ["Montana Max", "montana max", TT, "4 3 5 8 4 4 0 3 5 3 1 5 10 10 7 6 8"],
  // ---------- Hanna-Barbera ----------
  ["Pénélope Jolicœur", "penelope|penelope jolicoeur|penelope pitstop|penelope glamour", HBR, "5 3 6 0 4 7 8 2 3 8 7 0 6 2 7 5 8", "speedster"],
  ["Betty Laroche", "betty rubble|betty laroche|betty marmol", FL, "6 3 6 0 3 5 8 2 4 3 6 0 2 2 7 4 3"],
  ["Dino", "dino pierrafeu|dino flintstones", FL, "8 7 1 0 7 4 9 3 7 7 8 0 0 2 1 1 4", "friend"],
  ["Bamm-Bamm", "bamm bamm|bam bam", FL, "6 10 1 0 4 6 7 2 6 4 8 1 0 4 1 1 2"],
  ["Pebbles", "pebbles|galet|pebbles pierrafeu", FL, "6 3 4 0 4 5 8 2 4 4 9 0 1 3 4 3 2"],
  ["Rosie", "rosie|rosie jetson|robotina", JET, "7 7 7 0 2 6 8 0 2 5 5 0 0 5 8 4 3", "chef"],
  ["Astro", "astro jetson|astro chien", JET, "8 4 2 0 7 3 9 4 7 5 8 0 0 1 4 2 5"],
  ["Roquet Belles-Oreilles", "huckleberry hound|roquet belles oreilles|huckleberry", HBR, "6 4 4 0 5 5 8 4 5 3 5 0 0 0 6 3 6"],
  ["Hong Kong Fou Fou", "hong kong phooey|hong kong fou fou", HBR, "8 4 1 0 9 8 7 4 5 6 5 0 0 3 7 1 5", "hero"],
  ["Capitaine Caverne", "captain caveman|capitaine caverne|capitan cavernicola", HBR, "9 9 2 0 7 8 7 3 9 6 5 3 0 6 4 2 5", "hero|glutton"],
  ["Space Ghost", "space ghost", HBR, "6 9 5 0 4 9 6 3 4 9 2 4 2 6 8 4 4", "hero"],
  ["Snagglepuss", "snagglepuss|lion des montagnes", HBR, "8 4 5 0 5 3 6 4 5 4 5 0 0 3 9 5 6"],
  // ---------- Disney Channel et Disney TV ----------
  ["Soos", "soos|soos ramirez", GF, "9 6 3 0 7 6 10 4 7 3 6 0 1 0 8 3 6", "friend"],
  ["Wendy Corduroy", "wendy corduroy", GF, "7 6 6 0 2 7 6 7 4 6 4 0 1 2 5 6 3"],
  ["Gideon Gleeful", "gideon gleeful|petit gideon", GF, "6 2 7 9 3 4 0 2 5 3 6 5 6 9 9 9 7"],
  ["Ford Pines", "ford|ford pines|stanford pines|grand oncle ford", GF, "4 6 10 0 2 9 6 1 4 5 2 2 2 6 7 8 9"],
  ["Baljeet", "baljeet", PH, "6 2 9 0 5 3 7 1 4 3 6 0 1 4 7 4 7"],
  ["Buford", "buford", PH, "7 7 2 3 4 6 5 4 7 4 3 3 1 6 6 4 4"],
  ["Major Monogram", "major monogram|commandant monogram", PH, "6 5 6 0 4 7 7 2 4 3 2 1 2 5 7 4 5", "leader"],
  ["Eda Clawthorne", "eda|eda clawthorne|la dame hibou", OWL, "9 8 8 2 3 9 7 5 6 6 3 4 1 7 8 9 7", "teacher"],
  ["King (Maison du Hibou)", "king owl house|king maison du hibou", OWL, "10 3 4 2 5 6 6 5 8 5 10 3 0 7 10 5 6"],
  ["Anne Boonchuy", "anne|anne boonchuy", "Amphibia", "7 7 6 0 4 9 8 2 5 6 5 1 1 5 7 6 6", "hero"],
  ["Marco Diaz", "marco diaz", "Star Butterfly|Star vs. the Forces of Evil|Star vs. las fuerzas del mal", "6 6 6 0 4 8 8 1 4 6 5 0 2 4 6 5 6", "friend|chef"],
  ["Goliath", "goliath|gargoyles", "Gargoyles", "2 9 8 0 1 9 8 2 4 7 1 7 1 6 5 6 7", "leader|hero"],
  ["Gadget Hackwrench", "gadget hackwrench", "Tic et Tac, les rangers du risque|Chip 'n Dale: Rescue Rangers|Chip y Chop: Guardianes rescatadores", "6 2 10 0 5 7 9 1 4 4 8 0 1 1 8 5 4"],
  ["Yoyo", "yoyo|catboy|gato pyjamasques", PJ, "5 5 5 0 5 8 8 2 4 9 7 0 1 4 6 4 4", "hero|speedster"],
  ["Bibou", "bibou|owlette|buhita", PJ, "5 5 6 0 3 8 8 1 4 7 7 0 1 4 6 5 3", "hero"],
  ["Gluglu", "gluglu|gekko|gekko pyjamasques", PJ, "5 9 5 0 4 7 9 2 4 6 8 0 1 2 5 3 3", "hero"],
  ["Roméo", "romeo|romeo pyjamasques", PJ, "6 3 9 6 4 5 1 2 4 4 5 2 4 8 9 7 9"],
  ["Alya Césaire", "alya|alya cesaire", MIR, "6 4 7 0 3 8 9 1 4 5 6 0 2 4 9 7 4", "friend"],
  ["Nino Lahiffe", "nino|nino lahiffe", MIR, "8 4 5 0 4 6 8 3 4 4 5 0 1 2 7 4 4", "friend|dancer"],
  ["Chloé Bourgeois", "chloe bourgeois", MIR, "5 3 5 7 4 4 1 6 4 3 4 2 10 9 8 6 5"],
  ["Lila Rossi", "lila|lila rossi", MIR, "4 3 8 8 1 4 0 3 4 4 6 3 4 4 9 10 3"],
  ["Mayura", "mayura|nathalie sancoeur", MIR, "1 5 9 7 1 6 2 1 3 4 2 6 6 3 2 9 8"],
  // ---------- Autres séries ----------
  ["Hilda", "hilda", "Hilda", "6 4 7 0 4 9 9 1 4 6 7 0 1 4 7 6 4", "survivor"],
  ["Twig", "twig", "Hilda", "4 2 3 0 4 6 9 3 5 6 10 0 0 1 0 3 4", "friend"],
];
