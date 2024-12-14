// 連結:https://codepen.io/yuyeh1212/pen/zYgymLP

let arr = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function(response) {
    console.log('資料有回傳了');
    arr = response.data;
  });

console.log(arr);

// 1. Console 顯示的輸出結果：
// 在這段程式碼中，console.log(arr) 會先顯示一個空陣列 []，然後後續的回傳訊息會顯示資料有回傳了**（如果資料請求成功的話）。

// 2. 為什麼會這樣？
// 這是因為 JavaScript 的 axios.get 函式是非同步的。當程式碼執行到 axios.get 時，它會發送 HTTP 請求，並在等待伺服器回應時，繼續執行後面的程式碼，而不會等待 axios.get 的回應。

// 因此，以下是程式碼的執行順序：
// 定義 let arr = [];
// 呼叫 axios.get 並發送非同步請求。
// 立即執行 console.log(arr);，此時 arr 還是空陣列，因為請求還沒有回來。
// 當 axios.get 請求完成並回傳資料後，進入 .then 區塊，執行 console.log('資料有回傳了'); 並將 response.data 賦值給 arr。
// 所以 console.log(arr) 會先顯示空陣列，而不是 response.data 的內容，因為 axios.get 的回應尚未完成。