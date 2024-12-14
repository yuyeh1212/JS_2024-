console.log("---(1)---");
function thisFunction() {
  return "this is a function";
}

console.log(thisFunction());

console.log("---(2)---"); //列印出 "Bye！"
function sayHello() {
  console.log("ㄋ好");
}
console.log("Bye！");

console.log("---(3)---"); //2正確
function sayHi() {
  console.log("Hi");
}
sayHi();
sayHi();

/* 選項 
     1. 函式不能重複呼叫，會報錯
     2. 最後會印出兩個 Hi
     3. 只會執行一次，印出一個 Hi
  */
