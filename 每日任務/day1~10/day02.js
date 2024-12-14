//(1)
let a = "10" + "10";  //Str
let b = "10" * "10";  //Num
let c = 10 + "10";    //Str
let d = 10 * "10";    //Num
let e = 10 - "2";     //Num
let f = "10" - "2";   //Num

//(2)
// 1.
let myName = "jay";

// 2.
var _state = true; //宣告成功的有效布林值，但用途不輕易搞混

// 3.
let true = true;  //true為js中保留字，無法作為變數宣告

// 4.
const 520Pretty = 520;  //宣告變數不能以數字開頭

// 5.
const appleNum = 10;   //const為不常態變數，此處以let宣告更為合適
appleNum = 2;  //以const宣告無法重新賦值

// 6.
var ming ='小明';  //以var宣告ming變數並賦予值為'小明'
var ming = '小民';  //再次使用var宣告ming變數並賦予值為'小民'會覆蓋前一次的變數

// 7.
const ming = '小明'; 
const ming = '小民';   //以const宣告無法重新賦值，會產生報錯

// 8.
let ming = '小明';
let ming = '小民';  //ming已被宣告過了,可捨棄let用ming變數重新賦值ming='小民';

// 9.
let ming = '小明';
ming = '小民';  //正確的變數重新賦值

// 10.
let $open = "芝麻開門';
//值為字串""或''需成雙成對，他們是夫妻無法單獨使用，單獨使用會報錯