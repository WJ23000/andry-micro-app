<template lang="pug">
  div.app-3
    h2 子应用3
    micro-app(name='app3' url='http://an.local-dev.andry.com:5210/app3/#/' baseroute='/app3')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import microApp from "@micro-zoe/micro-app";

@Component({
	components: {}
})
export default class App3 extends Vue {
	created() {
		console.log("app3元素被创建");
		// setGlobalData只接受对象作为参数
    microApp.setGlobalData({ baseData: "基座提供的全局数据" });
	}

	beforemount() {
		console.log("app3即将被渲染");
	}

	mounted() {
		console.log("app3已经渲染完成");
	}

	unmount() {
		console.log("app3已经卸载");
	}

	error() {
		console.log("app3渲染出错");
	}
}
</script>

<style lang="stylus" scoped>
.app-3 {
  height: 100%;
}
</style>