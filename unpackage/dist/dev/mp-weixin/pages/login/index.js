"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const stores_member = require("../../stores/member.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const {
      setMember
    } = stores_member.useMemberStore();
    function loginIn() {
      console.log(
        "%c [  ]-4",
        "font-size:13px; background:pink; color:#bf2c9f;",
        "登录"
      );
    }
    function getUserInfo(e) {
      const {
        errMsg,
        userInfo
      } = e.detail;
      if (errMsg !== "getUserInfo:ok") {
        common_vendor.index.showModal({
          title: "提示",
          content: "您取消了授权登录，请重新授权",
          showCancel: false
        });
        setMember(Member);
        common_vendor.index.navigateBack();
        return;
      } else {
        common_vendor.index.showLoading({
          title: "加载中",
          success() {
            common_vendor.index.login({
              provider: "weixin",
              //使用微信登录
              success(res) {
                console.log(res.code);
                api_login.loginInWx({
                  code: res.code
                }).then((res2) => {
                  console.log(res2);
                });
              }
            });
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(loginIn),
        b: common_vendor.o(loginIn),
        c: common_vendor.o(getUserInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
