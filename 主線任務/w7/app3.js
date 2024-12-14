// 連結:https://codepen.io/yuyeh1212/pen/RwXqYxM

console.clear();

const ticketCardArea = document.querySelector(".ticketCard-area");
const regionSearch = document.querySelector(".regionSearch");
const addTicketBtn = document.querySelector(".addTicket-btn");
const cantFindArea = document.querySelector(".cantFind-area");
const searchResultText = document.getElementById("searchResult-text");
const url =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
let data = []; // 宣告空陣列，稍後從 API 獲取資料

// 初始渲染所有資料，並更新結果數量
function renderData(tickets) {
  ticketCardArea.innerHTML = "";
  tickets.forEach((ticket) => {
    ticketCardArea.innerHTML += `
      <li class="ticketCard">
        <div class="ticketCard-img">
          <img src="${ticket.imgUrl}" alt="${ticket.name}">
          <div class="ticketCard-region">${ticket.area}</div>
          <div class="ticketCard-rank">${ticket.rate}</div>
        </div>
        <div class="ticketCard-content">
          <h3>${ticket.name}</h3>
          <p>${ticket.description}</p>
          <div class="ticketCard-info">
            <p class="ticketCard-num">套票組數: ${ticket.group}</p>
            <p class="ticketCard-price"><span>$${ticket.price}</span> 起</p>
          </div>
        </div>
      </li>`;
  });
  // 更新結果數量
  searchResultText.innerText = `本次搜尋共 ${tickets.length} 筆資料`;
  cantFindArea.style.display = tickets.length ? "none" : "block";
}

// 繪製 Donut 圖
function renderChart(data) {
  let totalObj = {};
  data.forEach(function (item) {
    if (totalObj[item.area] === undefined) {
      totalObj[item.area] = 1;
    } else {
      totalObj[item.area] += 1;
    }
  });

  let newData = [];
  let areas = Object.keys(totalObj);
  areas.forEach(function (item) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  });

  c3.generate({
    bindto: "#chart",
    data: {
      columns: newData,
      type: "donut",
    },
    donut: {
      title: "地區",
    },
  });
}

// 使用 axios 獲取遠端資料
axios
  .get(url)
  .then((response) => {
    data = response.data.data; // 將 API 資料存入 data 陣列
    renderData(data); // 初始渲染資料
    renderChart(data); // 渲染 Donut 圖
  })
  .catch((error) => {
    console.error("獲取資料失敗:", error);
  });

// 篩選套票
regionSearch.addEventListener("change", function () {
  const region = regionSearch.value;
  const filteredData = region
    ? data.filter((ticket) => ticket.area === region)
    : data;
  renderData(filteredData);
  renderChart(filteredData); // 更新 Donut 圖以顯示篩選結果
});

// 新增套票並驗證表單內容
addTicketBtn.addEventListener("click", function () {
  const ticketName = document.getElementById("ticketName").value.trim();
  const ticketImgUrl = document.getElementById("ticketImgUrl").value.trim();
  const ticketRegion = document.getElementById("ticketRegion").value;
  const ticketPrice = document.getElementById("ticketPrice").value;
  const ticketNum = document.getElementById("ticketNum").value;
  const ticketRate = document.getElementById("ticketRate").value;
  const ticketDescription = document
    .getElementById("ticketDescription")
    .value.trim();

  if (
    !ticketName ||
    !ticketImgUrl ||
    !ticketRegion ||
    !ticketPrice ||
    !ticketNum ||
    !ticketRate ||
    !ticketDescription
  ) {
    alert("所有欄位皆為必填，請確認填寫完整！");
    return;
  }
  if (ticketRate < 1 || ticketRate > 10) {
    alert("套票星級應在 1 到 10 之間");
    return;
  }

  // 新增資料
  const newTicket = {
    id: data.length,
    name: ticketName,
    imgUrl: ticketImgUrl,
    area: ticketRegion,
    description: ticketDescription,
    group: parseInt(ticketNum, 10),
    price: parseInt(ticketPrice, 10),
    rate: parseInt(ticketRate, 10),
  };
  data.push(newTicket);

  // 新增套票後重置篩選欄位為「全部地區」並重新渲染資料
  regionSearch.value = "";
  renderData(data);
  renderChart(data); // 更新 Donut 圖以顯示新增的資料

  // 重設表單
  document.querySelector(".addTicket-form").reset();
});
