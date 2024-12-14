const cards = [
  {
    img: "https://picsum.photos/100",
    title: "Person 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
  {
    img: "https://picsum.photos/200",
    title: "Person 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
  {
    img: "https://picsum.photos/300",
    title: "Person 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
  {
    img: "https://picsum.photos/400",
    title: "Person 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
  {
    img: "https://picsum.photos/500",
    title: "Person 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
  {
    img: "https://picsum.photos/600",
    title: "Person 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nulla sed tempus varius",
  },
];

const cardContent = document.querySelector(".card-content");
const prev = document.querySelector(".prev-card");
const next = document.querySelector(".next-card");

let num = 0;

// 渲染卡片內容
function renderCard(num) {
  cardContent.innerHTML = cards
    .filter((item, index) => num == index || num + 1 == index)
    .map(
      (e) => `
      <div class="card">
        <img src="${e.img}" alt="">
        <h2>${e.title}</h2>
        <p>${e.content}</p>
      </div>
      `
    )
    .join("");
  updateButtonState();
}

// 更新按鈕狀態
function updateButtonState() {
  prev.disabled = num === 0;
  next.disabled = num >= cards.length - 2;
}

// 處理按鈕點擊事件
function cardSwitch(e) {
  if (e.target === prev) {
    if (num === 0) return;
    num--;
  } else {
    if (num >= cards.length - 2) return;
    num++;
  }
  renderCard(num);
}

// 綁定事件監聽器
prev.addEventListener("click", cardSwitch);
next.addEventListener("click", cardSwitch);

// 初始化渲染
renderCard(num);
