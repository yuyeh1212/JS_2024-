// 連結:https://codepen.io/yuyeh1212/pen/LYwgNQo

axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json"
  )
  .then(function (response) {
    console.log(response.data.length);
    console.log(response.data[0].id);
    console.log(response.data[0].name);
    console.log(response.data[0].imgUrl);
    console.log(response.data[0].area);
    console.log(response.data[1].description);
    console.log(response.data[1].group);
    console.log(response.data[1].price);
    console.log(response.data[response.data[2]]);
  });
