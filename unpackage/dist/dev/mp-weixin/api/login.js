"use strict";
const utils_request = require("../utils/request.js");
const loginInWx = (data) => {
  return utils_request.request("/user/token", "POST", data, {});
};
exports.loginInWx = loginInWx;
