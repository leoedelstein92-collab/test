// Mangas récents : My Hero Academia, Demon Slayer, Jujutsu Kaisen, Chainsaw Man, Spy x Family,
// Black Clover, Dr. Stone, The Promised Neverland, Haikyu!!, Kaiju n°8, Sakamoto Days, Dandadan,
// Blue Lock, Frieren, Oshi no Ko, One Punch Man, Mob Psycho 100…
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const MHA = "My Hero Academia";
const DS = "Demon Slayer";
const JJK = "Jujutsu Kaisen";
const CSM = "Chainsaw Man";
const SPY = "Spy x Family";
const BC = "Black Clover";
const DRS = "Dr. Stone";
const TPN = "The Promised Neverland";
const HQ = "Haikyu!!";
const K8 = "Kaiju n°8|Kaiju No. 8|Kaiju No. 8";
const SD = "Sakamoto Days";
const DDD = "Dandadan";
const BLK = "Blue Lock";
const FR = "Frieren";
const ONK = "Oshi no Ko";
const OPM = "One Punch Man";
const MOB = "Mob Psycho 100";

module.exports = [
  // ---------- My Hero Academia ----------
  ["Izuku Midoriya", "deku|izuku|izuku midoriya", MHA, "5 10 9 0 6 10 10 1 4 9 6 1 1 3 9 7 7", "hero"],
  ["All Might", "all might|toshinori yagi", MHA, "7 10 6 0 3 10 9 1 5 10 3 2 5 2 8 5 6", "hero|teacher"],
  ["Katsuki Bakugo", "bakugo|katsuki bakugo|kacchan|bakugou", MHA, "4 10 8 3 1 10 3 1 4 9 2 7 2 10 8 6 5", "hero"],
  ["Shoto Todoroki", "todoroki|shoto todoroki|shouto", MHA, "3 10 8 0 2 9 7 1 4 8 4 3 9 2 2 6 7", "hero"],
  ["Ochaco Uraraka", "uraraka|ochaco uraraka|ochako", MHA, "7 7 6 0 4 8 9 1 7 6 9 0 0 3 7 5 5", "hero"],
  ["Tenya Iida", "iida|tenya iida", MHA, "7 7 8 0 4 8 9 0 4 10 3 1 7 5 9 4 5", "speedster|leader"],
  ["Eijiro Kirishima", "kirishima|eijiro kirishima|red riot", MHA, "8 9 4 0 4 10 9 1 5 6 4 3 1 3 8 3 4", "hero|friend"],
  ["Denki Kaminari", "kaminari|denki kaminari", MHA, "9 6 2 0 7 7 7 4 5 7 5 1 1 3 9 2 6"],
  ["Tsuyu Asui", "tsuyu|froppy|tsuyu asui", MHA, "6 6 7 0 2 7 8 2 4 7 8 1 1 2 6 6 3"],
  ["Momo Yaoyorozu", "momo yaoyorozu|yaoyorozu|yaomomo", MHA, "3 6 10 0 2 7 8 1 4 5 6 0 9 2 6 7 3", "leader"],
  ["Minoru Mineta", "mineta|minoru mineta", MHA, "6 2 4 3 7 2 3 6 5 4 2 2 1 6 9 4 7"],
  ["Fumikage Tokoyami", "tokoyami|fumikage tokoyami", MHA, "3 8 7 0 1 8 6 2 3 7 3 6 1 3 3 6 5"],
  ["Shota Aizawa", "aizawa|shota aizawa|eraser head", MHA, "4 8 8 0 1 9 7 9 3 8 2 6 1 7 2 8 6", "teacher"],
  ["Endeavor", "endeavor|enji todoroki", MHA, "2 10 7 5 1 9 3 1 4 8 1 8 8 10 4 6 7", "hero"],
  ["Hawks", "hawks|keigo takami", MHA, "7 8 8 1 1 8 6 3 5 10 5 3 5 2 7 9 5", "speedster|hero"],
  ["Tomura Shigaraki", "shigaraki|tomura shigaraki", MHA, "3 10 8 10 2 8 0 3 3 8 0 10 2 9 5 8 9"],
  ["Dabi", "dabi|toya todoroki", MHA, "6 9 7 9 1 8 0 2 3 7 0 9 1 9 6 7 9"],
  ["Himiko Toga", "toga|himiko toga", MHA, "7 6 6 9 3 8 2 2 4 8 6 8 1 6 8 8 7"],
  ["All For One", "all for one|afo", MHA, "3 10 10 10 0 7 0 1 3 7 0 10 7 3 7 10 4"],
  ["Stain", "stain|hero killer", MHA, "1 8 6 8 1 9 1 1 3 9 0 9 1 9 6 6 6"],
  ["Mirio Togata", "mirio|mirio togata|lemillion", MHA, "9 9 6 0 4 9 9 1 5 8 4 1 1 1 8 5 7", "hero"],
  ["Present Mic", "present mic|hizashi yamada", MHA, "8 4 5 0 3 6 7 2 4 5 2 1 2 2 10 4 3", "teacher"],
  ["Overhaul", "overhaul|kai chisaki", MHA, "1 8 8 10 0 6 0 1 2 7 0 9 2 9 3 8 8"],
  // ---------- Demon Slayer ----------
  ["Tanjiro Kamado", "tanjiro|tanjiro kamado", DS, "5 9 7 0 3 10 10 1 4 8 6 1 0 2 6 6 9", "hero|friend"],
  ["Nezuko Kamado", "nezuko|nezuko kamado", DS, "5 9 3 0 3 8 9 4 1 8 10 6 0 4 0 3 9"],
  ["Zenitsu Agatsuma", "zenitsu|zenitsu agatsuma", DS, "9 9 4 0 7 2 7 4 5 10 4 1 0 6 10 3 9", "speedster"],
  ["Inosuke Hashibira", "inosuke|inosuke hashibira", DS, "9 9 2 1 6 9 5 2 8 9 3 6 0 10 8 3 6", "survivor"],
  ["Giyu Tomioka", "giyu|giyu tomioka", DS, "1 9 7 0 2 9 7 2 3 9 3 4 2 3 1 6 7"],
  ["Kyojuro Rengoku", "rengoku|kyojuro rengoku", DS, "8 10 6 0 3 10 10 1 9 9 4 3 3 2 8 4 10", "glutton|hero|teacher"],
  ["Shinobu Kocho", "shinobu|shinobu kocho", DS, "5 7 9 2 1 8 5 1 3 9 7 6 2 7 6 9 8"],
  ["Tengen Uzui", "tengen|tengen uzui|uzui", DS, "9 9 7 0 2 9 7 2 5 9 3 4 6 4 9 6 4"],
  ["Mitsuri Kanroji", "mitsuri|mitsuri kanroji", DS, "7 9 5 0 5 8 9 1 10 8 9 1 2 2 8 3 5", "glutton"],
  ["Muichiro Tokito", "muichiro|muichiro tokito", DS, "2 9 8 0 3 8 5 6 3 9 6 3 1 3 1 6 8"],
  ["Gyomei Himejima", "gyomei|gyomei himejima", DS, "1 10 7 0 1 9 9 1 3 7 3 7 1 2 2 5 7"],
  ["Sanemi Shinazugawa", "sanemi|sanemi shinazugawa", DS, "1 9 6 1 2 9 5 1 3 9 1 8 1 10 5 5 8"],
  ["Obanai Iguro", "obanai|obanai iguro", DS, "1 8 7 1 1 8 5 1 3 9 1 7 2 8 3 6 8"],
  ["Muzan Kibutsuji", "muzan|muzan kibutsuji", DS, "1 10 9 10 0 5 0 2 3 9 1 10 9 10 4 10 3"],
  ["Akaza", "akaza", DS, "3 10 6 9 1 9 2 1 3 9 1 9 0 8 6 4 8"],
  ["Doma", "doma|douma", DS, "8 9 8 10 1 6 0 3 4 8 3 9 6 1 9 9 4"],
  ["Kokushibo", "kokushibo", DS, "0 10 8 9 0 8 0 2 2 9 0 10 2 5 1 7 7"],
  ["Rui", "rui", DS, "1 8 6 8 1 6 1 3 2 7 6 8 1 9 3 7 8"],
  ["Sakonji Urokodaki", "urokodaki|sakonji urokodaki", DS, "2 8 8 0 1 8 8 2 3 7 2 6 1 4 3 7 6", "teacher"],
  ["Kanao Tsuyuri", "kanao|kanao tsuyuri", DS, "2 8 7 0 2 8 8 2 3 9 8 1 1 1 1 5 6"],
  ["Genya Shinazugawa", "genya|genya shinazugawa", DS, "3 8 4 1 4 8 6 1 9 6 2 7 0 9 4 4 8"],
  // ---------- Jujutsu Kaisen ----------
  ["Yuji Itadori", "yuji|itadori|yuji itadori", JJK, "8 10 5 0 4 10 10 2 7 9 5 3 1 3 8 5 8", "hero|friend"],
  ["Megumi Fushiguro", "megumi|megumi fushiguro", JJK, "3 8 8 0 1 9 7 2 3 8 4 4 2 5 2 8 7"],
  ["Nobara Kugisaki", "nobara|nobara kugisaki", JJK, "7 7 6 1 3 10 6 2 5 7 6 4 2 8 8 6 7"],
  ["Satoru Gojo", "gojo|satoru gojo|gojo satoru", JJK, "9 10 10 0 3 9 6 5 9 10 6 4 8 3 9 9 6", "teacher|glutton"],
  ["Ryomen Sukuna", "sukuna|ryomen sukuna", JJK, "6 10 9 10 0 9 0 3 8 9 0 10 4 9 7 9 2"],
  ["Kento Nanami", "nanami|kento nanami", JJK, "3 9 8 0 1 9 8 3 4 7 2 5 4 6 3 7 9", "teacher"],
  ["Maki Zenin", "maki|maki zenin", JJK, "4 10 6 0 2 10 6 1 4 9 3 6 1 8 5 6 7"],
  ["Toge Inumaki", "inumaki|toge inumaki", JJK, "7 6 6 0 2 8 8 2 6 6 7 2 2 1 2 6 5"],
  ["Panda", "panda jjk|panda jujutsu", JJK, "8 8 6 0 4 8 8 3 6 5 8 3 1 2 7 6 4"],
  ["Suguru Geto", "geto|suguru geto", JJK, "4 9 9 9 0 8 3 2 3 8 3 8 5 3 7 9 7"],
  ["Mahito", "mahito", JJK, "7 8 8 10 1 6 0 3 3 8 3 10 0 3 8 9 6"],
  ["Yuta Okkotsu", "yuta|yuta okkotsu", JJK, "4 10 6 0 4 9 9 2 4 9 7 6 2 2 4 6 7", "hero"],
  ["Aoi Todo", "todo|aoi todo", JJK, "9 10 6 1 2 9 5 3 6 9 1 6 2 7 10 7 3", "friend"],
  ["Toji Fushiguro", "toji|toji fushiguro", JJK, "3 10 7 7 1 9 2 6 5 10 1 8 1 4 3 9 6"],
  ["Choso", "choso", JJK, "3 9 6 3 2 8 7 2 3 8 2 6 0 6 3 6 7"],
  // ---------- Chainsaw Man ----------
  ["Denji", "denji|chainsaw man", CSM, "9 9 1 1 6 9 6 6 10 7 4 7 0 5 9 3 9", "glutton"],
  ["Pochita", "pochita", CSM, "6 10 3 0 3 8 10 3 7 7 10 6 0 1 0 3 6", "friend"],
  ["Power", "power", CSM, "10 8 1 5 7 6 4 8 9 8 7 5 0 9 10 6 6"],
  ["Makima", "makima", CSM, "2 10 10 10 0 6 0 2 6 7 6 9 6 2 6 10 4"],
  ["Aki Hayakawa", "aki|aki hayakawa", CSM, "3 8 7 0 2 9 8 1 4 7 3 4 2 6 3 6 10", "chef"],
  ["Kobeni", "kobeni|kobeni higashiyama", CSM, "6 7 3 0 7 2 6 2 4 9 6 1 0 5 6 4 10"],
  // ---------- Spy x Family ----------
  ["Loid Forger", "loid|loid forger|twilight", SPY, "5 8 10 1 1 9 7 1 4 8 4 2 5 2 6 10 6", "chef"],
  ["Yor Forger", "yor|yor forger|princesse epine|thorn princess", SPY, "7 10 4 1 7 8 8 1 4 9 7 6 3 3 5 3 4", "badcook"],
  ["Anya Forger", "anya|anya forger", SPY, "10 2 5 0 6 6 8 6 8 4 10 0 3 5 7 7 5"],
  ["Bond Forger", "bond|bond forger", SPY, "6 8 5 0 4 8 9 5 6 6 10 3 0 1 0 4 4", "friend"],
  ["Damian Desmond", "damian|damian desmond", SPY, "5 3 6 2 4 5 5 2 4 4 6 1 10 8 6 5 4"],
  // ---------- Black Clover ----------
  ["Asta", "asta", BC, "8 10 2 0 6 10 10 1 7 9 4 2 0 5 10 3 7", "hero"],
  ["Yuno", "yuno", BC, "2 9 8 0 1 9 7 1 3 10 4 3 2 4 2 7 4"],
  ["Yami Sukehiro", "yami|yami sukehiro", BC, "7 9 6 1 3 9 7 5 6 8 1 7 2 7 6 6 5", "leader|teacher"],
  ["Noelle Silva", "noelle|noelle silva", BC, "6 7 6 0 6 7 7 2 4 6 8 2 9 8 7 4 5", "badcook"],
  ["Julius Novachrono", "julius|julius novachrono", BC, "6 9 9 0 2 8 9 3 4 10 4 2 4 1 7 8 5", "leader"],
  // ---------- Dr. Stone ----------
  ["Senku Ishigami", "senku|senku ishigami", DRS, "7 3 10 0 1 8 7 1 4 4 3 1 2 3 9 9 4", "leader|survivor"],
  ["Chrome", "chrome dr stone", DRS, "7 5 8 0 4 8 8 2 5 6 4 1 1 4 8 7 5", "survivor"],
  ["Taiju Oki", "taiju|taiju oki", DRS, "8 10 3 0 6 9 10 1 7 7 4 1 0 2 9 1 4", "friend"],
  ["Tsukasa Shishio", "tsukasa|tsukasa shishio", DRS, "2 10 8 6 0 9 4 1 3 9 2 7 1 4 2 7 7"],
  ["Gen Asagiri", "gen|gen asagiri", DRS, "8 2 8 3 2 3 5 4 6 5 4 1 2 1 9 10 3"],
  ["Kohaku", "kohaku", DRS, "5 8 5 0 3 9 7 2 5 9 6 3 0 7 6 5 4", "survivor"],
  // ---------- The Promised Neverland ----------
  ["Emma", "emma|emma neverland", TPN, "7 4 9 0 3 10 10 1 6 7 8 0 0 3 7 8 6", "leader|survivor"],
  ["Norman", "norman", TPN, "4 2 10 2 1 9 8 1 4 4 6 2 2 2 6 10 7", "leader"],
  ["Ray", "ray neverland", TPN, "4 3 10 1 1 8 6 3 4 5 4 3 0 6 5 10 7", "survivor"],
  ["Isabella", "isabella neverland|maman isabella", TPN, "2 5 10 9 0 6 3 1 3 5 6 9 3 3 4 10 6"],
  // ---------- Haikyu!! ----------
  ["Shoyo Hinata", "shoyo hinata|hinata shoyo|shoyo", HQ, "9 6 4 0 6 10 9 1 7 10 8 0 0 3 9 4 3", "speedster"],
  ["Tobio Kageyama", "kageyama|tobio kageyama", HQ, "4 7 9 0 4 8 5 1 5 8 3 6 1 9 2 6 3"],
  ["Kei Tsukishima", "tsukishima|kei tsukishima|tsukki", HQ, "6 6 9 2 1 5 4 5 4 5 3 2 1 4 6 9 3"],
  ["Yu Nishinoya", "nishinoya|yu nishinoya|noya", HQ, "9 6 3 0 5 9 8 2 6 9 6 0 0 6 9 3 4"],
  ["Toru Oikawa", "oikawa|toru oikawa", HQ, "8 6 9 2 2 8 5 2 5 7 6 2 3 5 8 9 7", "leader"],
  ["Kenma Kozume", "kenma|kenma kozume", HQ, "4 3 9 0 2 4 5 9 4 4 7 0 4 1 1 9 2"],
  // ---------- Kaiju n°8 ----------
  ["Kafka Hibino", "kafka|kafka hibino|kaiju 8", K8, "8 10 5 0 6 9 9 3 6 8 4 7 1 3 8 5 8", "hero"],
  ["Mina Ashiro", "mina|mina ashiro", K8, "2 8 7 0 1 9 7 1 4 7 6 3 3 3 2 6 4", "leader"],
  ["Reno Ichikawa", "reno|reno ichikawa", K8, "4 7 6 0 3 8 9 1 4 7 6 1 1 3 5 5 5"],
  ["Soshiro Hoshina", "hoshina|soshiro hoshina", K8, "7 8 7 0 2 9 6 2 4 10 4 4 2 3 7 8 5", "speedster"],
  // ---------- Sakamoto Days ----------
  ["Taro Sakamoto", "sakamoto|taro sakamoto", SD, "5 10 9 0 2 9 8 4 7 9 5 3 3 1 1 9 3"],
  ["Shin Asakura", "shin|shin asakura", SD, "7 7 6 0 5 8 8 3 5 7 4 1 0 6 8 6 6"],
  // ---------- Dandadan ----------
  ["Momo Ayase", "momo ayase|momo dandadan", DDD, "8 7 6 0 4 9 8 2 6 7 7 2 1 8 9 6 6"],
  ["Okarun", "okarun|ken takakura", DDD, "8 7 6 0 7 8 9 2 4 10 6 2 1 3 6 5 8", "speedster"],
  ["Turbo Mamie", "turbo granny|turbo mamie|turbo baba", DDD, "9 8 6 5 3 7 3 3 4 10 2 8 0 8 9 7 4", "speedster"],
  // ---------- Blue Lock ----------
  ["Yoichi Isagi", "isagi|yoichi isagi", BLK, "4 7 9 1 3 9 7 1 4 8 4 2 1 4 5 9 4"],
  ["Meguru Bachira", "bachira|meguru bachira", BLK, "9 7 6 0 4 8 8 3 5 9 7 2 1 3 8 6 4"],
  ["Rin Itoshi", "rin|rin itoshi", BLK, "1 8 8 3 1 8 3 1 3 9 2 6 2 9 2 7 5"],
  ["Jinpachi Ego", "ego|jinpachi ego", BLK, "3 3 9 5 1 6 2 2 4 2 0 6 3 4 9 9 3", "teacher"],
  // ---------- Frieren ----------
  ["Frieren", "frieren", FR, "6 9 9 0 5 7 7 9 6 6 6 2 2 1 2 7 3", "teacher"],
  ["Fern", "fern", FR, "4 8 8 0 2 8 7 2 7 8 7 3 2 7 3 6 4"],
  ["Stark", "stark frieren", FR, "6 9 3 0 7 5 9 4 7 7 6 2 1 2 5 3 6"],
  ["Himmel", "himmel", FR, "8 9 7 0 2 10 10 2 5 8 4 1 2 1 7 6 5", "hero|leader"],
  ["Heiter", "heiter", FR, "8 4 8 0 5 6 9 6 7 3 2 1 3 1 7 6 4"],
  ["Eisen", "eisen", FR, "3 10 6 0 2 9 8 3 5 5 2 4 1 3 2 4 5"],
  ["Aura la Guillotine", "aura|aura frieren", FR, "3 8 6 9 2 6 0 3 3 5 3 8 3 6 5 5 9"],
  // ---------- Oshi no Ko ----------
  ["Aqua Hoshino", "aqua|aquamarine hoshino|aqua hoshino", ONK, "2 4 9 4 1 7 5 2 3 5 4 4 5 6 3 10 8"],
  ["Ruby Hoshino", "ruby|ruby hoshino", ONK, "8 4 5 0 5 7 8 2 5 6 8 0 5 4 9 4 5", "dancer"],
  ["Ai Hoshino", "ai|ai hoshino", ONK, "8 3 6 0 4 6 8 3 5 5 10 0 7 1 8 8 10", "dancer"],
  // ---------- Autres Jump récents ----------
  ["Mash Burnedead", "mash|mash burnedead|mashle", "Mashle", "8 10 1 0 4 9 8 4 10 9 5 3 0 1 3 2 4", "glutton"],
  ["Gabimaru", "gabimaru", "Hell's Paradise", "3 9 7 4 1 9 6 2 4 9 3 7 0 5 3 8 7", "survivor"],
  ["Shinra Kusakabe", "shinra|shinra kusakabe", "Fire Force", "6 9 5 0 4 10 9 2 5 10 4 6 0 4 7 4 8", "hero|speedster"],
  ["Andy", "andy undead unluck", "Undead Unluck", "8 10 4 3 4 10 6 3 6 8 2 7 1 6 9 7 3", "survivor"],
  ["Fuuko Izumo", "fuuko|fuuko izumo", "Undead Unluck", "5 3 6 0 4 7 8 2 5 4 7 0 2 4 7 5 10"],
  // ---------- One Punch Man ----------
  ["Saitama", "saitama|one punch man", OPM, "9 10 4 0 5 10 7 8 7 10 4 2 1 1 3 3 4", "hero|survivor"],
  ["Genos", "genos", OPM, "2 9 8 0 3 10 8 1 1 9 5 3 2 5 6 6 9", "hero"],
  ["Tatsumaki", "tatsumaki|tornade terrible|tornado of terror", OPM, "4 10 7 2 2 9 4 3 3 8 8 6 5 10 7 5 4", "hero"],
  ["King", "king opm|king one punch man", OPM, "7 2 6 0 6 2 7 9 5 3 3 7 3 1 3 8 1"],
  ["Mumen Rider", "mumen rider|cycliste sans permis|license less rider", OPM, "6 3 5 0 7 10 10 1 4 2 4 0 0 1 4 3 8", "hero"],
  ["Garou", "garou", OPM, "4 10 7 6 1 10 4 1 4 9 1 8 0 7 8 7 9"],
  ["Bang", "bang|silver fang|croc d argent", OPM, "5 10 9 0 1 9 8 2 4 9 2 4 2 3 4 8 4", "teacher"],
  ["Sonic (One Punch Man)", "speed o sound sonic|sonic opm|sonic one punch man", OPM, "5 8 6 6 4 8 1 2 4 10 3 5 1 9 7 6 9", "speedster"],
  ["Boros", "boros", OPM, "2 10 6 7 1 10 2 2 4 9 0 10 4 7 7 3 6"],
  // ---------- Mob Psycho 100 ----------
  ["Mob", "mob|shigeo kageyama|shigeo", MOB, "3 10 4 0 6 7 10 3 4 3 7 6 0 1 1 3 6"],
  ["Reigen Arataka", "reigen|reigen arataka", MOB, "10 1 7 3 4 6 7 4 6 5 4 0 3 3 10 10 3", "teacher"],
  ["Dimple", "dimple|ekubo", MOB, "9 6 6 4 4 5 5 4 4 7 6 3 0 5 9 8 5"],
];
