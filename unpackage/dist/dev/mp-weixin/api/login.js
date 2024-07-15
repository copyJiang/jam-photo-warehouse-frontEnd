"use strict";
const utils_request = require("../utils/request.js");
const loginInWx = (data) => {
  return utils_request.axiosInstance({
    url: "/user/token",
    method: "post",
    data
  });
};
exports.loginInWx = loginInWx;
