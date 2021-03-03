<template>
	<view class="height-200px width-100p flex-col">
		  <view class="width-50p">
		  	<!--顶部信息-->
		  	<view class="flex-col user-image-box" :style="{'height':imageHeight+'px'}"> 
		  		 <!--标签--> 
					 <image style="z-index: 10;" src="../../static/logo.png" mode="aspectFill">
						 
					 </image>
					 <view>
							<view class="margin-right-10px margin-top-10px">右侧标签</view>
							<view class="flex-row-between" style="position: absolute; bottom: 0px;">
									<view class="flex-row margin-left-10px margin-right-10px">
										<view>内容1</view>
										<view>内容2</view>
									</view>
									<view class="margin-left-10px margin-right-10px">右下角标签</view>
							</view>
					 </view>
		  	</view>
		  	<!--底部信息-->
		  	<view class="flex-col">
		  		 <view>很长很长的文字</view>
		  		 <view class="flex-row">
		  			 <view>标签1</view>
		  			 <view>标签2</view>
		  			 <view>标签3</view>
		  		 </view>
		  	</view>
		  </view>
	</view>
</template>

<script>
export default {
	 data(){
			return{
				imageHeight: 100
			}
	 }
}	
</script>

<style lang="scss">
	
	.user-image-box {
		background: url(../../static/logo.png) no-repeat center;
		background-size: 100% 100%;
		position: relative
	}
</style>
