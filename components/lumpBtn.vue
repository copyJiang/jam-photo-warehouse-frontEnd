<script setup>
	import {
		defineProps,
		computed
	} from "vue";
	const props = defineProps({
		width: {
			type: [String, Number],
			default: "100%",
		},
		height: {
			type: [String, Number],
			default: "120",
		},
		bgColor: {
			type: String,
			default: "#10aeef",
		},
		openType: {
			type: String,
			default: "",
		},
	});

	function judge(val) {
		const value = val + "";
		if (isNaN(+value)) {
			return value;
		} else {
			return value + "rpx";
		}
	}
	const styles = computed(() => {
		return {
			width: judge(props.width),
			height: judge(props.height),
			"--btn-color": props.bgColor,
		};
	});
</script>
<template>
	<view class="lump-btn" :style="styles">
		<button :open-type="openType" class="lump-item" hover-class="is-hover">
			<slot></slot>
		</button>
	</view>
</template>

<style lang="scss" scoped>
	.lump-btn {
		border-radius: 8rpx;

		.lump-item {
			background-color: var(--btn-color);
			width: 100%;
			height: 100%;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;
		}

		.is-hover {
			background-color: var(--btn-color);
			opacity: 0.8;
		}
	}
</style>