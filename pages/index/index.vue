<template>
	<view class="flex-col-cross-center flex-fill">
			<text class="text-color" @click="testIconfont">测试iconfont图标</text>
			<text class="text-color" @click="testMescroll">测试mescroll</text>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			testMescroll: function(){
				this.$pageUtils.navigateToMescroll();
			},
			testIconfont: function(){
				this.$pageUtils.navigateToIconFont();
			}
		}
	}
</script>

<style>
.text-color {
	color: #007AFF;
	background-color: #C0C0C0;
}
</style>
