// 連結:https://codepen.io/yuyeh1212/pen/mdNYVNr

let answer = {}; // 請把修改完的資料存入 answer 物件。
let url =
  "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url).then(function (response) {
  let total = {};
  let data = response.data;

  data.forEach(function (item, i) {
    if (total[item.jsGroup] === undefined) {
      total[item.jsGroup] = 1;
    } else {
      total[item.jsGroup] += 1;
    }
  });

  // 將整理好的 total 資料調整成圖中的格式存入 answer 中
  /* 程式碼開始 */
  let keyName = Object.keys(total);
  keyName.forEach(function (item) {
    if (item !== "未分組") {
      answer[`第 ${item} 組人數`] = total[item];
    } else {
      answer[`${item}人數`] = total[item];
    }
  });
  console.log(answer);
});
/* 程式碼結束 */
