let courses = [
  {
    title: "Javascript",
    members: 400,
    id: 1,
    isStarted: true,
    isSoldout: true,
    tasks: ["主線任務", "每日任務"],
  },
];

let newCourse = {
  title: "Vue3",
  members: 300,
  id: 2,
  isStarted: false,
  isSoldout: true,
  tasks: ["主線任務", "每日任務"],
};

// 1. 請將 courses 陣列中 id 為 1 的物件，tasks 陣列新增一筆資料為 '每日刷題'。
// 2. 請完成下方函式，將物件做為參數，判斷當課程中的 isSoldout 屬性為 true 時，
//    就將此物件新增到 courses 陣列中，並回傳 courses 陣列的長度
//   （只需要補上 ... 的部分，其餘不要更動）
courses[0].tasks.push("每日刷題");

function addCourse(courseObj) {
  if (newCourse.isSoldout) {
    courses.push(newCourse);
    return courses.length;
    console.log("新增成功");
  } else {
    console.log("無法新增");
    return courses.length;
  }
  return;
}
let coursesLength = addCourse(newCourse);

// 3. 完成上方程式碼後，選出正確敘述
// 選項：
// (1) 最後程式碼會印出 '新增成功'，而變數 coursesLength 的值會變為 2
// (2) 最後程式碼不會印出任何字串
// (3) 如果 newCourse 的 isSoldout 屬性值為 false 時，執行 addCourse(newCourse) 將不會印出任何字串，也不會回傳 courses 陣列的長度

//(1)錯誤，因console.log("新增成功"); 不會被執行
//(2)正確
//(3)錯誤，如 isSoldout 為 false，雖然會執行 console.log("無法新增");，但是仍然會返回 courses.length