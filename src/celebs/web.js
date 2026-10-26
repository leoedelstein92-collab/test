// Personnalités publiques : créateurs du web, entrepreneurs, mode, téléréalité, chefs, astronautes et explorateurs. Notes d'après leur image publique et leur carrière.
const YT = "YouTube|YouTube|YouTube";
const STREAM = "Streaming|Streaming|Streaming";
const TECH = "Tech et entreprise|Tech and business|Tecnología y negocios";
const MODE = "Mode|Fashion|Moda";
const TV = "Téléréalité|Reality TV|Telerrealidad";
const CHEF = "Cuisine|Cooking|Cocina";
const SPACE = "Espace|Space|Espacio";
const EXPLO = "Exploration|Exploration|Exploración";

module.exports = [
  // Créateurs français
  ["Squeezie", "squeezie|lucas hauchard|squeez", YT, "9 4 7 1 4 6 7 2 4 5 7 1 8 3 8 7 3", "leader"],
  ["Inoxtag", "inoxtag|inox|ines benazzouz|inoxtag everest", YT, "8 7 6 1 5 10 7 2 4 6 7 2 7 3 8 6 4", "survivor|hero"],
  ["Michou", "michou|michou youtube", YT, "9 4 5 1 7 6 8 3 5 5 9 1 7 3 9 5 4", "dancer"],
  ["Amixem", "amixem|maxime chabroud", YT, "8 4 7 1 5 6 8 2 6 4 7 1 7 2 8 6 3"],
  ["Cyprien", "cyprien|cyprien iov|cyprien youtube", YT, "10 3 7 1 5 5 7 3 5 4 7 1 7 2 7 6 2"],
  ["Norman", "norman|norman thavaud|norman fait des videos", YT, "9 3 6 1 7 4 8 5 6 3 8 1 6 2 7 5 4"],
  ["Tibo InShape", "tibo inshape|tibo in shape|inshape|tibo|thibaud delapart", YT, "7 9 6 1 4 8 7 0 3 7 6 4 8 4 8 6 2", "teacher"],
  ["Mister V", "mister v|misterv|yvick letexier", YT, "9 4 6 1 5 5 7 4 8 4 6 2 7 3 8 6 3"],
  ["Natoo", "natoo|nathalie odzierejko", YT, "9 3 7 1 6 5 7 4 6 3 7 1 6 4 8 6 3"],
  ["Léna Situations", "lena situations|lena mahfouf|lena situation", YT, "7 3 7 1 5 6 8 2 4 5 8 1 7 2 9 6 2"],
  ["Gotaga", "gotaga|corentin houssein|gota", STREAM, "6 4 7 1 3 6 6 2 5 6 5 3 7 5 7 8 3"],
  ["Kameto", "kameto|kamel kebir|kameto karmine", STREAM, "8 3 7 1 4 7 6 3 6 3 5 3 7 6 10 8 4", "leader"],
  ["ZeratoR", "zerator|adrien nougaret|zrt", STREAM, "7 3 8 1 4 6 10 2 5 4 6 2 6 3 8 8 2", "leader|friend"],
  ["HugoDécrypte", "hugodecrypte|hugo decrypte|hugo travers", YT, "5 3 9 1 3 6 7 1 4 5 6 1 6 2 8 7 2", "teacher"],
  ["McFly et Carlito", "mcfly et carlito|mcfly carlito|mcfly and carlito|mcfly y carlito", YT, "10 4 6 1 7 7 7 4 6 4 6 1 7 2 9 7 3", "friend"],
  ["Joueur du Grenier", "joueur du grenier|jdg|frederic molas|fred molas", YT, "9 3 7 1 6 5 6 4 6 3 5 3 6 7 8 6 4"],
  ["Antoine Daniel", "antoine daniel|what the cut|wtc", YT, "9 3 8 1 5 5 6 5 5 4 6 2 5 5 9 6 3"],
  // Créateurs internationaux
  ["MrBeast", "mrbeast|mr beast|jimmy donaldson|mister beast", YT, "6 5 8 1 4 9 10 1 6 5 6 1 10 3 7 9 2", "leader"],
  ["PewDiePie", "pewdiepie|pewds|felix kjellberg", YT, "9 3 7 1 6 5 7 4 5 4 7 1 9 4 8 6 3"],
  ["Kai Cenat", "kai cenat|kaicenat", STREAM, "9 5 6 1 6 7 7 2 7 5 6 3 8 5 10 6 4"],
  ["IShowSpeed", "ishowspeed|ishow speed|i show speed|darren watkins", STREAM, "9 6 4 1 9 8 6 2 6 8 6 4 8 8 10 4 6"],
  ["Logan Paul", "logan paul", YT, "7 7 6 2 5 8 5 2 4 6 5 5 9 5 9 8 4"],
  ["KSI", "ksi|jj olatunji|olajide olatunji", YT, "8 7 6 2 5 8 6 2 5 6 5 5 9 6 9 7 3"],
  ["Ninja", "tyler blevins|ninja fortnite|ninja streamer", STREAM, "6 4 7 1 3 6 6 2 4 7 6 2 8 4 7 7 2"],
  ["Khaby Lame", "khaby lame|khaby|khaby00|khabane lame", "TikTok|TikTok|TikTok", "10 3 6 0 2 4 8 4 4 3 9 1 8 2 1 6 1"],
  ["Charli D'Amelio", "charli d amelio|charli damelio|charli", "TikTok|TikTok|TikTok", "6 3 6 0 4 5 8 2 4 6 9 0 8 2 5 5 3", "dancer"],
  ["Ibai Llanos", "ibai|ibai llanos", STREAM, "10 4 7 1 6 6 8 4 8 3 8 1 8 3 10 8 3", "leader"],
  ["Markiplier", "markiplier|mark fischbach", YT, "9 4 7 1 6 6 8 3 5 4 7 2 8 5 9 6 4"],
  // Entrepreneurs et tech
  ["Elon Musk", "elon musk|musk|elon", TECH, "6 4 9 2 6 8 4 1 4 5 3 6 10 6 9 7 4", "leader"],
  ["Steve Jobs", "steve jobs|steven jobs", TECH, "5 3 10 2 2 7 4 1 3 5 3 6 10 8 8 9 4", "leader"],
  ["Bill Gates", "bill gates|william gates", TECH, "5 3 10 1 4 5 9 1 5 3 5 3 10 4 6 9 2", "leader"],
  ["Mark Zuckerberg", "mark zuckerberg|zuckerberg|zuck", TECH, "4 6 9 1 5 6 5 1 4 5 4 4 10 3 5 9 3"],
  ["Jeff Bezos", "jeff bezos|bezos", TECH, "5 5 9 1 3 8 5 1 4 5 3 5 10 5 6 9 2"],
  ["Bernard Arnault", "bernard arnault|arnault", TECH, "3 3 9 1 1 6 5 0 4 3 3 7 10 4 4 10 1", "leader"],
  ["Xavier Niel", "xavier niel|niel", TECH, "6 3 9 1 2 7 7 1 4 4 4 4 9 4 6 9 2"],
  ["Warren Buffett", "warren buffett|buffett|oracle d omaha|oracle of omaha", TECH, "8 2 10 1 2 5 9 2 8 2 7 2 10 2 7 10 1"],
  ["Sam Altman", "sam altman|altman", TECH, "4 3 9 1 3 6 5 1 3 4 5 3 9 3 7 8 5"],
  ["Jensen Huang", "jensen huang|jensen", TECH, "6 3 9 1 2 7 6 1 4 4 5 3 10 3 7 9 2"],
  ["Tim Cook", "tim cook|timothy cook", TECH, "3 3 9 1 2 5 6 0 2 4 4 3 9 2 4 8 1", "leader"],
  ["Richard Branson", "richard branson|branson", TECH, "8 5 7 1 6 10 7 2 4 6 6 1 9 2 8 8 6", "survivor"],
  ["Steve Wozniak", "steve wozniak|wozniak|woz", TECH, "9 3 10 0 5 5 9 3 5 3 8 1 8 2 8 6 3"],
  // Mode
  ["Coco Chanel", "coco chanel|gabrielle chanel|chanel|mademoiselle chanel", MODE, "6 3 8 1 2 8 4 1 3 4 4 5 9 6 7 9 3", "leader"],
  ["Karl Lagerfeld", "karl lagerfeld|lagerfeld|kaiser karl", MODE, "8 2 9 1 2 6 5 0 4 4 6 6 9 6 10 8 2"],
  ["Yves Saint Laurent", "yves saint laurent|ysl|saint laurent|yves saint-laurent", MODE, "4 2 8 0 3 7 6 2 3 3 5 2 9 4 4 7 5"],
  ["Christian Dior", "christian dior|dior", MODE, "5 2 8 0 2 6 7 2 6 3 6 1 9 3 4 7 6"],
  ["Jean Paul Gaultier", "jean paul gaultier|jean-paul gaultier|gaultier", MODE, "9 3 8 0 4 8 8 2 5 4 8 1 8 2 9 7 2"],
  ["Simon Porte Jacquemus", "jacquemus|simon porte jacquemus|simon jacquemus", MODE, "6 3 7 0 3 7 8 2 4 4 8 1 8 2 7 8 1"],
  ["Olivier Rousteing", "olivier rousteing|rousteing", MODE, "5 4 7 0 3 8 7 1 3 4 7 2 8 3 7 7 4"],
  ["Kendall Jenner", "kendall jenner|kendall", MODE, "5 4 6 0 3 5 7 2 3 6 7 2 9 3 4 6 2"],
  ["Gigi Hadid", "gigi hadid|gigi|jelena hadid", MODE, "6 4 6 0 3 5 8 2 6 5 8 1 8 3 5 6 2"],
  ["Naomi Campbell", "naomi campbell", MODE, "5 4 6 1 3 7 7 1 3 6 4 7 9 7 6 7 2"],
  ["Kate Moss", "kate moss", MODE, "5 3 6 1 4 5 6 3 4 5 6 3 9 4 3 7 3"],
  ["Cindy Crawford", "cindy crawford", MODE, "6 4 7 0 2 5 8 1 3 5 7 1 9 2 6 7 1"],
  ["Claudia Schiffer", "claudia schiffer|schiffer", MODE, "5 3 7 0 2 5 7 1 3 5 7 2 9 2 4 7 1"],
  ["Gisele Bündchen", "gisele bundchen|gisele|bundchen", MODE, "6 6 7 0 2 6 8 1 3 6 7 2 10 2 5 7 2"],
  // Téléréalité et médias
  ["Kim Kardashian", "kim kardashian|kim k|kim kardashian west", TV, "6 3 7 1 4 6 6 2 4 3 6 3 10 4 8 9 4"],
  ["Paris Hilton", "paris hilton", TV, "8 2 5 0 6 5 7 4 4 3 8 1 9 2 8 7 3"],
  ["Kylie Jenner", "kylie jenner", TV, "5 3 6 0 3 4 6 3 4 3 7 2 10 3 5 8 2"],
  ["Nabilla", "nabilla|nabilla benattia|nabilla vergara|allo quoi", TV, "9 3 5 1 8 6 7 3 5 3 7 2 8 6 9 6 6"],
  // Chefs
  ["Gordon Ramsay", "gordon ramsay|ramsay|gordon ramsey", CHEF, "8 6 8 1 3 8 6 0 9 7 3 9 9 10 9 7 4", "chef|leader"],
  ["Philippe Etchebest", "philippe etchebest|etchebest", CHEF, "6 8 7 1 2 8 7 0 8 5 3 9 7 8 8 7 2", "chef"],
  ["Cyril Lignac", "cyril lignac|lignac", CHEF, "6 4 7 0 2 6 8 1 9 5 8 1 8 2 8 7 1", "chef"],
  ["Paul Bocuse", "paul bocuse|bocuse|monsieur paul", CHEF, "6 4 8 1 2 7 7 1 9 4 5 6 8 5 7 8 1", "chef|leader"],
  ["Joël Robuchon", "joel robuchon|robuchon", CHEF, "4 3 9 1 1 6 6 0 9 5 4 7 8 7 5 9 1", "chef"],
  ["Alain Ducasse", "alain ducasse|ducasse", CHEF, "4 3 9 1 1 7 6 0 9 5 4 6 9 5 5 9 1", "chef|leader"],
  ["Thierry Marx", "thierry marx", CHEF, "5 8 8 0 2 8 9 0 8 6 5 6 7 3 6 8 2", "chef|teacher"],
  ["Jamie Oliver", "jamie oliver|the naked chef", CHEF, "8 4 7 0 4 7 9 1 9 7 8 1 9 2 9 7 3", "chef|teacher"],
  ["Christophe Michalak", "christophe michalak|michalak", CHEF, "7 5 7 0 2 6 7 1 9 5 7 2 7 3 7 7 2", "chef"],
  ["Hélène Darroze", "helene darroze|darroze", CHEF, "6 3 8 0 2 7 8 1 9 5 6 3 7 4 7 8 2", "chef"],
  ["Norbert Tarayre", "norbert tarayre|tarayre|norbert top chef", CHEF, "10 5 6 0 7 7 9 2 10 6 7 2 6 3 10 6 4", "chef|glutton"],
  // Astronautes et explorateurs
  ["Thomas Pesquet", "thomas pesquet|pesquet", SPACE, "7 7 9 0 2 10 8 0 4 6 7 1 6 1 7 8 1", "hero"],
  ["Neil Armstrong", "neil armstrong", SPACE, "5 6 9 0 1 10 7 0 3 7 5 2 5 2 2 8 2", "hero|leader"],
  ["Buzz Aldrin", "buzz aldrin|aldrin|edwin aldrin", SPACE, "7 6 9 0 2 10 6 1 3 7 5 3 5 6 7 8 2", "hero"],
  ["Claudie Haigneré", "claudie haignere|haignere|claudie andre deshays", SPACE, "5 5 10 0 1 9 7 0 3 6 6 2 5 2 5 8 2", "hero"],
  ["Mike Horn", "mike horn", EXPLO, "6 9 7 0 3 10 7 0 5 7 4 5 6 3 6 8 5", "survivor|hero"],
  ["Bertrand Piccard", "bertrand piccard|piccard", EXPLO, "6 4 9 0 2 9 8 1 4 3 5 1 6 1 7 8 4", "hero"],
  ["Jean-Louis Étienne", "jean louis etienne|jean-louis etienne", EXPLO, "6 8 8 0 2 10 7 0 5 5 5 2 4 2 5 8 4", "survivor"],
];
