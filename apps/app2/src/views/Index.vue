<template lang="pug">
  div.app2
    div 子应用主体2
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
		window.microApp.dispatch({data: '基座需要的数据'})
		window.microApp.setGlobalData({data: 'app2提供的全局数据'})
	}
}
</script>

<style lang="stylus" scoped>
</style>
