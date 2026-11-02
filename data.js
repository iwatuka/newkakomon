// 教科を常に表示。年度データは data/ 以下の個別ファイルで管理します。
const DATA = {
  "数学": {},
  "英語": {},
  "物理": {},
  "化学": {},
  "小論文": {}
};
function registerYear(subject, university, year, yearData) {
  if (!DATA[subject]) DATA[subject] = {};
  if (!DATA[subject][university]) DATA[subject][university] = {};
  DATA[subject][university][year] = yearData;
}
