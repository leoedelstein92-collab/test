// Base de connaissances des personnages de dessins animés.
// Chaque personnage a une note de 0 à 9 sur 17 traits, estimée d'après son comportement dans son dessin animé.
// Format : [nom, "alias|alias", "série FR|série EN|série ES" (ou une seule si identique), "notes"]

const TRAITS = ["hum", "str", "int", "evi", "clu", "bra", "kin", "laz", "glu", "spd", "cut", "scr", "ric", "tem", "tal", "cun", "unl"];
//                humour force intel. méchant maladr. courage gentil paresse gourm. vitesse mignon effray. riche caract. bavard rusé malchance

const RAW = [
  // Bob l'éponge
  ["Bob l'éponge", "spongebob|spongebob squarepants|bob esponja|bob", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "9 2 3 0 7 6 9 1 5 6 7 0 1 1 9 1 5"],
  ["Patrick Étoile", "patrick|patrick star|patrick l'etoile de mer|patricio|patricio estrella", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "8 6 0 0 9 4 7 9 8 2 5 0 1 3 6 0 4"],
  ["Carlo Tentacule", "carlo|squidward|calamardo|calamardo tentaculos", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "3 2 6 1 4 2 3 6 3 2 1 2 2 8 5 3 9"],
  ["M. Krabs", "mr krabs|monsieur krabs|eugene krabs|krabs|don cangrejo|senor cangrejo", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "4 5 6 4 2 5 3 3 4 3 2 2 8 6 6 7 2"],
  ["Plankton", "sheldon plankton", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "5 1 8 8 4 6 1 1 3 2 3 3 1 8 7 8 9"],
  ["Sandy Écureuil", "sandy|sandy cheeks|arenita|arenita mejillas", "Bob l'éponge|SpongeBob SquarePants|Bob Esponja", "4 8 8 0 2 9 8 2 3 6 6 0 3 5 5 5 2"],
  // Les Simpson
  ["Homer Simpson", "homer|homero|homero simpson", "Les Simpson|The Simpsons|Los Simpson", "9 5 1 1 9 4 6 9 9 2 3 1 2 7 6 2 8"],
  ["Bart Simpson", "bart", "Les Simpson|The Simpsons|Los Simpson", "9 3 4 4 5 7 4 6 4 6 4 1 1 5 8 8 5"],
  ["Lisa Simpson", "lisa", "Les Simpson|The Simpsons|Los Simpson", "4 2 9 0 1 6 9 1 2 3 6 0 1 3 7 6 3"],
  ["Marge Simpson", "marge", "Les Simpson|The Simpsons|Los Simpson", "3 3 6 0 2 6 9 1 2 2 4 1 2 3 5 5 4"],
  ["Maggie Simpson", "maggie", "Les Simpson|The Simpsons|Los Simpson", "3 1 6 1 2 6 5 3 2 3 9 1 1 2 0 6 3"],
  ["M. Burns", "mr burns|monsieur burns|charles montgomery burns|burns|senor burns|sr burns", "Les Simpson|The Simpsons|Los Simpson", "5 1 7 9 3 2 0 3 2 1 0 6 9 8 6 9 2"],
  ["Ned Flanders", "ned|flanders", "Les Simpson|The Simpsons|Los Simpson", "6 3 5 0 3 5 9 1 2 3 4 0 4 1 7 2 7"],
  ["Milhouse", "milhouse van houten", "Les Simpson|The Simpsons|Los Simpson", "5 1 4 1 7 2 7 3 3 2 4 0 2 3 6 2 9"],
  ["Krusty le clown", "krusty|krusty the clown|krusty el payaso", "Les Simpson|The Simpsons|Los Simpson", "7 2 4 4 5 3 2 5 6 2 1 4 6 7 8 5 6"],
  ["Tahiti Bob", "sideshow bob|actor secundario bob", "Les Simpson|The Simpsons|Los Simpson", "4 4 8 8 6 4 1 1 2 3 1 7 3 8 8 8 9"],
  ["Moe Szyslak", "moe", "Les Simpson|The Simpsons|Los Simpson", "5 4 3 4 4 3 2 4 3 2 0 4 1 7 5 4 9"],
  ["Ralph Wiggum", "ralph", "Les Simpson|The Simpsons|Los Simpson", "9 1 0 0 8 3 7 4 6 2 7 0 2 1 7 0 6"],
  ["Apu", "apu nahasapeemapetilon", "Les Simpson|The Simpsons|Los Simpson", "5 3 7 1 2 5 7 0 3 4 3 0 4 3 7 6 4"],
  // Les Griffin
  ["Peter Griffin", "peter", "Les Griffin|Family Guy|Padre de familia", "8 6 1 3 9 5 4 8 9 3 2 1 2 7 7 2 6"],
  ["Stewie Griffin", "stewie", "Les Griffin|Family Guy|Padre de familia", "8 3 9 7 2 7 2 1 3 4 7 5 3 8 8 9 3"],
  ["Brian Griffin", "brian", "Les Griffin|Family Guy|Padre de familia", "7 3 7 2 3 4 5 5 4 4 5 0 2 5 8 5 6"],
  // Rick et Morty
  ["Rick Sanchez", "rick", "Rick et Morty|Rick and Morty|Rick y Morty", "8 4 9 5 2 7 2 4 3 5 1 5 3 8 8 9 4"],
  ["Morty Smith", "morty", "Rick et Morty|Rick and Morty|Rick y Morty", "6 2 4 1 7 4 7 3 3 3 5 0 1 4 6 3 9"],
  // Looney Tunes
  ["Bugs Bunny", "bugs", "Looney Tunes", "9 4 8 2 1 8 6 3 6 8 7 0 3 3 8 9 1"],
  ["Daffy Duck", "daffy|pato lucas", "Looney Tunes", "8 2 3 5 8 4 2 4 5 5 4 0 3 9 9 6 9"],
  ["Porky Pig", "porky", "Looney Tunes", "5 2 4 0 5 3 8 3 5 3 7 0 2 3 4 2 6"],
  ["Titi", "tweety|piolin", "Looney Tunes", "6 1 6 2 1 5 5 3 3 5 9 0 1 3 4 8 1"],
  ["Grosminet", "sylvester|silvestre", "Looney Tunes", "6 4 3 5 8 5 3 4 8 6 4 2 1 7 6 6 9"],
  ["Bip Bip", "road runner|beep beep|correcaminos", "Looney Tunes", "7 3 6 1 0 7 4 1 3 9 7 0 1 2 1 7 0"],
  ["Vil Coyote", "wile e coyote|wile coyote|coyote|coyote vil", "Looney Tunes", "6 4 6 5 9 9 3 1 8 6 3 2 2 6 1 7 9"],
  ["Taz", "diable de tasmanie|tasmanian devil|demonio de tasmania", "Looney Tunes", "6 9 1 6 6 8 2 3 9 9 2 7 1 9 2 1 4"],
  ["Speedy Gonzales", "speedy", "Looney Tunes", "7 3 6 1 1 8 7 2 4 9 6 0 1 3 7 7 1"],
  // Disney classiques
  ["Mickey Mouse", "mickey|raton mickey", "Mickey", "6 4 6 0 3 7 9 2 3 5 8 0 5 2 6 5 3"],
  ["Minnie Mouse", "minnie", "Mickey", "5 3 6 0 2 6 9 2 3 4 9 0 5 3 7 4 2"],
  ["Donald Duck", "donald|pato donald", "Mickey", "7 4 3 2 8 6 5 4 4 5 6 0 2 9 7 3 9"],
  ["Dingo", "goofy|tribilin", "Mickey", "9 4 1 0 9 6 9 5 6 4 6 0 2 1 7 1 7"],
  ["Pluto", "pluto", "Mickey", "6 4 2 0 7 5 8 4 7 6 8 0 1 2 0 2 6"],
  ["Picsou", "oncle picsou|balthazar picsou|scrooge mcduck|scrooge|rico mcpato|tio gilito", "La Bande à Picsou|DuckTales|Patoaventuras", "4 5 8 3 2 8 3 1 2 4 3 1 9 8 6 8 2"],
  ["Simba", "simba", "Le Roi lion|The Lion King|El rey león", "5 7 5 0 4 8 8 4 5 7 8 1 6 3 6 3 6"],
  ["Scar", "scar", "Le Roi lion|The Lion King|El rey león", "3 6 8 9 2 4 0 4 4 5 1 8 5 8 7 9 3"],
  ["Mufasa", "mufasa", "Le Roi lion|The Lion King|El rey león", "3 9 8 0 1 9 9 1 4 7 4 2 8 3 5 5 7"],
  ["Timon", "timon", "Le Roi lion|The Lion King|El rey león", "9 1 6 1 4 2 6 7 8 5 6 0 2 4 9 6 3"],
  ["Pumbaa", "pumba|pumbaa", "Le Roi lion|The Lion King|El rey león", "9 6 3 0 6 4 9 7 9 3 6 0 2 3 6 2 3"],
  ["Nala", "nala", "Le Roi lion|The Lion King|El rey león", "4 7 7 0 2 8 8 2 4 7 7 2 5 4 5 5 3"],
  ["Woody", "sherif woody|sheriff woody", "Toy Story", "6 3 7 1 4 7 8 1 2 5 6 0 2 5 8 6 5"],
  ["Buzz l'Éclair", "buzz|buzz lightyear", "Toy Story", "7 7 5 0 5 9 8 1 2 7 5 0 2 4 7 3 4"],
  ["Elsa", "elsa", "La Reine des neiges|Frozen|Frozen", "3 8 7 1 2 7 8 2 2 5 7 4 9 5 3 3 6"],
  ["Anna", "anna", "La Reine des neiges|Frozen|Frozen", "7 4 5 0 7 9 9 2 6 5 8 0 9 3 9 3 5"],
  ["Olaf", "olaf", "La Reine des neiges|Frozen|Frozen", "9 1 3 0 8 5 9 2 4 3 9 0 1 0 9 1 6"],
  ["Stitch", "experience 626|experimento 626", "Lilo & Stitch", "8 9 7 5 6 8 6 3 8 8 8 5 1 7 3 7 4"],
  ["Le Génie", "genie|genie de la lampe|genio|genio de la lampara", "Aladdin", "9 9 8 1 3 6 9 2 5 9 6 1 3 2 9 7 3"],
  ["Jafar", "jafar|jafa", "Aladdin", "2 6 8 9 2 5 0 2 3 4 0 8 8 8 7 9 4"],
  ["Aladdin", "aladdin|aladin", "Aladdin", "6 5 6 1 4 8 8 2 4 7 6 0 2 4 6 8 5"],
  ["Ursula", "ursula", "La Petite Sirène|The Little Mermaid|La Sirenita", "5 7 7 9 2 6 0 3 5 3 1 8 4 8 8 8 3"],
  ["Ariel", "ariel", "La Petite Sirène|The Little Mermaid|La Sirenita", "5 3 4 0 5 7 8 2 3 6 7 0 5 5 7 3 4"],
  ["Cruella d'Enfer", "cruella|cruella de vil|cruella de vil", "Les 101 Dalmatiens|101 Dalmatians|101 dálmatas", "4 3 6 9 4 4 0 3 3 5 0 8 9 9 8 7 5"],
  ["Maléfique", "maleficent|malefica", "La Belle au bois dormant|Sleeping Beauty|La bella durmiente", "2 8 8 9 1 7 1 3 2 5 1 9 6 9 4 8 3"],
  ["Hadès", "hades", "Hercule|Hercules|Hércules", "8 8 7 8 3 5 0 3 3 6 1 7 5 9 9 8 4"],
  ["Hercule", "hercules", "Hercule|Hercules|Hércules", "5 9 4 0 6 9 9 2 6 7 6 0 4 3 5 2 4"],
  ["Mulan", "mulan", "Mulan", "5 7 8 0 6 9 8 2 3 6 6 0 3 4 5 8 4"],
  ["Mushu", "mushu", "Mulan", "9 1 5 1 6 5 6 3 5 5 6 1 1 5 9 6 5"],
  ["Baloo", "balu", "Le Livre de la jungle|The Jungle Book|El libro de la selva", "8 8 3 0 4 6 9 9 9 3 6 1 1 1 6 4 2"],
  ["Shere Khan", "shere khan|sher khan", "Le Livre de la jungle|The Jungle Book|El libro de la selva", "2 9 7 9 1 7 0 3 7 8 1 9 3 7 4 7 3"],
  ["Kaa", "kaa", "Le Livre de la jungle|The Jungle Book|El libro de la selva", "4 6 6 8 3 4 1 4 6 3 1 7 1 4 6 8 4"],
  ["Mowgli", "mowgli", "Le Livre de la jungle|The Jungle Book|El libro de la selva", "6 4 5 0 5 7 8 3 4 7 7 0 0 4 6 6 5"],
  ["Dumbo", "dumbo", "Dumbo", "4 3 4 0 8 6 8 2 4 3 9 0 2 1 0 2 7"],
  ["Bambi", "bambi", "Bambi", "3 2 4 0 7 4 8 2 3 6 9 0 1 1 3 2 8"],
  ["Winnie l'ourson", "winnie|winnie the pooh|winnie pooh|pooh", "Winnie l'ourson|Winnie the Pooh|Winnie Pooh", "6 3 2 0 7 3 9 7 9 1 9 0 1 0 5 1 4"],
  ["Tigrou", "tigger|tigre", "Winnie l'ourson|Winnie the Pooh|Winnie Pooh", "9 5 2 0 7 7 8 1 5 8 7 0 1 3 9 2 3"],
  ["Bourriquet", "eeyore|igor", "Winnie l'ourson|Winnie the Pooh|Winnie Pooh", "4 3 4 0 4 3 7 6 2 1 5 0 0 1 2 1 9"],
  ["Flash McQueen", "lightning mcqueen|rayo mcqueen|mcqueen", "Cars", "6 6 4 0 3 8 6 1 2 9 5 0 7 5 7 5 4"],
  ["Martin", "mater|mate", "Cars", "9 5 1 0 6 6 9 3 3 4 5 0 1 1 9 3 3"],
  ["Sulli", "sulley|sully|james p sullivan", "Monstres & Cie|Monsters, Inc.|Monstruos S.A.", "6 9 6 1 3 7 9 2 4 5 7 7 3 2 5 3 3"],
  ["Bob Razowski", "mike wazowski|mike|wazowski|razowski", "Monstres & Cie|Monsters, Inc.|Monstruos S.A.", "8 2 6 0 6 5 7 2 3 4 6 2 2 7 9 5 7"],
  ["Léon", "randall|randall boggs", "Monstres & Cie|Monsters, Inc.|Monstruos S.A.", "2 5 6 8 3 3 0 2 2 7 0 8 2 8 5 8 8"],
  ["Rémy", "remy", "Ratatouille", "5 2 8 0 3 7 8 1 7 6 8 0 1 3 5 5 6"],
  ["Nemo", "nemo", "Le Monde de Nemo|Finding Nemo|Buscando a Nemo", "5 2 4 0 5 7 8 1 3 4 9 0 1 3 5 2 6"],
  ["Dory", "dory|doris", "Le Monde de Nemo|Finding Nemo|Buscando a Nemo", "9 2 1 0 7 6 9 2 3 4 8 0 1 0 9 1 6"],
  ["M. Indestructible", "mr indestructible|mr incredible|bob parr|senor increible", "Les Indestructibles|The Incredibles|Los Increíbles", "5 9 5 0 6 9 8 2 7 5 3 1 4 6 5 3 5"],
  ["Edna Mode", "edna", "Les Indestructibles|The Incredibles|Los Increíbles", "8 1 9 1 0 7 4 0 2 3 2 2 7 7 9 6 1"],
  ["Syndrome", "sindrome", "Les Indestructibles|The Incredibles|Los Increíbles", "4 4 9 8 3 4 1 1 2 6 2 4 9 8 9 7 5"],
  ["Baymax", "baymax", "Les Nouveaux Héros|Big Hero 6|Grandes héroes", "8 9 8 0 7 7 9 2 1 2 9 1 1 0 6 1 3"],
  ["Maui", "maui", "Vaiana|Moana|Vaiana", "8 9 6 2 3 8 6 3 7 7 4 4 2 7 9 8 4"],
  ["Vaiana", "moana", "Vaiana|Moana|Vaiana", "5 6 6 0 4 9 9 1 3 6 7 0 4 5 6 6 4"],
  ["Raiponce", "rapunzel", "Raiponce|Tangled|Enredados", "6 5 6 0 5 8 9 1 3 5 8 0 6 2 8 5 4"],
  ["Mère Gothel", "gothel|mother gothel|madre gothel", "Raiponce|Tangled|Enredados", "3 3 7 9 1 3 0 2 3 3 1 6 4 7 7 9 4"],
  ["Capitaine Crochet", "crochet|captain hook|capitan garfio|garfio", "Peter Pan", "6 5 6 8 7 4 1 3 4 3 1 5 7 9 8 7 9"],
  ["Peter Pan", "peter pan", "Peter Pan", "7 5 5 1 2 9 6 2 4 9 7 0 1 5 7 8 2"],
  ["Pinocchio", "pinocho", "Pinocchio|Pinocchio|Pinocho", "5 2 2 0 6 5 7 3 3 4 8 0 0 2 7 1 8"],
  ["Cendrillon", "cinderella|cenicienta", "Cendrillon|Cinderella|La Cenicienta", "3 3 6 0 3 6 9 0 2 4 8 0 2 1 4 4 8"],
  ["Blanche-Neige", "blanche neige|snow white|blancanieves", "Blanche-Neige|Snow White|Blancanieves", "3 2 5 0 4 5 9 1 2 3 8 0 6 1 6 2 8"],
  ["La Méchante Reine", "mechante reine|reine|evil queen|reina malvada", "Blanche-Neige|Snow White|Blancanieves", "1 3 7 9 1 5 0 1 2 2 1 8 9 9 5 9 3"],
  ["Grincheux", "grumpy|grunon", "Blanche-Neige|Snow White|Blancanieves", "6 4 4 1 3 5 5 3 4 3 4 1 3 9 3 3 5"],
  ["Simplet", "dopey|mudito", "Blanche-Neige|Snow White|Blancanieves", "8 3 0 0 8 4 9 3 5 4 9 0 3 1 0 0 5"],
  ["Gaston", "gaston", "La Belle et la Bête|Beauty and the Beast|La bella y la bestia", "7 9 1 8 5 7 1 3 9 6 1 5 5 8 9 4 6"],
  ["La Bête", "bete|beast|bestia|la bestia", "La Belle et la Bête|Beauty and the Beast|La bella y la bestia", "3 9 6 3 6 8 6 2 5 6 3 8 9 9 4 3 6"],
  ["Lumière", "lumiere", "La Belle et la Bête|Beauty and the Beast|La bella y la bestia", "8 2 6 0 3 7 8 1 3 4 6 0 3 2 9 6 3"],
  // DreamWorks & autres films
  ["Shrek", "shrek", "Shrek", "8 8 5 3 4 8 6 6 7 4 2 6 3 7 6 6 4"],
  ["L'Âne", "ane|donkey|burro|asno", "Shrek", "9 3 3 0 6 5 8 2 6 6 6 0 1 3 9 3 5"],
  ["Le Chat Potté", "chat potte|puss in boots|gato con botas|el gato con botas", "Shrek", "7 5 6 2 2 9 6 2 4 9 9 1 3 5 7 9 3"],
  ["Lord Farquaad", "farquaad", "Shrek", "6 1 4 8 4 1 0 3 3 2 1 3 9 8 7 7 4"],
  ["Fiona", "fiona", "Shrek", "6 8 6 0 3 9 7 2 4 7 7 3 8 6 6 6 6"],
  ["Po", "po", "Kung Fu Panda", "9 8 3 0 7 9 9 5 9 5 8 0 1 2 8 4 4"],
  ["Tai Lung", "tai lung", "Kung Fu Panda", "2 9 7 9 1 8 0 1 3 9 1 8 1 9 4 7 6"],
  ["Gru", "gru", "Moi, moche et méchant|Despicable Me|Mi villano favorito", "7 6 8 7 4 7 4 2 4 4 3 5 6 7 6 8 4"],
  ["Les Minions", "minion|minions|kevin|bob le minion", "Moi, moche et méchant|Despicable Me|Mi villano favorito", "9 4 1 1 9 6 7 3 8 5 9 0 0 2 9 1 7"],
  ["Agnes", "agnes", "Moi, moche et méchant|Despicable Me|Mi villano favorito", "7 1 4 0 3 5 9 1 4 3 9 0 0 2 8 3 3"],
  // Mangas / animés japonais
  ["Son Goku", "goku|sangoku|san goku|son goku", "Dragon Ball", "7 9 3 0 6 9 9 3 9 9 6 0 1 2 6 3 3"],
  ["Vegeta", "vegeta", "Dragon Ball", "3 9 7 5 2 9 3 1 6 9 1 5 6 9 6 6 5"],
  ["Freezer", "frieza|freeza", "Dragon Ball", "2 9 7 9 1 7 0 2 3 9 1 9 9 9 7 8 5"],
  ["Krilin", "krillin", "Dragon Ball", "6 6 5 0 5 7 8 2 4 7 5 0 1 3 6 4 9"],
  ["Piccolo", "piccolo", "Dragon Ball", "3 8 8 4 1 8 6 2 0 8 1 6 1 6 3 7 3"],
  ["Tortue Géniale", "tortue geniale|maitre roshi|master roshi|muten roshi|kame sennin", "Dragon Ball", "8 7 7 2 4 6 5 7 5 5 2 1 2 3 7 7 3"],
  ["Naruto", "naruto uzumaki", "Naruto", "8 8 3 0 7 9 9 2 9 8 6 1 1 6 9 6 5"],
  ["Sasuke", "sasuke uchiha", "Naruto", "1 8 8 6 1 8 3 1 2 9 3 6 3 8 2 8 7"],
  ["Luffy", "monkey d luffy", "One Piece", "9 9 2 0 7 9 9 3 9 8 6 1 1 5 8 4 4"],
  ["Zoro", "roronoa zoro", "One Piece", "5 9 4 2 6 9 6 8 6 7 2 6 1 7 2 3 4"],
  ["Pikachu", "pikachu", "Pokémon", "6 6 5 0 2 8 9 2 5 9 9 2 0 5 3 4 2"],
  ["Sacha", "ash|ash ketchum|sacha ketchum", "Pokémon", "6 5 4 0 6 9 9 2 6 6 6 0 1 6 8 4 5"],
  ["La Team Rocket", "team rocket|equipo rocket|jessie|james", "Pokémon", "9 3 4 6 9 5 4 3 5 4 3 2 1 6 9 6 9"],
  ["Miaouss", "meowth", "Pokémon", "8 3 6 5 6 4 4 3 5 5 6 1 1 6 9 7 9"],
  ["Ronflex", "snorlax", "Pokémon", "6 9 1 0 5 3 7 9 9 1 7 1 0 2 0 0 3"],
  ["Psykokwak", "psyduck", "Pokémon", "7 3 1 0 8 3 6 4 3 2 7 0 0 3 2 0 8"],
  ["Mewtwo", "mewtwo", "Pokémon", "1 9 9 7 0 8 3 2 1 8 2 8 1 7 3 7 3"],
  ["Totoro", "totoro", "Mon voisin Totoro|My Neighbor Totoro|Mi vecino Totoro", "5 9 5 0 2 6 9 7 8 7 9 3 1 0 0 3 1"],
  // Scooby-Doo
  ["Scooby-Doo", "scooby|scooby doo", "Scooby-Doo", "9 4 2 0 8 2 9 6 9 7 8 0 0 1 6 2 7"],
  ["Sammy", "shaggy|shaggy rogers", "Scooby-Doo", "9 3 3 0 7 1 9 7 9 7 4 0 1 1 7 3 6"],
  ["Véra", "vera|velma", "Scooby-Doo", "4 2 9 0 6 6 7 2 3 3 5 0 2 4 7 8 6"],
  ["Fred Jones", "fred", "Scooby-Doo", "5 6 6 0 4 7 7 2 3 5 5 0 3 3 6 6 4"],
  ["Daphné", "daphne", "Scooby-Doo", "5 4 5 0 6 6 7 2 3 4 7 0 8 3 7 5 7"],
  // Classiques TV
  ["Garfield", "garfield", "Garfield", "8 4 6 3 3 2 3 9 9 1 6 0 1 7 7 7 3"],
  ["Odie", "odie", "Garfield", "7 4 0 0 9 4 9 2 5 6 8 0 0 1 2 0 7"],
  ["Tom", "tom le chat|tom cat", "Tom et Jerry|Tom and Jerry|Tom y Jerry", "8 5 3 4 9 5 4 4 6 7 5 2 1 8 1 5 9"],
  ["Jerry", "jerry", "Tom et Jerry|Tom and Jerry|Tom y Jerry", "7 3 8 3 1 8 6 3 6 8 9 0 1 3 1 9 1"],
  ["La Panthère rose", "panthere rose|pink panther|pantera rosa|la pantera rosa", "La Panthère rose|The Pink Panther|La Pantera Rosa", "8 4 7 1 3 6 6 3 3 5 6 0 4 1 0 8 4"],
  ["Woody Woodpecker", "woody woodpecker|pajaro loco|el pajaro loco", "Woody Woodpecker|Woody Woodpecker|El pájaro loco", "9 3 5 4 3 6 4 4 5 7 5 1 1 5 8 8 3"],
  ["Popeye", "popeye", "Popeye", "6 9 3 0 4 9 8 2 7 6 3 1 1 6 6 3 5"],
  ["Olive Oyl", "olive|olivia|olivia oyl", "Popeye", "5 1 3 0 7 4 6 2 2 3 4 0 1 6 7 3 7"],
  ["Brutus", "bluto", "Popeye", "3 9 2 7 4 6 1 3 7 4 0 6 1 9 6 4 6"],
  ["Grand Schtroumpf", "papa smurf|papa pitufo|grand schtroumpf", "Les Schtroumpfs|The Smurfs|Los Pitufos", "4 4 9 0 1 7 9 1 3 3 6 0 1 3 6 7 3"],
  ["Gargamel", "gargamel", "Les Schtroumpfs|The Smurfs|Los Pitufos", "6 4 5 8 8 5 1 3 5 3 1 5 1 9 8 6 9"],
  ["La Schtroumpfette", "schtroumpfette|smurfette|pitufina", "Les Schtroumpfs|The Smurfs|Los Pitufos", "4 3 5 0 2 5 8 2 3 4 9 0 2 3 6 5 3"],
  ["Obélix", "obelix", "Astérix|Asterix|Astérix", "8 9 2 0 7 9 8 3 9 4 6 2 2 6 6 1 3"],
  ["Astérix", "asterix", "Astérix|Asterix|Astérix", "7 8 8 0 2 9 7 2 5 7 5 1 1 6 6 9 2"],
  ["Idéfix", "idefix|dogmatix|ideafix", "Astérix|Asterix|Astérix", "5 2 4 0 3 7 8 2 4 7 9 0 0 5 3 3 2"],
  ["Tintin", "tintin", "Les Aventures de Tintin|The Adventures of Tintin|Las aventuras de Tintín", "4 5 7 0 2 9 8 1 3 7 5 0 2 3 6 7 4"],
  ["Capitaine Haddock", "haddock|captain haddock|capitan haddock", "Les Aventures de Tintin|The Adventures of Tintin|Las aventuras de Tintín", "9 6 4 0 7 7 6 4 5 4 2 2 4 9 8 3 8"],
  ["Snoopy", "snoopy", "Snoopy|Peanuts|Snoopy", "8 3 6 0 3 7 8 6 7 5 9 0 1 2 0 6 3"],
  ["Charlie Brown", "charlie brown|charlie", "Snoopy|Peanuts|Snoopy", "4 2 5 0 7 5 9 3 3 3 6 0 1 2 5 2 9"],
  ["Inspecteur Gadget", "gadget|inspector gadget", "Inspecteur Gadget|Inspector Gadget|Inspector Gadget", "8 6 1 0 9 8 7 3 4 5 3 0 3 3 7 0 6"],
  ["Docteur Gang", "dr claw|doctor claw|doctor garra|docteur gang", "Inspecteur Gadget|Inspector Gadget|Inspector Gadget", "2 3 8 9 2 3 0 5 3 2 3 7 8 9 4 8 8"],
  ["Peppa Pig", "peppa", "Peppa Pig", "7 2 4 1 4 5 6 3 5 3 8 0 2 6 9 3 4"],
  ["Papa Pig", "daddy pig|papa cochon|papa pig", "Peppa Pig", "8 3 4 0 8 4 8 6 8 2 7 0 3 2 7 2 6"],
  ["Ladybug", "marinette|marinette dupain cheng|miraculous", "Miraculous", "5 7 7 0 8 9 9 2 4 8 7 0 3 4 6 7 7"],
  ["Chat Noir", "cat noir|adrien|adrien agreste", "Miraculous", "9 7 6 0 4 9 8 2 3 8 7 1 8 3 8 5 8"],
  // Cartoon Network & co
  ["Finn", "finn l'humain|finn the human", "Adventure Time|Adventure Time|Hora de aventura", "7 7 4 0 5 9 9 2 6 7 6 0 1 5 8 4 4"],
  ["Jake le chien", "jake|jake the dog|jake el perro", "Adventure Time|Adventure Time|Hora de aventura", "9 8 5 1 4 7 8 8 9 6 6 1 1 2 8 6 2"],
  ["Gumball", "gumball|gumball watterson", "Le Monde incroyable de Gumball|The Amazing World of Gumball|El increíble mundo de Gumball", "9 2 4 2 8 5 6 5 5 5 6 0 1 5 9 5 7"],
  ["Courage", "courage le chien froussard|courage the cowardly dog|coraje|coraje el perro cobarde", "Courage, le chien froussard|Courage the Cowardly Dog|Coraje, el perro cobarde", "6 3 3 0 8 7 9 2 4 6 7 3 0 1 3 4 9"],
  ["Johnny Bravo", "johnny|johnny bravo", "Johnny Bravo", "8 7 1 0 7 6 4 4 4 4 2 0 1 4 9 1 9"],
  ["Dexter", "dexter", "Le Laboratoire de Dexter|Dexter's Laboratory|El laboratorio de Dexter", "5 2 9 1 2 5 4 1 3 3 5 0 4 9 7 7 7"],
  ["Mojo Jojo", "mojo jojo|mojo", "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas", "7 5 9 8 4 5 0 1 3 3 1 4 3 9 9 7 9"],
  ["Belle", "blossom|bombon", "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas", "5 8 8 0 2 9 8 1 3 9 9 0 1 5 7 6 2"],
  ["Bulle", "bubbles|burbuja", "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas", "7 7 3 0 5 7 9 2 4 9 9 0 1 3 7 2 3"],
  ["Rebelle", "buttercup|bellota", "Les Supers Nanas|The Powerpuff Girls|Las Chicas Superpoderosas", "5 9 4 1 3 9 5 3 4 9 6 2 1 9 4 3 3"],
  ["Phineas", "phineas|phineas flynn", "Phinéas et Ferb|Phineas and Ferb|Phineas y Ferb", "6 3 9 0 1 8 9 0 3 6 6 0 2 1 8 7 0"],
  ["Perry l'ornithorynque", "perry|perry the platypus|perry el ornitorrinco|agent p|agente p", "Phinéas et Ferb|Phineas and Ferb|Phineas y Ferb", "6 7 8 0 1 9 7 3 3 7 8 0 1 2 0 8 2"],
  ["Doofenshmirtz", "docteur doofenshmirtz|dr doofenshmirtz|heinz doofenshmirtz", "Phinéas et Ferb|Phineas and Ferb|Phineas y Ferb", "9 2 7 6 7 4 3 2 4 2 2 2 5 6 9 5 9"],
  ["Kim Possible", "kim possible|kim", "Kim Possible", "5 8 8 0 2 9 8 1 3 8 6 0 3 4 7 7 2"],
  ["Ben 10", "ben tennyson|ben", "Ben 10", "7 9 5 0 4 9 7 3 6 8 4 2 1 6 7 5 4"],
  ["Eric Cartman", "cartman", "South Park", "8 3 6 9 4 3 0 8 9 2 2 3 3 9 9 9 5"],
  ["Kenny McCormick", "kenny", "South Park", "6 3 4 0 4 6 7 4 4 4 5 0 0 3 2 3 9"],
  ["Bender", "bender", "Futurama", "9 7 6 7 4 5 2 9 6 5 1 2 3 7 9 8 4"],
  ["Fry", "philip j fry", "Futurama", "8 3 1 0 8 5 7 8 7 3 4 0 1 2 7 2 9"],
  ["Sonic", "sonic|sonic le herisson|sonic the hedgehog", "Sonic", "7 6 6 0 2 9 7 1 6 9 6 0 1 6 8 6 2"],
  ["Batman", "batman|bruce wayne", "Batman, la série animée|Batman: The Animated Series|Batman: la serie animada", "2 8 9 0 1 9 7 1 2 7 2 7 9 7 2 9 7"],
  ["Le Joker", "joker|el guason|guason", "Batman, la série animée|Batman: The Animated Series|Batman: la serie animada", "9 4 8 9 3 7 0 2 3 5 1 9 4 9 9 9 6"],
];

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const CHARACTERS = RAW.map(([name, aliases, show, notes]) => {
  const values = notes.trim().split(/\s+/).map(Number);
  const [fr, en = fr, es = en] = show.split("|");
  const traits = Object.fromEntries(TRAITS.map((t, i) => [t, values[i]]));
  const keys = new Set([name, ...aliases.split("|")].map(normalize).filter(Boolean));
  return { name, show: { fr, en, es }, traits, values, keys: [...keys] };
});

const INDEX = new Map();
for (const c of CHARACTERS) for (const k of c.keys) if (!INDEX.has(k)) INDEX.set(k, c);

function levenshtein(a, b) {
  if (Math.abs(a.length - b.length) > 3) return 99;
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

// Retrouve un personnage à partir de ce qu'a tapé le joueur (fautes de frappe tolérées).
function findCharacter(input) {
  const q = normalize(input);
  if (!q) return null;
  if (INDEX.has(q)) return INDEX.get(q);
  const qPadded = ` ${q} `;

  // Une forme connue est contenue dans la réponse ("homer simpson le papa" → Homer)
  let best = null;
  for (const [k, c] of INDEX) {
    if (k.length >= 3 && qPadded.includes(` ${k} `) && (!best || k.length > best.k.length)) best = { k, c };
  }
  if (best) return best.c;

  // Faute de frappe
  let fuzzy = null;
  for (const [k, c] of INDEX) {
    const tolerance = k.length <= 4 ? 0 : k.length <= 7 ? 1 : 2;
    const d = levenshtein(q, k);
    if (d <= tolerance && (!fuzzy || d < fuzzy.d)) fuzzy = { d, c };
  }
  return fuzzy ? fuzzy.c : null;
}

module.exports = { TRAITS, CHARACTERS, findCharacter, normalize };
