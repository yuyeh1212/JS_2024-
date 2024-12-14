console.log("---第1題---");
let a = 10;
let b = '10';

if( a >= b ){
 console.log('a 等於 b');
} else {
 console.log('a 不等於 b');
} //10 = "10" true，console a 等於 b

console.log("---第2題---");
let c = false;

if(!c){
 console.log('六角學院 讚！');
} else {
 console.log('六角學院 讚讚！');
} //false = "false" true，console六角學院 讚

console.log("---第3題---");
let d = 100;

if(d == '100'){
 console.log('沒錯！');
} else if ( d != '100') {
 console.log ('這陷阱題！');
} else {
 console.log('錯！');
} //100 = "100" true，console沒錯