// Séries TV : Looney Tunes, Hanna-Barbera, Nickelodeon, Cartoon Network, séries pour adultes, préscolaire.
// Notes (0-9) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const LT = "Looney Tunes";
const FL = "Les Pierrafeu|The Flintstones|Los Picapiedra";
const HB = "Hanna-Barbera";
const FOP = "Mes parrains sont magiques|The Fairly OddParents|Los padrinos mágicos";
const AV = "Avatar, le dernier maître de l'air|Avatar: The Last Airbender|Avatar: la leyenda de Aang";
const TMNT = "Les Tortues Ninja|Teenage Mutant Ninja Turtles|Las Tortugas Ninja";
const RUG = "Les Razmoket|Rugrats|Rugrats";
const DORA = "Dora l'exploratrice|Dora the Explorer|Dora, la exploradora";
const PAW = "La Pat' Patrouille|PAW Patrol|La Patrulla Canina";
const SU = "Steven Universe";
const RS = "Regular Show|Regular Show|Un show más";
const EDS = "Ed, Edd et Eddy|Ed, Edd n Eddy|Ed, Edd y Eddy";
const BM = "Billy et Mandy|The Grim Adventures of Billy & Mandy|Las macabras aventuras de Billy y Mandy";
const TTG = "Teen Titans Go!";
const AT = "Adventure Time|Adventure Time|Hora de aventura";
const GUM = "Le Monde incroyable de Gumball|The Amazing World of Gumball|El increíble mundo de Gumball";
const WBB = "Ours pour un et un pour tous|We Bare Bears|Escandalosos";
const COUR = "Courage, le chien froussard|Courage the Cowardly Dog|Coraje, el perro cobarde";
const PPG = "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas";
const SIMP = "Les Simpson|The Simpsons|Los Simpson";
const FG = "Les Griffin|Family Guy|Padre de familia";
const SB = "Bob l'éponge|SpongeBob SquarePants|Bob Esponja";
const SP = "South Park";
const FUT = "Futurama";
const RM = "Rick et Morty|Rick and Morty|Rick y Morty";
const BOB = "Bob's Burgers";
const BJ = "BoJack Horseman";
const BLUEY = "Bluey";
const PEP = "Peppa Pig";
const ANI = "Animaniacs";
const HM = "Les Maîtres de l'univers|Masters of the Universe|He-Man y los amos del universo";
const TF = "Transformers";
const PEA = "Snoopy|Peanuts|Snoopy";
const GAR = "Garfield";
const MIR = "Miraculous";

module.exports = [
  ["Elmer Fudd", "elmer|elmer fudd", LT, "7 3 1 3 9 4 4 3 4 2 3 2 2 8 4 2 9"],
  ["Sam le pirate", "yosemite sam|sam le pirate|sam bigotes", LT, "7 5 2 6 8 7 1 2 4 4 1 4 3 9 8 4 9"],
  ["Marvin le Martien", "marvin|marvin le martien|marvin the martian|marvin el marciano", LT, "7 2 8 7 3 5 2 2 2 4 6 3 3 4 5 7 8"],
  ["Pépé le putois", "pepe le pew|pepe le putois|pepe le pu", LT, "7 3 3 3 4 6 4 3 4 4 4 2 1 1 9 3 7"],
  ["Charlie le coq", "foghorn leghorn|charlie le coq|gallo claudio", LT, "8 6 4 2 5 6 4 4 5 4 2 0 1 5 9 6 6"],
  ["Mémé", "granny|meme|abuelita", LT, "5 5 6 0 3 7 7 1 3 3 5 0 2 6 5 6 3"],
  ["Fred Pierrafeu", "fred flintstone|fred pierrafeu|pedro picapiedra|fred caillou", FL, "8 7 3 2 8 5 6 6 9 4 2 1 2 9 9 4 7"],
  ["Barney Laroche", "barney|barney rubble|barney laroche|pablo marmol", FL, "8 5 4 0 6 5 8 5 7 4 4 0 2 3 7 4 6"],
  ["Wilma Pierrafeu", "wilma|vilma|wilma flintstone", FL, "5 4 7 0 2 6 8 1 3 3 5 0 2 6 6 5 3"],
  ["Yogi l'ours", "yogi|yogi bear|oso yogui|yogi l ours", HB, "9 7 5 2 5 6 6 6 9 3 6 0 0 2 9 8 6"],
  ["Boo-Boo", "boo boo|bubu", HB, "6 3 6 0 4 4 8 3 5 3 9 0 0 2 6 3 4"],
  ["Satanas et Diabolo", "satanas|diabolo|dick dastardly|muttley|pierre nodoyuna|patan", HB, "9 3 5 7 8 4 1 3 4 6 2 3 2 8 6 7 9"],
  ["Top Chat", "top cat|top chat|don gato", HB, "8 3 7 3 3 6 5 5 6 5 4 0 0 4 9 9 6"],
  ["George Jetson", "jetson|george jetson|super sonico", "Les Jetson|The Jetsons|Los Supersónicos", "7 3 4 0 7 4 7 6 5 4 3 0 3 5 7 3 7"],
  ["Timmy Turner", "timmy|timmy turner", FOP, "8 2 4 1 5 6 6 7 5 4 6 0 1 4 7 6 7"],
  ["Cosmo", "cosmo", FOP, "9 3 0 0 9 4 8 6 7 5 6 0 2 1 9 0 6"],
  ["Wanda", "wanda", FOP, "6 4 7 0 2 6 8 2 4 5 6 0 2 4 7 6 4"],
  ["Jimmy Neutron", "jimmy|jimmy neutron", "Jimmy Neutron", "6 2 9 0 5 7 6 1 3 5 5 0 2 6 8 6 7"],
  ["Danny Fantôme", "danny phantom|danny fantome|danny fenton", "Danny Fantôme|Danny Phantom|Danny Phantom", "7 8 6 0 5 9 8 3 5 8 5 3 2 5 6 6 7"],
  ["Aang", "aang", AV, "8 7 6 0 4 9 9 3 5 9 8 0 1 2 7 6 6"],
  ["Katara", "katara", AV, "4 7 7 0 2 9 9 1 3 6 7 1 1 7 7 5 5"],
  ["Sokka", "sokka", AV, "9 5 7 0 7 7 8 3 8 5 5 0 1 4 9 7 7"],
  ["Zuko", "zuko|prince zuko", AV, "4 8 6 4 5 9 6 1 3 7 3 4 8 9 3 5 9"],
  ["Toph", "toph|toph beifong", AV, "8 9 7 1 2 9 5 3 4 6 5 2 8 8 7 7 3"],
  ["Oncle Iroh", "iroh|oncle iroh|tio iroh", AV, "7 7 9 0 3 8 9 4 7 4 6 1 4 1 7 6 4"],
  ["Azula", "azula", AV, "3 8 8 9 1 8 0 1 2 8 2 8 9 9 6 9 4"],
  ["Leonardo", "leonardo|leo", TMNT, "4 8 7 0 2 9 8 1 6 8 5 1 0 5 5 6 4"],
  ["Raphael", "raphael|raph", TMNT, "6 9 5 1 3 9 6 2 7 8 4 3 0 9 5 5 4"],
  ["Donatello", "donatello|donnie", TMNT, "5 7 9 0 3 7 8 1 7 7 5 1 0 3 8 6 5"],
  ["Michelangelo", "michelangelo|mikey|michelangelo", TMNT, "9 7 3 0 6 7 8 5 9 8 6 1 0 2 9 4 4"],
  ["Splinter", "maitre splinter|splinter|maestro splinter", TMNT, "4 8 9 0 1 8 8 2 3 7 4 2 0 4 4 7 6"],
  ["Shredder", "shredder|destructor", TMNT, "2 8 7 9 2 7 0 1 3 7 0 8 7 9 6 8 6"],
  ["Arnold", "arnold|arnold shortman", "Hé Arnold !|Hey Arnold!|¡Oye, Arnold!", "5 3 7 0 3 8 9 1 3 3 6 0 1 1 6 5 5"],
  ["Helga Pataki", "helga|helga pataki", "Hé Arnold !|Hey Arnold!|¡Oye, Arnold!", "8 6 7 4 3 7 4 2 3 4 4 2 3 9 8 8 6"],
  ["Tommy Pickles", "tommy|tommy pickles|razmoket", RUG, "6 3 5 0 5 9 8 1 5 4 9 0 1 2 6 6 4"],
  ["Angelica Pickles", "angelica|angelica pickles", RUG, "7 4 6 7 3 5 1 3 6 4 5 2 5 9 9 8 6"],
  ["Lincoln Loud", "lincoln|lincoln loud", "Bienvenue chez les Loud|The Loud House|The Loud House", "7 3 6 0 6 6 8 2 5 5 6 0 1 3 9 7 7"],
  ["Dora", "dora|dora l exploratrice", DORA, "4 4 6 0 2 8 9 1 3 5 8 0 1 1 9 4 2"],
  ["Babouche", "boots|botas|babouche", DORA, "7 5 4 0 4 7 9 1 4 7 9 0 0 1 7 2 3"],
  ["Chipeur", "swiper|zorro|chipeur", DORA, "5 3 5 5 3 4 2 2 3 8 5 3 1 4 5 7 9"],
  ["Ryder", "ryder", PAW, "3 4 8 0 1 8 9 1 3 6 6 0 3 1 6 6 2"],
  ["Chase", "chase", PAW, "4 6 6 0 3 9 8 1 4 8 9 0 0 3 6 5 3"],
  ["Marcus", "marshall|marcus", PAW, "8 5 4 0 9 7 9 2 5 6 9 0 0 1 7 2 7"],
  ["Stella", "skye|stella", PAW, "5 4 6 0 1 8 8 1 3 8 9 0 0 1 6 4 2"],
  ["Ruben", "rubble|ruben", PAW, "6 7 3 0 5 7 8 4 9 4 9 0 0 2 6 2 4"],
  ["Steven Universe", "steven|steven universe", SU, "8 6 5 0 6 8 9 2 9 4 9 0 1 1 9 5 5"],
  ["Grenat", "garnet|granate|grenat", SU, "4 9 8 0 1 9 7 1 3 7 4 3 0 4 3 7 2"],
  ["Améthyste", "amethyst|amatista|amethyste", SU, "8 8 4 1 5 7 6 8 9 7 5 1 0 7 8 6 4"],
  ["Perle", "pearl|perla|perle", SU, "4 7 8 0 3 7 7 1 0 8 5 1 0 7 8 6 5"],
  ["Mordecai", "mordecai", RS, "8 4 5 0 5 6 7 6 6 5 3 0 0 4 7 5 7"],
  ["Rigby", "rigby", RS, "9 3 2 2 7 3 4 9 7 6 4 0 0 8 9 5 9"],
  ["Ed", "ed", EDS, "9 9 0 0 9 6 8 4 9 4 4 1 0 1 8 0 7"],
  ["Edd", "double d|edd", EDS, "4 1 9 0 6 3 9 1 2 3 6 0 0 3 8 4 8"],
  ["Eddy", "eddy", EDS, "8 3 4 5 6 4 3 4 6 5 3 1 0 8 9 9 9"],
  ["Samouraï Jack", "samurai jack|samourai jack", "Samouraï Jack|Samurai Jack|Samurai Jack", "3 9 8 0 1 9 9 1 3 9 3 3 1 4 2 7 7"],
  ["Aku", "aku", "Samouraï Jack|Samurai Jack|Samurai Jack", "7 9 7 9 2 6 0 3 4 8 0 9 3 9 9 8 6"],
  ["Billy", "billy", BM, "9 2 0 0 9 5 7 6 8 5 4 0 1 2 9 0 8"],
  ["Mandy", "mandy", BM, "3 5 8 8 0 9 1 2 3 4 3 7 2 9 3 9 1"],
  ["Grim", "grim|la faucheuse|puro hueso|le faucheur", BM, "7 7 7 3 6 5 4 5 4 5 2 7 2 8 7 5 9"],
  ["Robin (Teen Titans)", "robin teen titans", TTG, "6 6 6 1 5 7 5 1 4 7 4 1 3 8 8 7 6"],
  ["Starfire", "starfire|starfire", TTG, "8 9 4 0 6 8 9 1 6 8 8 2 3 5 8 3 4"],
  ["Raven", "raven", TTG, "5 8 8 2 1 7 5 4 3 5 4 6 1 7 2 7 5"],
  ["Beast Boy", "beast boy|chico bestia|changelin", TTG, "9 7 2 0 6 7 7 7 8 7 7 2 0 3 9 4 5"],
  ["Cyborg", "cyborg", TTG, "8 9 7 0 4 8 7 5 9 6 3 3 1 5 9 5 4"],
  ["Princesse Chewing-gum", "princesse chewing gum|princess bubblegum|dulce princesa", AT, "5 6 9 2 1 7 6 1 4 5 7 1 8 6 7 8 3"],
  ["Marceline", "marceline", AT, "8 7 7 3 2 8 6 4 5 8 6 6 2 5 7 7 5"],
  ["Le Roi des Glaces", "roi des glaces|ice king|rey helado", AT, "8 6 4 4 8 4 4 3 5 6 3 4 6 6 9 2 9"],
  ["BMO", "bmo|beemo", AT, "9 2 6 0 4 6 8 2 0 4 9 0 0 2 7 4 3"],
  ["Princesse Grumeleuse", "lumpy space princess|princesse grumeleuse|princesa grumosa", AT, "9 3 2 2 6 4 2 8 7 3 3 1 1 9 9 4 6"],
  ["Darwin", "darwin", GUM, "8 3 3 0 6 6 9 3 5 6 8 0 0 1 8 3 6"],
  ["Anaïs", "anais", GUM, "5 3 9 0 2 6 7 1 3 4 7 0 0 6 7 7 4"],
  ["Grizzly", "grizz|grizzly|pardo", WBB, "8 7 3 0 6 7 8 4 8 5 6 0 0 3 9 4 6"],
  ["Panda", "panda", WBB, "6 4 6 0 5 3 8 5 6 3 8 0 0 4 7 4 7"],
  ["Polaire", "ice bear|polar|polaire", WBB, "7 9 8 0 1 9 7 2 5 7 6 3 0 3 1 7 2"],
  ["Muriel", "muriel", COUR, "4 3 5 0 4 5 9 2 4 2 6 0 1 1 6 3 7"],
  ["Eustache", "eustache|eustace|justo", COUR, "6 4 3 6 6 2 0 6 5 2 0 5 2 9 6 4 7"],
  ["Dee Dee", "dee dee|didi", "Le Laboratoire de Dexter|Dexter's Laboratory|El laboratorio de Dexter", "9 3 1 0 9 4 7 3 5 6 7 0 1 2 9 2 3"],
  ["Professeur Utonium", "utonium|professeur utonium|profesor utonio", PPG, "5 3 9 0 4 6 9 1 3 3 5 0 4 3 6 4 5"],
  ["Lui", "him|el|lui", PPG, "6 8 7 9 2 6 0 3 3 6 1 9 3 9 8 9 3"],
  ["Directeur Skinner", "skinner|principal skinner|seymour skinner", SIMP, "5 3 6 2 5 4 5 2 3 3 2 1 3 6 7 4 8"],
  ["Nelson Muntz", "nelson|nelson muntz", SIMP, "8 7 3 6 3 6 2 5 5 5 2 4 0 8 5 4 6"],
  ["Barney Gumble", "barney gumble", SIMP, "8 4 2 1 9 4 6 9 9 2 2 1 0 3 6 2 9"],
  ["Chef Wiggum", "chef wiggum|clancy wiggum|wiggum", SIMP, "8 4 1 2 8 3 5 9 9 2 3 0 2 4 7 2 6"],
  ["Smithers", "smithers|waylon smithers", SIMP, "5 2 7 4 3 3 4 1 3 4 2 2 6 5 6 6 5"],
  ["Patty et Selma", "patty|selma|patty et selma", SIMP, "6 5 5 4 3 5 2 5 6 2 0 6 2 8 7 5 7"],
  ["Abe Simpson", "grampa simpson|abe simpson|abraham simpson|grand pere simpson|abuelo simpson", SIMP, "8 1 4 1 7 4 5 7 5 1 2 2 1 6 9 3 8"],
  ["Willie le jardinier", "willie|jardinier willie|groundskeeper willie", SIMP, "8 7 3 2 5 7 3 4 5 4 0 4 0 9 7 3 7"],
  ["Edna Krapabelle", "edna krabappel|krapabelle|edna krapabelle", SIMP, "6 3 6 1 3 4 4 6 5 2 2 1 1 7 6 4 8"],
  ["Le vendeur de BD", "comic book guy|vendeur de bd|el sujeto de las historietas", SIMP, "7 3 7 3 4 2 2 8 9 1 1 2 3 7 9 5 7"],
  ["Lois Griffin", "lois|lois griffin", FG, "6 6 6 2 2 7 6 2 4 4 4 1 4 6 7 6 5"],
  ["Meg Griffin", "meg griffin", FG, "4 3 5 1 6 4 6 2 4 3 3 0 1 6 5 3 9"],
  ["Chris Griffin", "chris|chris griffin", FG, "7 6 1 0 8 4 7 7 9 2 3 1 1 3 5 1 7"],
  ["Glenn Quagmire", "quagmire|glenn quagmire", FG, "8 4 4 6 2 6 3 3 4 5 1 5 3 6 8 7 4"],
  ["Gary l'escargot", "gary|gary l escargot", SB, "6 2 7 0 2 3 7 5 8 1 9 0 0 3 0 4 3"],
  ["Larry le homard", "larry|larry the lobster|larry la langosta", SB, "6 9 4 0 3 8 6 1 5 7 3 0 2 4 6 3 2"],
  ["Perle Krabs", "pearl krabs", SB, "5 5 4 0 6 4 6 4 6 3 5 3 6 8 9 3 5"],
  ["Mme Puff", "mrs puff|madame puff|senora puff|mme puff", SB, "5 2 6 0 4 3 6 2 3 2 5 3 2 8 6 3 9"],
  ["Stan Marsh", "stan|stan marsh", SP, "6 3 6 1 4 6 7 3 4 4 3 0 1 5 6 5 7"],
  ["Kyle Broflovski", "kyle|kyle broflovski", SP, "6 3 8 1 3 7 7 2 4 4 3 0 2 8 8 6 7"],
  ["Butters", "butters|butters stotch", SP, "8 2 3 1 7 3 9 2 5 3 7 0 1 1 7 1 9"],
  ["Randy Marsh", "randy|randy marsh", SP, "9 4 4 3 8 5 4 5 6 3 2 1 3 6 9 4 8"],
  ["Leela", "leela|turanga leela", FUT, "5 8 7 0 3 9 7 1 3 7 5 1 1 8 5 6 7"],
  ["Zoidberg", "zoidberg|dr zoidberg", FUT, "9 3 3 0 8 3 6 4 9 4 3 4 0 3 8 2 9"],
  ["Professeur Farnsworth", "farnsworth|professeur farnsworth|profesor farnsworth", FUT, "8 1 9 5 6 4 3 6 4 1 1 4 4 6 8 5 7"],
  ["Summer Smith", "summer|summer smith", RM, "7 4 5 1 3 7 5 4 4 5 4 1 1 7 8 6 5"],
  ["Jerry Smith", "jerry smith", RM, "8 2 2 1 8 1 5 6 5 2 2 0 1 5 7 2 9"],
  ["Beth Smith", "beth|beth smith", RM, "6 4 7 3 2 7 4 2 4 4 3 2 3 7 7 7 6"],
  ["M. Larbin", "mr poopybutthole|monsieur larbin|m larbin", RM, "9 2 4 0 3 4 8 3 4 3 7 0 1 2 8 3 6"],
  ["Bob Belcher", "bob belcher", BOB, "8 4 5 0 6 5 7 3 7 3 3 0 1 6 7 4 9"],
  ["Tina Belcher", "tina|tina belcher", BOB, "8 2 5 0 7 3 7 4 5 2 4 0 0 1 6 3 7"],
  ["Louise Belcher", "louise|louise belcher", BOB, "9 3 8 4 2 8 4 3 5 6 7 1 0 7 8 9 4"],
  ["BoJack Horseman", "bojack", BJ, "8 5 6 5 6 4 3 8 8 4 2 2 7 8 8 6 8"],
  ["Mr. Peanutbutter", "mr peanutbutter|monsieur peanutbutter", BJ, "8 6 3 0 6 6 8 3 6 7 7 0 8 1 9 2 4"],
  ["Todd Chavez", "todd|todd chavez", BJ, "9 3 3 0 7 5 9 8 6 4 5 0 1 1 9 3 7"],
  ["Bluey", "bluey", BLUEY, "8 4 6 0 4 7 8 1 5 7 9 0 1 4 8 6 3"],
  ["Bingo", "bingo", BLUEY, "8 3 5 0 5 5 9 2 5 6 9 0 1 3 7 4 3"],
  ["Bandit", "bandit|papa de bluey", BLUEY, "9 6 7 0 5 7 9 2 6 6 5 0 2 2 8 7 4"],
  ["George Pig", "george|george pig", PEP, "6 3 2 0 6 5 7 3 6 3 9 0 2 6 2 2 4"],
  ["Maman Pig", "mummy pig|maman pig|mama pig", PEP, "6 4 7 0 3 5 8 2 5 2 7 0 3 3 6 5 3"],
  ["Yakko, Wakko et Dot", "yakko|wakko|dot|warner", ANI, "9 4 6 2 4 7 5 3 7 8 7 0 1 4 9 8 3"],
  ["Minus et Cortex", "pinky et le cerveau|pinky and the brain|minus|cortex|pinky y cerebro", ANI, "8 2 9 6 6 5 4 1 3 3 5 1 0 6 8 8 9"],
  ["He-Man", "he man|musclor|prince adam", HM, "4 9 6 0 2 9 9 1 4 7 2 0 8 4 5 4 3"],
  ["Skeletor", "skeletor", HM, "8 7 7 9 5 5 0 2 3 5 0 8 4 9 9 7 9"],
  ["Optimus Prime", "optimus|optimus prime", TF, "2 9 8 0 1 9 9 1 2 7 2 4 1 3 6 6 4"],
  ["Megatron", "megatron", TF, "2 9 8 9 1 8 0 1 2 7 0 9 3 9 7 8 5"],
  ["Bumblebee", "bumblebee", TF, "7 7 5 0 3 9 9 1 3 8 8 1 0 3 1 5 4"],
  ["Linus", "linus|linus van pelt", PEA, "5 2 8 0 3 4 8 2 3 3 7 0 1 1 7 4 4"],
  ["Lucy van Pelt", "lucy van pelt", PEA, "6 4 6 4 2 6 3 2 3 4 4 2 2 9 9 7 3"],
  ["Woodstock", "woodstock|emilio", PEA, "7 1 4 0 6 5 8 3 4 6 9 0 0 2 0 2 5"],
  ["Jon Arbuckle", "jon|jon arbuckle|john arbuckle", GAR, "6 3 4 0 7 4 8 3 5 3 3 0 2 2 8 2 9"],
  ["Nermal", "nermal", GAR, "5 2 4 1 2 3 6 4 4 5 9 0 1 2 7 4 2"],
  ["Papillon", "hawk moth|papillon|lepidoptero|gabriel agreste", MIR, "2 6 8 9 1 5 2 1 2 3 1 7 9 9 6 9 7"],
  ["Plagg", "plagg", MIR, "9 6 5 1 4 4 5 9 9 6 8 1 0 3 8 5 6"],
  ["Tikki", "tikki", MIR, "5 6 8 0 1 7 9 1 6 7 9 0 0 1 7 5 2"],
  ["Hank Hill", "hank hill|hank", "Les Rois du Texas|King of the Hill|El rey de la colina", "5 6 5 0 4 6 6 2 5 3 2 0 3 6 5 4 6"],
  ["Daria", "daria|daria morgendorffer", "Daria", "8 2 8 1 2 5 4 6 4 2 2 1 2 5 3 7 5"],
  ["Roger", "roger|roger l extraterrestre", "American Dad!", "9 4 7 6 4 5 2 7 8 5 3 3 2 8 9 9 4"],
];
