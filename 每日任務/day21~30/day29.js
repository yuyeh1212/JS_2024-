//連結:https://codepen.io/yuyeh1212/pen/RwXeObj

const targetName = document.querySelector("#targetName");
const targetImg = document.querySelector("#targetImg");
const targetArea = document.querySelector("#targetArea");

axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json"
  )
  .then(function (response) {
    targetName.textContent = response.data[0].name;
    targetImg.src = response.data[0].imgUrl;
    targetArea.textContent = response.data[0].area;
  })
  .catch((error) => {
    console.error("資料獲取失敗:", error);
  });
