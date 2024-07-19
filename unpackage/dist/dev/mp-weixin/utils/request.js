"use strict";
const common_vendor = require("../common/vendor.js");
const utils_config = require("./config.js");
const request = (url = "", method = "GET", data = {}, header = {
  "token": common_vendor.index.getStorageSync("token") ? common_vendor.index.getStorageSync("token") : ""
}) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: utils_config.config.api() + url,
      //接口地址：前缀+方法中传入的地址
      method,
      //请求方法
      data,
      //传递参数
      header,
      //自定义头部，和后端商同后编写
      success: (res) => {
        console.log("request.js文件的通用接口请求封装返回的结果数据", res);
        if (res.data.code == "xxx") {
          common_vendor.index.removeStorageSync("token");
          common_vendor.index.showModal({
            showCancel: false,
            title: "温馨提示",
            content: res.data.msg,
            success: function(result) {
              if (result.confirm)
                ;
            }
          });
        }
        resolve(res.data);
      },
      // 这里的接口请求，如果出现问题就输出接口请求失败的msg；
      //注：因为这里对于请求失败的设置统一抛错提示了，所以后续具体组件中使用接口请求的catch中不需要再写抛错提示
      fail: (err) => {
        common_vendor.index.showToast({
          title: "" + err.msg,
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
exports.request = request;
