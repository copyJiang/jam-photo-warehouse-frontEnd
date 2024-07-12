"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const token = common_vendor.ref("");
    function clickLogin() {
      console.log("--------------------------登录");
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          console.log(loginRes.code);
          common_vendor.index.request({
            url: "http://localhost:3000/user/token",
            method: "POST",
            data: {
              code: loginRes.code
            },
            success: (res) => {
              token.value = res.data.data;
              console.log(res);
            }
          });
        }
      });
    }
    function changeUserInfo() {
      common_vendor.index.request({
        url: "http://localhost:3000/user/info",
        method: "PUT",
        data: {
          nickName: "昵称",
          sex: "2",
          avatar: "",
          tel: "18368609824",
          country: "CNA",
          province: "浙江",
          city: "杭州"
        },
        header: {
          "refresh-token": token.value
        },
        success: (res) => {
          console.log(res);
        }
      });
    }
    function getUserInfo() {
      common_vendor.index.request({
        url: "http://localhost:3000/user/info",
        method: "GET",
        header: {
          "refresh-token": token.value
        },
        success: (res) => {
          console.log(res);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(clickLogin),
        b: common_vendor.o(changeUserInfo),
        c: common_vendor.o(getUserInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/profile/index.vue"]]);
wx.createPage(MiniProgramPage);
