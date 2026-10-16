// Autres mangas (et séries adaptées en manga) : Pokémon, Yu-Gi-Oh!, Shaman King, Seven Deadly Sins,
// Soul Eater, Assassination Classroom, Toriko, Food Wars, Fruits Basket, Code Geass, Cowboy Bebop…
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const POK = "Pokémon";
const YGO = "Yu-Gi-Oh!";
const SK = "Shaman King";
const SDS = "Seven Deadly Sins";
const SE = "Soul Eater";
const AC = "Assassination Classroom";
const FW = "Food Wars!";
const FB = "Fruits Basket";
const CG = "Code Geass";
const CB = "Cowboy Bebop";
const KGS = "Kaguya-sama: Love Is War";
const TR = "Tokyo Revengers";
const SAO = "Sword Art Online";
const KS = "Konosuba";
const KD = "Kingdom";
const GK = "Golden Kamuy";
const RZ = "Re:Zero";
const AK = "Akame ga Kill!";
const REB = "Reborn!";

module.exports = [
  // ---------- Pokémon ----------
  ["Sacha", "ash|sacha|ash ketchum|sacha ketchum|satoshi", POK, "6 5 4 0 6 9 9 2 6 6 6 0 1 6 8 4 5", "friend|hero"],
  ["Pikachu", "pikachu", POK, "6 6 5 0 2 8 9 2 5 9 10 2 0 5 3 4 2", "friend|speedster"],
  ["Ondine", "misty|ondine|kasumi", POK, "5 5 6 0 3 7 6 1 3 5 6 0 2 9 7 5 5"],
  ["Pierre", "brock|pierre|takeshi pokemon", POK, "6 6 7 0 3 7 9 1 5 4 4 0 1 2 6 5 8", "chef"],
  ["Team Rocket", "team rocket|equipe rocket|jessie et james|jessie|james", POK, "9 3 4 6 9 5 4 3 5 4 3 2 1 6 9 6 10"],
  ["Miaouss", "meowth|miaouss", POK, "8 3 6 5 6 4 4 3 5 5 6 1 1 6 9 7 9"],
  ["Dracaufeu", "charizard|dracaufeu", POK, "3 9 5 1 2 8 4 3 6 8 3 7 0 9 0 3 3"],
  ["Mewtwo", "mewtwo", POK, "1 10 10 7 0 8 3 2 1 8 2 8 1 7 3 7 3"],
  ["Mew", "mew", POK, "6 8 9 0 1 7 8 2 3 9 10 0 0 1 0 8 1"],
  ["Ronflex", "snorlax|ronflex", POK, "6 9 1 0 5 3 7 10 10 1 7 1 0 2 0 0 3", "glutton"],
  ["Psykokwak", "psyduck|psykokwak", POK, "7 3 1 0 8 3 6 4 3 2 7 0 0 3 2 0 8"],
  ["Évoli", "eevee|evoli", POK, "4 3 4 0 3 5 8 2 4 6 10 0 0 1 0 3 2"],
  ["Rondoudou", "jigglypuff|rondoudou", POK, "7 3 4 1 2 5 5 2 4 3 9 1 0 8 2 3 6"],
  ["Bulbizarre", "bulbasaur|bulbizarre", POK, "4 5 5 0 3 6 8 2 4 4 8 0 0 3 0 3 2"],
  ["Salamèche", "charmander|salameche", POK, "5 5 4 0 4 7 8 2 5 6 9 1 0 5 0 3 4"],
  ["Carapuce", "squirtle|carapuce", POK, "7 5 4 0 3 7 7 2 4 5 9 0 0 4 0 4 2"],
  ["Magicarpe", "magikarp|magicarpe", POK, "7 0 0 0 8 1 5 3 3 1 4 0 0 1 0 0 9", "doomed"],
  ["Ectoplasma", "gengar|ectoplasma", POK, "9 7 6 4 2 6 4 3 5 7 5 7 0 3 0 9 3"],
  ["Lucario", "lucario", POK, "2 8 8 0 1 9 7 1 3 8 5 3 0 4 1 6 3"],
  ["Rayquaza", "rayquaza", POK, "1 10 7 2 0 8 3 2 4 10 2 9 0 8 0 4 2", "speedster"],
  ["Professeur Chen", "professeur chen|professor oak|profesor oak|chen", POK, "6 2 9 0 3 5 8 1 3 2 3 0 3 2 7 5 4", "teacher"],
  ["Régis", "gary|regis|gary oak|blue pokemon", POK, "6 5 7 2 2 7 4 2 4 5 3 1 4 7 8 7 3"],
  // ---------- Yu-Gi-Oh! ----------
  ["Yugi Muto", "yugi|yugi muto|yugi mouto|atem|yami yugi", YGO, "4 4 8 0 3 9 9 1 3 4 6 1 1 2 6 8 5", "hero"],
  ["Seto Kaiba", "kaiba|seto kaiba", YGO, "2 5 9 3 1 8 2 1 3 5 1 6 10 9 6 9 4", "leader"],
  ["Joey Wheeler", "joey|joey wheeler|jonouchi|katsuya jonouchi", YGO, "8 6 3 0 6 9 8 3 7 6 3 1 0 7 8 4 7", "friend"],
  ["Pegasus", "pegasus|maximillion pegasus", YGO, "8 3 9 7 1 5 2 2 4 3 2 6 10 3 8 9 5"],
  // ---------- Shaman King ----------
  ["Yoh Asakura", "yoh|yoh asakura", SK, "7 8 6 0 4 9 9 9 5 6 5 3 1 1 4 6 3"],
  ["Anna Kyoyama", "anna kyoyama|anna shaman king", SK, "3 8 8 2 0 9 4 4 4 6 5 7 3 10 3 8 3"],
  ["Hao Asakura", "hao|hao asakura|zeke shaman king", SK, "4 10 9 8 0 8 1 3 3 8 3 9 4 3 6 9 4"],
  // ---------- Seven Deadly Sins ----------
  ["Meliodas", "meliodas", SDS, "8 10 6 1 3 10 8 4 5 9 4 6 3 2 6 8 5", "leader|badcook"],
  ["Elizabeth Liones", "elizabeth liones", SDS, "3 2 6 0 6 8 10 2 4 3 9 0 9 1 5 3 7"],
  ["Ban", "ban sds|ban seven deadly sins", SDS, "8 9 6 2 3 9 7 4 7 9 2 6 1 4 7 8 8", "chef|survivor"],
  ["King (Seven Deadly Sins)", "king sds|harlequin|king seven deadly sins", SDS, "5 9 7 0 4 7 8 8 6 7 7 3 4 4 6 6 5"],
  ["Diane", "diane", SDS, "6 10 4 0 6 8 9 2 7 5 8 3 1 6 7 3 5"],
  ["Escanor", "escanor", SDS, "6 10 6 1 3 10 9 2 4 6 2 7 4 3 6 4 6"],
  ["Hawk", "hawk|hawk sds", SDS, "9 3 4 0 5 7 7 4 10 5 8 0 0 6 9 4 4", "glutton"],
  // ---------- Soul Eater ----------
  ["Maka Albarn", "maka|maka albarn", SE, "5 7 9 0 3 9 8 1 4 7 6 2 2 8 6 6 5"],
  ["Soul Evans", "soul|soul evans|soul eater", SE, "6 7 6 0 3 9 7 6 5 7 3 4 4 3 4 6 5"],
  ["Black Star", "black star|black*star", SE, "9 9 2 1 6 9 5 2 6 8 3 3 0 7 10 2 5"],
  ["Death the Kid", "death the kid|kid soul eater", SE, "6 9 7 0 3 8 6 2 4 8 4 5 9 6 6 6 4"],
  ["Shinigami-sama", "shinigami sama|lord death", SE, "9 10 8 0 3 8 7 4 5 6 6 6 6 3 8 8 4", "leader"],
  // ---------- Assassination Classroom ----------
  ["Koro-sensei", "koro sensei|korosensei", AC, "9 10 10 2 4 7 9 3 10 10 6 4 1 3 9 9 6", "teacher|speedster|glutton"],
  ["Nagisa Shiota", "nagisa|nagisa shiota", AC, "4 6 8 1 2 8 8 1 4 7 8 4 1 1 4 9 5"],
  ["Karma Akabane", "karma|karma akabane", AC, "8 7 9 4 1 8 5 4 5 8 4 5 3 5 7 10 3"],
  // ---------- Toriko / Food Wars ----------
  ["Toriko", "toriko", "Toriko", "8 10 5 0 4 10 9 3 10 7 2 6 2 5 8 5 3", "glutton|hero"],
  ["Komatsu", "komatsu", "Toriko", "6 2 6 0 5 8 10 1 6 3 7 0 2 1 7 4 4", "chef"],
  ["Soma Yukihira", "soma|soma yukihira", FW, "8 4 8 0 3 9 7 2 7 6 4 1 2 2 8 8 4", "chef"],
  ["Erina Nakiri", "erina|erina nakiri", FW, "3 3 9 2 1 6 4 1 5 4 7 2 10 8 6 7 3", "chef"],
  // ---------- Fruits Basket ----------
  ["Tohru Honda", "tohru|tohru honda", FB, "6 3 5 0 6 7 10 1 5 4 9 0 1 0 7 3 8", "chef|friend"],
  ["Kyo Soma", "kyo|kyo soma", FB, "5 8 5 0 4 8 6 2 5 8 6 4 2 9 5 4 9"],
  ["Yuki Soma", "yuki|yuki soma", FB, "3 6 8 0 2 6 7 2 4 6 8 1 4 3 3 6 6"],
  // ---------- Romance / tranche de vie ----------
  ["Nana Osaki", "nana osaki|nana", "Nana", "4 5 6 1 2 8 6 3 4 5 5 3 3 7 4 6 8"],
  ["Hachi", "hachi|nana komatsu", "Nana", "8 2 4 0 7 4 9 4 7 4 8 0 2 4 9 3 8"],
  ["Yotsuba Koiwai", "yotsuba|yotsuba koiwai", "Yotsuba&!", "10 4 2 0 7 9 8 2 7 7 10 0 1 3 9 3 3"],
  ["Kaguya Shinomiya", "kaguya shinomiya|kaguya sama", KGS, "6 5 10 3 2 6 6 1 3 5 8 3 10 6 5 10 3"],
  ["Miyuki Shirogane", "shirogane|miyuki shirogane", KGS, "7 4 10 1 6 7 7 0 3 4 4 1 1 5 6 9 6", "leader"],
  ["Chika Fujiwara", "chika|chika fujiwara", KGS, "10 4 6 1 5 7 8 2 6 6 9 0 7 2 10 6 3", "dancer"],
  ["Shoko Komi", "komi|shoko komi|komi san", "Komi cherche ses mots|Komi Can't Communicate|Komi-san no puede comunicarse", "3 4 8 0 6 6 9 2 5 5 10 0 7 1 0 3 4"],
  ["Eikichi Onizuka", "onizuka|eikichi onizuka|gto", "Great Teacher Onizuka", "10 9 3 1 6 9 9 5 7 7 1 5 0 6 9 7 7", "teacher"],
  // ---------- Action seinen / années 90-2000 ----------
  ["Kaneda", "kaneda|shotaro kaneda", "Akira", "7 6 5 3 3 9 5 3 5 9 2 4 1 8 7 6 6", "leader"],
  ["Tetsuo Shima", "tetsuo|tetsuo shima", "Akira", "2 10 4 8 4 7 1 2 5 6 1 10 1 10 5 3 9"],
  ["Shin (Kingdom)", "shin kingdom|li xin|xin", KD, "8 9 3 0 5 10 8 2 9 8 2 4 0 7 9 3 4", "leader"],
  ["Ei Sei", "ei sei|ying zheng|eisei", KD, "2 4 10 0 1 9 8 1 3 4 4 2 10 2 5 9 6", "leader"],
  ["Ouki", "ouki|wang qi", KD, "9 10 9 1 3 9 6 3 6 7 1 6 6 1 8 10 7"],
  ["Saichi Sugimoto", "sugimoto|saichi sugimoto|sugimoto l immortel", GK, "6 9 6 2 3 10 7 2 7 7 2 8 1 6 6 6 7", "survivor"],
  ["Asirpa", "asirpa|asirpa golden kamuy", GK, "8 5 8 0 2 9 8 1 7 7 8 1 0 4 7 8 4", "chef|survivor"],
  ["Lelouch Lamperouge", "lelouch|lelouch lamperouge|zero code geass", CG, "3 2 10 7 4 8 6 2 3 2 4 6 7 6 8 10 7", "leader"],
  ["Suzaku Kururugi", "suzaku|suzaku kururugi", CG, "2 10 6 1 1 9 7 1 3 10 4 4 3 4 3 4 8"],
  ["C.C.", "cc|c c|c2", CG, "6 6 9 2 1 7 4 8 9 4 6 3 3 2 4 8 4", "glutton"],
  ["Spike Spiegel", "spike|spike spiegel", CB, "8 8 7 1 3 9 5 8 6 9 2 4 0 2 4 8 9"],
  ["Faye Valentine", "faye|faye valentine", CB, "7 5 7 3 3 7 4 6 7 6 6 2 0 7 8 8 9"],
  ["Ed (Cowboy Bebop)", "ed bebop|edward wong|radical edward", CB, "10 3 9 0 5 7 8 6 7 6 7 0 0 1 9 7 3"],
  ["Jet Black", "jet|jet black", CB, "4 8 7 0 2 8 8 2 5 4 1 4 1 6 5 6 7", "chef"],
  ["Ein", "ein", CB, "5 4 9 0 2 6 8 4 6 6 9 0 0 1 0 6 3"],
  ["Vash the Stampede", "vash|vash the stampede|typhon humanoide", "Trigun", "10 9 8 0 7 10 10 4 9 9 5 2 0 1 9 8 10", "glutton|hero"],
  ["Alucard", "alucard", "Hellsing", "7 10 8 7 0 10 2 4 6 9 2 10 6 3 7 8 2"],
  ["Johan Liebert", "johan|johan liebert", "Monster", "1 4 10 10 0 6 0 1 2 4 5 10 4 1 3 10 3"],
  ["Kenzo Tenma", "tenma|kenzo tenma|docteur tenma", "Monster", "3 4 9 0 2 9 10 1 3 4 2 0 3 2 4 7 9"],
  ["Kenji Endo", "kenji|kenji endo", "20th Century Boys", "7 5 6 0 5 9 8 3 5 4 2 0 1 4 7 6 8", "leader"],
  ["Musashi Miyamoto", "musashi|musashi miyamoto|takezo", "Vagabond", "2 10 7 2 2 10 5 2 6 8 1 8 0 7 2 7 6"],
  ["Takumi Fujiwara", "takumi|takumi fujiwara", "Initial D", "3 4 7 0 3 7 6 7 4 10 3 1 1 2 1 6 3", "speedster"],
  ["Motoko Kusanagi", "motoko|motoko kusanagi|major kusanagi", "Ghost in the Shell", "3 9 9 1 0 9 5 1 3 9 3 6 3 4 3 9 4", "leader"],
  ["Joe Yabuki", "joe yabuki|ashita no joe|joe", "Ashita no Joe", "4 9 4 2 3 10 6 3 5 7 2 6 0 8 4 6 9"],
  // ---------- Fantasy / aventure ----------
  ["Dai", "dai|fly|dragon quest dai", "Dragon Quest : La Quête de Daï|Dragon Quest: The Adventure of Dai|Dragon Quest: Las aventuras de Fly", "6 9 5 0 3 10 9 2 6 9 7 2 0 3 5 5 6", "hero"],
  ["Popp", "popp|pop", "Dragon Quest : La Quête de Daï|Dragon Quest: The Adventure of Dai|Dragon Quest: Las aventuras de Fly", "9 5 7 0 6 6 8 4 5 6 4 1 0 4 9 6 8"],
  ["Tsuna Sawada", "tsuna|tsunayoshi sawada|tsuna sawada", REB, "5 8 5 0 9 7 9 4 5 7 7 1 2 2 5 3 8", "leader"],
  ["Reborn", "reborn", REB, "7 9 10 3 0 8 4 3 4 9 9 6 5 4 6 10 3", "teacher"],
  ["Sena Kobayakawa", "sena|sena kobayakawa|eyeshield 21", "Eyeshield 21", "4 5 5 0 5 8 9 1 4 10 7 0 1 1 3 4 6", "speedster"],
  ["Yoichi Hiruma", "hiruma|yoichi hiruma", "Eyeshield 21", "8 6 10 6 0 8 3 1 4 7 0 9 6 6 8 10 3", "leader"],
  ["Riko", "riko|riko made in abyss", "Made in Abyss", "7 2 7 0 5 10 8 1 6 4 8 0 0 3 8 6 9", "survivor"],
  ["Reg", "reg|reg made in abyss", "Made in Abyss", "4 9 4 0 4 9 8 2 6 7 8 3 0 4 4 3 6"],
  ["Rin Okumura", "rin okumura", "Blue Exorcist", "8 9 3 1 6 9 8 4 8 8 5 6 0 8 7 4 7", "chef"],
  ["Allen Walker", "allen|allen walker", "D.Gray-man", "6 8 7 1 3 9 9 2 10 8 6 4 0 3 6 7 8", "glutton"],
  ["Akame", "akame", AK, "2 9 6 1 1 9 6 2 10 9 5 7 0 2 2 6 7", "glutton"],
  ["Tatsumi", "tatsumi", AK, "6 8 5 0 4 9 9 2 5 7 4 2 0 4 6 4 8"],
  ["Esdeath", "esdeath|esdeas", AK, "3 10 7 9 0 9 2 2 4 9 3 9 6 5 6 8 4"],
  ["Kirito", "kirito|kazuto kirigaya", SAO, "4 9 8 0 2 9 8 3 5 9 4 3 4 3 4 7 6", "hero"],
  ["Asuna", "asuna|asuna yuuki", SAO, "5 7 7 0 2 9 8 1 4 9 7 1 6 6 5 6 5", "chef"],
  ["Subaru Natsuki", "subaru|subaru natsuki", RZ, "7 3 5 0 7 9 9 3 5 4 4 0 0 4 10 6 10", "doomed"],
  ["Emilia", "emilia", RZ, "4 6 5 0 6 8 10 2 4 4 9 1 2 3 6 2 8"],
  ["Rem (Re:Zero)", "rem re zero|rem rezero", RZ, "4 8 6 0 2 9 9 1 4 8 9 4 1 4 4 5 9", "chef"],
  ["Aqua (Konosuba)", "aqua konosuba", KS, "10 3 1 1 9 5 6 9 8 4 7 0 0 7 10 2 7"],
  ["Kazuma Sato", "kazuma|kazuma sato", KS, "9 4 7 3 4 4 5 8 6 5 3 1 6 4 9 9 6"],
  ["Megumin", "megumin", KS, "8 6 4 0 6 7 6 6 8 3 9 2 0 6 8 3 6"],
  ["Darkness", "darkness|lalatina", KS, "8 7 2 0 9 9 7 3 5 3 6 1 8 3 7 2 8"],
  ["Takemichi Hanagaki", "takemichi|takemichi hanagaki|hanagaki", TR, "6 3 4 0 6 10 9 2 5 4 4 0 0 4 7 3 10"],
  ["Mikey", "mikey|manjiro sano|mikey tokyo revengers", TR, "5 10 6 4 2 9 6 6 9 9 6 7 2 6 5 6 8", "leader|glutton"],
  ["Draken", "draken|ken ryuguji", TR, "4 9 6 1 1 9 8 2 5 7 2 6 1 5 4 6 7", "friend"],
  ["Sung Jin-Woo", "sung jin woo|jinwoo|jin woo|solo leveling", "Solo Leveling", "3 10 8 1 1 10 7 2 5 10 3 7 7 3 2 8 4", "survivor"],
];
