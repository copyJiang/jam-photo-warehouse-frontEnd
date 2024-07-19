"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "lumpBtn",
  props: {
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: "120"
    },
    bgColor: {
      type: String,
      default: "#10aeef"
    },
    openType: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    function judge(val) {
      const value = val + "";
      if (isNaN(+value)) {
        return value;
      } else {
        return value + "rpx";
      }
    }
    const styles = common_vendor.computed(() => {
      return {
        width: judge(props.width),
        height: judge(props.height),
        "--btn-color": props.bgColor
      };
    });
    return (_ctx, _cache) => {
      return {
        a: __props.openType,
        b: common_vendor.s(styles.value)
      };
    };
  }
};
const lumpBtn = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eaae7672"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/components/lumpBtn.vue"]]);
exports.lumpBtn = lumpBtn;
