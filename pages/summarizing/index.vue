<script setup>
import { ref } from "vue";
import summarizingItem from "./components/summarizingItem.vue";
import { onPullDownRefresh, onReachBottom, onLoad } from "@dcloudio/uni-app";
const data = ref();
const page = ref(1);
const pageSize = ref(10);
const base = [
  {
    bg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
  {
    bg: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    title: "威海双日游，看日出日落",
    departure: "杭州",
    destination: "威海",
    startData: "2021-09-15",
    endData: "2021-09-30",
    memberNum: 3,
    tag: "端午游",
  },
];
onReachBottom(() => {
  console.log("上拉加载");
  getData(false);
});
onPullDownRefresh(() => {
  //调用获取数据方法
  getData(true);
  setTimeout(() => {
    //结束下拉刷新
    uni.stopPullDownRefresh();
  }, 1000);
});
function getData(refresh = false) {
  uni.showLoading({
    title: "加载中",
  });
  if (refresh) {
    page.value = 1;
    data.value = [];
  }
  setTimeout(() => {
    data.value = data.value.concat(base);
    page.value += 1;
    uni.hideLoading();
  }, 1000);
}

onLoad(() => {
  data.value = base;
});
</script>

<template>
  <view class="container">
    <view class="summarizing">
      <view v-for="(item, index) in data" :key="item.title + index">
        <summarizing-item :data="item" />
      </view>
    </view>
  </view>
</template>


<style lang="scss" scoped>
.container {
  //   padding: 24rpx 32rpx;

  .summarizing {
    padding-bottom: var(--window-bottom);
    background-color: #fff;
    // height: 100%;
    // width: 100%;
    width: calc(100% - 64rpx);
    // height: calc(100% - 48rpx);
    padding: 0 32rpx var(--window-bottom) 32rpx;

    // background-color: #f2f2f2;
    &-item {
    }
  }
}
</style>