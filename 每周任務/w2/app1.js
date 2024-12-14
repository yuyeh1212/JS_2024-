console.log("---第1題---");
function checkStringLength(str) {
  console.log(str.length);
}

checkStringLength("Hello");
checkStringLength("my name is Tom！");

console.log("---第2題---");
function lowerCase(str) {
  console.log(str.toLowerCase());
}
function upperCase(str) {
  console.log(str.toUpperCase());
}
lowerCase("FOKFF@gmail.com");
upperCase("hello, world");

console.log("---第3題---");
function trimString(str) {
  console.log(str.trim());
}

trimString("    hi, mom!  ");
trimString(" aa@gmail.com  ");

console.log("---第4題---");
function removeAllSpaceString(str) {
  console.log(str.split(" ").join(""));
}

removeAllSpaceString("Hello World");
removeAllSpaceString("你好     美麗的     世界");

console.log("---第5題---");
function stringArraySwitcher(input) {
  if (Array.isArray(input)) {
    console.log(input.join(','));
  } else if (typeof input === "string") {
    console.log(input.split(','));
  }
}

stringArraySwitcher(["A", "B", "C"]);
stringArraySwitcher("1,2,3");

console.log("---第6題---");
function getArea(arr) {
  console.log(arr.slice(3, 6));
}

getArea("高雄市前鎮區一心二路33號");
getArea("高雄市新興區新興路66號");

console.log("---第7題---");
function concatString(str1, str2) {
  console.log(str1.concat(str2));
}

concatString("我今天想來點", "六角冰咖啡");

console.log("---第8題---");
console.log(`'字串'是 JavaScript 中一種基礎且重要的"型別"，必須好好學習。`);

console.log("---第9題---");
function getCharacter(str, index) {
  if (index >= 0 && index < str.length) {
    console.log(str[index]);
  } else {
    console.log(false);
  }
}

const input = "Hello";
getCharacter(input, 1);
getCharacter(input, 3);
getCharacter(input, 10);

console.log("---第10題---");
function stringReverser(str) {
  console.log(str.split("").reverse().join(""));
}

stringReverser("hello");
