"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  summarizingItem();
}
const summarizingItem = () => "./components/summarizingItem.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const data = common_vendor.ref();
    const page = common_vendor.ref(1);
    common_vendor.ref(10);
    const base = [
      {
        bg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      },
      {
        bg: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        title: "威海双日游，看日出日落",
        departure: "杭州",
        destination: "威海",
        startData: "2021-09-15",
        endData: "2021-09-30",
        memberNum: 3,
        tag: "端午游"
      }
    ];
    common_vendor.onReachBottom(() => {
      console.log("上拉加载");
      getData(false);
    });
    common_vendor.onPullDownRefresh(() => {
      getData(true);
      setTimeout(() => {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    function getData(refresh = false) {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      if (refresh) {
        page.value = 1;
        data.value = [];
      }
      setTimeout(() => {
        data.value = data.value.concat(base);
        page.value += 1;
        common_vendor.index.hideLoading();
      }, 1e3);
    }
    common_vendor.onLoad(() => {
      data.value = base;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.value, (item, index, i0) => {
          return {
            a: "394bcf09-0-" + i0,
            b: common_vendor.p({
              data: item
            }),
            c: item.title + index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-394bcf09"], ["__file", "C:/Users/Administrator/Desktop/jiang-uni-demo/jam-photo-warehouse-frontEnd/pages/summarizing/index.vue"]]);
wx.createPage(MiniProgramPage);
