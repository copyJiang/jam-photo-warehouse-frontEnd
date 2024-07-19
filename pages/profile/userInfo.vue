<script setup></script>
<template>
	<view class="container">
		<view class="list">
			<view class="list-cell">
				<view class="cell">
					<view class="cell-label">
						头像
					</view>
					<view class="cell-value">
						<image class="image" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
							mode="">
						</image>
					</view>
				</view>
				<view class="cell">
					<view class="cell-label">
						昵称
					</view>
					<view class="cell-value">
						王杰
					</view>
				</view>
				<view class="cell">
					<view class="cell-label">
						性别
					</view>
					<view class="cell-value">
						未知
					</view>
				</view>
				<view class="cell">
					<view class="cell-label">
						手机号
					</view>
					<view class="cell-value">
						19857169196
					</view>
				</view>
			</view>

		</view>
		<view class="btn">
			<button type="default">保存信息</button>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.container {
		background-color: #f2f2f2;
		padding: 32rpx;
		box-sizing: border-box;

		.list {
			// height: 100%;
			border-radius: 8rpx;
			width: 100%;
			background-color: #fff;

			&-cell {
				padding: 24rpx;

				.cell {
					min-height: 60rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 16rpx 0;
					border-bottom: 1rpx solid #eee;

					&-label {
						color: #333333;
					}

					&-value {
						color: #acacac;

						.image {
							width: 96rpx;
							height: 96rpx;
							display: inline-block;
							border-radius: 50%;
							border: 1px solid #333;
						}
					}
				}
			}
		}

		.btn {
			margin: 40rpx 0;
		}
	}
</style>