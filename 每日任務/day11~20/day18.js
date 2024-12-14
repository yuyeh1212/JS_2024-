console.log("---第1題---");
let sum = 1;
function calcNum(x) {
  sum += x;
  console.log(x);//1
}
calcNum(3);

console.log("---第2題---");
let fibonacciArr = [1, 1, 2, 3, 5];
let fibonacciArrLength = fibonacciArr.length;
function calcNextNum(x, y) {
  let nextNum = x + y;
  fibonacciArr.push(nextNum);
}
calcNextNum(fibonacciArr[fibonacciArrLength-1], fibonacciArr[fibonacciArrLength-2]);
console.log(fibonacciArr);