"use strict";
const common_vendor = require("../common/vendor.js");
const baseUrl = "http://localhost:3000";
const axiosInstance = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + options.url,
      method: options.method,
      data: options.data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
};
exports.axiosInstance = axiosInstance;
