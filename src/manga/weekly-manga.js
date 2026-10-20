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
];
