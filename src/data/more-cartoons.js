// Films d'animation : seconds rôles Disney, Pixar, DreamWorks, Illumination, Blue Sky, Sony, Netflix…
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const AL = "Alice au pays des merveilles|Alice in Wonderland|Alicia en el país de las maravillas";
const RH = "Robin des Bois|Robin Hood|Robin Hood";
const LK2 = "Le Roi lion 2|The Lion King II|El rey león 2";
const LS = "Lilo & Stitch";
const ZOO = "Zootopie|Zootopia|Zootopia";
const MOA = "Vaiana|Moana|Vaiana";
const BH6 = "Les Nouveaux Héros|Big Hero 6|Grandes héroes";
const ENC = "Encanto";
const PF = "La Princesse et la Grenouille|The Princess and the Frog|Tiana y el sapo";
const FRZ = "La Reine des neiges|Frozen|Frozen";
const RAYA = "Raya et le Dernier Dragon|Raya and the Last Dragon|Raya y el último dragón";
const WIR = "Les Mondes de Ralph|Wreck-It Ralph|¡Rompe Ralph!";
const CARS = "Cars";
const IO = "Vice-versa|Inside Out|Intensamente";
const ONW = "En avant|Onward|Unidos";
const UP = "Là-haut|Up|Up: Una aventura de altura";
const MI = "Monstres & Cie|Monsters, Inc.|Monstruos S.A.";
const SH = "Shrek";
const HTTYD = "Dragons|How to Train Your Dragon|Cómo entrenar a tu dragón";
const KFP = "Kung Fu Panda";
const TR = "Les Trolls|Trolls|Trolls";
const BAD = "Les Bad Guys|The Bad Guys|Los tipos malos";
const PUSS = "Le Chat Potté 2|Puss in Boots: The Last Wish|El Gato con Botas: El último deseo";
const MVA = "Monstres contre Aliens|Monsters vs. Aliens|Monstruos contra alienígenas";
const WR = "Le Robot sauvage|The Wild Robot|Robot salvaje";
const DM = "Moi, moche et méchant|Despicable Me|Mi villano favorito";
const PETS = "Comme des bêtes|The Secret Life of Pets|La vida secreta de tus mascotas";
const SING = "Tous en scène|Sing|¡Canta!";
const ICE = "L'Âge de glace|Ice Age|La era de hielo";
const RIO = "Rio";
const HT = "Hôtel Transylvanie|Hotel Transylvania|Hotel Transilvania";
const SPV = "Spider-Man : New Generation|Spider-Man: Into the Spider-Verse|Spider-Man: Un nuevo universo";
const KDH = "KPop Demon Hunters|KPop Demon Hunters|Las guerreras K-pop";
const AB = "Angry Birds";
const MARIO = "Super Mario Bros. le film|The Super Mario Bros. Movie|Super Mario Bros. La película";
const LEGO = "La Grande Aventure Lego|The Lego Movie|La gran aventura Lego";
const ELD = "La Route d'Eldorado|The Road to El Dorado|La ruta hacia El Dorado";
const BASIL = "Basil, détective privé|The Great Mouse Detective|Basil, el ratón superdetective";

module.exports = [
  // ---------- Disney ----------
  ["Bonnet Blanc et Blanc Bonnet", "tweedledee|tweedledum|bonnet blanc|blanc bonnet|tweedle dee", AL, "9 4 1 0 8 3 5 4 6 3 6 1 1 4 10 2 4"],
  ["Le Lièvre de Mars", "lievre de mars|march hare|liebre de marzo", AL, "9 3 2 0 8 4 5 4 6 5 3 1 1 7 9 2 4"],
  ["La Chenille", "chenille|absolem|caterpillar|oruga", AL, "5 2 8 1 1 3 3 8 4 1 2 2 2 6 6 6 2"],
  ["Lady Gloussette", "lady kluck|lady gloussette|lady cluck", RH, "8 7 4 0 4 8 8 2 6 5 4 1 1 5 8 4 3"],
  ["Frère Tuck", "frere tuck|friar tuck|fraile tuck", RH, "6 6 6 0 4 8 10 2 7 3 5 0 0 6 6 3 5"],
  ["Oliver", "oliver|oliver et compagnie", "Oliver et Compagnie|Oliver & Company|Oliver y su pandilla", "5 2 4 0 5 6 9 2 5 5 10 0 0 2 3 3 8"],
  ["Roublard", "dodger|roublard", "Oliver et Compagnie|Oliver & Company|Oliver y su pandilla", "8 5 7 2 2 7 6 3 6 8 4 1 0 3 8 9 4"],
  ["Basil", "basil|basil de baker street", BASIL, "6 4 10 0 3 9 6 1 3 7 5 0 2 7 9 9 4", "hero"],
  ["Ratigan", "ratigan|professeur ratigan", BASIL, "8 6 9 9 2 5 0 2 5 4 0 7 6 10 9 9 5"],
  ["Zeus", "zeus", "Hercule|Hercules|Hércules", "8 10 6 0 3 8 8 4 7 7 2 4 9 4 8 5 3", "leader"],
  ["Kovu", "kovu", LK2, "3 8 6 2 3 8 7 2 4 7 5 4 1 6 4 6 6"],
  ["Kiara", "kiara", LK2, "6 5 5 0 5 8 9 2 4 7 8 0 7 4 7 4 5"],
  ["Zira", "zira", LK2, "1 7 6 9 2 7 0 2 4 7 0 8 0 10 7 7 8"],
  ["Grand-mère Feuillage", "grand mere feuillage|grandmother willow|abuela sauce", "Pocahontas", "6 4 9 0 1 6 9 6 2 0 3 1 1 1 7 6 2", "teacher"],
  ["Gantu", "capitaine gantu|gantu", LS, "4 9 4 6 6 6 2 2 6 4 1 6 2 9 6 3 9"],
  ["Angel", "angel|experience 624", LS, "6 6 6 1 2 6 7 2 5 7 9 2 0 4 4 6 3"],
  ["M. Big", "mr big|monsieur big|senor big", ZOO, "6 2 7 7 1 5 4 3 5 1 9 5 9 6 4 8 4"],
  ["Duke Weaselton", "duke weaselton|duc weaselton|weaselton", ZOO, "7 2 5 6 5 3 1 4 5 6 1 2 2 6 8 8 8"],
  ["Finnick", "finnick", ZOO, "8 5 6 4 1 6 3 4 5 5 6 3 3 9 4 8 4"],
  ["Gazelle", "gazelle|shakira zootopia", ZOO, "4 3 6 0 2 6 8 2 3 6 7 0 9 2 5 4 3", "dancer"],
  ["Tala", "grand mere tala|gramma tala|abuela tala", MOA, "8 3 9 0 2 8 9 3 3 3 4 1 1 1 7 6 4", "teacher|dancer"],
  ["Te Kā", "te ka|te fiti", MOA, "1 10 3 6 1 8 5 2 3 6 2 10 0 10 0 2 7"],
  ["Fred (Les Nouveaux Héros)", "fred big hero 6|fred les nouveaux heros|fredzilla", BH6, "10 6 4 0 7 8 8 6 7 6 4 4 9 1 10 4 3", "hero"],
  ["GoGo Tomago", "gogo|gogo tomago", BH6, "4 7 7 0 1 9 6 2 4 10 4 2 2 8 2 6 3", "speedster|hero"],
  ["Honey Lemon", "honey lemon", BH6, "8 4 9 0 4 7 9 1 4 5 8 0 6 1 9 5 3", "hero"],
  ["Wasabi", "wasabi", BH6, "6 6 8 0 4 4 8 1 4 4 3 0 2 6 7 4 5", "hero"],
  ["Yokai", "yokai|professeur callaghan|callaghan", BH6, "1 6 9 8 0 7 2 1 3 4 0 8 3 9 2 8 9"],
  ["Pepa Madrigal", "pepa|pepa madrigal", ENC, "6 4 5 0 4 5 8 2 5 4 5 2 4 9 8 3 6"],
  ["Camilo Madrigal", "camilo|camilo madrigal", ENC, "9 3 5 1 4 6 6 3 7 5 6 1 4 2 9 8 3"],
  ["Dolores Madrigal", "dolores|dolores madrigal", ENC, "5 3 6 0 2 4 7 2 4 4 6 0 4 2 8 5 6"],
  ["Antonio Madrigal", "antonio|antonio madrigal", ENC, "5 3 4 0 3 6 9 2 5 4 10 0 4 1 3 3 3"],
  ["Julieta Madrigal", "julieta|julieta madrigal", ENC, "4 4 7 0 2 6 10 1 6 3 6 0 4 2 6 4 4", "chef"],
  ["Mama Odie", "mama odie", PF, "9 3 9 0 4 7 8 5 6 2 3 2 2 3 8 7 2", "teacher"],
  ["Charlotte La Bouff", "charlotte|charlotte la bouff|lottie", PF, "9 3 3 0 6 6 9 2 7 5 6 0 10 4 10 3 3", "friend"],
  ["Ray", "ray luciole|ray the firefly|ray luciernaga", PF, "8 1 4 0 5 8 9 2 4 6 6 0 0 1 8 3 9"],
  ["Guimauve", "marshmallow|guimauve|malvavisco", FRZ, "4 10 2 2 3 7 4 2 3 4 4 9 0 9 1 1 4"],
  ["Oaken", "oaken|oaken s trading post", FRZ, "8 9 4 1 2 5 7 3 5 3 5 2 6 3 7 6 2"],
  ["Namaari", "namaari", RAYA, "3 8 8 3 1 9 5 1 3 8 4 4 7 6 3 8 5"],
  ["Tuk Tuk", "tuk tuk|touk touk", RAYA, "7 7 2 0 4 7 9 4 8 6 10 1 0 1 0 2 3", "friend"],
  ["Sergent Calhoun", "calhoun|sergent calhoun|sergeant calhoun", WIR, "4 9 7 0 1 10 5 1 3 8 3 6 3 9 6 6 9", "leader|hero"],
  ["Shank", "shank", "Ralph 2.0|Ralph Breaks the Internet|WiFi Ralph", "6 7 7 1 1 9 7 2 4 10 4 3 4 2 6 7 3", "speedster"],
  // ---------- Pixar ----------
  ["Luigi (Cars)", "luigi cars", CARS, "7 2 5 0 3 5 7 2 5 2 5 0 3 7 9 3 3"],
  ["Guido", "guido", CARS, "7 4 5 0 2 6 8 2 4 10 6 0 1 4 1 4 3", "speedster"],
  ["Ramone", "ramone", CARS, "7 4 6 0 2 5 7 4 4 6 2 0 3 2 6 5 4", "dancer"],
  ["Fillmore", "fillmore", CARS, "7 3 4 0 3 3 8 9 4 2 2 0 1 0 6 3 3"],
  ["Sergent", "sarge|sergent cars", CARS, "4 6 6 0 1 8 6 1 3 4 1 3 2 8 5 5 3"],
  ["Mack", "mack", CARS, "6 8 3 0 6 5 9 3 5 5 4 0 1 1 7 2 6", "friend"],
  ["Cruz Ramirez", "cruz|cruz ramirez", CARS, "7 5 7 0 3 8 9 1 4 9 6 0 3 3 9 6 4", "teacher|speedster"],
  ["Jackson Storm", "jackson storm|storm", CARS, "2 7 6 6 1 6 1 1 3 10 2 4 8 8 5 6 2", "speedster"],
  ["Francesco Bernoulli", "francesco|francesco bernoulli", CARS, "8 5 4 2 3 6 4 2 5 9 4 0 8 3 10 4 3", "speedster"],
  ["Ennui", "ennui|aburrimiento", "Vice-versa 2|Inside Out 2|Intensamente 2", "7 1 6 0 3 2 4 10 3 0 5 0 2 1 2 4 3"],
  ["Embarras", "embarrassment|embarras|verguenza", "Vice-versa 2|Inside Out 2|Intensamente 2", "6 8 3 0 6 2 9 4 6 1 8 0 1 0 0 1 6"],
  ["Envie", "envy inside out|envie|envidia", "Vice-versa 2|Inside Out 2|Intensamente 2", "5 1 4 1 3 3 6 2 5 5 10 0 1 2 6 4 4"],
  ["Ian Lightfoot", "ian|ian lightfoot", ONW, "4 3 7 0 6 8 9 1 4 4 6 0 1 3 4 5 7"],
  ["Barley Lightfoot", "barley|barley lightfoot", ONW, "9 6 6 0 7 9 9 3 7 5 4 0 1 3 10 5 7", "friend"],
  ["Kevin (Là-haut)", "kevin la haut|kevin up|kevin oiseau", UP, "7 6 3 0 5 6 6 3 9 7 7 1 0 3 0 3 6", "glutton"],
  ["Dean Hardscrabble", "hardscrabble|dean hardscrabble|abigail hardscrabble", "Monstres Academy|Monsters University|Monsters University", "1 7 9 2 0 7 3 1 3 6 0 9 4 8 3 8 3", "teacher"],
  ["Celia", "celia|celia mae", MI, "4 2 5 0 2 4 7 2 3 2 4 2 2 8 7 3 5"],
  ["Elinor", "reine elinor|queen elinor|elinor", "Rebelle|Brave|Valiente", "3 7 8 0 1 7 8 1 3 4 3 4 9 7 7 6 6", "leader"],
  ["M-O", "mo|m o", "WALL-E", "6 3 3 0 4 6 8 0 2 7 9 0 0 7 0 2 4"],
  ["Sox", "sox", "Buzz l'Éclair|Lightyear|Lightyear", "8 4 9 0 2 7 9 3 4 6 9 0 1 0 6 6 3", "friend"],
  // ---------- DreamWorks ----------
  ["Les Trois Petits Cochons", "trois petits cochons|three little pigs|tres cerditos", SH, "7 3 3 0 6 4 6 3 7 3 6 0 1 3 7 2 6"],
  ["Le Grand Méchant Loup", "grand mechant loup|big bad wolf|lobo feroz", SH, "7 5 4 2 5 4 5 6 6 4 3 3 1 2 6 3 5"],
  ["Le Roi Harold", "roi harold|king harold|rey harold", SH, "6 4 6 2 3 5 6 3 5 2 3 1 9 5 6 6 5", "leader"],
  ["Kitty Pattes de Velours", "kitty|kitty pattes de velours|kitty softpaws", PUSS, "6 6 8 1 1 9 6 2 4 9 8 1 2 5 6 10 4"],
  ["Perrito", "perrito", PUSS, "9 2 1 0 6 7 10 2 6 5 10 0 0 0 9 1 9", "friend"],
  ["La Mort", "le loup la mort|death wolf|death|la muerte", PUSS, "3 10 8 6 0 9 1 1 3 9 1 10 0 5 3 9 1"],
  ["Boucle d'or", "boucle d or|goldilocks|ricitos de oro", PUSS, "5 6 7 3 2 8 6 1 5 6 6 2 3 7 6 8 6"],
  ["Big Jack Horner", "jack horner|big jack horner", PUSS, "8 6 4 10 5 5 0 3 9 3 0 6 10 8 9 6 4", "glutton"],
  ["Rustik", "snotlout|rustik|patan mocoso", HTTYD, "7 6 2 2 6 6 3 4 6 5 2 2 1 8 9 3 6"],
  ["Varek", "fishlegs|varek|patapez", HTTYD, "6 5 8 0 5 4 8 2 7 3 5 0 1 2 9 4 4"],
  ["Kranedur et Kognedur", "kranedur|kognedur|ruffnut|tuffnut|brutacio|brutilda", HTTYD, "9 6 1 3 8 7 4 5 6 5 2 2 1 6 9 4 5"],
  ["Gueulfor", "gobber|gueulfor|bocon", HTTYD, "9 7 6 0 5 8 8 3 6 3 1 3 1 5 9 5 7", "teacher"],
  ["Valka", "valka", HTTYD, "4 6 8 0 2 9 8 1 3 7 3 3 1 3 4 7 6"],
  ["Drago Poing-Sanglant", "drago|drago bludvist|drago poing sanglant", HTTYD, "1 9 6 9 1 7 0 1 4 5 0 9 4 10 6 6 6"],
  ["Furie Éclair", "light fury|furie eclair|furia luminosa", HTTYD, "2 7 7 0 1 7 6 2 4 10 9 2 0 6 0 6 2", "speedster"],
  ["Li Shan", "li shan|papa de po", KFP, "9 7 3 0 6 6 9 5 9 3 4 0 1 1 9 4 3", "glutton"],
  ["Le Caméléon", "cameleon|chameleon|camaleona", KFP, "4 6 9 8 1 6 0 2 4 7 2 6 5 6 6 10 5"],
  ["Biggie", "biggie", TR, "6 5 3 0 4 3 10 3 6 2 9 0 1 0 6 1 3", "friend"],
  ["Guy Diamond", "guy diamond", TR, "8 3 3 0 2 5 7 3 4 5 7 0 3 1 7 2 2", "dancer"],
  ["Chef (Trolls)", "chef bergen|chef trolls|cheffe", TR, "3 6 6 8 2 5 0 2 9 3 0 7 2 9 7 8 6"],
  ["Bridget", "bridget", TR, "7 6 4 0 7 6 9 2 6 3 6 2 0 1 6 3 6"],
  ["M. Requin", "mr shark|monsieur requin|senor tiburon|m requin", BAD, "8 9 4 4 4 6 5 3 7 5 2 7 3 3 8 6 4"],
  ["M. Piranha", "mr piranha|monsieur piranha|senor piraña|m piranha", BAD, "9 6 2 5 6 7 4 3 7 7 3 5 1 9 8 4 6"],
  ["Mme Tarentule", "ms tarantula|webs|madame tarentule|mme tarentule", BAD, "6 4 9 4 1 6 4 3 4 8 3 5 2 6 4 9 3"],
  ["Diane Foxington", "diane foxington|crimson paw", BAD, "6 6 9 3 1 8 6 2 4 8 6 2 7 4 7 10 3"],
  ["Professeur Marmelade", "marmalade|professeur marmelade|profesor marmalade", BAD, "7 6 8 10 2 4 1 2 4 4 7 6 9 5 9 9 4"],
  ["B.O.B.", "bob monstres contre aliens|b o b", MVA, "10 4 0 0 9 5 8 5 9 2 5 2 0 1 8 0 6"],
  ["Ginormica", "ginormica|susan murphy", MVA, "5 10 6 0 6 9 9 2 5 6 6 2 1 3 6 4 6", "hero"],
  ["Dr Cafard", "dr cockroach|docteur cafard|dr cucaracha", MVA, "8 4 10 1 4 7 7 2 5 4 1 4 2 4 9 7 6"],
  ["Roz (Le Robot sauvage)", "roz robot sauvage|robot sauvage|wild robot|rozzum", WR, "5 8 8 0 4 9 9 1 1 6 6 2 0 1 6 6 6", "survivor|teacher"],
  ["Fink", "fink|fink le renard", WR, "8 4 7 2 3 6 6 4 7 7 5 1 0 4 8 9 6", "friend"],
  ["Joli-Bec", "brightbill|joli bec|pico brillante", WR, "6 4 5 0 6 8 8 2 6 8 7 0 0 4 6 4 6", "speedster"],
  ["Tulio", "tulio", ELD, "8 4 8 3 4 6 6 3 5 6 3 1 4 6 9 9 6"],
  ["Miguel (El Dorado)", "miguel el dorado|miguel eldorado", ELD, "9 6 5 2 5 7 7 3 5 6 4 1 4 3 9 7 5", "dancer"],
  ["Chel", "chel", ELD, "7 4 8 3 2 6 5 3 5 6 6 1 3 4 8 9 3"],
  ["Oh", "oh en route|home oh", "En route !|Home|Home: no hay lugar como el hogar", "8 3 5 0 8 5 8 2 6 6 7 0 0 1 10 3 6", "dancer|friend"],
  ["Roddy", "roddy|roddy st james", "Souris City|Flushed Away|Lo que el agua se llevó", "6 4 6 0 5 7 7 3 5 6 6 0 8 4 6 5 7"],
  // ---------- Illumination ----------
  ["Scarlet Overkill", "scarlet overkill|scarlett", "Les Minions|Minions|Minions", "7 6 7 9 3 7 1 2 4 6 2 7 8 10 9 7 6"],
  ["Duke", "duke comme des betes|duke pets", PETS, "7 7 3 0 7 6 7 4 7 4 6 0 0 3 6 3 7"],
  ["Mel", "mel pets", PETS, "9 3 1 0 8 5 7 4 7 7 7 0 0 2 9 1 6"],
  ["Buddy", "buddy pets", PETS, "8 4 5 0 3 6 7 6 5 5 6 0 0 2 7 6 3"],
  ["Tiberius", "tiberius", PETS, "6 6 4 2 4 5 4 4 8 7 2 5 0 7 7 4 6"],
  ["Rooster", "rooster|coq pets", PETS, "4 8 7 0 2 9 5 3 5 4 1 5 1 7 3 7 4", "teacher|survivor"],
  ["Johnny (Tous en scène)", "johnny sing|johnny tous en scene", SING, "5 8 5 0 3 7 9 1 4 4 6 2 1 2 4 4 6"],
  ["Ash (Tous en scène)", "ash sing|ash tous en scene", SING, "4 4 6 0 2 7 6 2 4 4 7 3 1 8 4 4 5"],
  ["Mike (Tous en scène)", "mike sing|mike tous en scene", SING, "7 2 6 6 2 6 1 2 5 6 4 1 2 9 9 8 8"],
  ["Nana Noodleman", "nana noodleman|nana", SING, "3 2 7 0 1 4 6 2 4 2 3 1 10 7 4 6 2"],
  // ---------- Blue Sky ----------
  ["Ellie", "ellie|ellie l age de glace", ICE, "8 9 4 0 4 8 9 2 5 4 6 1 0 3 8 4 4"],
  ["Crash et Eddie", "crash|eddie|crash et eddie|crash y eddie", ICE, "10 4 1 0 8 8 5 3 6 7 6 0 0 2 9 4 6"],
  ["Buck", "buck|buck wild|buck l age de glace", ICE, "9 7 7 2 2 10 6 2 5 8 2 4 0 4 9 8 5", "survivor"],
  ["Capitaine Gutt", "capitaine gutt|captain gutt|capitan tripa", ICE, "4 9 6 9 2 7 0 2 5 5 0 9 5 9 7 7 6"],
  ["Shira", "shira", ICE, "4 8 6 1 1 8 6 2 4 9 6 3 0 5 4 7 4"],
  ["Perla (Rio)", "jewel|perla rio", RIO, "5 4 7 0 2 8 8 1 4 7 8 0 0 6 6 6 3"],
  ["Rafael", "rafael rio", RIO, "8 3 6 0 3 6 8 2 5 6 4 0 0 1 9 6 3", "dancer"],
  ["Nico et Pedro", "nico|nico et pedro|nico y pedro", RIO, "9 2 3 0 4 6 8 3 5 6 7 0 0 1 9 4 3", "dancer"],
  ["Luiz", "luiz", RIO, "8 7 1 0 8 5 9 4 7 3 6 2 0 0 7 1 4"],
  ["Horton", "horton", "Horton", "7 9 4 0 6 9 10 2 5 3 6 1 0 1 7 2 7", "friend"],
  ["Rodney", "rodney|rodney copperbottom", "Robots", "6 4 9 0 4 8 8 1 3 5 5 0 1 2 7 5 6"],
  // ---------- Sony / Netflix / autres ----------
  ["Johnny (Hôtel Transylvanie)", "johnny hotel|johnny hotel transylvanie|jonathan", HT, "9 4 3 0 7 6 9 3 6 6 5 0 1 0 10 3 4", "dancer"],
  ["Frankenstein", "frank|frankenstein|frankenstein hotel", HT, "8 9 2 0 6 6 8 4 7 3 4 6 1 2 7 2 4"],
  ["Murray la momie", "murray|murray la momie|murray the mummy", HT, "9 7 4 0 4 6 7 4 7 4 3 5 3 3 9 3 4", "dancer"],
  ["Wayne le loup-garou", "wayne|wayne le loup garou", HT, "7 7 4 0 4 4 8 8 7 6 4 5 1 4 6 3 7"],
  ["Spider-Man Noir", "spider man noir|spider noir", SPV, "6 7 7 0 2 9 6 2 4 7 2 6 1 4 3 7 6", "hero"],
  ["Peni Parker", "peni parker|sp dr", SPV, "6 8 8 0 2 8 7 1 4 7 9 1 1 3 6 6 5", "hero"],
  ["Peter B. Parker", "peter b parker|peter parker|spider man|spiderman|spider-man", SPV, "8 8 7 0 6 9 8 5 9 7 3 1 1 3 8 6 9", "hero|teacher"],
  ["Miguel O'Hara", "miguel o hara|spider man 2099", SPV, "1 9 9 3 0 9 4 1 3 9 1 8 4 10 5 8 8", "leader"],
  ["Le Caïd", "kingpin|le caid|caid", SPV, "2 10 7 9 1 7 1 2 6 4 0 9 9 8 3 7 7"],
  ["Sam Sparks", "sam sparks", "Tempête de boulettes géantes|Cloudy with a Chance of Meatballs|Lluvia de hamburguesas", "6 3 9 0 4 7 8 1 5 5 7 0 1 2 8 5 4"],
  ["Steve le singe", "steve le singe|steve the monkey", "Tempête de boulettes géantes|Cloudy with a Chance of Meatballs|Lluvia de hamburguesas", "8 3 1 0 7 5 5 3 7 7 6 0 0 6 4 2 4", "glutton"],
  ["Rumi", "rumi", KDH, "6 9 7 0 2 10 8 1 5 9 6 3 7 4 6 6 6", "hero|dancer"],
  ["Mira", "mira kpop", KDH, "6 9 6 0 2 9 6 2 5 8 5 3 7 6 4 6 3", "hero|dancer"],
  ["Zoey", "zoey kpop|zoey", KDH, "9 8 6 0 4 8 8 2 7 8 8 1 7 2 9 5 3", "hero|dancer"],
  ["Jinu", "jinu", KDH, "6 8 7 6 1 7 5 2 4 8 5 6 6 3 7 9 8", "dancer"],
  ["Gwi-Ma", "gwi ma|gwima", KDH, "2 10 7 10 0 6 0 3 5 6 0 10 6 9 6 9 3"],
  ["Derpy", "derpy|tigre derpy|derpy tiger", KDH, "8 7 2 0 6 6 8 4 7 6 9 2 0 1 0 2 3"],
  ["Jesper", "jesper|jesper johansen", "La Légende de Klaus|Klaus|Klaus", "8 2 6 2 6 5 6 6 5 5 4 0 8 5 9 8 6"],
  ["Klaus", "klaus le facteur|klaus pere noel", "La Légende de Klaus|Klaus|Klaus", "3 9 6 0 3 7 10 2 5 3 4 3 2 2 2 4 6", "friend"],
  ["Nimona", "nimona", "Nimona", "9 9 6 2 4 9 6 3 6 8 7 7 0 7 9 8 6"],
  ["Katie Mitchell", "katie|katie mitchell", "Les Mitchell contre les machines|The Mitchells vs. the Machines|Los Mitchell contra las máquinas", "9 3 7 0 6 8 8 2 5 5 5 0 1 5 9 6 7", "hero"],
  ["Red", "red angry birds|red", AB, "8 6 6 1 3 8 5 2 5 6 4 2 0 10 7 6 7", "leader"],
  ["Chuck", "chuck|chuck angry birds", AB, "9 5 4 0 5 7 7 2 5 10 6 0 0 3 10 4 4", "speedster"],
  ["Bomb", "bomb|bomb angry birds", AB, "8 8 2 0 7 6 8 3 6 3 6 3 0 7 6 2 5"],
  ["Super Aigle", "mighty eagle|super aigle|aguila poderosa", AB, "8 7 4 1 5 4 4 9 8 8 2 2 1 3 7 4 3"],
  ["Princesse Daisy", "princesse daisy|princess daisy|princesa daisy", MARIO, "7 6 5 0 3 8 7 2 4 6 8 0 9 6 7 4 3"],
  ["Wario", "wario", MARIO, "8 8 4 6 6 5 1 6 9 4 0 4 7 8 7 7 5", "glutton"],
  ["Waluigi", "waluigi", MARIO, "8 5 4 6 6 4 1 4 5 6 0 4 2 8 7 7 8"],
  ["Kamek", "kamek|kamek le magikoopa", MARIO, "5 3 8 7 3 4 1 2 4 6 1 5 3 6 6 8 7"],
  ["Cool-Tag", "wyldstyle|cool tag|supercool", LEGO, "4 7 8 0 2 9 6 1 4 8 5 1 2 7 6 7 3", "hero"],
  ["Unikitty", "unikitty|princesse unikitty", LEGO, "9 8 3 0 5 6 8 2 5 6 10 4 2 10 8 2 4"],
  ["Benny", "benny|benny le spationaute", LEGO, "9 4 7 0 6 8 8 1 4 7 6 0 1 1 10 3 6"],
];
