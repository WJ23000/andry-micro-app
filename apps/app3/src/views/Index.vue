<template lang="pug">
	div.app3.p4
		div app3应用在微前端环境中...
		div.mt4.red.f2 应用数据通信：
		div.ml4.mt2 接收app2设置的全局数据：{{ globalData.app2 }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App3 extends Vue {
	globalData = "";

  created() {
		if (window.__MICRO_APP_ENVIRONMENT__) {
			console.log("app3在微前端环境中");
		}
		const data = window.microApp.getGlobalData(); // 返回全局数据
		console.log("全局数据", data);
		this.globalData = data;
	}
}
</script>

<style lang="stylus" scoped>
</style>
