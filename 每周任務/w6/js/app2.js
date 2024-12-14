const bookData = [
  {
    name: "Harry Potter",
    description: "content 01",
  },
  {
    name: "Old Man And Sea",
    description: "content 02",
  },
  {
    name: "Hello World",
    description: "content 03",
  },
];

const bookList = document.querySelector(".book-list");
const bookResult = document.querySelector(".book-result");

// 顯示書籍清單按鈕
function renderBookList(arr) {
  bookList.innerHTML = arr
    .map(
      (e) => `
       <li><button class="btn" type="button">${e.name}</button></li>
      `
    )
    .join("");
}

// 顯示書籍內容結果
function renderBookResult(arr) {
  bookResult.innerHTML = arr
    .map((e) => `<li class="text-white">${e.name} - ${e.description}</li>`)
    .join("");
}

// 初始化顯示所有書籍按鈕和內容
renderBookList(bookData);
renderBookResult(bookData);

// 監聽輸入事件來篩選書籍
document.getElementById("search-book").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  renderBookList(bookData.filter((e) => e.name.toLowerCase().includes(query)));
});

// 監聽按鈕點擊事件來顯示所選書籍的內容
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    renderBookResult(
      bookData.filter((i) => i.name.includes(e.target.textContent))
    );
  }
});
