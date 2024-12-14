let soldierName = ["Tom", "Nick", "John"];
let bobBmi = 22;
let isFlatfoot = false;

if (bobBmi >= 35 || isFlatfoot) {
  console.log("Bob 不用當兵");
} else {
  soldierName.push("Bob");
  console.log("Bob 光榮入伍");
  console.log(`名單: ${soldierName}`);
}
