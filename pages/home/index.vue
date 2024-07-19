<script setup>
import btnForm from "./components/btnForm.vue";
</script>
<template>
  <view class="container">
    <view class="container-header">
      <view class="title">旅途助手</view>
      <view class="descript">
        <text class="descript-item">稳定好用，免费的</text>
        <text class="descript-item">旅途记录小程序</text>
      </view>
      <image
        class="header-iamge"
        mode="heightFix"
        src="@/static/images/home/bugDuck.png"
      ></image>
    </view>
    <view class="container-btns">
      <btn-form />
    </view>
    <!-- <lumpBtn width="360" height="200">立即记录</lumpBtn> -->
  </view>
</template>
<style lang="scss" scoped>
.container {
  padding: 24rpx 32rpx;
  width: calc(100% - 64rpx);
  height: calc(100% - 48rpx);
  &-header {
    height: 300rpx;
    width: 100%;
    position: relative;

    .title {
      height: 120rpx;
      letter-spacing: 10rpx;
      display: flex;
      align-items: center;
      font-size: 64rpx;
      font-weight: bold;
    }
    .descript {
      height: 148rpx;
      align-items: center;
      padding: 16rpx 0;
      //   line-height: 180rpx;
      &-item {
        display: block;
        margin: 16rpx 0;
        color: #666;
      }
    }
    .header-iamge {
      position: absolute;
      right: 0;
      top: 0;
      height: 300rpx;
    }
  }
}
</style>