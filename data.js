// 教科と大学の一覧を先に登録します。
// 年度ごとの内容は data/<教科>/<大学名>.js にまとめてあります。
const DATA = {
  "数学": {},
  "英語": {},
  "物理": {},
  "化学": {},
  "小論文": {}
};
// 2027年度入試 河合塾ボーダー偏差値の高い順（同偏差値は便宜上の順序）
// 慶應:72.5 / 慈恵・順天・日本医科:70.0 / 残り4校:67.5
const UNIVERSITY_NAMES = ["慶應医学部", "慈恵", "順天", "日本医科大学", "国際医療福祉大学", "自治医科大学", "昭和医科大学", "東京医科大"];
for (const subject of Object.keys(DATA)) {
  for (const university of UNIVERSITY_NAMES) DATA[subject][university] = {};
}
function registerYear(subject, university, year, yearData) {
  if (!DATA[subject]) DATA[subject] = {};
  if (!DATA[subject][university]) DATA[subject][university] = {};
  DATA[subject][university][year] = yearData;
}
