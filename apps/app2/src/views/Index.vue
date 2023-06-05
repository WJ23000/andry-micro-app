<template lang="pug">
	div.app2.p4
		div app2应用在微前端环境中...
		div.mt4.red.f2 应用数据通信：
		a-button.ml4.mt2(type="primary", @click="setGlobalData") app2设置全局数据
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App2 extends Vue {
  created() {
		if (window.__MICRO_APP_ENVIRONMENT__) {
			console.log("app2在微前端环境中");
		}
		window.microApp.dispatch({data: '基座需要的数据'});
		
	}

	setGlobalData() {
		window.microApp.setGlobalData({app2: '3.1415926'});
		this.$message.success("app2成功设置全局数据，请点击子应用3查看");
	}
 
}
</script>

<style lang="stylus" scoped>
</style>
