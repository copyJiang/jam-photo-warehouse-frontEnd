"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const pages_login_data = require("./data.js");
const stores_member = require("../../stores/member.js");
require("../../utils/request.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const {
      setMember
    } = stores_member.useMemberStore();
    const isAgree = common_vendor.ref(false);
    function loginIn() {
      setMember(pages_login_data.Member);
      common_vendor.index.navigateBack();
    }
    function getUserInfo(e) {
      if (!isAgree.value) {
        common_vendor.index.showToast({
          title: "请阅读并勾选协议",
          icon: "error",
          mask: true
        });
        return;
      }
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
        setMember({});
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
                api_login.loginInWx({
                  code: res.code
                }).then((res2) => {
                  console.log(res2);
                  if (res2.status) {
                    const {
                      avatarUrl: avatar,
                      city,
                      country,
                      gender: sex,
                      nickName,
                      province
                    } = userInfo;
                    const member = Object.assign(pages_login_data.Member, {
                      avatar,
                      city,
                      country,
                      sex,
                      nickName,
                      province
                    });
                    setMember(member);
                    common_vendor.index.navigateBack();
                  }
                });
              }
            });
          }
        });
      }
    }
    function loginByTourist() {
      setMember({});
      common_vendor.index.navigateBack();
    }
    function callPhone(val) {
      common_vendor.index.makePhoneCall({
        phoneNumber: val
      });
    }
    function clickUserAgreement() {
      common_vendor.index.navigateTo({
        url: "/pages/login/userAgreement"
      });
    }
    function changeCheckBox() {
      isAgree.value = !isAgree.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(loginIn),
        b: common_vendor.o(loginIn),
        c: common_vendor.o(getUserInfo),
        d: common_vendor.o(loginByTourist),
        e: isAgree.value,
        f: common_vendor.o(changeCheckBox),
        g: common_vendor.o(clickUserAgreement),
        h: common_vendor.o(($event) => callPhone("18368609824"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
