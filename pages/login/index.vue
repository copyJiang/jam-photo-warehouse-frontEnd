<script setup>
import { ref } from "vue";
import { loginInWx } from "@/api/login";
import { Member } from "./data";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const { setMember } = useMemberStore();

const isAgree = ref(false);

function loginIn() {
  setMember(Member);
  uni.navigateBack();
}

function getUserInfo(e) {
  if (isAgree) {
    uni.showToast({
      title: "请阅读并勾选协议",
      icon: "error",
      mask: true,
    });
    return;
  }
  const { errMsg, userInfo } = e.detail;
  if (errMsg !== "getUserInfo:ok") {
    uni.showModal({
      title: "提示",
      content: "您取消了授权登录，请重新授权",
      showCancel: false,
    });

    setMember({});
    uni.navigateBack();
    return;
  } else {
    uni.showLoading({
      title: "加载中",
      success() {
        uni.login({
          provider: "weixin", //使用微信登录
          success(res) {
            loginInWx({
              code: res.code,
            }).then((res) => {
              console.log(res);
              if (res.status) {
                const {
                  avatarUrl: avatar,
                  city,
                  country,
                  gender: sex,
                  nickName,
                  province,
                } = userInfo;
                const member = Object.assign(Member, {
                  avatar,
                  city,
                  country,
                  sex,
                  nickName,
                  province,
                });
                setMember(member);
                uni.navigateBack();
              }
            });
          },
        });
      },
    });
  }
}

function loginByTourist() {
  setMember({});
  uni.navigateBack();
}

function callPhone(val) {
  uni.makePhoneCall({
    phoneNumber: val,
  });
}

function clickUserAgreement() {
  uni.navigateTo({
    url: "/pages/login/userAgreement",
  });
}
</script>
<template>
  <view class="container">
    <view class="container-bg" />
    <view class="login-section">
      <view class="section bg-white">
        <form @submit="loginIn">
          <view class="form-item">
            <input
              class="uni-input"
              name="input"
              placeholder="请输入手机号码"
            />
          </view>
          <view class="form-item">
            <input
              class="uni-input"
              name="input"
              placeholder="请输入手机验证码"
            />
            <view class="form-item-btn">
              <button size="mini" plain>获取验证码</button>
            </view>
          </view>
        </form>
      </view>
    </view>
    <view class="btn-list">
      <button type="default" class="margin-b-16" @tap="loginIn">
        登录/注册
      </button>
      <!-- #ifdef MP-WEIXIN -->
      <button
        type="default"
        class="margin-b-16"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >
        微信快捷登录
      </button>
      <!-- #endif -->
      <button type="default" class="margin-b-16" @tap="loginByTourist">
        游客
      </button>
    </view>
    <view class="check-word">
      <checkbox
        style="transform: scale(0.8)"
        activeBackgroundColor="#a784cc"
        color="#fff"
        :checked="isAgree"
      />
      <view class=""> 已阅读并同意 </view>
      <view class="check-word-name" @tap="clickUserAgreement">
        《用户协议》
      </view>
    </view>
    <view class="bottom-word">
      <view class=""> 客服热线： </view>
      <view class="phone" @tap="callPhone('18368609824')"> 18368609824 </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.container {
  position: relative;

  &-bg {
    height: 400rpx;
    width: 100%;
    background-color: rgba($color: $primary-color, $alpha: 0.25);
  }

  .login-section {
    padding: 0 30rpx;
    margin-bottom: 48rpx;

    .section {
      width: 100%;
      height: 180rpx;
      position: relative;
      margin-top: -100rpx;
      border-radius: 12rpx;
      box-shadow: $box-shadow;
      overflow: hidden;

      .form-item {
        height: calc(50% - 16rpx);
        padding: 8rpx 0;
        margin: 0 32rpx;
        position: relative;

        &-btn {
          position: absolute;
          right: 0;
          top: 16rpx;
        }

        &:first-child {
          border-bottom: 1rpx solid #ccc;
        }
      }
    }
  }

  .btn-list {
    margin: 24rpx;
  }

  .check-word {
    margin: 64rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;

    &-name {
      color: rgba($color: $primary-color, $alpha: 0.75);
    }

    ::v-deep .uni-checkbox-input {
      border-radius: 50%;
    }

    // ::v-deep .checkbox {
    // 	border-radius: 50%;
    // }
  }

  .bottom-word {
    font-size: 28rpx;
    color: #808080;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40rpx;
    left: 50%;
    transform: translate(-50%, -0);

    .phone {
      color: rgba($color: $primary-color, $alpha: 0.75);
    }
  }
}
</style>