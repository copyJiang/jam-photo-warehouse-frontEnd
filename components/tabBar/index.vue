<template>
  <view class="tabbar-container">
    <block>
      <view
        class="tabbar-item"
        v-for="(item, index) in tabbarList"
        :class="[item.centerItem ? ' center-item' : '']"
        @click="changeItem(item)"
      >
        <view class="item-top">
          <image
            :src="currentItem == item.id ? item.selectIcon : item.icon"
          ></image>
        </view>
        <view
          class="item-bottom"
          :class="[currentItem == item.id ? 'item-active' : '']"
        >
          <text>{{ item.text }}</text>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentItem: 0,
      tabbarList: [
        {
          text: "记账",
          iconPath: "static/charge.png",
          selectedIconPath: "static/charge-active.png",
          pagePath: "pages/charge/index",
          id: 0,
          centerItem: false,
        },
        {
          text: "记事",
          iconPath: "static/matter.png",
          selectedIconPath: "static/matter-active.png",
          pagePath: "pages/matter/index",
          id: 1,
          centerItem: false,
        },
        {
          text: "新增",
          iconPath: "static/add.png",
          selectedIconPath: "static/add-active.png",
          pagePath: "pages/add/index",
          id: 2,
          centerItem: false,
        },
        {
          text: "统计",
          iconPath: "static/summarizing.png",
          selectedIconPath: "static/summarizing-active.png",
          pagePath: "pages/summarizing/index",
          id: 3,
          centerItem: false,
        },
        {
          text: "我的",
          iconPath: "static/profile.png",
          selectedIconPath: "static/profile-active.png",
          pagePath: "pages/profile/index",
          id: 4,
          centerItem: false,
        },
      ],
    };
  },
  mounted() {
    this.currentItem = this.currentPage;
    uni.hideTabBar();
  },
  methods: {
    changeItem(item) {
      let _this = this;
      //_this.currentItem = item.id;
      uni.switchTab({
        url: item.path,
      });
      console.log(item.path);
    },
  },
};
</script>
<style lang=”scss“ scoped>
view {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110rpx;
  /* box-shadow: 0 0 5px #999;  */
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  border-top: 1px;
  display: flex;
  align-items: center;
  padding: 5rpx 0;
  color: #999999;
  z-index: 200;
  background-color: #fff;
}

.tabbar-container .tabbar-item {
  width: 20%;
  height: 100rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.tabbar-container .item-active {
  color: #175cff;
}

.tabbar-container .center-item {
  display: block;
  position: relative;
}

.tabbar-container .tabbar-item .item-top {
  width: 70rpx;
  height: 70rpx;
  padding: 10rpx;
}

.tabbar-container .center-item .item-top {
  flex-shrink: 0;
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  top: -50rpx;
  left: calc(50% - 50rpx);
  border-radius: 50%;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  /* box-shadow: 0 0 5px #999;  */
  background-color: #ffffff;
}

.tabbar-container .tabbar-item .item-top image {
  width: 100%;
  height: 100%;
}

tabbar-container .tabbar-item:nth-child(3) .item-top image {
  background: #ff0000;
}

.tabbar-container .tabbar-item .item-bottom {
  font-size: 28rpx;
  width: 100%;
}

.tabbar-container .center-item .item-bottom {
  position: absolute;
  bottom: 5rpx;
}
</style>