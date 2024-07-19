"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  btnForm();
}
const btnForm = () => "./components/btnForm.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
