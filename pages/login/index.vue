<script setup>
	import {
		loginInWx
	} from "../../api/login";
	import {
		useMemberStore
	} from "@/stores/member";
	import {
		storeToRefs
	} from "pinia";
	const {
		setMember
	} = useMemberStore();

	function loginIn() {
		console.log(
			"%c [  ]-4",
			"font-size:13px; background:pink; color:#bf2c9f;",
			"登录"
		);
	}

	function loginByWx() {}

	function getUserInfo(e) {
		const {
			errMsg,
			userInfo
		} = e.detail;
		if (errMsg !== "getUserInfo:ok") {
			uni.showModal({
				title: "提示",
				content: "您取消了授权登录，请重新授权",
				showCancel: false,
			});

			setMember(Member);
			uni.navigateBack();

			return;
		} else {
			uni.showLoading({
				title: "加载中",
				success() {
					uni.login({
						provider: 'weixin', //使用微信登录
						success(res) {
							console.log(res.code)
							loginInWx({
								code: res.code
							}).then(res => {
								console.log(res);
							})
							// uni.request({
							// 	url: 'http://localhost:3000/user/token',
							// 	method: "POST",
							// 	data: {
							// 		code: res.code
							// 	},
							// 	success(res) {
							// 		console.log(res);
							// 		if (res.data.status) {

							// 		}
							// 	}
							// })
						}
					})
					// const {
					//   avatarUrl: avatar,
					//   city,
					//   country,
					//   gender,
					//   nickName: nickname,
					//   province,
					// } = userInfo;
					// const member = Object.assign(Member, {
					//   avatar,
					//   city,
					//   country,
					//   gender,
					//   nickname,
					//   province,
					// });
					// setMember(member);
					// uni.navigateBack();
				},
			});
		}
	}
</script>
<template>
	<view class="container">
		<view class="container-bg" />
		<view class="login-section">
			<view class="section bg-white">
				<form @submit="loginIn">
					<view class="form-item">
						<input class="uni-input" name="input" placeholder="请输入手机号码" />
					</view>
					<view class="form-item">
						<input class="uni-input" name="input" placeholder="请输入手机验证码" />
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
			<button type="default" class="margin-b-16" open-type="getUserInfo" @getuserinfo="getUserInfo">
				微信快捷登录
			</button>
			<button type="default" class="margin-b-16">游客</button>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.container {
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
	}
</style>