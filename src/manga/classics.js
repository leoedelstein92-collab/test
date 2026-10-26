// Classiques du manga (années 70 à 2010).
// Notes (0-10) : hum str int evi clu bra kin laz glu spd cut scr ric tem tal cun unl
const HXH = "Hunter x Hunter";
const FMA = "Fullmetal Alchemist";
const DN = "Death Note";
const AOT = "L'Attaque des Titans|Attack on Titan|Ataque a los titanes";
const JOJO = "JoJo's Bizarre Adventure";
const TG = "Tokyo Ghoul";
const FT = "Fairy Tail";
const GIN = "Gintama";
const RK = "Kenshin le vagabond|Rurouni Kenshin|Rurouni Kenshin";
const YYH = "Yu Yu Hakusho";
const INU = "Inuyasha";
const RAN = "Ranma ½";
const DRS = "Dr. Slump";
const CH = "Nicky Larson|City Hunter|City Hunter";
const HNK = "Ken le survivant|Fist of the North Star|El puño de la Estrella del Norte";
const SS = "Saint Seiya";
const SM = "Sailor Moon";
const CCS = "Card Captor Sakura|Cardcaptor Sakura|Sakura, cazadora de cartas";
const DC = "Détective Conan|Case Closed|Detective Conan";
const CT = "Olive et Tom|Captain Tsubasa|Supercampeones";
const SLD = "Slam Dunk";
const KNB = "Kuroko's Basket";
const IPPO = "Hajime no Ippo";
const BSK = "Berserk";
const VS = "Vinland Saga";
const DOR = "Doraemon";
const LUP = "Lupin III";
const EVA = "Neon Genesis Evangelion";

module.exports = [
  // ---------- Hunter x Hunter ----------
  ["Gon Freecss", "gon|gon freecss", HXH, "6 9 4 0 4 10 9 2 6 9 7 3 0 6 6 5 5", "survivor|friend"],
  ["Kirua Zoldyck", "killua|kirua|killua zoldyck|kirua zoldyck", HXH, "6 9 9 3 1 9 7 3 8 10 6 6 9 5 5 9 6", "speedster|friend"],
  ["Kurapika", "kurapika", HXH, "2 8 9 3 1 9 6 1 3 8 5 6 5 8 3 9 9"],
  ["Leorio", "leorio|leorio paladinight", HXH, "8 6 6 0 5 8 8 2 5 5 2 2 2 8 8 4 6"],
  ["Hisoka", "hisoka|hisoka morow", HXH, "7 9 9 9 0 9 1 4 3 9 2 10 3 3 8 10 3"],
  ["Isaac Netero", "netero|isaac netero", HXH, "7 10 9 0 1 10 7 4 5 10 2 4 6 2 6 9 6", "leader|teacher"],
  ["Meruem", "meruem|roi des fourmis", HXH, "1 10 10 8 0 9 3 1 6 10 1 10 3 6 4 9 8"],
  ["Komugi", "komugi", HXH, "5 1 9 0 7 5 9 2 4 2 7 0 0 1 4 6 8"],
  ["Chrollo Lucilfer", "chrollo|chrollo lucilfer|kuroro", HXH, "2 9 10 8 0 8 2 2 3 8 2 8 6 1 3 10 6", "leader"],
  ["Biscuit Krueger", "biscuit|bisky|biscuit krueger", HXH, "6 10 8 0 2 9 7 3 6 8 8 6 7 7 7 8 3", "teacher"],
  ["Ging Freecss", "ging|ging freecss", HXH, "7 9 10 1 2 9 4 8 5 8 2 3 5 2 5 10 3"],
  ["Illumi Zoldyck", "illumi|illumi zoldyck", HXH, "0 9 9 9 0 8 0 2 2 9 0 10 9 2 3 9 4"],
  ["Kite", "kite hxh", HXH, "3 8 8 0 1 9 7 2 3 8 2 4 3 3 3 8 9", "teacher"],
  ["Wing", "wing hxh", HXH, "3 6 8 0 2 7 8 1 3 6 2 1 2 2 6 6 3", "teacher"],
  ["Feitan", "feitan", HXH, "2 8 7 9 1 8 1 2 3 9 3 9 4 9 2 7 4"],
  // ---------- Fullmetal Alchemist ----------
  ["Edward Elric", "edward|edward elric|ed elric|fullmetal", FMA, "7 8 10 0 4 10 8 2 7 8 5 2 4 10 8 9 8", "hero"],
  ["Alphonse Elric", "alphonse|al|alphonse elric", FMA, "5 9 9 0 4 9 10 1 0 6 8 4 4 1 6 6 9", "friend"],
  ["Roy Mustang", "roy mustang|mustang|colonel mustang", FMA, "6 9 9 1 2 9 6 4 4 7 3 6 6 5 7 9 6", "leader"],
  ["Riza Hawkeye", "riza|riza hawkeye|hawkeye", FMA, "2 7 8 0 0 9 7 1 3 7 4 3 3 3 2 7 4"],
  ["Winry Rockbell", "winry|winry rockbell", FMA, "6 4 9 0 3 7 9 2 6 5 7 0 3 8 8 5 6"],
  ["Alex Louis Armstrong", "armstrong|alex louis armstrong", FMA, "9 10 6 0 3 9 10 1 7 6 3 3 9 1 9 4 4"],
  ["Maes Hughes", "hughes|maes hughes", FMA, "9 5 8 0 2 8 10 2 5 5 3 0 3 1 10 8 10", "friend"],
  ["Scar", "scar fma", FMA, "1 9 7 6 0 9 3 1 3 8 0 8 1 8 2 6 8"],
  ["Envy", "envy", FMA, "6 8 7 10 2 7 0 2 3 8 2 8 2 9 8 9 7"],
  ["Lust", "lust", FMA, "3 8 8 9 0 6 0 2 3 7 4 7 3 3 5 9 7"],
  ["Gluttony", "gluttony", FMA, "5 9 1 8 7 4 2 4 10 4 3 9 0 4 2 1 5", "glutton"],
  ["Greed", "greed", FMA, "7 9 7 5 1 8 4 3 7 7 2 6 5 5 8 8 6"],
  ["Pride", "pride|selim bradley", FMA, "2 10 9 10 0 7 0 1 2 7 6 10 4 7 3 9 5"],
  ["King Bradley", "king bradley|wrath|bradley", FMA, "4 10 8 9 0 9 1 1 3 10 1 9 6 4 4 9 4", "leader"],
  ["Father", "father fma|pere fma", FMA, "1 10 10 10 0 7 0 1 3 4 0 10 5 4 3 10 3"],
  ["Izumi Curtis", "izumi|izumi curtis", FMA, "5 9 8 0 2 9 7 1 5 7 3 8 3 9 6 6 7", "teacher"],
  ["Van Hohenheim", "hohenheim|van hohenheim", FMA, "5 8 10 0 4 8 8 4 4 5 2 3 3 2 4 8 8"],
  ["Ling Yao", "ling|ling yao", FMA, "8 8 7 1 4 8 7 4 10 8 4 3 7 3 8 8 4", "glutton|leader"],
  // ---------- Death Note ----------
  ["Light Yagami", "light|light yagami|kira", DN, "1 3 10 10 0 6 0 1 2 4 3 7 5 7 6 10 6"],
  ["L", "l|ryuzaki|l lawliet", DN, "5 3 10 0 3 8 5 3 10 3 4 3 8 2 6 10 7", "glutton"],
  ["Ryuk", "ryuk", DN, "9 7 5 4 2 5 2 7 9 6 2 8 0 2 6 5 1", "glutton"],
  ["Misa Amane", "misa|misa amane", DN, "7 2 3 5 7 6 6 2 4 4 9 3 6 4 9 2 7"],
  ["Near", "near", DN, "2 2 10 0 2 6 4 4 3 2 5 1 4 1 3 10 2"],
  ["Mello", "mello", DN, "3 6 9 6 2 8 2 1 7 6 3 6 4 9 5 9 8", "glutton"],
  ["Rem", "rem|rem death note", DN, "1 7 6 2 0 7 8 2 1 5 1 7 0 4 2 5 8"],
  // ---------- L'Attaque des Titans ----------
  ["Eren Jäger", "eren|eren jaeger|eren yeager|eren jager", AOT, "2 9 6 7 3 10 4 1 4 8 2 8 1 10 6 5 9"],
  ["Mikasa Ackerman", "mikasa|mikasa ackerman", AOT, "1 10 7 0 1 9 7 1 3 9 5 6 1 6 2 6 8"],
  ["Armin Arlert", "armin|armin arlert", AOT, "3 3 10 1 4 7 9 1 3 4 6 2 1 2 6 10 6"],
  ["Livaï Ackerman", "levi|livai|levi ackerman|livai ackerman|caporal livai", AOT, "3 10 8 0 0 10 6 1 2 10 3 8 2 7 2 8 9"],
  ["Erwin Smith", "erwin|erwin smith", AOT, "2 7 10 2 0 10 6 1 3 6 1 5 4 3 6 10 8", "leader"],
  ["Hansi Zoë", "hansi|hange|hange zoe|hansi zoe", AOT, "9 5 9 0 5 9 8 1 5 6 4 1 3 3 10 7 6", "leader"],
  ["Sasha Braus", "sasha|sasha braus|fille patate", AOT, "9 6 3 0 6 7 8 2 10 8 7 0 0 2 7 4 8", "glutton"],
  ["Connie Springer", "connie|connie springer", AOT, "9 6 2 0 6 6 8 3 6 7 5 0 0 3 8 2 7"],
  ["Jean Kirschtein", "jean|jean kirschtein|jean kirstein", AOT, "5 7 7 0 3 8 6 2 4 7 3 2 1 7 7 6 5", "leader"],
  ["Reiner Braun", "reiner|reiner braun|titan cuirasse", AOT, "3 10 7 5 2 8 6 1 4 6 1 7 2 5 4 7 9"],
  ["Bertolt Hoover", "bertolt|bertolt hoover|titan colossal", AOT, "2 10 6 5 4 5 5 2 3 4 3 9 1 2 2 4 9"],
  ["Annie Leonhart", "annie|annie leonhart", AOT, "1 9 7 5 1 8 3 2 3 8 4 6 2 6 1 8 7"],
  ["Historia Reiss", "historia|historia reiss|krista lenz", AOT, "4 4 6 0 3 7 9 1 3 5 9 0 7 3 4 6 7", "leader"],
  ["Zeke Jäger", "zeke|zeke jaeger|titan bestial", AOT, "3 10 9 8 1 7 2 2 3 5 1 9 2 4 5 9 7"],
  ["Ymir", "ymir", AOT, "6 8 6 2 2 8 6 3 4 8 2 7 1 6 7 7 9"],
  // ---------- JoJo's Bizarre Adventure ----------
  ["Jonathan Joestar", "jonathan|jonathan joestar", JOJO, "4 9 6 0 3 10 10 1 6 6 3 2 7 3 5 4 9", "hero"],
  ["Joseph Joestar", "joseph|joseph joestar", JOJO, "10 9 8 1 5 9 7 3 6 7 3 2 7 6 10 10 5"],
  ["Jotaro Kujo", "jotaro|jotaro kujo|jojo", JOJO, "3 10 8 1 1 10 6 3 4 9 2 7 4 7 1 8 4"],
  ["Josuke Higashikata", "josuke|josuke higashikata", JOJO, "7 9 6 0 3 9 9 2 6 8 4 3 3 8 7 7 4"],
  ["Giorno Giovanna", "giorno|giorno giovanna", JOJO, "3 9 9 2 0 9 6 1 3 8 4 5 4 2 4 9 3", "leader"],
  ["Jolyne Cujoh", "jolyne|jolyne cujoh|jolyne kujo", JOJO, "6 9 7 1 3 10 7 2 5 8 4 4 3 7 7 8 9"],
  ["Dio Brando", "dio|dio brando", JOJO, "7 10 9 10 1 8 0 2 5 10 1 10 7 8 9 10 4"],
  ["Jean-Pierre Polnareff", "polnareff|jean pierre polnareff", JOJO, "9 8 4 0 7 9 8 2 6 9 3 3 2 6 9 3 10"],
  ["Speedwagon", "speedwagon|robert e o speedwagon", JOJO, "7 5 6 0 3 8 9 1 5 4 2 3 9 3 9 6 4", "friend"],
  ["Kira Yoshikage", "yoshikage kira|kira yoshikage", JOJO, "2 9 9 10 0 5 0 2 3 6 1 9 6 7 4 9 6"],
  ["Rohan Kishibe", "rohan|rohan kishibe", JOJO, "6 6 9 2 2 8 4 2 4 5 3 4 8 8 8 8 6"],
  ["Okuyasu Nijimura", "okuyasu|okuyasu nijimura", JOJO, "8 8 1 0 6 8 8 3 7 6 3 3 1 6 8 2 6", "friend"],
  ["Bruno Bucciarati", "bucciarati|bruno bucciarati|bruno bucciarati", JOJO, "3 8 8 1 1 10 9 1 4 7 3 4 4 3 4 8 8", "leader"],
  ["Diavolo", "diavolo", JOJO, "1 10 8 10 1 5 0 1 3 9 0 9 9 8 2 9 8"],
  // ---------- Tokyo Ghoul ----------
  ["Ken Kaneki", "kaneki|ken kaneki", TG, "2 9 8 3 3 8 8 2 8 9 4 8 1 4 3 6 10"],
  ["Touka Kirishima", "touka|touka kirishima", TG, "3 8 6 2 2 8 6 2 4 9 6 5 1 9 3 6 7"],
  ["Juzo Suzuya", "juzo|suzuya|juzo suzuya", TG, "8 8 5 4 4 9 3 3 7 9 6 7 3 3 6 6 7"],
  ["Rize Kamishiro", "rize|rize kamishiro", TG, "5 8 7 9 1 6 0 3 10 8 4 9 4 4 6 7 6", "glutton"],
  ["Shu Tsukiyama", "tsukiyama|shu tsukiyama|le gourmet", TG, "9 8 7 7 3 6 2 2 9 7 2 7 9 4 9 6 6", "glutton"],
  ["Kisho Arima", "arima|kisho arima", TG, "1 10 9 1 0 9 4 2 3 10 2 9 4 1 1 9 7"],
  // ---------- Fairy Tail ----------
  ["Natsu Dragneel", "natsu|natsu dragneel", FT, "9 9 2 0 7 10 9 3 10 8 5 3 1 8 9 3 5", "glutton|friend"],
  ["Lucy Heartfilia", "lucy|lucy heartfilia", FT, "7 4 8 0 5 7 9 2 5 5 8 1 8 6 8 6 8"],
  ["Happy", "happy fairy tail", FT, "9 3 4 0 5 5 8 4 9 7 10 0 0 2 9 5 4", "glutton"],
  ["Grey Fullbuster", "grey|gray|grey fullbuster|gray fullbuster", FT, "7 9 6 0 4 9 7 3 5 8 3 3 2 6 5 6 7"],
  ["Erza Scarlet", "erza|erza scarlet|titania", FT, "5 10 8 0 3 10 8 1 7 9 5 7 3 7 6 6 7", "leader"],
  ["Makarov Dreyar", "makarov|makarov dreyar", FT, "8 10 8 0 3 9 9 4 6 5 3 5 4 6 8 7 6", "leader|teacher"],
  ["Gajeel Redfox", "gajeel|gajeel redfox", FT, "6 9 4 2 3 9 5 3 8 7 2 7 1 8 5 5 5", "glutton"],
  ["Wendy Marvell", "wendy marvell", FT, "4 5 6 0 6 7 10 1 4 6 9 0 1 1 5 3 5"],
  // ---------- Gintama ----------
  ["Gintoki Sakata", "gintoki|gintoki sakata|gin san", GIN, "10 10 6 1 5 9 7 10 9 9 2 4 0 4 9 7 7", "glutton"],
  ["Shinpachi Shimura", "shinpachi|shinpachi shimura", GIN, "8 4 6 0 5 6 8 2 4 4 4 0 1 7 9 4 8"],
  ["Kagura", "kagura|kagura gintama", GIN, "9 10 3 2 6 8 6 6 10 8 8 4 0 8 9 5 4", "glutton"],
  ["Toshiro Hijikata", "hijikata|toshiro hijikata", GIN, "6 9 7 1 3 9 5 2 7 8 2 6 3 9 6 7 6"],
  ["Sogo Okita", "okita|sogo okita|sougo", GIN, "8 9 7 6 2 8 3 7 5 9 5 7 2 4 7 9 4"],
  ["Isao Kondo", "kondo|isao kondo", GIN, "9 8 3 0 7 9 8 4 6 6 2 2 3 4 9 2 9", "leader"],
  ["Shinsuke Takasugi", "takasugi|shinsuke takasugi", GIN, "2 9 8 9 0 9 2 2 3 8 1 8 5 6 4 9 8"],
  ["Elizabeth (Gintama)", "elizabeth gintama", GIN, "9 7 4 0 3 6 6 5 5 5 6 4 0 2 0 5 3"],
  // ---------- Kenshin le vagabond ----------
  ["Kenshin Himura", "kenshin|kenshin himura|battosai", RK, "7 9 8 0 5 9 10 2 4 10 7 6 0 1 6 7 6", "speedster|hero"],
  ["Kaoru Kamiya", "kaoru|kaoru kamiya", RK, "6 5 5 0 5 8 8 2 5 5 7 1 2 9 8 4 6", "badcook"],
  ["Sanosuke Sagara", "sanosuke|sano|sanosuke sagara", RK, "8 9 3 1 5 9 7 5 8 6 2 5 0 8 7 3 6"],
  ["Makoto Shishio", "shishio|makoto shishio", RK, "3 9 8 10 0 8 0 2 3 8 0 10 7 8 7 9 6"],
  ["Hajime Saito", "saito|hajime saito", RK, "2 9 8 2 0 9 3 2 4 9 0 8 2 7 3 8 4"],
  // ---------- Yu Yu Hakusho ----------
  ["Yusuke Urameshi", "yusuke|yusuke urameshi", YYH, "9 9 4 1 5 10 8 5 6 8 3 5 1 8 8 6 8", "hero"],
  ["Kurama (Yu Yu Hakusho)", "kurama yyh|kurama yu yu hakusho|shuichi minamino", YYH, "3 8 10 2 0 9 7 1 3 8 6 6 2 2 4 10 4"],
  ["Hiei", "hiei", YYH, "3 9 7 3 0 9 4 2 4 10 3 7 1 9 2 7 6", "speedster"],
  ["Kazuma Kuwabara", "kuwabara|kazuma kuwabara", YYH, "9 8 2 0 7 9 9 3 6 6 3 3 1 7 9 2 7", "friend"],
  ["Genkai", "genkai", YYH, "6 9 9 0 1 9 6 3 5 7 1 4 3 8 5 8 5", "teacher"],
  ["Toguro", "toguro|younger toguro|toguro cadet", YYH, "2 10 6 7 1 8 2 1 4 8 0 10 3 4 3 5 6"],
  // ---------- Inuyasha ----------
  ["Inuyasha", "inuyasha", INU, "7 9 4 1 4 10 7 3 7 9 6 5 1 10 8 4 6"],
  ["Kagome Higurashi", "kagome|kagome higurashi", INU, "6 5 7 0 5 9 9 2 5 5 8 0 2 7 8 5 6"],
  ["Sesshomaru", "sesshomaru|sesshoumaru", INU, "1 10 8 4 0 9 3 2 3 9 3 8 6 6 1 8 4"],
  ["Miroku", "miroku", INU, "8 7 8 1 3 8 6 3 5 6 3 3 2 3 8 9 7"],
  ["Sango", "sango", INU, "4 8 7 0 2 9 8 1 4 7 6 4 2 7 5 6 8"],
  ["Shippo", "shippo", INU, "8 2 4 0 6 5 8 3 7 6 9 0 0 5 9 6 5"],
  ["Naraku", "naraku", INU, "2 9 9 10 0 5 0 2 3 7 0 10 4 7 5 10 6"],
  // ---------- Ranma ½ ----------
  ["Ranma Saotome", "ranma|ranma saotome", RAN, "8 9 5 0 4 9 7 3 8 9 6 2 1 8 8 6 9"],
  ["Akane Tendo", "akane|akane tendo", RAN, "6 8 5 0 6 8 7 2 5 6 7 2 3 10 7 4 6", "badcook"],
  ["Genma Saotome", "genma|genma saotome", RAN, "9 7 5 2 6 3 3 8 9 6 4 2 1 4 7 8 7"],
  ["Ryoga Hibiki", "ryoga|ryoga hibiki", RAN, "7 9 3 0 6 9 8 2 6 7 4 3 1 7 5 3 10"],
  ["Happosai", "happosai", RAN, "9 8 7 6 3 6 2 4 6 9 3 4 3 7 8 8 4"],
  // ---------- Dr. Slump ----------
  ["Arale Norimaki", "arale|arale norimaki", DRS, "10 10 2 0 6 8 9 2 6 10 10 0 0 1 9 2 2", "speedster"],
  ["Senbei Norimaki", "senbei|senbei norimaki|professeur senbei", DRS, "8 3 8 1 7 5 6 5 5 4 2 0 2 6 8 6 8"],
  ["Gatchan", "gatchan|gajira", DRS, "9 6 1 0 3 6 6 3 10 7 9 2 0 2 2 2 2", "glutton"],
  // ---------- Nicky Larson ----------
  ["Nicky Larson", "nicky larson|ryo saeba|city hunter", CH, "9 8 7 1 4 9 6 6 5 8 2 3 2 4 8 8 5"],
  ["Laura Marconi", "laura|kaori makimura|laura marconi", CH, "8 9 6 0 3 8 9 2 5 6 6 4 2 9 7 5 5"],
  // ---------- Ken le survivant ----------
  ["Kenshiro", "kenshiro|ken le survivant|ken", HNK, "2 10 7 0 0 10 9 1 4 8 1 9 0 4 1 7 8", "hero|survivor"],
  ["Raoh", "raoh|raoul|ken oh", HNK, "1 10 8 7 0 10 2 1 5 7 0 10 6 8 4 7 5", "leader"],
  ["Toki", "toki", HNK, "2 9 9 0 0 9 10 1 3 8 3 3 0 1 3 7 9"],
  ["Jagi", "jagi", HNK, "4 7 4 9 4 4 0 2 5 5 0 9 1 9 7 6 9"],
  ["Bat", "bat hokuto|bart", HNK, "7 4 6 0 4 7 8 2 6 6 4 1 0 4 8 6 6", "survivor"],
  // ---------- Saint Seiya ----------
  ["Seiya de Pégase", "seiya|seiya de pegase|pegasus seiya", SS, "6 8 4 0 4 10 8 2 4 9 4 1 0 6 7 4 8", "hero"],
  ["Shiryu du Dragon", "shiryu|shiryu du dragon", SS, "2 9 8 0 1 10 8 1 3 8 3 3 0 3 3 6 8"],
  ["Hyoga du Cygne", "hyoga|hyoga du cygne", SS, "2 8 7 0 1 9 7 1 3 8 4 3 0 4 2 6 8"],
  ["Shun d'Andromède", "shun|shun d andromede", SS, "3 7 7 0 2 8 10 1 3 8 8 2 0 1 4 5 7"],
  ["Ikki du Phénix", "ikki|ikki du phenix", SS, "2 9 7 1 1 10 6 1 3 9 2 7 0 8 2 7 6"],
  ["Athéna", "athena|saori kido|saori", SS, "2 5 8 0 2 8 9 2 3 3 6 1 10 4 4 6 8", "leader"],
  // ---------- Sailor Moon ----------
  ["Usagi Tsukino", "usagi|usagi tsukino|bunny|serena|sailor moon", SM, "8 6 2 0 8 8 9 7 10 5 8 0 2 6 9 3 6", "glutton|hero"],
  ["Sailor Mercury", "sailor mercure|sailor mercury|ami mizuno|amy", SM, "3 5 10 0 1 7 8 1 3 5 7 0 3 1 4 7 3"],
  ["Sailor Mars", "sailor mars|rei hino|raya", SM, "5 6 6 0 2 8 6 2 4 6 6 2 3 9 7 6 4"],
  ["Sailor Jupiter", "sailor jupiter|makoto kino|marcie", SM, "4 9 5 0 2 8 9 1 5 6 6 2 2 5 5 4 4", "chef"],
  ["Sailor Venus", "sailor venus|minako aino|mathilda", SM, "8 5 4 0 6 7 8 3 6 6 8 0 3 4 9 5 5"],
  ["Luna", "luna sailor moon|luna le chat", SM, "5 3 8 0 2 6 7 2 3 6 9 0 0 6 7 6 3"],
  ["Tuxedo Mask", "tuxedo mask|mamoru chiba|bourgogne", SM, "4 6 7 0 2 8 7 2 3 6 2 1 5 2 4 6 6"],
  // ---------- Card Captor Sakura ----------
  ["Sakura Kinomoto", "sakura kinomoto|sakura chasseuse de cartes", CCS, "6 5 5 0 6 8 10 2 6 8 10 0 2 2 7 4 3", "hero"],
  ["Kerobero", "kero|kerobero|kero chan", CCS, "9 5 5 0 5 6 6 6 10 7 9 1 0 6 10 5 4", "glutton"],
  ["Tomoyo Daidoji", "tomoyo|tomoyo daidoji", CCS, "6 2 7 0 1 5 9 1 3 4 8 0 9 1 6 6 2"],
  ["Shaolan Li", "shaolan|syaoran|syaoran li|lionel", CCS, "4 6 7 0 3 8 7 1 4 7 7 1 6 7 3 6 5"],
  // ---------- Détective Conan ----------
  ["Conan Edogawa", "conan|conan edogawa|shinichi kudo|shinichi", DC, "5 5 10 0 2 9 7 1 4 7 6 0 2 4 7 10 9"],
  ["Ran Mouri", "ran|ran mouri|rachel", DC, "4 9 6 0 3 8 9 1 4 7 7 1 2 6 6 4 6", "chef"],
  ["Kogoro Mouri", "kogoro|kogoro mouri|richard", DC, "9 6 2 1 8 6 6 8 7 4 1 0 2 7 8 2 7"],
  ["Ai Haibara", "ai haibara|haibara|shiho miyano", DC, "4 3 10 1 1 6 6 2 3 4 7 2 2 3 3 9 6"],
  ["Kaito Kid", "kaito kid|kaitou kid|kid l insaisissable|kaito kuroba", DC, "8 6 10 3 1 8 6 2 4 9 6 2 4 2 7 10 2"],
  ["Heiji Hattori", "heiji|heiji hattori", DC, "6 7 9 0 3 8 7 2 5 7 3 1 3 6 8 8 4"],
  ["Gin (Détective Conan)", "gin conan|gin detective conan", DC, "0 8 8 10 0 7 0 1 3 7 0 10 6 7 2 9 3"],
  // ---------- Olive et Tom ----------
  ["Olivier Atton", "olivier atton|tsubasa|tsubasa ozora|oliver atton|olive", CT, "5 7 6 0 2 9 9 1 4 9 5 0 2 3 6 6 3", "leader"],
  ["Thomas Price", "thomas price|genzo wakabayashi|benji price", CT, "2 8 7 0 1 9 6 1 3 8 3 4 9 6 4 6 4"],
  ["Mark Landers", "mark landers|kojiro hyuga|mark lenders", CT, "2 10 5 1 2 9 4 1 4 8 1 6 1 9 4 4 5"],
  ["Ben Becker", "ben becker|taro misaki|tom baker", CT, "4 6 7 0 2 8 9 1 3 8 6 0 1 1 5 6 6", "friend"],
  // ---------- Slam Dunk ----------
  ["Hanamichi Sakuragi", "sakuragi|hanamichi|hanamichi sakuragi", SLD, "9 9 2 0 7 9 7 3 7 8 3 4 0 9 10 4 7"],
  ["Kaede Rukawa", "rukawa|kaede rukawa", SLD, "1 8 7 0 3 8 4 9 3 9 4 3 2 5 1 5 3"],
  ["Takenori Akagi", "akagi|takenori akagi|gori", SLD, "3 10 6 0 2 9 7 1 4 5 1 6 1 8 4 4 5", "leader"],
  ["Ryota Miyagi", "miyagi|ryota miyagi", SLD, "6 6 6 0 3 8 6 2 4 10 3 1 1 6 6 6 6", "speedster"],
  ["Hisashi Mitsui", "mitsui|hisashi mitsui", SLD, "6 6 6 1 3 8 6 2 4 7 3 3 2 7 5 6 8"],
  // ---------- Kuroko's Basket ----------
  ["Tetsuya Kuroko", "kuroko|tetsuya kuroko", KNB, "3 4 8 0 3 8 9 1 4 7 6 1 1 1 1 8 4"],
  ["Taiga Kagami", "kagami|taiga kagami", KNB, "7 9 4 0 4 9 7 2 10 9 3 4 1 7 6 3 4", "glutton|chef"],
  ["Seijuro Akashi", "akashi|seijuro akashi", KNB, "1 8 10 5 0 8 3 1 3 9 2 7 9 3 3 10 2", "leader"],
  ["Ryota Kise", "kise|ryota kise", KNB, "8 8 6 0 3 8 6 2 4 9 6 1 5 3 9 6 4"],
  ["Atsushi Murasakibara", "murasakibara|atsushi murasakibara", KNB, "5 10 5 2 3 5 4 9 10 6 4 6 2 5 3 3 3", "glutton"],
  // ---------- Hajime no Ippo ----------
  ["Ippo Makunouchi", "ippo|ippo makunouchi", IPPO, "4 9 4 0 5 10 10 1 5 7 6 2 1 1 3 3 4"],
  ["Mamoru Takamura", "takamura|mamoru takamura", IPPO, "10 10 6 1 3 9 5 4 7 8 1 6 2 7 9 6 4"],
  ["Genji Kamogawa", "kamogawa|genji kamogawa|coach kamogawa", IPPO, "4 6 9 0 1 8 7 1 3 3 1 6 2 9 5 8 5", "teacher"],
  // ---------- Berserk ----------
  ["Guts", "guts|le guerrier noir|black swordsman", BSK, "2 10 6 2 1 10 5 1 7 7 0 9 0 9 2 7 10", "survivor"],
  ["Griffith", "griffith|femto", BSK, "2 8 10 10 0 9 1 1 3 9 4 9 8 2 4 10 7", "leader"],
  ["Casca", "casca", BSK, "2 8 7 0 1 9 7 1 3 8 5 3 0 7 3 6 10"],
  ["Puck", "puck", BSK, "9 1 5 0 5 6 8 4 7 8 8 0 0 4 9 4 3"],
  // ---------- Vinland Saga ----------
  ["Thorfinn", "thorfinn", VS, "2 9 7 4 1 9 6 1 3 10 3 7 0 8 2 7 9"],
  ["Askeladd", "askeladd", VS, "6 8 10 7 0 8 3 2 4 7 1 7 4 3 7 10 7", "leader"],
  ["Thorkell", "thorkell", VS, "9 10 4 4 3 10 4 3 8 6 1 7 2 3 9 4 3"],
  ["Canute", "canute|knut", VS, "2 4 9 6 2 7 4 1 3 3 5 5 10 5 4 9 5", "leader"],
  // ---------- Doraemon ----------
  ["Doraemon", "doraemon", DOR, "7 5 8 0 6 6 9 3 9 4 9 0 3 4 8 5 4", "friend|glutton"],
  ["Nobita Nobi", "nobita|nobita nobi", DOR, "7 1 2 0 9 3 8 10 6 1 6 0 1 4 6 2 10"],
  ["Shizuka Minamoto", "shizuka|shizuka minamoto", DOR, "4 3 7 0 2 5 9 1 4 3 8 0 3 1 6 4 3"],
  ["Gian", "gian|giant|takeshi goda", DOR, "7 9 2 5 5 7 4 4 8 5 2 6 2 9 8 4 5", "badcook|badsinger"],
  ["Suneo", "suneo|suneo honekawa", DOR, "6 2 6 5 4 2 3 4 5 3 3 1 9 6 9 8 5"],
  // ---------- Osamu Tezuka & classiques ----------
  ["Astro Boy", "astro|astro boy|atom|tetsuwan atom", "Astro Boy", "4 10 8 0 2 10 10 1 1 10 8 1 1 2 6 5 6", "hero"],
  ["Black Jack", "black jack|blackjack", "Black Jack", "2 4 10 2 1 8 7 2 3 4 1 6 8 6 2 8 6"],
  ["Pinoko", "pinoko", "Black Jack", "9 2 5 0 6 6 8 2 6 5 9 0 0 8 9 5 4"],
  ["Lupin III", "lupin|lupin iii|lupin 3|edgar de la cambriole", LUP, "10 7 9 3 3 9 6 5 6 9 3 2 6 2 9 10 4"],
  ["Daisuke Jigen", "jigen|daisuke jigen", LUP, "5 7 7 2 1 9 6 4 5 9 1 5 3 4 3 7 5"],
  ["Goemon Ishikawa", "goemon|goemon ishikawa", LUP, "3 9 6 1 2 9 6 2 4 9 2 5 1 6 2 4 6"],
  ["Fujiko Mine", "fujiko|fujiko mine|margot", LUP, "6 5 8 5 2 7 3 3 4 7 6 2 7 4 7 10 3"],
  ["Inspecteur Zenigata", "zenigata|inspecteur zenigata|koichi zenigata", LUP, "7 8 5 0 6 10 7 1 6 7 2 3 2 8 8 4 8"],
  // ---------- Evangelion ----------
  ["Shinji Ikari", "shinji|shinji ikari", EVA, "2 6 6 0 5 3 7 4 3 5 5 4 1 3 2 3 10"],
  ["Asuka Langley", "asuka|asuka langley|asuka langley soryu", EVA, "6 7 8 1 3 9 4 2 5 7 7 3 3 10 8 6 9"],
  ["Rei Ayanami", "rei ayanami|ayanami", EVA, "0 6 6 0 2 7 6 3 1 5 7 4 1 0 0 3 8"],
  ["Misato Katsuragi", "misato|misato katsuragi", EVA, "8 5 8 1 7 8 7 7 8 6 4 2 2 5 8 7 7", "badcook|leader"],
  ["Gendo Ikari", "gendo|gendo ikari", EVA, "0 5 10 8 0 6 0 1 2 3 0 9 6 3 1 10 6"],
];
