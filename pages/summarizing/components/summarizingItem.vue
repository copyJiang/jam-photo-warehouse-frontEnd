<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  data: {
    required: true,
    type: Object,
    default: () => {},
  },
});
const data = computed(() => {
  return props.data;
});
</script>
<template>
  <view class="summarizing-item">
    <view class="summarizing-item-main">
      <view class="summarizing-item-main--title">
        <text class="title">{{ data.title }}</text>
        <view class="tag">{{ data.tag }}</view>
      </view>
      <view class="summarizing-item-main--place">
        <text>{{ data.departure }}</text>
        ->
        <text>{{ data.destination }}</text>
      </view>
      <view class="summarizing-item-main--place">
        <text>{{ data.startData }}</text>
        ->
        <text>{{ data.endData }}</text>
      </view>
      <view class="summarizing-item-main--place"> {{ data.memberNum }}人 </view>
    </view>
    <image class="summarizing-item-bg" :src="data.bg"></image>
  </view>
</template>

<style lang="scss" scoped>
.summarizing-item {
  height: 240rpx;
  width: calc(100% - 48rpx);
  margin-bottom: 36rpx;
  border-radius: 8rpx;
  position: relative;
  padding: 24rpx;
  &-bg {
    width: 100%;
    height: 100%;
    border-radius: 8rpx;
    opacity: 0.75;
    filter: blur(2rpx);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  &-main {
    z-index: 2;
    &--title {
      display: flex;
      align-items: center;
      .title {
        height: 60rpx;
        line-height: 60rpx;
        font-size: 36rpx;
        font-weight: 550;
        letter-spacing: 2rpx;
        color: #000;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 8rpx;
      }
      .tag {
        // width: 120rpx;
        height: 36rpx;
        font-size: 24rpx;
        line-height: 36rpx;
        padding: 4rpx 8rpx;
        border: 4rpx solid #333aaa;
        border-radius: 24rpx;
        max-width: calc(20% - 8rpx);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &--place {
      height: 60rpx;
      width: 100%;
      font-size: 28rpx;
      line-height: 60rpx;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>