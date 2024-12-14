console.log("-----(1)-----");
let wallet = 1000;
let total = 0;
const eggPrice = 60;
const dumplingsPrice = 150;
const instantNoodlesPrice = 80;
const vegetablePrice = 99;
let eggNum = 2;
let dumplingsNum = 1;
let instantNoodlesNum = 2;
let vegetableNum = 3;

total = eggPrice * eggNum + dumplingsPrice * dumplingsNum + 
    instantNoodlesPrice * instantNoodlesNum + vegetablePrice * vegetableNum;

console.log(`總供需花費${total}元`);
console.log("-----(2)-----");
let change = 0;

change = wallet - total + eggPrice * eggNum;

console.log(`小明在A店結帳還剩下${change}元`);
console.log("-----(3)-----");
const egg2Price = 60;
let cases = Math.ceil(20/8);

change = change - egg2Price * cases;

console.log(`小明在B店買了${cases}盒蛋還剩下${change}元`);
console.log("-----(4)-----");
let m = 1600 + 500 + 800;
let free = m % 200;
let fee = (m - 1000 - free)/200*10 + 30;

console.log(`小明可以領到跑路費${fee}元`);
console.log("-----(5)-----");
function calculateBMI(weight, height){
    let bmi = 0;
    bmi = weight / (height/100) ** 2;
    return console.log(Math.round(bmi));
}

calculateBMI(55, 168);