document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openDialogButton");
  const dialog = document.getElementById("dialog");
  const closeButton = document.getElementById("closeDialogButton");
  let previouslyFocusedElement;

  // 開啟彈跳視窗的函式
  const openDialog = () => {
    previouslyFocusedElement = document.activeElement;
    dialog.classList.add("dialog--active");
    dialog.setAttribute("aria-hidden", "false");
    closeButton.focus();
    document.body.style.overflow = "hidden";
  };

  // 關閉彈跳視窗的函式
  const closeDialog = () => {
    dialog.classList.remove("dialog--active");
    dialog.setAttribute("aria-hidden", "true");
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
    document.body.style.overflow = "";
  };

  // 監聽打開按鈕的點擊事件
  openButton.addEventListener("click", openDialog);

  // 監聽關閉按鈕的點擊事件
  closeButton.addEventListener("click", closeDialog);

  // 監聽按下 ESC 鍵的事件
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.classList.contains("dialog--active")) {
      closeDialog();
    }
  });

  // 點擊彈跳視窗外部以關閉視窗
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
});
