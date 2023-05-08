<template lang="pug">
div.app-1
    h2 子应用1
    //- data只接受对象类型，数据变化时会重新发送
    micro-app(
	  name='app1'
	  url='http://an.local-dev.andry.com:5210/app1/#/'
	  baseroute='/app1'
	  :data='dataForChild')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App1 extends Vue {
	dataForChild = { data: "app1需要的数据" };

	created() {
		console.log("app1元素被创建");
	}

	beforemount() {
		console.log("app1即将被渲染");
	}

	mounted() {
		console.log("app1已经渲染完成");
	}

	unmount() {
		console.log("app1已经卸载");
	}

	error() {
		console.log("app1渲染出错");
	}
}
</script>

<style lang="stylus" scoped>
.app-1 {
  height: 100%;
}
</style>
