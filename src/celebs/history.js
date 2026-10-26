// Personnalités publiques : histoire, sciences, arts et lettres. Notes d'après leur image publique et leur carrière.
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const H = "Histoire|History|Historia";
const EX = "Exploration|Exploration|Exploración";
const SC = "Science|Science|Ciencia";
const IN = "Invention|Invention|Invención";
const AR = "Art|Art|Arte";
const MU = "Musique classique|Classical music|Música clásica";
const LI = "Littérature|Literature|Literatura";
const TH = "Théâtre|Theatre|Teatro";
const PH = "Philosophie|Philosophy|Filosofía";

module.exports = [
  // Histoire
  ["Napoléon Bonaparte", "napoleon|bonaparte|napoleon bonaparte|napoleon ier|napoleon 1er|napoleon i", H, "4 6 9 5 3 9 3 1 3 7 3 8 9 8 7 10 6", "leader"],
  ["Jules César", "jules cesar|julius caesar|julio cesar|cesar|caesar", H, "4 7 9 5 2 9 4 1 3 7 2 8 8 6 8 10 9", "leader|doomed"],
  ["Cléopâtre", "cleopatre|cleopatra|cleopatre vii|cleopatra vii", H, "5 3 9 3 1 7 4 2 4 4 6 5 10 5 8 10 8", "leader"],
  ["Jeanne d'Arc", "jeanne d arc|joan of arc|juana de arco|la pucelle|pucelle d orleans", H, "2 6 6 0 2 10 8 0 1 6 6 5 1 5 6 6 10", "hero|doomed"],
  ["Louis XIV", "louis xiv|louis 14|roi soleil|le roi soleil|sun king|luis xiv|rey sol", H, "3 4 7 3 2 6 3 3 8 3 3 7 10 6 6 8 2", "leader|glutton"],
  ["Marie-Antoinette", "marie antoinette|maria antonieta|marie antoinette d autriche", H, "4 2 5 1 4 5 6 6 7 3 7 1 10 3 6 3 10", "doomed"],
  ["Alexandre le Grand", "alexandre le grand|alexander the great|alejandro magno|alexandre de macedoine|alexandre iii de macedoine", H, "3 8 9 5 2 10 4 1 4 8 4 8 9 7 7 10 6", "leader"],
  ["Gengis Khan", "gengis khan|genghis khan|chinggis khan|gengis kan|temujin|temudjin", H, "1 9 8 7 1 10 2 1 3 9 0 10 9 8 3 10 3", "leader"],
  ["Christophe Colomb", "christophe colomb|christopher columbus|cristobal colon|colomb|columbus|cristoforo colombo", EX, "2 5 6 3 4 9 3 1 2 4 2 4 5 6 6 6 7", "survivor"],
  ["Charlemagne", "charlemagne|carlomagno|charles le grand|charles ier le grand", H, "2 8 8 4 1 8 5 1 5 6 3 8 9 5 5 9 2", "leader"],
  ["Vercingétorix", "vercingetorix", H, "2 8 7 3 1 10 5 1 4 7 3 7 4 6 6 8 9", "hero|doomed"],
  ["George Washington", "george washington", H, "3 7 7 2 1 9 6 1 3 6 3 6 8 4 4 8 3", "leader"],
  ["Toutânkhamon", "toutankhamon|toutankhamoun|tutankhamun|tutankhamen|tutankamon|king tut", H, "1 2 4 1 2 3 5 4 3 2 6 3 10 3 2 2 9", "doomed"],
  ["Ramsès II", "ramses ii|ramses 2|ramses|ramses le grand|ramesses ii|ramses the great", H, "2 7 7 4 1 8 4 2 4 5 3 8 10 6 6 8 1", "leader"],
  ["Hannibal Barca", "hannibal|hannibal barca|anibal|anibal barca", H, "2 7 9 4 1 10 4 1 3 7 2 8 6 6 5 10 7", "leader"],
  ["Attila", "attila|attila le hun|attila the hun|atila", H, "1 8 7 7 1 9 2 1 5 9 0 10 7 8 4 8 3", "leader"],
  ["Henri IV", "henri iv|henri 4|henri iv de france|henry iv of france|enrique iv de francia|le bon roi henri|vert galant", H, "7 6 7 1 2 8 8 2 6 6 5 4 8 4 7 8 8", "leader"],
  ["Louis XVI", "louis xvi|louis 16|luis xvi|louis capet", H, "2 4 6 1 5 3 7 4 7 2 5 1 10 2 3 3 10", "doomed"],
  ["Richard Cœur de Lion", "richard coeur de lion|richard the lionheart|richard lionheart|ricardo corazon de leon|richard ier d angleterre", H, "3 9 6 4 1 10 4 1 4 7 2 8 7 8 5 6 7", "leader|hero"],
  ["Élisabeth Iʳᵉ", "elisabeth ire|elisabeth i|elisabeth 1|elisabeth premiere|elizabeth i|elizabeth 1|isabel i de inglaterra|reine vierge|virgin queen", H, "5 3 9 3 1 8 4 2 4 3 3 7 9 7 7 10 3", "leader"],
  ["Reine Victoria", "reine victoria|queen victoria|reina victoria|victoria du royaume uni", H, "2 3 7 1 1 6 5 2 5 2 4 6 10 5 4 7 4", "leader"],
  ["Henri VIII", "henri viii|henri 8|henry viii|henry 8|enrique viii", H, "4 7 6 4 2 7 2 3 9 3 1 8 10 9 6 7 6", "leader|glutton"],
  ["Marco Polo", "marco polo", EX, "5 5 7 1 2 8 6 1 5 4 4 2 6 3 9 7 4", "survivor"],
  ["Fernand de Magellan", "magellan|fernand de magellan|ferdinand magellan|fernando de magallanes|magallanes|fernao de magalhaes", EX, "2 6 7 2 2 10 3 1 2 4 2 5 4 6 4 7 10", "doomed"],
  ["Catherine II de Russie", "catherine ii|catherine 2|catherine la grande|catherine the great|catalina la grande|catalina ii", H, "5 3 9 3 1 8 5 1 4 3 3 7 10 6 7 10 3", "leader"],
  ["Pierre le Grand", "pierre le grand|peter the great|pedro el grande|pierre ier de russie|peter i of russia", H, "4 9 8 4 2 9 3 1 6 6 1 9 10 9 6 9 3", "leader"],
  ["Spartacus", "spartacus|espartaco|spartakus", H, "2 9 6 3 1 10 7 1 3 7 3 8 1 7 5 7 10", "hero|survivor|doomed"],
  ["Saladin", "saladin|saladino|salah ad din|salah al din", H, "3 7 8 3 1 9 8 1 3 7 3 7 7 4 5 9 3", "leader"],
  ["Léonidas", "leonidas|leonidas ier|leonidas of sparta|leonidas de esparta", H, "3 10 6 3 1 10 5 0 2 7 2 9 4 7 4 7 10", "leader|hero|doomed"],
  ["Benjamin Franklin", "benjamin franklin|ben franklin", IN, "9 3 10 1 2 7 7 2 6 2 5 1 7 3 9 9 3", "friend"],
  ["La Fayette", "la fayette|lafayette|marquis de la fayette|marquis de lafayette|gilbert du motier", H, "4 6 7 1 2 10 7 1 3 6 5 4 8 4 6 7 6", "hero"],
  ["Joséphine de Beauharnais", "josephine de beauharnais|imperatrice josephine|empress josephine|emperatriz josefina|josefina de beauharnais", H, "6 2 6 1 2 5 7 3 5 3 7 1 9 4 7 7 7"],
  ["Aliénor d'Aquitaine", "alienor d aquitaine|eleanor of aquitaine|leonor de aquitania|alienor", H, "4 4 9 2 1 8 5 1 4 5 4 6 10 6 7 9 4", "leader"],
  ["Sitting Bull", "sitting bull|toro sentado|tatanka iyotake", H, "3 7 8 2 1 10 6 1 3 5 3 8 2 5 5 8 9", "leader"],
  ["Confucius", "confucius|confucio|kong fuzi|kongzi", PH, "4 3 10 0 1 5 8 1 3 2 4 2 3 2 8 7 5", "teacher"],

  // Sciences et inventions
  ["Albert Einstein", "einstein|albert einstein", SC, "9 3 10 0 4 6 7 2 3 2 7 1 5 2 7 7 2", "teacher"],
  ["Marie Curie", "marie curie|madame curie|maria sklodowska|marie sklodowska curie", SC, "2 4 10 0 1 9 8 0 1 3 5 2 3 3 4 7 6", "hero"],
  ["Isaac Newton", "newton|isaac newton|sir isaac newton", SC, "2 3 10 1 2 5 2 2 2 2 3 4 6 8 3 8 3"],
  ["Nikola Tesla", "tesla|nikola tesla", IN, "3 3 10 0 3 6 6 0 1 3 4 2 2 5 5 6 9", "doomed"],
  ["Galilée", "galilee|galileo|galileo galilei|galilei", SC, "5 3 10 1 2 7 4 1 4 3 3 2 4 7 7 7 8"],
  ["Charles Darwin", "darwin|charles darwin", SC, "3 3 10 0 2 6 7 2 6 2 5 1 6 2 5 6 3", "survivor"],
  ["Thomas Edison", "edison|thomas edison|thomas alva edison", IN, "4 4 9 2 2 6 4 0 2 4 3 3 9 6 6 9 3"],
  ["Stephen Hawking", "hawking|stephen hawking", SC, "9 1 10 0 1 10 7 1 2 1 6 1 6 2 6 7 6", "hero|survivor"],
  ["Louis Pasteur", "pasteur|louis pasteur", SC, "2 3 10 0 1 8 8 0 2 3 4 2 4 5 4 6 4", "hero"],
  ["Archimède", "archimede|archimedes|arquimedes|archimede de syracuse", SC, "6 3 10 0 4 5 5 1 2 3 4 3 3 3 6 9 7"],
  ["Pythagore", "pythagore|pythagoras|pitagoras", SC, "2 3 10 0 1 4 5 1 1 2 3 3 4 3 6 7 3", "teacher"],
  ["Nicolas Copernic", "copernic|nicolas copernic|nicolaus copernicus|copernicus|nicolas copernico|copernico", SC, "1 3 10 0 1 6 5 2 2 2 3 1 5 2 2 7 4"],
  ["Alan Turing", "turing|alan turing", SC, "5 5 10 0 3 7 6 1 2 6 4 1 3 3 3 9 9", "hero"],
  ["Ada Lovelace", "ada lovelace|lovelace|ada byron", SC, "4 2 10 0 1 6 6 1 2 2 6 1 6 3 6 8 6"],
  ["Gustave Eiffel", "eiffel|gustave eiffel", IN, "2 4 9 0 1 7 5 0 2 3 3 2 8 4 5 8 3"],
  ["Alexander Graham Bell", "graham bell|alexander graham bell", IN, "3 3 9 1 2 5 7 1 2 3 4 1 8 3 6 7 3", "teacher"],
  ["Sigmund Freud", "freud|sigmund freud", SC, "4 2 10 1 1 6 4 1 3 2 3 4 6 5 9 8 4"],
  ["Blaise Pascal", "blaise pascal", SC, "2 2 10 0 1 5 5 1 1 3 4 1 4 4 5 8 6"],

  // Arts
  ["Léonard de Vinci", "leonard de vinci|leonardo da vinci|de vinci|da vinci|vinci", AR, "6 4 10 0 2 6 7 3 3 3 5 1 7 2 6 9 3"],
  ["Michel-Ange", "michel ange|michelangelo|miguel angel|michelangelo buonarroti", AR, "2 7 9 1 1 7 3 0 1 3 2 5 7 9 3 6 3"],
  ["Pablo Picasso", "picasso|pablo picasso", AR, "7 5 9 1 2 7 4 1 5 4 4 5 10 7 7 8 2"],
  ["Vincent van Gogh", "van gogh|vincent van gogh|vangogh", AR, "2 4 8 0 5 5 7 0 2 4 5 3 0 7 5 3 10", "doomed"],
  ["Claude Monet", "monet|claude monet", AR, "3 4 8 0 1 5 6 1 6 3 4 1 6 6 4 6 3"],
  ["Salvador Dalí", "dali|salvador dali", AR, "9 3 9 1 4 6 5 2 4 3 4 4 9 5 9 8 2"],
  ["Frida Kahlo", "frida kahlo|frida|kahlo", AR, "5 4 8 0 1 9 6 1 3 2 5 4 5 6 6 6 9", "survivor"],
  ["Rembrandt", "rembrandt|rembrandt van rijn", AR, "3 4 9 0 2 5 5 1 4 3 3 2 4 5 3 6 8"],
  ["Auguste Rodin", "rodin|auguste rodin", AR, "2 7 8 1 1 5 4 1 4 3 3 4 6 6 4 6 3"],

  // Musique classique
  ["Wolfgang Amadeus Mozart", "mozart|amadeus|wolfgang amadeus mozart|wolfgang mozart", MU, "9 2 10 0 4 5 6 1 4 6 7 1 3 3 8 6 8", "doomed"],
  ["Ludwig van Beethoven", "beethoven|ludwig van beethoven", MU, "2 5 10 0 3 7 4 1 3 3 3 6 4 9 3 5 9"],
  ["Jean-Sébastien Bach", "bach|jean sebastien bach|johann sebastian bach|js bach|juan sebastian bach", MU, "2 4 10 0 1 4 6 0 5 3 4 2 3 6 3 6 3", "teacher"],
  ["Frédéric Chopin", "chopin|frederic chopin|fryderyk chopin|federico chopin", MU, "3 2 9 0 1 4 6 1 2 5 6 1 5 4 3 4 7"],
  ["Antonio Vivaldi", "vivaldi|antonio vivaldi|pretre roux|red priest", MU, "4 3 9 0 1 4 6 0 3 7 4 1 4 4 6 6 5", "teacher|speedster"],

  // Littérature et théâtre
  ["Molière", "moliere|jean baptiste poquelin|poquelin", TH, "10 3 9 1 3 7 6 1 4 4 5 2 5 5 9 8 8"],
  ["Victor Hugo", "victor hugo", LI, "4 4 10 0 1 9 8 0 6 3 4 3 8 5 9 7 7", "hero"],
  ["William Shakespeare", "shakespeare|william shakespeare|bard of avon", TH, "8 3 10 0 1 5 5 1 3 4 4 2 6 3 9 8 4"],
  ["Jules Verne", "jules verne|julio verne|verne", LI, "6 3 9 0 1 6 6 1 3 3 5 1 7 2 7 6 3"],
  ["Alexandre Dumas", "alexandre dumas|alejandro dumas|dumas pere|alexandre dumas pere", LI, "9 6 8 0 2 7 8 1 9 4 5 2 8 4 9 7 6", "glutton|chef"],
  ["Jean de La Fontaine", "la fontaine|jean de la fontaine", LI, "7 2 9 0 4 3 6 6 4 2 6 1 4 2 6 8 4"],
  ["Voltaire", "voltaire|francois marie arouet|arouet", PH, "10 2 10 1 2 8 5 0 6 3 3 3 9 7 10 9 6"],
  ["Émile Zola", "zola|emile zola", LI, "3 4 9 0 1 9 7 1 6 3 4 2 6 6 7 6 6", "hero"],
  ["Arthur Rimbaud", "rimbaud|arthur rimbaud", LI, "4 5 9 1 3 8 3 1 3 6 6 4 2 7 5 6 8"],
  ["Antoine de Saint-Exupéry", "saint exupery|antoine de saint exupery|saint ex", LI, "6 5 9 0 3 9 8 1 3 7 6 1 5 3 6 6 9", "hero|survivor"],
  ["Agatha Christie", "agatha christie|christie|agatha", LI, "6 2 10 0 1 5 6 1 4 2 6 2 9 2 6 10 3"],
  ["Homère", "homere|homero|homeros", LI, "4 3 9 0 1 5 5 1 3 2 4 2 2 2 9 7 5"],
  ["Miguel de Cervantes", "cervantes|miguel de cervantes|miguel de cervantes saavedra", LI, "7 5 9 0 2 9 6 1 3 3 4 2 2 4 7 6 9", "survivor"],

  // Philosophie
  ["Socrate", "socrate|socrates", PH, "8 6 10 0 2 9 7 2 2 3 2 2 1 2 10 9 9", "teacher|doomed"],
  ["Platon", "platon|plato", PH, "4 7 10 0 1 5 6 1 3 3 3 2 6 3 9 8 4", "teacher"],
  ["Aristote", "aristote|aristotle|aristoteles", PH, "3 4 10 0 1 5 5 1 3 3 3 3 6 3 9 8 3", "teacher"],
  ["René Descartes", "descartes|rene descartes|renatus cartesius", PH, "3 4 10 0 2 6 5 6 3 3 4 2 6 3 5 8 5"],
  ["Friedrich Nietzsche", "nietzsche|friedrich nietzsche|federico nietzsche", PH, "3 3 10 1 2 7 5 1 2 3 3 5 2 6 6 7 9"],
];
