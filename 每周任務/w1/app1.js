//題目1：相加產生器 (+)
const add = (x, y) => console.log(x + y);
add(1, 1);
add(2, 2);
add(3, 3);
console.log("---我是分割線---");
//題目2：相減產生器 (-)
const subtract = (x, y) => console.log(x - y);
subtract(1, 1);
subtract(2, 3);
subtract(8, 3);
console.log("---我是分割線---");
//題目3：相乘三次 (*)
const multiply3Times = (n) => console.log(n ** 3);
multiply3Times(3);
multiply3Times(0);
multiply3Times(9);
console.log("---我是分割線---");
//題目4：取 2 的餘數（%）
const remainder = (n) => console.log(n % 2);
remainder(3);
remainder(2);
remainder(8);
console.log("---我是分割線---");
//題目5：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)
const isDivisible = (n) => console.log(n % 2 == 0 ? "已整除" : "未整除");
isDivisible(3);
isDivisible(2);
isDivisible(8);
console.log("---我是分割線---");
//題目6：我要存錢(區域變數、全域變數)
let bankMoney = 0;
function addBankMoney(num) {
  bankMoney += num;
  console.log(`現在有${bankMoney}元`);
}
addBankMoney(1);
addBankMoney(50);
addBankMoney(10);
console.log("---我是分割線---");
//題目7：簡單計算機
const calculate = (x, y, n) => {
  switch (n) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      console.log(x / y);
      break;
    default: {
      console.log("輸入有誤");
      break;
    }
  }
};
calculate(3, 5, "+");
calculate(4, 2, "-");
calculate(7, 9, "*");
calculate(5, 5, "/");
console.log("---我是分割線---");
//題目8：簡單計算機 + 顯示算式過程
const calculateProcess = (x, y, n) => {
  switch (n) {
    case "+":
      console.log(`${x}+${y}=${x + y}`);
      break;
    case "-":
      console.log(`${x}-${y}=${x - y}`);
      break;
    case "*":
      console.log(`${x}*${y}=${x * y}`);
      break;
    case "/":
      console.log(`${x}/${y}=${x / y}`);
      break;
    default: {
      console.log("輸入有誤");
      break;
    }
  }
};
calculateProcess(3, 5, "+");
calculateProcess(4, 2, "-");
calculateProcess(7, 9, "*");
calculateProcess(5, 5, "/");
console.log("---我是分割線---");
//題目9：題目9：商業邏輯題：增加服務費
function serviceCharge(num) {
  return num * 1.05;
}
const total = serviceCharge(100);
console.log(`您總計費用為 ${total}`);
console.log("---我是分割線---");
//題目10：重構題：消除重複，抽離變因
const serviceCharge2 = (spend, tip = 0.1) => {
  return Math.floor(spend * tip);
};
function sixAngleCalculate(num) {
  const subTotal = num * 100;
  const total = subTotal + serviceCharge2(subTotal);
  return total;
}
console.log(sixAngleCalculate(1));
function eightAngleCalculate(num) {
  const subTotal = num * 800;
  const total = subTotal + serviceCharge2(subTotal);
  return total;
}
console.log(eightAngleCalculate(1));
