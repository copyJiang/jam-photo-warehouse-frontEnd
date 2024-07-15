"use strict";
const common_vendor = require("../common/vendor.js");
const useMemberStore = common_vendor.defineStore("member", () => {
  const member = common_vendor.ref({
    // "storeId": null,
    // "mobilePhone": "18666600000",
    // "nickname": "tinypuppet",
    // "avatar": "/static/images/mine/default.png",
    // "country": "",
    // "cardName": "V2",
    // "memberLevel": 2,
    // "city": "",
    // "cardNo": "39390020696322222",
    // "openingCardDate": "2018-10-20 15:10:10",
    // "customerId": "343400246943295100",
    // "district": null,
    // "unionId": "",
    // "address": null,
    // "storeName": null,
    // "gender": 1,
    // "province": "",
    // "memberOrigin": "wechat",
    // "username": "吕璟坤",
    // "memberLevelName": "VIP2",
    // "birthday": "",
    // "pointNum": 413,
    // "couponNum": 6,
    // "rechargeBalance": null,
    // "balance": 0,
    // "giftBalance": 0,
    // "expenseAmount": null,
    // "conditionType": 3,
    // "ruleList": null,
    // "expiredTime": null,
    // "currentValue": 410,
    // "level": 2,
    // "cardUrl": "https://images.qmai.cn/s33123/2020/01/20/fd13fff0e873b8c06d.jpg",
    // "needValue": 90,
    // "cardName": "V2",
    // "max": false
  });
  const isLogin = common_vendor.computed(
    () => Object.keys(member.value).length > 0
  );
  const setMember = (data) => {
    member.value = data;
  };
  return {
    member,
    isLogin,
    setMember
  };
});
exports.useMemberStore = useMemberStore;
