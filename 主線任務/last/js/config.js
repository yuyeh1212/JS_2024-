const baseUrl = "https://livejs-api.hexschool.io";
const apiPath = "yuyeh";

// 前台
const customerApi = `${baseUrl}/api/livejs/v1/customer/${apiPath}`;

// 後台
const token = "liq5zXLAuxSIyKPV3qUVUaTWXn42";
const adminApi = `${baseUrl}/api/livejs/v1/admin/${apiPath}`;
const headers = {
    headers: {
      authorization: token,
    },
  }

// 導出需要的變數
module.exports = { customerApi, adminApi, token };