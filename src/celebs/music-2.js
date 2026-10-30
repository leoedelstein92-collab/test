// Personnalités publiques : musique (suite). Notes d'après leur image publique et leur carrière.
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const POP = "Pop|Pop|Pop";
const RAP = "Rap|Rap|Rap";
const ROCK = "Rock|Rock|Rock";
const RNB = "R&B|R&B|R&B";
const CHANSON = "Chanson française|French chanson|Canción francesa";
const LATIN = "Musique latine|Latin music|Música latina";
const ELECTRO = "Électro|Electronic music|Música electrónica";
const KPOP = "K-pop|K-pop|K-pop";
const MU = "Musique classique|Classical music|Música clásica";

module.exports = [
  // Rap et musiques urbaines françaises
  ["MC Solaar", "solaar|mc solar|claude m barali", RAP, "6 3 9 0 2 5 8 2 3 3 6 1 6 1 5 7 2"],
  ["Diam's", "diams|melanie georgiades", RAP, "5 4 8 0 2 7 7 1 3 4 5 4 6 4 6 6 4"],
  ["Oxmo Puccino", "oxmo|abdoulaye diarra|black desperado", RAP, "6 4 9 0 1 5 8 2 3 3 5 3 5 1 4 7 2"],
  ["Kery James", "alix mathurin", RAP, "3 5 8 0 1 8 8 1 2 4 3 6 5 4 6 6 3"],
  ["Youssoupha", "youssoupha mabiki|lyriciste bantou", RAP, "5 4 8 0 1 6 8 1 3 3 5 3 5 2 6 6 2"],
  ["Vald", "valentin le du|vald sullyvan", RAP, "8 3 7 0 5 5 6 4 4 3 5 3 6 3 5 7 3"],
  ["Gazo", "gazo bsb|gazo drill", RAP, "3 5 5 1 2 5 5 2 3 4 3 7 7 4 2 6 2"],
  ["Tiakola", "tiako|tiakola melo", RAP, "5 3 5 0 2 4 7 2 3 4 7 2 6 2 3 5 2"],
  ["Werenoi", "werenoi carre|werenoi pyramide", RAP, "2 4 6 0 1 4 6 2 3 3 3 6 7 3 1 7 1"],
  ["Hamza", "saucegod|hamza sauce god|hamza al farissi", RAP, "4 3 6 0 2 4 6 3 3 3 5 3 7 2 2 6 2"],
  ["Disiz", "disiz la peste|disiz la paix|serigne mbaye gueye", RAP, "6 3 8 0 3 6 8 2 3 3 5 2 6 3 6 6 3"],
  ["Heuss l'Enfoiré", "heuss|heuss l enfoire|heuss lenfoire", RAP, "9 4 5 0 5 5 7 4 6 3 6 3 6 3 6 5 3"],
  ["Soolking", "abderraouf derradji|sool king", RAP, "5 4 6 0 2 7 7 2 3 4 5 3 7 2 4 6 3"],
  ["Dadju", "dadju nsungula|djuna dadju", RAP, "5 4 6 0 2 4 8 2 3 3 6 2 7 2 5 6 2"],
  ["Tayc", "julien bouadjie|tayc afrolove", RAP, "5 4 6 0 2 4 8 2 3 5 7 1 7 2 5 6 2"],
  ["Black M", "black mesrimes|alpha diallo", RAP, "6 3 5 0 3 4 8 2 4 4 7 2 6 2 6 5 3"],
  // Électro française et DJ
  ["Jean-Michel Jarre", "jean michel jarre|jm jarre|jmj", ELECTRO, "3 3 9 0 2 6 6 1 2 3 4 2 9 2 6 8 2"],
  ["Bob Sinclar", "bob sinclair|christophe le friant", ELECTRO, "6 3 6 0 2 4 7 2 3 4 5 1 8 2 5 6 2"],
  ["Martin Solveig", "solveig|martin picandet", ELECTRO, "7 3 7 0 3 4 7 2 3 4 6 1 8 2 5 7 2"],
  ["Justice", "justice electro|gaspard auge|xavier de rosnay", ELECTRO, "3 3 8 0 1 4 6 3 3 3 4 4 7 2 1 7 1"],
  ["Kungs", "valentin brunel", ELECTRO, "4 3 6 0 2 4 7 2 3 3 7 1 7 1 2 6 1"],
  ["Avicii", "tim bergling|avici", ELECTRO, "3 3 8 0 2 4 7 1 3 4 6 1 9 1 1 6 7"],
  ["Calvin Harris", "adam wiles|calvin harriss", ELECTRO, "4 5 7 0 2 4 6 1 3 4 4 2 10 2 3 7 2"],
  ["Martin Garrix", "garrix|martijn garritsen", ELECTRO, "4 3 7 0 2 4 8 1 3 4 8 1 9 1 3 6 1"],
  ["Tiësto", "tiesto|dj tiesto|tijs verwest", ELECTRO, "4 4 7 0 2 4 7 1 3 4 5 2 9 1 3 7 1"],
  // Groupes de rock français
  ["Indochine", "nicola sirkis|groupe indochine", ROCK, "3 4 7 0 1 6 7 1 2 4 4 4 8 2 3 6 4"],
  ["Téléphone", "telephone|groupe telephone|jean louis aubert", ROCK, "4 5 6 0 3 7 6 3 3 5 4 4 7 5 4 5 3"],
  ["Louise Attaque", "louise attack|gaetan roussel", ROCK, "4 4 7 0 2 5 7 3 3 4 5 2 6 2 3 5 3"],
  ["Les Rita Mitsouko", "rita mitsouko|catherine ringer|fred chichin", ROCK, "6 4 7 0 4 6 6 2 3 5 5 3 6 3 5 6 6"],
  ["Gojira", "joe duplantier|mario duplantier", ROCK, "2 8 7 0 1 8 7 1 2 6 3 8 7 2 2 6 2"],
  // Chanson française et variété
  ["Joe Dassin", "dassin|joseph dassin", CHANSON, "6 3 7 0 2 5 8 2 4 3 6 1 7 1 5 5 6"],
  ["Jacques Dutronc", "dutronc|jacques dutronc", CHANSON, "8 3 8 0 3 5 5 7 4 2 4 3 7 3 3 8 2"],
  ["Françoise Hardy", "francoise hardy", CHANSON, "4 2 8 0 2 4 7 2 2 2 6 2 6 2 3 5 4"],
  ["Sylvie Vartan", "vartan|sylvie vartanian", CHANSON, "4 3 6 0 2 6 7 1 2 5 6 2 7 2 5 5 3"],
  ["France Gall", "isabelle gall|france gal", CHANSON, "5 2 6 0 3 5 8 1 3 4 8 1 7 2 4 5 7"],
  ["Michel Berger", "michel hamburger", CHANSON, "4 2 9 0 2 5 8 1 2 3 5 1 7 1 4 7 6"],
  ["Daniel Balavoine", "balavoine|daniel balavoin", CHANSON, "5 4 7 0 2 9 9 1 2 5 5 3 6 6 8 5 9"],
  ["Alain Souchon", "souchon", CHANSON, "7 2 8 0 5 4 8 4 3 2 6 1 6 2 4 6 3"],
  ["Laurent Voulzy", "voulzy", CHANSON, "5 2 7 0 3 4 8 3 3 2 6 1 6 1 3 5 2"],
  ["Julien Clerc", "paul alain leclerc", CHANSON, "4 3 7 0 2 5 7 2 3 3 6 1 7 2 4 5 2"],
  ["Véronique Sanson", "veronique sanson", CHANSON, "5 2 7 0 4 6 7 2 3 3 5 2 6 4 6 4 5"],
  ["Eddy Mitchell", "schmoll|claude moine|eddy mitchel", ROCK, "8 4 7 0 2 5 6 4 5 2 4 3 7 4 6 6 2"],
  ["Barbara", "la dame en noir|monique serf|barbara chanteuse", CHANSON, "4 2 8 0 2 6 6 2 2 2 4 3 6 3 4 5 5"],
  ["Claude Nougaro", "nougaro|le petit taureau", CHANSON, "6 4 8 0 2 6 6 2 4 4 4 3 6 5 6 5 4"],
  ["Enrico Macias", "gaston ghrenassia|enrico macias", CHANSON, "6 3 6 0 2 6 9 1 4 3 5 1 6 2 7 5 5"],
  ["Alain Bashung", "bashung|alain baschung", CHANSON, "4 3 8 0 2 6 6 3 3 2 3 4 6 3 2 7 4"],
  ["Florent Pagny", "pagny", CHANSON, "6 5 6 0 3 7 6 3 4 3 4 4 8 6 6 6 4"],
  ["Pascal Obispo", "obispo", CHANSON, "5 3 7 0 2 5 7 1 3 3 5 2 8 3 6 7 2"],
  ["Calogero", "calogero maurici|calo", CHANSON, "4 3 7 0 2 5 8 1 3 3 6 1 7 2 4 5 2"],
  ["Lara Fabian", "lara crokaert", POP, "4 3 7 0 2 6 7 1 2 3 5 2 8 3 6 5 3"],
  ["Christophe Maé", "christophe mae|christophe martichon", POP, "6 3 6 0 3 5 8 2 4 4 7 1 7 2 5 5 2"],
  ["Jenifer", "jenifer bartoli|jennifer bartoli", POP, "6 3 6 0 3 5 8 2 3 4 8 1 7 2 6 5 2"],
  ["Amel Bent", "amel bachir|amel bent", POP, "6 4 6 0 3 6 8 2 4 4 7 2 7 3 6 5 3"],
  ["Slimane", "slimane nebchi", POP, "5 3 6 0 2 6 9 1 3 3 7 1 7 2 5 5 2"],
  ["Clara Luciani", "luciani", POP, "6 3 7 0 2 6 7 2 3 3 6 2 6 2 5 5 2"],
  ["Matthieu Chedid", "monsieur m|le m|m chedid|matthieu chedid m", CHANSON, "8 3 8 0 3 5 8 2 3 4 7 1 7 1 4 6 2"],
  ["Grand Corps Malade", "gcm|fabien marsaud", CHANSON, "6 3 9 0 2 8 8 2 3 1 5 3 6 1 6 6 6"],
  ["Vanessa Paradis", "paradis", POP, "5 3 6 0 2 5 7 2 2 3 8 1 8 1 3 5 2"],
];
