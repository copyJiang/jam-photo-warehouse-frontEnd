"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_member = require("../../stores/member.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const memberStore = common_vendor.storeToRefs(stores_member.useMemberStore());
    const member = memberStore.member;
    const isLogin = memberStore.isLogin;
    function login() {
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isLogin) ? common_vendor.unref(member).avatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        b: !common_vendor.unref(isLogin)
      }, !common_vendor.unref(isLogin) ? {
        c: common_vendor.o(login)
      } : {
        d: common_vendor.t(common_vendor.unref(member).username)
      }, {
        e: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-201c0da5"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/profile/index.vue"]]);
wx.createPage(MiniProgramPage);
