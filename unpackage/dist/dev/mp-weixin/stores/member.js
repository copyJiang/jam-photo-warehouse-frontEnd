"use strict";
const common_vendor = require("../common/vendor.js");
const useMemberStore = common_vendor.defineStore("member", () => {
  const member = common_vendor.ref({});
  const isLogin = common_vendor.computed(() => Object.keys(member.value).length > 0);
  const setMember = (data) => {
    member.value = data;
    console.log(member.value);
  };
  return {
    member,
    isLogin,
    setMember
  };
});
exports.useMemberStore = useMemberStore;
