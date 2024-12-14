let price = 99; // 宣告 price 變數，並賦予數字型別 99 的值
let discountPrice = price; // 宣告 discountPrice 變數並將 price 的值傳給 discountPrice 變數

discountPrice = 79; // 重新賦予 discountPrice 變數的值為 79 的數字型別

console.log(price, discountPrice); // (99, 79) 分別列印出 price 跟 discountPrice 的值


let fruits = ['apple', 'banana']; //宣告 fruits 變數，並賦予陣列型別 ['apple', 'banana'] 的值
let moreFruits = fruits; //宣告 oreFruits 變數，並指向 fruits 的記憶體位置

fruits = ['cherry', 'mango']; //fruits 重新指向新的記憶體位置，值為['cherry', 'mango']

console.log(fruits, moreFruits); //[ 'cherry', 'mango' ] [ 'apple', 'banana' ] 列印出fruits 和 moreFruits 的值


let car = { brand: 'Toyota', year: 2020 }; //宣告 car 變數，並賦予物件型別 { brand: 'Toyota', year: 2020 } 的值
let anotherCar = car; //宣告 anotherCar 變數，並指向 car 的記憶體位置

anotherCar.year = 2022; //修改 anotherCar 物件中 year 的值為2022

console.log(car.year); //列印出 car 物件中 year 的值為2022，因 anotherCar 指向 car 的記憶體位置，所以兩者的值相同，所以若修改了anotherCar 物件中 year，car 的 year 也會被同步修改


let colors = ['bule','red','black']; //宣告 colors 變數，並賦予陣列型別 ['bule','red','black'] 的值
let otherColor = colors[2]; //宣告 otherColor 變數，並指向 colors[2] 的記憶體位置

colors.push('green'); // 在 colors 的陣列中新增一個 green 的值

console.log(colors, otherColor); // [ 'bule', 'red', 'black', 'green' ] black


let lottery = [8,25,26];
let otherLottery = lottery;

otherLottery.push(3);
otherLottery = [9,27,37];

console.log(lottery, otherLottery);