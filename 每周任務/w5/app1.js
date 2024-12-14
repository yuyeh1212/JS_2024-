console.log("---(1)---");
console.log(document.getElementById("target").getAttribute("id"));
console.log(document.getElementsByClassName("target"));
console.log(document.querySelector("#target"));
console.log(document.querySelectorAll(".target"));
console.log(document.querySelector("#target").nextSibling);

console.log("---(2)---");
const selectMe = document.querySelector("#target");
selectMe.style.color = "red";
selectMe.classList.add("hello");
selectMe.textContent = "被選了01";

console.log("---(3)---");
selectMe.addEventListener("click", () => {
  const bgc = selectMe.style.backgroundColor;
  selectMe.style.backgroundColor = bgc ? "" : "yellow";
  selectMe.textContent = bgc ? "被選了01" : "已被點擊!";
});

console.log("---(4)---");
document.getElementById("addButton").addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "你好世界!";
  document.body.appendChild(newParagraph);
});

// console.log("---(5)---");
// document.getElementById("userform").addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

console.log("---(6)+(7)---");
// 初始化變數
let count = 0;
let multiplier = 1;

// 選擇 DOM 元素
const countDisplay = document.getElementById("countDisplay");
const multiplierInput = document.getElementById("multiplier");

// 更新顯示的計數值
const updateDisplay = () => {
  countDisplay.textContent = count;
};

// 處理計數的變更
const changeCount = (operation) => {
  if (operation === "increment") {
    count += multiplier;
  } else if (operation === "decrement") {
    count -= multiplier;
  } else if (operation === "reset") {
    count = 0;
  }
  updateDisplay();
};

// 設置倍數
const setMultiplier = () => {
  const inputMultiplier = parseInt(multiplierInput.value, 10);
  if (!isNaN(inputMultiplier) && inputMultiplier > 0) {
    multiplier = inputMultiplier;
    multiplierInput.value = ""; // 清空輸入欄
  } else {
    alert("請輸入有效的倍數");
  }
};

// 事件監聽器
document
  .getElementById("incrementBtn")
  .addEventListener("click", () => changeCount("increment"));
document
  .getElementById("decrementBtn")
  .addEventListener("click", () => changeCount("decrement"));
document
  .getElementById("resetBtn")
  .addEventListener("click", () => changeCount("reset"));
document
  .getElementById("applyMultiplierBtn")
  .addEventListener("click", setMultiplier);

// 初次更新顯示
updateDisplay();

console.log("---(8)---");
document.querySelectorAll(".accordionHeader").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isExpanded = content.style.display === "block";

    document
      .querySelectorAll(".accordionContent")
      .forEach((c) => (c.style.display = "none"));
    document
      .querySelectorAll(".accordionHeader span")
      .forEach((span) => (span.textContent = "+"));

    content.style.display = isExpanded ? "none" : "block";
    header.querySelector("span").textContent = isExpanded ? "+" : "-";
  });
});

console.log("---(9)---");
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabContent")
      .forEach((content) => (content.style.display = "none"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});

console.log("---(10)---");
document.getElementById("todoSubmit").addEventListener("click", () => {
  const input = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (input.value.trim()) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> ${input.value} <button>刪除</button>`;

    // 刪除待辦項目
    li.querySelector("button").addEventListener("click", () => {
      todoList.removeChild(li);
    });

    todoList.appendChild(li);
    input.value = ""; // 清空輸入框
  }
});
