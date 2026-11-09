// Ajouts hebdomadaires : mangas pas encore couverts.
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const HAN = "Toilet-Bound Hanako-kun|Toilet-Bound Hanako-kun|Hanako-kun";
const BSD = "Bungo Stray Dogs";
const HOR = "Horimiya";
const MDD = "My Dress-Up Darling";
const SLI = "Moi, quand je me réincarne en Slime|That Time I Got Reincarnated as a Slime|Tensei shitara Slime";
const OVL = "Overlord";
const SHI = "The Rising of the Shield Hero";
const HIK = "Hikaru no Go";
const BAK = "Bakuman";
const DOR = "Dorohedoro";
const PAR = "Parasite|Parasyte|Parasyte";
const DEV = "Devilman";
const WHA = "L'Atelier des sorciers|Witch Hat Atelier|Atelier of Witch Hat";
const DMS = "Gloutons et Dragons|Delicious in Dungeon|Tragones y mazmorras";
const BEA = "Beastars";
const OUR = "Host Club|Ouran High School Host Club|Ouran High School Host Club";
const NOR = "Noragami";
const BOC = "Bocchi the Rock!";
const MUS = "Mushoku Tensei";
const AZU = "Azumanga Daioh";
const APO = "Les Carnets de l'apothicaire|The Apothecary Diaries|Los diarios de la boticaria";
const BB = "Black Butler|Black Butler|Kuroshitsuji";
const MAG = "Magi";
const WB = "Wind Breaker";
const LIA = "Your Lie in April|Your Lie in April|Shigatsu wa Kimi no Uso";
const SV = "A Silent Voice|A Silent Voice|Una voz silenciosa";
const TOR = "Toradora!";
const MI = "Maison Ikkoku";
const UY = "Lamu|Urusei Yatsura|Lamu";
const NAT = "Le Pacte des Yôkai|Natsume's Book of Friends|Natsume Yuujinchou";
const YC = "Laid-Back Camp|Laid-Back Camp|Yuru Camp";
const KNT = "Sawako|Kimi ni Todoke|Kimi ni Todoke";
const BBX = "Blue Box|Blue Box|Blue Box";
const KAK = "Kakegurui";
const TCH = "Touch";
const KOR = "Max et Compagnie|Kimagure Orange Road|Johnny y sus amigas";
const NOD = "Nodame Cantabile";
const MAG2 = "The Ancient Magus Bride|The Ancient Magus' Bride|The Ancient Magus' Bride";
const YON = "Yona, princesse de l'aube|Yona of the Dawn|Yona, princesa del amanecer";
const KSK = "Kamisama Hajimemashita|Kamisama Kiss|Kamisama Kiss";
const ROK = "Ranking of Kings";
const BAKI = "Baki";
const KON = "K-On!";
const HSZ = "La Mélancolie de Haruhi Suzumiya|The Melancholy of Haruhi Suzumiya|La melancolía de Haruhi Suzumiya";
const GDM = "Mobile Suit Gundam";
const SAW = "Spice and Wolf";
const FYG = "Fushigi Yugi";
const HYD = "Hana Yori Dango|Boys Over Flowers|Hana Yori Dango";
const CAW = "Les Brigades immunitaires|Cells at Work!|Cells at Work!";
const GE9 = "Galaxy Express 999";
const LBK = "Look Back";

module.exports = [
  // Toilet-Bound Hanako-kun
  ["Hanako-kun", "hanako|amane yugi", HAN, "8 7 7 3 2 7 6 4 4 7 7 6 1 4 8 8 6"],
  ["Nene Yashiro", "nene|yashiro", HAN, "7 2 3 0 8 6 8 2 6 3 7 0 1 4 8 1 7"],
  // Bungo Stray Dogs
  ["Atsushi Nakajima", "atsushi|tigre blanc", BSD, "4 8 5 0 5 7 9 1 7 7 6 3 0 2 4 3 8", "survivor"],
  ["Osamu Dazai", "dazai", BSD, "8 3 10 3 4 6 4 8 4 4 4 3 2 2 8 10 6"],
  ["Chuuya Nakahara", "chuuya|chuya", BSD, "4 9 6 4 2 8 3 2 4 8 4 5 6 9 5 4 4"],
  // Horimiya
  ["Kyoko Hori", "hori|kyouko hori", HOR, "6 5 7 0 3 6 8 1 4 5 7 0 2 7 6 5 2", "chef"],
  ["Izumi Miyamura", "miyamura", HOR, "5 4 5 0 4 6 9 3 4 4 7 2 1 1 3 3 3"],
  // My Dress-Up Darling
  ["Marin Kitagawa", "marin", MDD, "8 3 4 0 6 7 9 2 7 5 8 0 3 1 9 2 3", "friend"],
  ["Wakana Gojo", "wakana|wakana gojou", MDD, "4 2 6 0 5 5 9 1 3 3 7 0 1 1 2 1 3"],
  // Moi, quand je me réincarne en Slime
  ["Rimuru Tempest", "rimuru|satoru mikami", SLI, "6 10 9 1 2 9 9 3 5 9 9 2 8 2 6 8 2", "leader|hero"],
  ["Veldora Tempest", "veldora", SLI, "8 10 4 1 6 7 6 7 6 8 2 6 5 6 9 2 5"],
  ["Milim Nava", "milim", SLI, "8 10 3 1 6 8 7 4 8 9 8 4 4 8 8 2 3", "glutton"],
  // Overlord
  ["Ainz Ooal Gown", "ainz|momonga|momon", OVL, "4 10 8 7 4 6 3 1 0 6 1 9 10 3 4 9 3", "leader"],
  ["Albedo", "albedo overlord", OVL, "3 9 9 8 1 7 2 1 2 7 6 6 6 8 5 8 1"],
  // The Rising of the Shield Hero
  ["Naofumi Iwatani", "naofumi|hero au bouclier|shield hero|heroe del escudo", SHI, "2 5 8 2 1 8 6 1 3 3 3 2 4 7 3 8 9", "chef|survivor"],
  ["Raphtalia", "raphtalia", SHI, "3 7 6 0 2 8 9 1 4 7 8 1 2 3 3 4 7"],
  // Hikaru no Go
  ["Hikaru Shindo", "hikaru|shindo", HIK, "6 1 8 0 5 6 6 4 5 3 5 0 1 6 6 5 4"],
  ["Fujiwara no Sai", "sai fujiwara|sai hikaru no go", HIK, "7 0 10 0 6 3 9 1 3 1 6 1 1 4 8 6 9"],
  // Bakuman
  ["Moritaka Mashiro", "moritaka|saiko", BAK, "3 2 7 0 3 7 7 1 3 3 4 0 3 3 4 4 6"],
  ["Akito Takagi", "akito|shujin", BAK, "5 2 9 0 2 6 7 1 3 3 3 0 3 4 8 7 2"],
  // Dorohedoro
  ["Caïman", "caiman|kaiman", DOR, "6 9 4 2 4 9 6 3 9 7 1 8 1 5 5 3 8", "glutton"],
  ["Nikaido", "nikaido", DOR, "6 8 6 1 3 8 8 2 5 7 6 1 3 5 6 6 6", "chef"],
  // Parasite
  ["Shinichi Izumi", "shinichi izumi|izumi shinichi", PAR, "3 7 7 1 2 8 5 1 3 7 3 3 1 3 3 6 9", "survivor"],
  ["Migi", "migi", PAR, "4 8 10 3 0 6 2 4 3 9 4 6 0 1 7 9 2"],
  // Devilman
  ["Akira Fudo", "akira fudo|devilman|devil man", DEV, "3 10 4 2 3 10 8 2 5 8 2 9 1 8 4 3 10", "doomed|hero"],
  ["Ryo Asuka", "ryo asuka|satan devilman", DEV, "1 9 10 9 1 6 1 1 1 7 4 8 5 3 5 10 6"],
  // L'Atelier des sorciers
  ["Coco (L'Atelier des sorciers)", "coco witch hat|coco atelier", WHA, "4 3 5 0 6 7 9 2 3 4 9 0 1 2 6 3 8"],
  ["Qifrey", "kieffrey|qiefrey", WHA, "4 6 9 3 1 6 7 2 2 5 4 3 4 2 5 9 5", "teacher"],
  // Gloutons et Dragons
  ["Laios Touden", "laios", DMS, "7 7 7 0 6 8 7 1 9 5 3 1 2 1 8 3 6", "leader|chef|glutton"],
  ["Marcille Donato", "marcille", DMS, "7 3 9 1 6 6 7 2 4 3 7 1 2 7 8 4 7"],
  ["Senshi", "senshi le nain", DMS, "4 7 6 0 1 7 8 1 6 3 4 2 1 3 5 4 3", "chef"],
  ["Chilchuck Tims", "chilchuck", DMS, "5 3 7 1 2 4 5 4 3 7 6 0 2 6 4 7 5"],
  // Beastars
  ["Legoshi", "legosi|legoshi le loup", BEA, "3 8 6 0 6 8 8 1 4 7 3 6 1 3 3 3 8"],
  ["Haru (Beastars)", "haru beastars|haru le lapin", BEA, "4 1 6 1 3 6 5 3 3 4 8 0 1 4 5 6 7"],
  ["Louis (Beastars)", "louis beastars|louis le cerf", BEA, "2 4 9 4 1 8 3 1 2 6 4 3 9 6 6 9 5", "leader"],
  // Host Club
  ["Haruhi Fujioka", "haruhi", OUR, "6 2 9 0 3 6 7 3 5 3 7 0 0 2 4 6 3", "chef"],
  ["Tamaki Suoh", "tamaki", OUR, "9 3 4 0 8 6 8 2 4 4 7 0 9 3 9 2 5"],
  // Noragami
  ["Yato", "yaboku|yato le dieu", NOR, "8 8 6 2 5 7 6 4 5 9 5 4 0 5 8 6 9"],
  ["Hiyori Iki", "hiyori", NOR, "5 4 5 0 5 7 9 1 4 4 7 0 4 3 5 3 8"],
  // Autres
  ["Rudo", "rudo surebrec", "Gachiakuta", "4 7 5 2 3 8 5 2 4 7 2 4 0 9 4 5 9", "survivor"],
  ["Chihiro Rokuhira", "chihiro|rokuhira", "Kagurabachi", "2 8 7 1 1 9 6 1 3 9 3 6 1 3 2 6 8"],
  ["Tomie Kawakami", "tomie", "Tomie", "2 3 6 9 1 4 0 4 2 3 9 10 3 9 6 9 6"],
  ["Kei Kurono", "kurono", "Gantz", "3 7 6 2 4 8 4 4 4 6 2 3 1 5 4 6 9", "survivor"],
  // Bocchi the Rock!
  ["Hitori Gotoh", "bocchi|hitori|gotoh", BOC, "7 1 5 0 8 2 7 6 3 2 7 1 1 2 0 1 9", "doomed"],
  ["Nijika Ijichi", "nijika", BOC, "6 3 6 0 2 6 9 1 3 5 8 0 2 3 7 5 3", "leader|friend"],
  ["Ikuyo Kita", "kita|kita ikuyo", BOC, "6 2 5 0 4 5 8 1 3 5 8 0 2 2 9 4 3", "friend"],
  // Mushoku Tensei
  ["Rudeus Greyrat", "rudeus", MUS, "5 7 9 3 3 6 6 3 4 5 5 2 4 3 5 7 6"],
  ["Roxy Migurdia", "roxy", MUS, "4 6 8 0 6 6 8 2 4 4 8 0 2 3 4 4 6", "teacher"],
  ["Eris Boreas Greyrat", "eris|eris boreas", MUS, "4 8 3 1 4 9 5 2 6 8 5 4 7 10 4 2 4"],
  // Azumanga Daioh
  ["Osaka", "ayumu kasuga|osaka azumanga", AZU, "9 1 2 0 9 4 8 6 5 1 8 0 1 0 6 1 5"],
  ["Chiyo Mihama", "chiyo|chiyo chan", AZU, "4 1 10 0 3 4 9 1 3 2 10 0 7 1 5 3 3"],
  // Les Carnets de l'apothicaire
  ["Maomao", "mao mao", APO, "6 3 10 1 1 7 5 5 5 4 6 1 1 5 4 9 7"],
  ["Jinshi", "ren shi|kasui", APO, "5 4 8 1 2 6 6 2 2 4 6 1 9 4 5 8 6"],
  // Black Butler
  ["Sebastian Michaelis", "sebastian", BB, "4 10 9 7 0 8 3 1 2 10 3 8 3 2 5 10 1", "chef"],
  ["Ciel Phantomhive", "ciel", BB, "2 2 9 5 3 8 3 1 5 3 6 4 10 8 4 9 9", "leader"],
  // Magi
  ["Aladdin (Magi)", "aladdin magi", MAG, "7 7 8 0 4 8 9 3 8 5 8 1 1 1 7 5 4", "glutton"],
  ["Alibaba Saluja", "alibaba", MAG, "6 6 6 0 5 6 9 3 4 6 5 0 6 3 6 5 7"],
  ["Sinbad", "sindbad|sinbad magi", MAG, "7 9 9 3 2 9 6 2 5 7 4 2 9 3 7 9 3", "leader"],
  // Wind Breaker
  ["Haruka Sakura", "haruka sakura|sakura wind breaker", WB, "3 8 4 0 5 9 6 2 4 7 4 4 1 9 2 3 6"],
  ["Hajime Umemiya", "umemiya", WB, "7 10 6 0 2 9 9 2 4 7 4 2 2 2 7 5 2", "leader"],
  // Your Lie in April
  ["Kosei Arima", "kosei|kousei arima", LIA, "3 1 7 0 4 5 8 2 2 2 5 0 3 2 3 2 8"],
  ["Kaori Miyazono", "kaori", LIA, "7 2 5 0 5 9 7 1 6 5 8 0 2 5 8 4 10", "doomed"],
  // A Silent Voice
  ["Shoya Ishida", "shoya|shouya ishida", SV, "4 5 4 5 4 5 6 3 3 5 3 1 2 5 3 3 8"],
  ["Shoko Nishimiya", "shoko|shouko nishimiya", SV, "3 1 5 0 6 5 10 1 3 3 9 0 2 1 1 1 9"],
  // Toradora!
  ["Taiga Aisaka", "taiga|palmtop tiger|tigre de poche", TOR, "5 5 4 3 9 7 5 5 7 5 9 4 6 10 6 3 6", "badcook"],
  ["Ryuji Takasu", "ryuji|ryuuji takasu", TOR, "4 5 6 0 2 6 9 1 4 4 4 6 2 2 4 3 7", "chef"],
  // Maison Ikkoku
  ["Kyoko Otonashi", "otonashi|kyoko otonashi", MI, "3 3 6 0 4 5 7 1 3 3 6 0 3 8 4 4 7"],
  ["Yusaku Godai", "godai", MI, "6 3 4 0 8 4 8 4 4 3 4 0 0 2 4 1 9"],
  // Lamu
  ["Lamu", "lum|lum invader", UY, "7 8 5 1 3 7 7 2 5 9 9 2 3 7 8 4 3"],
  ["Ataru Moroboshi", "ataru", UY, "8 4 3 2 7 4 4 6 5 8 2 0 1 3 9 6 9"],
  // Le Pacte des Yôkai
  ["Takashi Natsume", "natsume|takashi natsume", NAT, "3 4 6 0 3 7 10 2 3 4 5 0 2 2 2 4 8", "friend"],
  ["Nyanko-sensei", "madara natsume|nyanko sensei|maneki neko", NAT, "8 9 6 2 4 6 5 8 10 5 8 6 1 6 8 7 3", "glutton"],
  // Laid-Back Camp
  ["Rin Shima", "rin shima|shimarin", YC, "4 3 6 0 2 6 7 4 5 4 7 0 2 3 1 3 3"],
  ["Nadeshiko Kagamihara", "nadeshiko", YC, "8 3 3 0 5 5 9 2 10 4 9 0 2 1 9 2 3", "glutton|chef|friend"],
  // Séries déjà présentes et classiques
  ["Sagiri Yamada Asaemon", "sagiri", "Hell's Paradise", "2 6 7 0 2 8 8 1 2 7 5 2 3 3 3 4 5"],
  ["Nagumo", "yoichi nagumo", "Sakamoto Days", "8 8 8 4 1 7 4 4 3 8 3 6 4 3 7 10 2"],
  ["Chi", "chi le chaton|chi sweet home|chi s sweet home", "Chi, une vie de chat|Chi's Sweet Home|Chi", "6 1 2 0 8 4 7 6 7 4 10 0 0 3 4 1 6"],
  ["Satoru Fujinuma", "satoru fujinuma|fujinuma", "Erased", "3 3 7 0 3 9 9 1 3 4 4 0 1 2 3 6 9", "hero|survivor"],
  ["Kinnikuman", "suguru kinniku|muscleman|kinniku man", "Kinnikuman", "9 9 2 0 8 8 8 6 9 5 3 3 6 4 7 3 7", "glutton|hero"],
  ["Kankichi Ryotsu", "ryotsu|ryo san|kochikame", "Kochikame", "9 7 5 2 7 7 5 7 6 6 1 1 2 6 9 8 8"],
  ["Sazae Fuguta", "sazae|sazae san", "Sazae-san", "8 3 4 0 8 5 8 2 5 6 4 0 3 3 8 2 6", "chef"],
  ["Kusuo Saiki", "saiki|kusuo|saiki k", "The Disastrous Life of Saiki K.", "6 10 9 0 1 5 5 6 6 10 2 1 2 6 1 8 9"],
  ["Ginko", "gingko|ginko mushishi", "Mushishi", "3 3 8 0 1 6 7 3 2 3 2 2 1 1 4 6 5", "survivor"],
  // Sawako
  ["Sawako Kuronuma", "sawako|sadako kimi ni todoke", KNT, "3 2 6 0 7 5 10 1 3 3 7 5 2 1 2 1 7", "friend"],
  ["Shota Kazehaya", "kazehaya|shouta kazehaya", KNT, "5 5 6 0 2 6 9 1 3 6 6 0 2 2 6 3 2"],
  // Blue Box
  ["Taiki Inomata", "taiki|taiki inomata", BBX, "4 6 6 0 3 7 8 1 4 7 5 0 2 2 4 3 4"],
  ["Chinatsu Kano", "chinatsu|chinatsu kano", BBX, "4 6 6 0 2 7 8 1 3 7 7 0 3 2 3 3 4"],
  // Kakegurui
  ["Yumeko Jabami", "yumeko|jabami", KAK, "6 2 9 4 1 10 6 2 4 4 7 8 7 3 6 9 2"],
  ["Mary Saotome", "mary saotome|meari saotome", KAK, "5 3 6 4 3 7 4 2 3 4 5 2 5 8 7 7 7"],
  // Touch
  ["Tatsuya Uesugi", "tatsuya|tatsuya uesugi", TCH, "7 6 5 0 5 7 7 8 5 6 3 0 1 2 5 4 5", "survivor"],
  ["Kazuya Uesugi", "kazuya|kazuya uesugi", TCH, "3 6 7 0 1 6 8 1 3 7 4 0 1 1 4 3 10", "doomed|hero"],
  ["Minami Asakura", "minami|minami asakura|minami-chan", TCH, "4 3 7 0 2 6 9 1 4 5 8 0 2 3 5 4 4", "chef"],
  // Max et Compagnie
  ["Kyosuke Kasuga", "kyosuke|kyousuke kasuga", KOR, "6 3 5 0 8 4 7 4 4 6 4 0 1 2 5 3 8"],
  ["Madoka Ayukawa", "madoka|madoka ayukawa", KOR, "3 6 8 2 1 7 7 2 3 6 7 3 4 6 3 6 3"],
  // Nodame Cantabile
  ["Megumi Noda", "nodame|megumi noda", NOD, "9 2 5 0 9 4 7 8 8 3 7 1 2 3 8 3 6", "glutton"],
  ["Shinichi Chiaki", "chiaki|shinichi chiaki", NOD, "5 4 9 1 2 5 5 1 3 4 4 1 7 8 5 4 5", "chef|teacher"],
  // The Ancient Magus' Bride
  ["Chise Hatori", "chise|chise hatori", MAG2, "2 2 6 0 3 7 8 2 3 3 6 1 0 2 2 3 9", "survivor"],
  ["Elias Ainsworth", "elias|elias ainsworth", MAG2, "2 8 9 2 3 6 5 1 2 4 1 8 6 3 3 6 3", "teacher"],
  // Yona, princesse de l'aube
  ["Yona", "princesse yona|yona princess|yona of the dawn", YON, "4 4 6 0 5 8 8 2 4 5 7 0 8 4 5 4 9", "leader|survivor"],
  ["Son Hak", "hak|son hak", YON, "6 9 6 1 2 9 6 3 4 8 3 4 2 4 5 6 5", "hero"],
  // Kamisama Kiss
  ["Nanami Momozono", "nanami momozono", KSK, "5 3 5 0 6 7 8 1 4 4 7 0 1 4 6 4 8"],
  ["Tomoe (Kamisama Kiss)", "tomoe|tomoe kamisama kiss", KSK, "4 8 8 4 1 7 4 4 3 7 6 4 2 8 4 7 4", "chef"],
  // Ranking of Kings
  ["Bojji", "boji|prince bojji|bojji ranking of kings", ROK, "4 4 6 0 5 10 10 1 3 7 8 0 7 1 0 3 9", "hero|survivor"],
  ["Kage (Ranking of Kings)", "kage|kage ranking of kings", ROK, "6 3 6 1 4 7 9 2 4 7 7 1 0 3 7 6 8", "friend"],
  // Baki
  ["Baki Hanma", "baki|baki hanma", BAKI, "3 9 5 1 1 10 6 2 7 9 2 4 2 5 2 5 6"],
  ["Yujiro Hanma", "yujiro|yuujirou hanma|ogre", BAKI, "3 10 7 8 0 10 1 2 6 9 0 10 7 9 4 6 1"],
  // Autres séries
  ["Yatora Yaguchi", "yatora|yaguchi", "Blue Period", "5 4 7 1 3 6 7 3 4 4 4 1 2 4 5 7 5"],
  ["Mitsumi Iwakura", "mitsumi|iwakura", "Skip and Loafer", "7 3 7 0 7 6 9 1 4 4 7 0 1 2 7 2 6", "friend"],
  ["Kaiji Ito", "kaiji|kaiji itou", "Kaiji", "3 4 7 1 6 7 6 6 4 4 1 2 0 6 4 8 10", "survivor"],
  ["Ryoma Echizen", "ryoma|echizen|ryouma echizen", "Prince of Tennis", "3 6 7 0 1 8 4 4 4 9 5 0 2 6 1 6 2"],
  ["Goro Shigeno", "goro|goro shigeno|goro honda", "Major", "4 7 4 0 4 10 7 1 5 7 3 0 2 8 5 3 8", "hero"],
  ["Hitomi Kisugi", "hitomi|cat's eye|cats eye|signe cat's eyes", "Cat's Eye", "4 5 8 1 2 8 7 2 3 8 6 0 6 4 4 9 4"],
  ["Ichigo Momomiya", "ichigo momomiya|mew ichigo|ichigo mew mew", "Tokyo Mew Mew", "6 5 4 0 7 7 8 2 5 7 9 0 1 6 7 3 6", "hero"],
  ["Chihaya Ayase", "chihaya|chihaya ayase", "Chihayafuru", "6 4 5 0 7 7 8 3 6 9 6 0 2 4 6 2 5", "speedster"],
  ["Manji (L'Habitant de l'infini)", "manji|manji blade of the immortal", "L'Habitant de l'infini|Blade of the Immortal|La espada del inmortal", "5 8 4 3 2 8 5 3 4 7 1 7 0 6 6 4 6", "survivor"],
  ["Ogami Itto", "itto ogami|ogami itto|lone wolf", "Lone Wolf and Cub", "1 9 8 4 0 10 5 1 2 8 1 8 1 5 1 8 7", "survivor"],
  ["Golgo 13", "duke togo|golgo", "Golgo 13", "0 9 9 6 0 10 1 1 2 8 0 9 8 3 0 9 0"],
  ["Sunraku", "rakuro hizutome|sunraku shangri la", "Shangri-La Frontier", "7 5 7 1 3 8 6 3 4 9 3 3 1 4 7 8 7", "speedster"],
  ["Kei Nagai", "kei nagai|nagai", "Ajin", "1 4 9 4 1 6 2 2 2 5 2 4 2 5 2 9 8", "survivor"],
  ["Lucy (Elfen Lied)", "nyu|lucy elfen lied", "Elfen Lied", "2 9 6 8 6 6 3 2 3 7 6 9 0 7 3 5 9", "doomed"],
  ["Clare", "clare claymore", "Claymore", "1 8 6 0 1 9 6 1 2 8 3 5 1 3 1 5 7", "survivor"],
  ["Gally", "alita|gally|alita battle angel", "Gunnm|Battle Angel Alita|Alita, ángel de combate", "3 9 6 0 3 10 7 1 4 9 5 3 0 6 4 5 7", "hero|survivor"],
  ["Ohma Tokita", "ohma|tokita ohma|ashura", "Kengan Ashura", "3 9 5 2 1 9 4 3 7 8 1 6 1 7 2 6 6"],
  // K-On!
  ["Yui Hirasawa", "yui|yui hirasawa", KON, "8 2 2 0 9 5 9 8 9 3 9 0 2 1 8 1 4", "glutton|friend"],
  ["Mio Akiyama", "mio|mio akiyama", KON, "4 2 7 0 4 2 8 2 3 3 8 0 2 3 3 2 6"],
  // La Mélancolie de Haruhi Suzumiya
  ["Haruhi Suzumiya", "suzumiya|haruhi suzumiya", HSZ, "7 6 8 2 3 9 3 2 4 7 6 1 2 9 9 6 2", "leader"],
  ["Kyon", "kyon", HSZ, "8 3 6 0 4 5 7 6 3 3 3 0 2 5 6 4 8"],
  // Mobile Suit Gundam
  ["Amuro Ray", "amuro|amuro rei", GDM, "2 5 9 0 3 8 6 3 3 9 3 1 2 6 3 5 7", "hero|survivor"],
  ["Char Aznable", "char|le comete rouge|red comet|cometa roja|casval", GDM, "2 7 9 6 1 8 3 1 2 10 2 5 6 4 5 10 4"],
  // Spice and Wolf
  ["Holo", "holo|horo|la sage louve|wise wolf", SAW, "8 7 9 1 2 7 6 6 9 7 8 3 2 6 9 9 3", "glutton"],
  ["Kraft Lawrence", "lawrence|kraft lawrence", SAW, "4 4 8 1 3 6 7 2 3 4 3 0 5 3 7 8 5"],
  // Fushigi Yugi
  ["Miaka Yuki", "miaka", FYG, "7 3 3 0 8 8 9 2 10 4 8 0 1 4 8 2 9", "glutton"],
  ["Tamahome", "tamahome|taka sukunami", FYG, "5 8 6 1 2 9 8 1 4 8 4 2 1 5 4 5 7", "hero"],
  // Hana Yori Dango
  ["Tsukushi Makino", "tsukushi|tsukushi makino", HYD, "5 6 6 0 3 10 8 1 4 5 5 0 1 8 6 4 8", "survivor"],
  ["Tsukasa Domyoji", "domyoji|tsukasa domyouji", HYD, "6 7 2 6 7 6 4 3 4 5 3 4 10 10 6 2 4"],
  // Les Brigades immunitaires
  ["Globule rouge AE3803", "ae3803|red blood cell|globule rouge|globulo rojo", CAW, "6 2 2 0 10 6 9 1 3 6 8 0 0 2 6 1 8"],
  ["Globule blanc U-1146", "u 1146|white blood cell|globule blanc|neutrophile|globulo blanco", CAW, "4 8 6 2 2 10 8 1 2 9 3 7 0 3 3 5 3", "hero"],
  // Galaxy Express 999
  ["Tetsuro Hoshino", "tetsuro hoshino", GE9, "4 4 5 0 4 9 8 1 5 4 5 0 0 6 5 4 9", "survivor"],
  ["Maetel", "maetel|maeter", GE9, "2 5 9 1 1 8 8 1 3 4 6 1 7 1 3 7 6"],
  // Look Back
  ["Ayumu Fujino", "fujino|ayumu fujino", LBK, "5 2 7 1 3 6 5 2 3 4 4 0 1 6 5 4 7"],
  ["Kyomoto", "kyomoto", LBK, "3 1 7 0 4 4 8 2 3 2 6 0 1 1 1 2 10", "doomed"],
  // Séries déjà présentes
  ["Reze", "reze|bomb devil|demon bombe", "Chainsaw Man|Chainsaw Man|Chainsaw Man", "6 8 7 5 2 8 5 2 3 8 7 7 1 4 7 9 7", "doomed"],
  ["Kana Arima", "kana arima|arima kana", "Oshi no Ko|Oshi no Ko|Oshi no Ko", "6 2 7 1 3 7 6 2 3 4 8 0 3 8 8 5 7"],
  ["Seishiro Nagi", "nagi|nagi seishiro|seishirou nagi", "Blue Lock|Blue Lock|Blue Lock", "3 7 8 0 2 5 4 10 4 8 4 1 2 2 1 6 2"],
  ["Finn Ames", "finn ames", "Mashle|Mashle|Mashle", "5 2 6 0 6 4 8 3 3 4 6 0 2 3 6 3 8"],
  ["Arthur Boyle", "arthur boyle|chevalier roi|knight king", "Fire Force|Fire Force|Fire Force", "9 8 1 0 8 9 7 3 4 7 3 2 1 4 6 1 4"],
  ["Benimaru Shinmon", "benimaru|benimaru shinmon", "Fire Force|Fire Force|Fire Force", "3 10 4 1 1 10 6 6 3 9 1 7 2 8 3 3 2", "leader"],
  ["Cha Hae-In", "cha hae in|hae in", "Solo Leveling|Solo Leveling|Solo Leveling", "2 8 7 0 1 9 7 1 3 9 5 3 5 4 3 5 3"],
  ["Kotaro Bokuto", "bokuto|koutarou bokuto", "Haikyu!!|Haikyu!!|Haikyu!!", "9 8 3 0 6 8 8 2 6 7 4 0 1 4 9 2 4", "leader"],
  ["Tetsuro Kuroo", "kuroo|tetsurou kuroo", "Haikyu!!|Haikyu!!|Haikyu!!", "7 7 8 1 1 7 6 2 3 6 2 1 1 3 8 9 2", "leader"],
  ["Rika Orimoto", "rika|rika orimoto|queen of curses", "Jujutsu Kaisen|Jujutsu Kaisen|Jujutsu Kaisen", "2 10 2 4 2 6 6 1 2 7 2 10 0 8 3 1 10", "doomed"],
  // Autres séries
  ["Konata Izumi", "konata|konata izumi", "Lucky Star|Lucky ☆ Star|Lucky Star", "8 2 6 0 3 4 6 9 5 7 7 0 2 2 9 5 2"],
  ["Nausicaä", "nausicaa|nausicaa de la vallee du vent", "Nausicaä de la Vallée du Vent|Nausicaä of the Valley of the Wind|Nausicaä del Valle del Viento", "2 6 9 0 1 10 10 1 2 8 5 1 3 3 4 6 7", "hero|leader"],
  ["Mutta Nanba", "mutta|mutta nanba", "Space Brothers|Space Brothers|Space Brothers", "8 4 8 0 6 6 7 3 4 3 2 1 2 5 7 5 8"],
  ["Hachimaki", "hachirota hoshino|hachimaki hoshino", "Planetes", "6 5 6 1 5 7 5 3 4 4 2 0 1 7 6 4 6"],
  ["Yuko Ichihara", "yuko ichihara|la sorciere des dimensions|dimension witch", "xxxHOLiC", "6 6 10 2 0 7 5 9 8 4 4 3 7 3 8 10 2"],
  ["Hikaru Shido (Rayearth)", "hikaru shido|hikaru rayearth", "Magic Knight Rayearth|Magic Knight Rayearth|Las guerreras mágicas", "6 6 4 0 4 10 9 1 5 7 8 0 1 4 6 2 5", "hero"],
  ["Maya Kitajima", "maya kitajima", "Glass Mask|Glass Mask|Máscara de cristal", "4 2 5 0 7 8 8 1 3 3 4 0 0 2 4 3 8"],
  ["Candy Neige André", "candy candy|candice white|candy neige", "Candy Candy", "6 4 6 0 5 9 10 1 3 7 8 0 2 4 7 4 9", "survivor"],
  ["Kirie Goshima", "kirie|kirie goshima", "Uzumaki", "2 2 5 0 3 6 8 1 2 3 5 2 1 2 3 2 10", "survivor"],
  ["Cobra", "cobra|space adventure cobra|rug ball", "Cobra|Space Adventure Cobra|Cobra", "8 8 7 1 1 10 7 4 4 8 1 4 5 2 8 9 3", "hero"],
  ["Joe Shimamura", "joe shimamura|009|cyborg 009", "Cyborg 009", "3 8 6 0 1 9 8 1 3 10 3 2 1 3 3 4 6", "hero|speedster"],
  ["Belzébuth (Sand Land)", "beelzebub sand land|belzebuth sand land|sand land", "Sand Land", "7 8 5 4 2 7 6 4 6 6 6 2 3 4 6 7 3"],
];
