let weather = {
    country: "高雄",
    "PM2.5": 35,
    isSunny: false,
    rainingRegion: ['鼓山', '鹽埕', '旗津'],
    rainFall: {
      鼓山: 400,
      鹽埕: 300,
    }
  } 
  
  // 取得 country 的值，並使用 console.log 印出
  console.log(); 
  
  // 取得 "PM2.5" 的值，並使用 console.log 印出
  console.log(weather["PM2.5"]);
  
  // 取得 isSunny 的值，並使用 console.log 印出
  console.log(weather.isSunny); 
  
  // 取得 rainingRegion 陣列的第一個值 '鼓山'，並使用 console.log 印出
  console.log(weather.rainingRegion[0]); 
  
  // 在 rainFall 新增一個屬性名為「旗津」、設定值為 200，並，並使用 console.log 印出 rainFall 的值
  weather.rainFall.旗津 = 200;
  console.log(rainFall);