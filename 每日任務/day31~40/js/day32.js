// 連結:https://codepen.io/yuyeh1212/pen/QWeYwjr

//---(1)---
let arr = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("資料有回傳了"); // 順序 ?
    arr = response.data;
    renderData();
  });

function renderData() {
  console.log(arr); // 順序 ?
}

console.log(arr); // 順序 ?

//---(1)---
// 執行順序 :
// 1. console.log(arr);（顯示 []）
// 2. console.log('資料有回傳了');
// 3. console.log(arr);（顯示 response.data）

//---(2)---
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("資料有回傳了");
    arr = response.data;
    renderData();
  });

function renderData() {
  console.log(arr);
  // 區間 1
  const title = document.querySelector(".title");
  title.textContent = arr[0].name;
}

console.log(arr);
// 區間 2

// 填入區間 1，在 renderData() 函式內填入 title.textContent = arr[0].name;，
// 確保 arr 已經被賦值為回傳的資料後，再更新 .title 元素的內容。
//若將此 JS 填入區間 2，axios.get 是非同步的，arr 仍然是空陣列，
//會導致 title.textContent = arr[0].name; 無法正確運作。
