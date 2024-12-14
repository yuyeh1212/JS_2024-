console.clear();
console.log("-----(1)-----");
function myThought(input) {
  switch (input) {
    case 1:
      return "今天周一，去健走";
    case 2:
      return "今天周二，來慢跑";
    case 3:
      return "今天周三，打籃球";
    case 4:
      return "今天周四，去游泳";
    case 5:
      return "今天周五，打羽球";
    case 6:
      return "今天周六，去爬山";
    case 7:
      return "今天周日，來睡覺";
    default:
      return "input Error";
  }
}

console.log(myThought(1));
console.log(myThought(7));
console.log(myThought(8));

console.log("-----(2)-----");
function isDrinkable(input) {
  if (input >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isDrinkable(7));
console.log(isDrinkable(18));

console.log("-----(3)-----");
function isFever(input) {
  if (input >= 38) {
    return true;
  } else {
    return false;
  }
}

console.log(isFever(37));
console.log(isFever(39));

console.log("---(4)---");
function CtoF(input) {
  let fahrenheit = (input * 9) / 5 + 32;
  return fahrenheit.toFixed(1) + "°F";
}

function FtoC(input) {
  let celsius = ((input - 32) * 5) / 9;
  return celsius.toFixed(1) + "°C";
}

console.log(CtoF(10));
console.log(FtoC(10));

console.log("---(5)---");
function frogEat(input) {
  if (input <= 5) {
    return "嘓！";
  } else if (input >= 50) {
    return "嘔";
  } else {
    return "…";
  }
}

console.log(frogEat(1));
console.log(frogEat(100));
console.log(frogEat(10));

console.log("---(6)---");
function sphereVolume(radius) {
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume.toFixed(1);
}

console.log(sphereVolume(1));
console.log(sphereVolume(10));
console.log(sphereVolume(20));

console.log("---(7)---");
function bmi(height, weight, waist, gender) {
  let heightInMeters = height / 100;
  let bmiValue = weight / Math.pow(heightInMeters, 2);

  let bmiCategory = "";
  if (bmiValue < 18.5) {
    bmiCategory = "體重過輕";
  } else if (bmiValue >= 18.5 && bmiValue < 24) {
    bmiCategory = "正常範圍";
  } else if (bmiValue >= 24 && bmiValue < 27) {
    bmiCategory = "過重";
  } else if (bmiValue >= 27 && bmiValue < 30) {
    bmiCategory = "輕度肥胖";
  } else if (bmiValue >= 30 && bmiValue < 35) {
    bmiCategory = "中度肥胖";
  } else {
    bmiCategory = "重度肥胖";
  }

  let waistStatus = "";
  if (waist !== undefined && gender !== undefined) {
    if (gender === "male") {
      waistStatus = waist >= 90 ? "腰圍超標" : "腰圍正常";
    } else if (gender === "female") {
      waistStatus = waist >= 80 ? "腰圍超標" : "腰圍正常";
    }
  }

  if (waistStatus) {
    return `${bmiCategory}，${waistStatus}`;
  } else {
    return bmiCategory;
  }
}

console.log(bmi(178, 20));
console.log(bmi(178, 65));
console.log(bmi(178, 77));
console.log(bmi(178, 89));
console.log(bmi(178, 100));
console.log(bmi(178, 200));

console.log("---(8)---");
function calcHypotenuse(x, y) {
  let hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return hypotenuse.toFixed(1);
}

console.log(calcHypotenuse(10, 10));

console.log("---(9)---");
function fizzBuzz(input) {
  let arr = [];
  let count = 1;

  while (count <= input) {
    if (count % 3 === 0 && count % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (count % 3 === 0) {
      arr.push("Fizz");
    } else if (count % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(count);
    }
    count++;
  }
  return arr;
}

console.log(fizzBuzz(100));

console.log("---(10)---");
function spiderLeaveWeb(x, y, maxX = 11, maxY = 11) {
  if (x < 0 || x > maxX || y < 0 || y > maxY) {
      return "蜘蛛不在網上了";
  }
  
  const points = [
      { name: '左上', x: 0, y: 0 },
      { name: '右上角', x: maxX, y: 0 },
      { name: '左下角', x: 0, y: maxY },
      { name: '右下角', x: maxX, y: maxY }
  ];

  let closestPoint = null;
  let minDistance = Infinity;
  
  points.forEach(point => {
      const distance = Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));
      if (distance < minDistance) {
          minDistance = distance;
          closestPoint = point;
      }
  });
  minDistance = Math.round(minDistance * 10) / 10;
  
  return `${closestPoint.name}為最近的支撐點，距離 ${minDistance} 單位`;
}

console.log(spiderLeaveWeb(8, 3));  // "右上角為最近的支撐點，距離 4.2 單位"
console.log(spiderLeaveWeb(5, 5));  // "左上為最近的支撐點，距離 7.1 單位"
console.log(spiderLeaveWeb(6, 5));  // "右上角為最近的支撐點，距離 7.1 單位"
console.log(spiderLeaveWeb(5, 6));  // "左下角為最近的支撐點，距離 7.1 單位"
console.log(spiderLeaveWeb(6, 6));  // "右下角為最近的支撐點，距離 7.1 單位"
console.log(spiderLeaveWeb(20, 20));  // "蜘蛛不在網上了"
console.log(spiderLeaveWeb(0, 0));  // "左上為最近的支撐點，距離 0 單位"
console.log(spiderLeaveWeb(11, 0));  // "右上角為最近的支撐點，距離 0 單位"
console.log(spiderLeaveWeb(0, 11));  // "左下角為最近的支撐點，距離 0 單位"
console.log(spiderLeaveWeb(11, 11));  // "右下角為最近的支撐點，距離 0 單位"