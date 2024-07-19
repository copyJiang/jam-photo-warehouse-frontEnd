"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "summarizingItem",
  props: {
    data: {
      required: true,
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const data = common_vendor.computed(() => {
      return props.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(data.value.title),
        b: common_vendor.t(data.value.tag),
        c: common_vendor.t(data.value.departure),
        d: common_vendor.t(data.value.destination),
        e: common_vendor.t(data.value.startData),
        f: common_vendor.t(data.value.endData),
        g: common_vendor.t(data.value.memberNum),
        h: data.value.bg
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d8982a74"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/summarizing/components/summarizingItem.vue"]]);
wx.createComponent(Component);
