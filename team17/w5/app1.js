const fs = require("fs");

// 讀取 JSON 檔案
function readJsonFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8");// 使用 fs 模組讀取檔案內容
  return JSON.parse(data);// 將讀取到的 JSON 字串解析成 JavaScript 對象
}
const jsonData = readJsonFile("./neighborhoodChief.json");

// 1. 計算里長男女生人數比例
function getGenderRatio(data) {
  const genderCount = { male: 0, female: 0 };
  data.forEach(chief => {
    if (chief.性別 === "男") genderCount.male++;
    else if (chief.性別 === "女") genderCount.female++;
  });
  return `男:女 = ${genderCount.male}:${genderCount.female}`;
}

// 2. 計算前鎮區里長總數
function countQianzhenLiChang(data) {
  return data.filter(chief => chief.區別 === "前鎮區").length;
}

// 3. 計算三民區女性里長總數
function countSanminLiChang(data) {
  return data.filter((chief) => chief.區別 === "三民區" && chief.性別 === "女")
    .length;
}

// 4. 計算各黨派里長人數
function countByParty(data) {
  const partyCount = {};
  data.forEach((chief) => {
    const party = chief.黨籍 || "無黨籍";
    partyCount[party] = (partyCount[party] || 0) + 1;
  });
  return partyCount;
}

// 5. 整理所有區的里長人數
function countByArea(data) {
  const districtCount = {};
  data.forEach((chief) => {
    const district = chief.區別;
    districtCount[district] = (districtCount[district] || 0) + 1;
  });
  return districtCount;
}

console.log(getGenderRatio(jsonData));
console.log(countQianzhenLiChang(jsonData));
console.log(countSanminLiChang(jsonData));
console.log(countByParty(jsonData));
console.log(countByArea(jsonData));
