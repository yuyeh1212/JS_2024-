// 儲存 BMI 狀態和範圍的數據結構
const bmiCategories = [
  { min: 0, max: 18.5, message: "您的體重過輕" },
  { min: 18.5, max: 24, message: "您的體重正常" },
  { min: 24, max: 27, message: "您的體重過重" },
  { min: 27, max: 30, message: "您的體重輕度肥胖" },
  { min: 30, max: 35, message: "您的體重中度肥胖" },
  { min: 35, max: Infinity, message: "您的體重重度肥胖" },
];

function printBmi(height, weight) {
  // 檢查輸入是否有效
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    return "input error!";
  }

  // 計算 BMI
  let heightInMeters = height / 100;
  let bmi = weight / Math.pow(heightInMeters, 2);

  // 循環查找對應的 BMI 類別(category為一臨時變數)
  for (let category of bmiCategories) {
    if (bmi >= category.min && bmi < category.max) {
      return category.message;
    }
  }
}

console.log(printBmi(178, 20)); // "您的體重過輕"
console.log(printBmi(178, 70)); // "您的體重正常"
console.log(printBmi(178, 85)); // "您的體重過重"
console.log(printBmi(178, 90)); // "您的體重輕度肥胖"
console.log(printBmi(178, 110)); // "您的體重中度肥胖"
console.log(printBmi(178, 130)); // "您的體重重度肥胖"
console.log(printBmi("身高", "體重")); // "您的數值輸入錯誤，請重新輸入"
