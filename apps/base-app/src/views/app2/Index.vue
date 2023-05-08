<template lang="pug">
  div.app-2
    h2 子应用2
    micro-app(
      name='app2' 
      url='http://an.local-dev.andry.com:5210/app2/#/' 
      baseroute='/app2'
      @datachange='handleDataChange')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import microApp from "@micro-zoe/micro-app";

@Component({
	components: {}
})
export default class App2 extends Vue {
	created() {
		console.log("app2元素被创建");
		const globalData = microApp.getGlobalData(); // 返回全局数据
    console.log("全局数据", globalData);
		
	}

	beforemount() {
		console.log("app2即将被渲染");
	}

	mounted() {
		console.log("app2已经渲染完成");
	}

	unmount() {
		console.log("app2已经卸载");
	}

	error() {
		console.log("app2渲染出错");
  }
  
  handleDataChange (e) {
    console.log('来自于app2子应用：', e.detail.data)
  }
}
</script>

<style lang="stylus" scoped>
.app-2 {
  height: 100%;
}
</style>