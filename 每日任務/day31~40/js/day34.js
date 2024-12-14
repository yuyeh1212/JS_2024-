// 連結: https://codepen.io/yuyeh1212/pen/BaXbVwq

//--- 問題一 ---
var chart1 = c3.generate({
  bindto: "#chart1",
  data: {
    x: "x",
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      [
        "x",
        "2021-01-15",
        "2021-01-16",
        "2021-01-17",
        "2021-01-18",
        "2021-01-19",
        "2021-01-20",
      ],
      //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
      ["大翰", 60, 50, 80, 90, 67, 80],
      ["小寶", 90, 70, 50, 68, 80, 90],
    ],
  },
  axis: {
    x: {
      type: "timeseries",
      tick: {
        format: "%Y-%m-%d",
      },
    },
  },
});

//--- 問題二 ---
var chart2 = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [
      ["鬼屋", 10],
      ["女僕咖啡廳", 20],
      ["童話世界", 5],
    ],
    colors: {
      鬼屋: "#E68618",
      女僕咖啡廳: "#F280CA",
      童話世界: "#26BFC7",
    },
    type: "donut",
  },
  donut: {
    title: "園遊會主題票選",
  },
});
