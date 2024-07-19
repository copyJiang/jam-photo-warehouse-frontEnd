"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(lumpBtn)();
}
const lumpBtn = () => "../../../components/lumpBtn.js";
const _sfc_main = {
  __name: "btnForm",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          bgColor: "#8ab0ff",
          openType: "share"
        }),
        b: common_vendor.p({
          bgColor: "#65c965"
        }),
        c: common_vendor.p({
          bgColor: "#9b0b8d"
        }),
        d: common_vendor.p({
          bgColor: "#10aeef",
          height: "160"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-971538e1"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/home/components/btnForm.vue"]]);
wx.createComponent(Component);
