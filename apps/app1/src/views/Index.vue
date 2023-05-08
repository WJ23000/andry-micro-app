<template lang="pug">
  div.app1
    div 子应用主体1
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App1 extends Vue {
	created() {
		if (window.__MICRO_APP_ENVIRONMENT__) {
			console.log("app1在微前端环境中");
		}
		const data = window.microApp.getData(); // 返回基座下发的data数据
		console.log("基座下发", data);
	}
}
</script>

<style lang="stylus" scoped>
</style>
