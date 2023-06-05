<template lang="pug">
	div.app1.p4
		div app1应用在微前端环境中...
		div.mt4.red.f2 应用数据通信：
		div.ml4.mt2 接收基座传递过来的数据：{{ appData.data }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App1 extends Vue {
	appData = "";

	created() {
		if (window.__MICRO_APP_ENVIRONMENT__) {
			console.log("app1在微前端环境中");
		}
		const data = window.microApp.getData(); // 返回基座下发的data数据
		console.log("基座下发", data);
		this.appData = data;
	}
}
</script>

<style lang="stylus" scoped>
</style>
