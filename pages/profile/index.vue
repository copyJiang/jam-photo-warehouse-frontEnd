<template>
	<main>
		<section class="login-section" @click="clickLogin">
			<div class="profile"></div>
			<div type="text">请点击登录</div>
		</section>
		<section class="login-section" @click="changeUserInfo"> 修改用户信息</section>
		<section class="login-section" @click="getUserInfo"> 获取用户信息</section>
	</main>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const token = ref('')

	function clickLogin() {
		console.log('--------------------------登录')
		uni.login({
			provider: 'weixin',
			success: function(loginRes) {
				console.log(loginRes.code);
				uni.request({
					url: 'http://localhost:3000/user/token',
					method: 'POST',
					data: {
						code: loginRes.code
					},
					success: (res) => {
						token.value = res.data.data
						console.log(res);
					}
				})
			}
		});
	}

	function changeUserInfo() {
		uni.request({
			url: 'http://localhost:3000/user/info',
			method: 'PUT',
			data: {
				nickName: '昵称',
				sex: '2',
				avatar: '',
				tel: '18368609824',
				country: 'CNA',
				province: '浙江',
				city: '杭州'
			},
			header: {
				'refresh-token': token.value
			},
			success: (res) => {
				console.log(res)
			}
		})
	}

	function getUserInfo() {
		uni.request({
			url: 'http://localhost:3000/user/info',
			method: 'GET',
			header: {
				'refresh-token': token.value
			},
			success: (res) => {
				console.log(res)
			}
		})
	}
</script>

<style lang="scss">
	.login-section {
		height: 300rpx;
		background-color: #eee;
		display: flex;
		align-items: center;
		padding: 0 80rpx;

		.profile {
			width: 100rpx;
			height: 100rpx;
			background-color: #ccc;
			margin-right: 20rpx;
			border-radius: 50%;
		}
	}
</style>