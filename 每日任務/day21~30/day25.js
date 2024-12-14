//連結:https://codepen.io/yuyeh1212/pen/KKOepxE

let numberAll = [25, 30, 15, 50, 17, 40];
let numberAbove30 = [];
let numberUnder30 = [];

numberAll.forEach(function(item, index, array) {
  if (item >= 30) {
    numberAbove30.push(item);
    return numberAbove30;
  } else {
    numberUnder30.push(item);
    return numberUnder30;
  }
});
console.log(numberAbove30);
console.log(numberUnder30);