const bmiStatesData = [
  {
    state: "過輕",
    color: "藍色",
    minBmi: 0,
    maxBmi: 18.5,
  },
  {
    state: "正常",
    color: "紅色",
    minBmi: 18.5,
    maxBmi: 24,
  },
  {
    state: "過重",
    color: "澄色",
    minBmi: 24,
    maxBmi: 27,
  },
  {
    state: "輕度肥胖",
    color: "黃色",
    minBmi: 27,
    maxBmi: 30,
  },
  {
    state: "中度肥胖",
    color: "黑色",
    minBmi: 30,
    maxBmi: 35,
  },
  {
    state: "重度肥胖",
    color: "綠色",
    minBmi: 35,
    maxBmi: Infinity,
  },
];

function printBmi(height, weight) {
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    return "input error!";
  }

  let heightInMeters = height / 100;
  let bmi = weight / Math.pow(heightInMeters, 2);

  // 根據 BMI 找到對應的狀態
  let result = bmiStatesData.find(
    (item) => bmi >= item.minBmi && bmi < item.maxBmi
  );

  return `您的體重${result.state}，健康指數為${result.color}`;
}

console.log(printBmi(178, 20)); // "您的體重過輕，顏色為藍色"
console.log(printBmi(178, 70)); // "您的體重正常，顏色為紅色"
console.log(printBmi(178, 85)); // "您的體重過重，顏色為澄色"
console.log(printBmi(178, 90)); // "您的體重輕度肥胖，顏色為黃色"
console.log(printBmi(178, 110)); // "您的體重中度肥胖，顏色為黑色"
console.log(printBmi(178, 130)); // "您的體重重度肥胖，顏色為綠色"
console.log(printBmi("身高", "體重")); // "您的數值輸入錯誤，請重新輸入"
