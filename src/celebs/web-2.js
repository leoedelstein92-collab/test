// Personnalités publiques : créateurs du web, esport, entrepreneurs, mode, chefs, astronautes, aventuriers, magiciens et vulgarisateurs (suite). Notes d'après leur image publique et leur carrière.
const YT = "YouTube|YouTube|YouTube";
const STREAM = "Streaming|Streaming|Streaming";
const TIKTOK = "TikTok|TikTok|TikTok";
const ESPORT = "Esport|Esports|Esports";
const PODCAST = "Podcast|Podcasts|Pódcast";
const REALTV = "Téléréalité|Reality TV|Telerrealidad";
const TECH = "Tech et entreprise|Tech and business|Tecnología y negocios";
const MODE = "Mode|Fashion|Moda";
const CHEF = "Cuisine|Cooking|Cocina";
const SPACE = "Espace|Space|Espacio";
const EXPLO = "Exploration|Exploration|Exploración";
const MAGIC = "Magie|Magic|Magia";
const SCI = "Science|Science|Ciencia";

module.exports = [
  // Créateurs français
  ["Le Rire Jaune", "le rire jaune|kevin tran|rire jaune", YT, "9 3 7 0 5 5 8 3 6 4 7 1 7 2 8 6 3"],
  ["Wankil Studio", "wankil studio|wankil|laink et terracid|laink and terracid|laink y terracid", YT, "9 3 7 1 6 5 6 6 6 3 6 1 6 4 9 6 4", "friend"],
  ["EnjoyPhoenix", "enjoyphoenix|enjoy phoenix|marie lopez", YT, "5 3 6 0 3 5 8 2 4 4 8 1 7 2 7 6 2"],
  ["Vilebrequin", "vilebrequin|vilebrequin youtube", YT, "9 4 7 1 7 6 6 3 6 6 5 1 6 4 9 6 6", "friend"],
  ["Domingo", "domingo twitch|domingo popcorn|domingo streamer", STREAM, "8 3 7 1 4 5 7 3 6 4 6 2 7 4 10 7 3", "leader"],
  ["Mathieu Sommet", "mathieu sommet|salut les geeks|slg", YT, "9 3 8 1 5 5 6 4 5 4 5 2 6 5 9 7 4"],
  ["Nota Bene", "nota bene youtube|benjamin brillaud", YT, "6 3 9 0 3 5 7 2 5 4 6 1 5 2 8 7 2", "teacher"],
  ["e-penser", "e penser|epenser|bruce benamran", YT, "7 3 9 0 3 5 7 2 4 4 5 1 5 2 8 7 2", "teacher"],
  ["Dr Nozman", "dr nozman|docteur nozman|nozman", YT, "7 3 8 0 5 6 7 2 5 5 6 1 6 2 8 6 4", "teacher"],
  ["Léa Elui", "lea elui|lea elui ginet", TIKTOK, "5 3 6 0 3 5 7 2 4 5 8 1 7 2 6 5 2", "dancer"],
  ["Fabien Olicard", "fabien olicard|olicard", MAGIC, "7 3 9 0 2 5 7 2 4 4 5 2 6 2 8 9 2"],
  ["ZywOo", "zywoo|mathieu herbaut", ESPORT, "5 3 8 0 2 6 7 2 4 9 6 2 7 2 4 9 2"],
  ["Kaydop", "kaydop|alexandre courant", ESPORT, "5 3 8 0 2 6 6 2 4 9 5 2 6 3 5 9 2"],
  // Créateurs internationaux
  ["Pokimane", "pokimane|imane anys", STREAM, "7 3 7 0 4 5 8 2 6 4 9 1 8 2 9 7 2"],
  ["Shroud", "shroud streamer|michael grzesiek", STREAM, "5 3 7 0 2 6 6 4 4 9 5 3 8 3 4 8 2"],
  ["AuronPlay", "auronplay|auron play|raul alvarez genes", YT, "10 3 7 1 4 5 7 4 5 4 6 2 8 3 9 7 3"],
  ["TheGrefg", "thegrefg|the grefg|grefg|david canovas", STREAM, "6 3 7 0 4 6 7 2 5 6 6 1 8 3 8 7 3"],
  ["ElRubius", "elrubius|el rubius|rubius|ruben doblas", YT, "9 3 7 0 6 5 8 5 5 4 7 1 9 3 8 6 3"],
  ["Dude Perfect", "dude perfect|dudeperfect", YT, "8 6 6 0 3 7 8 1 5 7 7 1 8 3 8 7 2", "friend"],
  ["Zach King", "zach king|zachking", TIKTOK, "8 3 8 0 2 4 8 2 4 6 8 1 7 1 4 9 2"],
  ["Bella Poarch", "bella poarch|bellapoarch", TIKTOK, "6 3 5 0 3 5 7 3 4 4 10 1 7 2 3 5 3"],
  ["Addison Rae", "addison rae|addison rae easterling", TIKTOK, "6 3 5 0 4 5 7 3 5 5 8 1 8 2 6 6 3", "dancer"],
  ["Emma Chamberlain", "emma chamberlain", YT, "8 2 6 0 6 4 7 5 6 3 8 1 8 3 8 6 4"],
  ["Casey Neistat", "casey neistat|neistat", YT, "7 5 8 1 4 8 7 0 4 8 5 2 8 4 8 8 4"],
  ["MKBHD", "mkbhd|marques brownlee", YT, "5 4 8 0 2 5 7 1 4 5 5 2 8 2 7 8 2"],
  ["Jacksepticeye", "jacksepticeye|jack septic eye|sean mcloughlin", YT, "9 3 6 0 6 5 9 3 5 5 7 1 8 4 10 5 4", "friend"],
  ["Sidemen", "sidemen|the sidemen", YT, "9 6 6 1 6 7 7 4 7 5 5 3 9 5 9 7 4", "friend"],
  ["Mark Rober", "mark rober", YT, "8 4 9 0 3 6 8 1 4 5 6 1 8 2 8 9 2", "teacher"],
  ["Veritasium", "veritasium|derek muller", YT, "6 3 10 0 2 6 7 1 4 4 5 1 7 2 8 8 2", "teacher"],
  ["Vsauce", "vsauce|michael stevens vsauce", YT, "7 3 10 0 3 5 7 2 4 4 6 1 7 1 9 8 2", "teacher"],
  // Esport, podcast et téléréalité
  ["Faker", "faker lol|lee sang hyeok|lee sang-hyeok", ESPORT, "4 2 9 0 1 6 6 1 4 10 5 4 8 2 3 10 1", "leader"],
  ["s1mple", "s1mple|oleksandr kostyliev", ESPORT, "5 3 8 1 3 6 5 2 4 10 4 5 8 6 6 9 3"],
  ["Bugha", "bugha|kyle giersdorf", ESPORT, "4 2 7 0 3 5 6 2 5 9 7 1 8 2 4 8 2"],
  ["Joe Rogan", "joe rogan|joe rogan experience", PODCAST, "8 7 7 1 3 7 6 2 6 5 3 6 9 5 10 7 2"],
  ["Khloé Kardashian", "khloe kardashian|khloe kardashian odom", REALTV, "7 5 6 0 4 5 7 2 5 4 6 3 9 4 8 6 5"],
  ["Kris Jenner", "kris jenner|momager|kris kardashian", REALTV, "6 3 8 1 3 6 6 1 4 4 4 5 10 4 9 10 2", "leader"],
  // Entrepreneurs et tech
  ["Larry Page", "larry page|lawrence page", TECH, "4 3 10 0 2 6 6 1 3 4 4 3 10 2 3 9 2"],
  ["Sergey Brin", "sergey brin|sergei brin", TECH, "5 4 10 0 3 7 6 1 3 5 4 3 10 2 4 9 2"],
  ["Satya Nadella", "satya nadella|nadella", TECH, "4 3 9 0 1 5 8 0 3 4 5 2 9 1 5 9 1", "leader"],
  ["Sundar Pichai", "sundar pichai|pichai", TECH, "4 3 9 0 2 5 8 1 3 4 6 2 9 1 5 8 1"],
  ["Jack Ma", "jack ma|ma yun", TECH, "8 3 8 1 3 7 7 1 4 4 6 2 10 3 9 9 4"],
  ["Brian Chesky", "brian chesky|chesky", TECH, "5 3 8 0 2 7 7 1 4 4 5 2 9 2 6 8 2"],
  ["Demis Hassabis", "demis hassabis|hassabis", TECH, "4 2 10 0 1 6 7 0 3 4 4 2 9 1 5 10 1"],
  ["Arthur Mensch", "arthur mensch", TECH, "3 3 9 0 2 7 6 1 3 6 5 2 8 2 4 8 2"],
  ["Frédéric Mazzella", "frederic mazzella|mazzella", TECH, "5 3 8 0 2 6 7 1 4 4 5 1 8 2 6 8 2"],
  ["Amancio Ortega", "amancio ortega", TECH, "2 3 8 0 1 6 6 0 3 4 4 2 10 2 1 9 1"],
  ["Ingvar Kamprad", "ingvar kamprad|kamprad", TECH, "3 3 8 0 2 6 5 0 3 3 5 2 10 3 3 9 2"],
  ["Phil Knight", "phil knight|philip knight", TECH, "4 5 8 0 2 7 6 1 3 7 4 3 10 3 4 9 2"],
  ["Vitalik Buterin", "vitalik buterin|buterin", TECH, "5 2 10 0 4 5 8 1 3 4 6 1 9 1 5 8 2"],
  ["Yann LeCun", "yann lecun|yann le cun|lecun", TECH, "5 3 10 0 2 6 7 1 4 4 5 2 7 4 8 8 2"],
  ["Evan Spiegel", "evan spiegel", TECH, "3 3 8 0 3 6 5 1 3 5 5 2 9 3 4 8 2"],
  // Mode
  ["Giorgio Armani", "giorgio armani|armani|re giorgio", MODE, "3 3 9 0 1 6 6 0 3 4 5 4 10 4 3 9 1", "leader"],
  ["Donatella Versace", "donatella versace", MODE, "6 3 7 1 3 7 7 1 3 4 4 6 9 5 7 8 4"],
  ["Valentino Garavani", "valentino garavani|valentino couturier", MODE, "4 2 8 0 1 5 6 1 4 3 5 3 10 3 4 8 1"],
  ["Ralph Lauren", "ralph lauren|ralph lifshitz", MODE, "3 3 8 0 1 6 7 0 3 4 5 2 10 2 3 8 1"],
  ["Tommy Hilfiger", "tommy hilfiger|hilfiger", MODE, "5 3 7 0 2 6 7 1 4 4 5 1 9 2 5 8 2"],
  ["Vivienne Westwood", "vivienne westwood", MODE, "7 3 8 0 4 9 7 1 3 4 5 4 8 6 8 7 2"],
  ["Virgil Abloh", "virgil abloh|abloh", MODE, "5 3 9 0 2 7 8 0 3 6 5 2 8 2 6 9 4"],
  ["Pierre Cardin", "pierre cardin|cardin", MODE, "5 3 9 0 2 8 6 0 4 4 4 3 10 4 6 9 1"],
  ["Christian Louboutin", "christian louboutin|louboutin", MODE, "6 3 8 0 2 6 7 1 4 4 6 2 9 2 6 8 1"],
  ["Hubert de Givenchy", "hubert de givenchy|givenchy", MODE, "4 3 8 0 1 5 8 1 3 3 6 2 9 1 4 7 1"],
  ["Kenzo Takada", "kenzo takada|kenzo", MODE, "6 2 8 0 2 7 8 1 5 4 7 1 8 1 5 7 3"],
  ["Inès de la Fressange", "ines de la fressange|fressange", MODE, "7 3 7 0 3 5 8 1 3 5 7 1 8 2 7 7 2"],
  ["Bella Hadid", "bella hadid|isabella hadid", MODE, "4 4 6 0 3 5 7 2 3 5 7 2 9 3 4 6 4"],
  ["Adriana Lima", "adriana lima", MODE, "5 6 6 0 2 5 8 1 3 5 7 2 9 2 5 6 2"],
  ["Heidi Klum", "heidi klum|klum", MODE, "8 4 7 0 4 6 7 1 4 5 7 3 9 4 8 8 2"],
  ["Tyra Banks", "tyra banks", MODE, "8 4 7 1 4 6 7 1 4 4 6 5 9 5 9 8 2", "teacher"],
  ["Twiggy", "twiggy|lesley hornby", MODE, "6 2 6 0 3 5 8 1 3 4 9 1 7 1 5 6 2"],
  // Chefs
  ["Anne-Sophie Pic", "anne sophie pic|anne-sophie pic", CHEF, "4 3 9 0 1 7 7 0 9 5 5 4 8 3 5 9 1", "chef"],
  ["Pierre Hermé", "pierre herme", CHEF, "5 3 9 0 1 6 7 1 10 4 6 2 8 2 5 9 1", "chef"],
  ["Cédric Grolet", "cedric grolet|grolet", CHEF, "4 4 9 0 1 6 6 0 9 6 6 3 8 3 4 9 1", "chef"],
  ["Michel Guérard", "michel guerard|guerard", CHEF, "6 3 9 0 1 7 8 1 9 4 6 2 8 2 6 8 1", "chef"],
  ["Mory Sacko", "mory sacko|sacko", CHEF, "6 5 8 0 2 7 8 1 9 6 7 2 6 2 7 8 2", "chef"],
  ["Juan Arbelaez", "juan arbelaez|arbelaez", CHEF, "8 5 7 0 3 7 9 1 9 6 8 1 7 2 9 7 2", "chef"],
  ["Massimo Bottura", "massimo bottura|bottura", CHEF, "8 3 9 0 3 7 9 1 9 4 6 2 8 3 9 8 2", "chef"],
  ["Ferran Adrià", "ferran adria", CHEF, "5 3 10 0 2 8 7 0 9 5 4 3 8 3 7 10 2", "chef"],
  ["Julia Child", "julia child", CHEF, "9 4 8 0 7 7 9 1 10 3 8 2 7 1 9 7 3", "chef|teacher"],
  ["Nigella Lawson", "nigella lawson", CHEF, "7 3 8 0 3 5 8 3 10 3 7 1 8 1 8 7 2", "chef|glutton"],
  ["Maïté", "maite|maite ordonez|maite la cuisine des mousquetaires", CHEF, "9 7 5 1 6 8 7 1 10 3 6 6 5 5 9 5 4", "chef|glutton"],
  ["Mercotte", "mercotte", CHEF, "7 2 8 1 2 5 7 1 9 3 7 4 6 4 8 8 2", "chef"],
  ["Guy Savoy", "guy savoy", CHEF, "6 3 9 0 1 6 8 0 9 5 6 2 8 2 6 8 2", "chef"],
  // Astronautes
  ["Youri Gagarine", "youri gagarine|yuri gagarin|iouri gagarine|gagarine|gagarin", SPACE, "6 6 8 0 1 10 8 0 3 8 9 1 4 1 5 7 6", "hero"],
  ["Valentina Terechkova", "valentina terechkova|valentina tereshkova|tereshkova|terechkova", SPACE, "4 6 8 0 1 10 7 0 3 7 6 2 5 2 4 7 2", "hero"],
  ["Jean-Loup Chrétien", "jean loup chretien|jean-loup chretien", SPACE, "5 6 9 0 1 10 7 0 4 7 5 1 5 1 5 8 1", "hero"],
  ["Sophie Adenot", "sophie adenot|adenot", SPACE, "5 7 9 0 1 10 7 0 3 7 6 2 5 1 5 8 1", "hero"],
  ["Chris Hadfield", "chris hadfield|hadfield", SPACE, "8 6 9 0 2 10 8 0 4 6 6 1 6 1 8 8 1", "hero|teacher"],
  ["Sunita Williams", "sunita williams|suni williams", SPACE, "6 7 9 0 2 10 8 0 3 8 6 1 5 1 5 8 7", "hero|survivor"],
  ["Sally Ride", "sally ride", SPACE, "5 6 10 0 1 10 7 0 3 6 6 1 5 1 4 8 2", "hero"],
  ["Scott Kelly", "scott kelly astronaute|scott kelly astronaut", SPACE, "6 7 9 0 1 10 7 0 3 6 5 2 5 2 5 8 2", "survivor"],
  // Aventuriers et explorateurs
  ["Bear Grylls", "bear grylls|edward grylls", EXPLO, "6 9 7 0 3 10 7 0 9 8 5 4 8 3 7 9 5", "survivor"],
  ["Alex Honnold", "alex honnold|honnold", EXPLO, "5 8 8 0 1 10 7 1 4 6 5 1 6 1 4 8 1", "hero"],
  ["Reinhold Messner", "reinhold messner|messner", EXPLO, "4 9 8 0 1 10 6 0 3 7 4 5 6 5 6 9 5", "survivor"],
  ["Steve Irwin", "steve irwin|crocodile hunter|chasseur de crocodiles", EXPLO, "9 8 6 0 5 10 9 0 4 8 8 2 6 1 10 6 7", "hero"],
  ["Jacques-Yves Cousteau", "jacques yves cousteau|jacques-yves cousteau|commandant cousteau|cousteau", EXPLO, "5 5 9 0 2 10 7 0 4 4 6 3 7 4 7 9 2", "leader|hero"],
  ["Antoine de Maximy", "antoine de maximy|j irai dormir chez vous|maximy", EXPLO, "9 5 7 0 6 9 9 1 6 5 7 1 5 2 10 7 4", "friend"],
  ["Nicolas Vanier", "nicolas vanier|vanier", EXPLO, "4 8 7 0 2 10 7 0 4 6 5 3 6 3 5 8 4", "survivor"],
  ["Felix Baumgartner", "felix baumgartner|fearless felix|baumgartner", EXPLO, "4 7 7 0 2 10 5 0 3 10 4 4 7 5 4 8 7", "speedster"],
  // Magiciens
  ["Harry Houdini", "harry houdini|houdini|erik weisz", MAGIC, "6 8 8 0 1 10 6 0 3 7 5 3 7 4 7 10 3", "survivor"],
  ["David Blaine", "david blaine", MAGIC, "5 7 8 0 1 10 6 0 2 4 4 5 8 2 3 9 4", "survivor"],
  ["Dynamo", "dynamo magicien|dynamo magician|steven frayne", MAGIC, "6 3 8 0 1 7 8 1 3 5 6 2 7 1 5 10 3"],
  ["Criss Angel", "criss angel|mindfreak", MAGIC, "4 6 7 1 2 9 6 1 3 5 3 6 8 4 7 9 4"],
  ["Éric Antoine", "eric antoine", MAGIC, "10 4 7 0 7 6 8 2 5 4 6 2 6 2 10 8 4"],
  ["Gérard Majax", "gerard majax|majax", MAGIC, "7 2 8 0 2 6 7 1 4 4 6 1 5 2 8 9 2"],
  ["Shin Lim", "shin lim", MAGIC, "3 2 8 0 1 5 7 1 3 10 6 1 6 1 1 10 1"],
  ["Garcimore", "garcimore", MAGIC, "10 2 5 0 10 4 8 3 5 3 9 0 4 1 7 3 9"],
  ["Penn & Teller", "penn et teller|penn and teller|penn y teller|penn teller", MAGIC, "9 4 8 0 2 6 6 1 5 5 5 3 8 4 8 9 2", "friend"],
  // Vulgarisateurs scientifiques
  ["Jamy Gourmaud", "jamy gourmaud|jamy|le monde de jamy", SCI, "8 3 8 0 4 5 9 1 6 4 8 1 5 1 9 7 3", "teacher"],
  ["Hubert Reeves", "hubert reeves", SCI, "6 2 10 0 1 5 9 1 4 2 9 1 4 1 8 7 2", "teacher"],
  ["Neil deGrasse Tyson", "neil degrasse tyson|neil de grasse tyson|degrasse tyson", SCI, "8 4 10 0 2 5 7 1 5 4 5 2 7 3 10 8 2", "teacher"],
  ["David Attenborough", "david attenborough|sir david attenborough", SCI, "6 3 10 0 1 8 10 0 3 3 9 1 6 1 8 7 1", "teacher|hero"],
  ["Bill Nye", "bill nye|bill nye the science guy", SCI, "9 3 9 0 4 5 8 1 4 5 6 1 6 2 9 7 2", "teacher"],
];
