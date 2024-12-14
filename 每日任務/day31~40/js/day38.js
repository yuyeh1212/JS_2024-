// 連結:https://codepen.io/yuyeh1212/pen/mdNZQpL

const addBtn = document.querySelector(".addBtn");
const alertMsgAll = document.querySelectorAll('[data-title]');

addBtn.addEventListener('click', addAlertMsg);
function addAlertMsg() {
  alertMsgAll.forEach(function(item) {
    item.textContent = `${item.dataset.title} 必填!`;
  })
}