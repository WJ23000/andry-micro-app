<template lang="pug">
  div.app3
    div 子应用主体3
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App3 extends Vue {
  created() {
		if (window.__MICRO_APP_ENVIRONMENT__) {
			console.log("app3在微前端环境中");
		}
		const globalData = window.microApp.getGlobalData(); // 返回全局数据
		console.log("全局数据", globalData);
	}
}
</script>

<style lang="stylus" scoped>
</style>
