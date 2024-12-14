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

let bmiHistoryData = [];

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

  // 將每次的計算結果儲存到 bmiHistoryData 陣列中
  bmiHistoryData.push({
    bmi: bmi.toFixed(2),
    state: result.state,
    color: result.color,
  });

  return `您的體重${result.state}，健康指數為${result.color}`;
}

function showHistoryData() {
  if (bmiHistoryData.length === 0) {
    return "目前沒有 BMI 計算紀錄。";
  }

  const lastRecord = bmiHistoryData[bmiHistoryData.length - 1];

  return `您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastRecord.bmi}，體重${lastRecord.state}！健康指數為${lastRecord.color}！`;
}

console.log(printBmi(178, 20)); // 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
console.log(printBmi(178, 70)); // 印出 console.log 文字為「您的體重正常，健康指數為紅色」
console.log(printBmi(178, 85)); // 印出 console.log 文字為「您的體重過重，健康指數為澄色」
console.log(showHistoryData()); // 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」
