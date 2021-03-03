<template>
	<view class="flex-col-cross-center flex-fill">
			<text class="text-color" @click="testIconfont">测试iconfont图标</text>
			<text class="text-color" @click="testMescroll">测试mescroll</text>
			<text class="text-color" @click="testUI">布局测试</text>
			<text class="text-color" @click="testSearchPage">搜索模板集成</text>
			<tag-search style="width: 100%;" 
				:tags="selectTags" :is-add="true" :select-tags="selectTags" @change="changeTag"
			   @close="closeTagSearch"
			   @delete-tag="deleteTag" @add-tag="showAddTag">
			</tag-search>
	</view>
</template>

<script>
	import TagSearch from '@/pages/index/tag-search.vue'
	export default {
		components:{
			TagSearch
		},
		data() {
			return {
				selectTags:[]
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
			},
			testUI:function(){
				this.$pageUtils.navigateToUI();
			},
			testSearchPage:function(){
				this.$pageUtils.navigateToSearchPage();
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
