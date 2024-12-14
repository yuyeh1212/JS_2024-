// 連結:https://codepen.io/yuyeh1212/pen/VwoOOVP

console.clear();

const baseURL = "https://livejs-api.hexschool.io";
const apiPath = "yuyeh";
const customerApi = `${baseURL}/api/livejs/v1/customer/${apiPath}`;

let productData = [];

function getProduct() {
  axios
    .get(`${customerApi}/products`)
    .then((res) => {
      console.log(res.data.products);
      productData = res.data.products;
      renderProduct();
    })
    .catch((err) => console.log(err));
}

const productList = document.querySelector(".productList");

function renderProduct() {
  let str = "";
  productData.forEach((item) => {
    str += `<div class="col-6 mb-3">
      <div class="card">
        <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
          <p class="card-text"><strong>種類:</strong> ${item.category}</p>
          <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
          <p class="card-text"><strong>售價:</strong> ${item.price}</p>
          <p class="card-text"><strong>描述:</strong> ${item.description}</p>
        </div>
      </div>
    </div>`;
  });
  productList.innerHTML = str;
}

function init(){
  getProduct();
}

init();