<script setup>
	import lumpBtn from "@/components/lumpBtn";
</script>

<template>
	<view class="btn-form">
		<view class="btn-form--left">
			<lump-btn class="left-btn" bgColor="#8ab0ff" openType="share">推荐好友</lump-btn>
			<lump-btn class="left-btn" bgColor="#65c965">联系客服</lump-btn>
			<lump-btn class="left-btn" bgColor="#9b0b8d">使用教程</lump-btn>
		</view>
		<view class="btn-form--right">
			<view class="right-content">
				<view class="right-content-item">风景记录</view>
				<view class="right-content-item">图片留痕</view>
				<view class="right-content-item">地点选择</view>
				<view class="right-content-item">文字感受</view>
				<view class="right-content-item">其他功能</view>
			</view>
			<lump-btn bgColor="#10aeef" height="160">立即记录</lump-btn>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.btn-form {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;

		&--left {
			width: 40%;

			.left-btn {
				margin-bottom: 24rpx;
				display: block;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&--right {
			.right-content {
				height: calc(100% - 160rpx - 24rpx);
				margin-bottom: 24rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&-item {
					width: 44%;
					display: flex;
					align-items: center;
					color: #10aeef;
					font-size: 28rpx;

					&::before {
						content: "";
						display: block;
						width: 10rpx;
						height: 10rpx;
						background-color: #10aeef;
						margin-right: 8rpx;
					}
				}
			}

			width: 55%;
		}
	}
</style>