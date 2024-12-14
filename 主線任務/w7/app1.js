// 連結:https://codepen.io/yuyeh1212/pen/qBeQxrK

// API URL
const url =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json";

// 使用 axios 取得資料
axios
  .get(url)
  .then(function (response) {
    const data = response.data;

    // 篩選地區並累加次數
    let totalObj = {};
    data.forEach(function (item) {
      if (totalObj[item.area] === undefined) {
        totalObj[item.area] = 1;
      } else {
        totalObj[item.area] += 1;
      }
    });

    // 將 totalObj 轉成 newData 格式 [["高雄", 2], ["台北", 1], ["台中", 1]]
    let newData = [];
    let area = Object.keys(totalObj);
    area.forEach(function (item) {
      let ary = [];
      ary.push(item);
      ary.push(totalObj[item]);
      newData.push(ary);
    });

    // 呼叫繪製圖表的函式
    renderChart(newData);
  })
  .catch(function (error) {
    console.error("取得資料發生錯誤:", error);
  });

// 定義渲染圖表的函式
function renderChart(data) {
  c3.generate({
    bindto: "#chart",
    data: {
      columns: data,
      type: "donut",
    },
    donut: {
      title: "地區",
    },
  });
}
