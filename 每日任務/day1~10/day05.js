let a = 1; //宣告a變數並賦予值為1
let b = 2; //宣告b變數並賦予值為2
a += 30; //a = a + 30 = 31
a--; // a - 1 = 30
b - 1; // b - 1 = 1(未賦值b不變)
a -= b; // a = a - b = 30 - 2 = 28

console.log(a); // 28
console.log(b); // 2

let groupA = {
    people: 10,
    age: 20
  }; //宣告groupA物件並賦予值為{people: 10,age: 20}
  
  let groupB = groupA; //groupB 並指向 groupA 的記憶體空間
  groupB.people = 3; // 重新賦予 people 值為 3
  
  console.log(groupA);//{people: 3,age: 20}