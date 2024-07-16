<script setup>
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const { setMember } = useMemberStore();
const memberStore = storeToRefs(useMemberStore());
const member = memberStore.member;
const isLogin = memberStore.isLogin;

function login() {
  uni.navigateTo({
    url: "/pages/login/index",
  });
}
// 退出登录
function logout() {
  uni.showModal({
    title: "提示",
    content: "请确认是否退出登录",
    success: function (res) {
      if (res.confirm) {
        setMember({});
      } else if (res.cancel) {
      }
    },
  });
}
// 点击头像进入用户信息
function clickUserInfo() {
  uni.navigateTo({
    url: "/pages/login/userInfo",
  });
}
</script>

<template>
  <view class="container">
    <view class="container-bg"> </view>
    <view class="block">
      <view class="bg-white user-box">
        <view class="user-show d-flex align-items-center">
          <image
            class="avatar"
            :src="
              isLogin
                ? member.avatar
                : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
            "
          />
          <view v-if="!isLogin" @tap="login">请点击授权登录</view>
          <view v-else @tap="clickUserInfo">{{ member.nickName }}</view>
        </view>
        <view
          v-if="isLogin"
          class="user-welcome d-flex align-items-center justify-content-center"
          >欢迎回来~</view
        >
      </view>
    </view>
    <view class="container-btn">
      <button v-if="isLogin" type="default" @tap="logout">退出登录</button>
    </view>
  </view>
</template>


<style lang="scss" scoped>
.container {
  overflow: auto;

  &-bg {
    height: 400rpx;
    width: 100%;
    background-color: rgba($color: $primary-color, $alpha: 0.25);
  }

  .block {
    padding: 0 30rpx;

    .user-box {
      height: 280rpx;
      border-radius: 8rpx;
      position: relative;
      margin-top: -180rpx;
      box-shadow: $box-shadow;

      .user-show {
        padding: 0 40rpx;
        height: 120rpx;

        .avatar {
          height: 96rpx;
          width: 96rpx;
          margin-right: 40rpx;
        }
      }

      .user-welcome {
        height: 160rpx;
        font-size: 48rpx;
      }
    }
  }

  &-btn {
    margin: 40rpx;
  }
}
</style>