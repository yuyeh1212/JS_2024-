console.log("---(1)---");
const toBuyList = [];
const userInfo = {};

toBuyList.push("牛奶", "酪梨", "咖啡粉", "咖啡粉", "蘋果麵包");

userInfo.age = 20;
userInfo.name = "小明";
userInfo.sex = "男";
userInfo.hobby = ["前端開發", "讀書", "跑步"];
userInfo.favoriteFood = "滷肉飯";
userInfo.isVegetarian = false;

console.log(toBuyList);
console.log(userInfo);

console.log("---(2)---");
console.log(toBuyList.length);
console.log(Object.entries(userInfo).length);

console.log("---(3)---");
let firstItem = toBuyList[0];
let lastItem = toBuyList[toBuyList.length - 1];
console.log(firstItem);
console.log(lastItem);

let keys = Object.keys(userInfo);
let firstKey = keys[0];
let lastKey = keys[keys.length - 1];
console.log(`${firstKey} : ${userInfo[firstKey]}`);
console.log(`${lastKey} : ${userInfo[lastKey]}`);

console.log("---(4)---");
const newToBuyList = [...toBuyList];
const newUserInfo = { ...userInfo };

console.log("---(5)---");
const index = newToBuyList.indexOf("咖啡粉");
if (index !== -1) {
  newToBuyList.splice(index, 1);
}
newToBuyList.push("布丁");
newToBuyList.pop();

newUserInfo.age++;
newUserInfo.isVegetarian = true;
newUserInfo.hasDriverLiscense = true;
delete newUserInfo.favoriteFood;

console.log(newToBuyList);
console.log(newUserInfo);

console.log("---(6)---");
//以JSON.parse(JSON.stringify())
const nestedNumbers = [[1], [2]];
const deepCloneNestedNumbers = JSON.parse(JSON.stringify(nestedNumbers));
deepCloneNestedNumbers[0].push(300);
console.log(nestedNumbers);
console.log(deepCloneNestedNumbers);

//以遞迴方式
// function deepClone(obj) {
//   // 如果是基本型別 (非物件或陣列)，直接返回原始值
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }

//   // 如果是陣列，創建一個新陣列，並遞迴拷貝每一項
//   if (Array.isArray(obj)) {
//     const cloneArray = [];
//     for (let i = 0; i < obj.length; i++) {
//       cloneArray[i] = deepClone(obj[i]);
//     }
//     return cloneArray;
//   }

//   // 如果是物件，創建一個新物件，並遞迴拷貝每個屬性
//   const cloneObject = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloneObject[key] = deepClone(obj[key]);
//     }
//   }
//   return cloneObject;
// }
// const nestedNumbers = [[1], [2]];

// // 使用遞迴函式深層拷貝
// const deepCloneNestedNumbers = deepClone(nestedNumbers);

// // 修改 deepCloneNestedNumbers 陣列中的第一個子陣列，新增 300
// deepCloneNestedNumbers[0].push(300);

// console.log(nestedNumbers);
// console.log(deepCloneNestedNumbers);

console.log("---(7)---");
function moonCakeTime(planetPhase) {
  return planetPhase.map((phase) => (phase === "🌕" ? "🌕 + 🥮" : phase));
}

const moonPhase = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
console.log(moonCakeTime(moonPhase));

console.log("---(8)---");
const cardData = [
  {
    url: "https://www.hexschool.com/",
    content: "六角學院",
  },
  {
    url: "https://www.heptagonschool.com/",
    content: "七角學院",
  },
  {
    url: "https://www.Octagonschool.com/",
    content: "八角學院",
  },
];

function generateCardHTML(data) {
  return data.map(
    (item) => `
      <li>
          <a href='${item.url}'>${item.content}</a>
      </li>
  `
  );
}

const cardHTML = generateCardHTML(cardData);

console.log(cardHTML);

console.log("---(9)---");
const orders = ["🍔", "🍜", "🍕", "🍜", "🍔"];

function countOrders(orders) {
  return orders.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOrders(orders));

console.log("---(10)---");
let tasks = [];
let taskId = 1;

function addTask(taskName) {
  const newTask = {
    id: taskId++,
    name: taskName,
    isCompleted: false,
  };
  tasks.push(newTask);
}

function removeTask(targetId) {
  tasks = tasks.filter((task) => task.id !== targetId);
}

function toggleTask(targetId) {
  tasks = tasks.map((task) => {
    if (task.id === targetId) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
}

function renderTasks(tasks) {
  console.log(tasks);
}

addTask("A");
addTask("B");
addTask("C");
toggleTask(2);
removeTask(1);
renderTasks(tasks);
