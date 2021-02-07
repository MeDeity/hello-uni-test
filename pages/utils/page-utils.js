export default {
	/**
	 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
	 * @param pagePath
	 * @param params
	 */
	navigateTo(pagePath, params){
	  if (params) {
	    const paramObj = new URLSearchParams()
	    for (const key in params) {
	      paramObj.append(key, params[key])
	    }
	    pagePath = pagePath + '?' + paramObj.toString()
	  }
	  uni.navigateTo({ url: pagePath })
	},
	/**
	 * mescroll测试
	 */
	navigateToMescroll(){
		this.navigateTo("/pages/test/mescroll-page")
	},
	/**
	 * 跳转到iconfont图标测试页
	 */
	navigateToIconFont(){
		this.navigateTo("/pages/test/test-iconfont-page")
	}
	
}