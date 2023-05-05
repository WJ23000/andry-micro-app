<template lang="pug">
  div.left-sider-outline.flex.row.flex1.align-start.w100
    a-layout.layout.h100
      NavigationMenu(:menuList="menuList")
      a-layout.layout
        a-layout-content.layout-content
          router-view
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { NavigationMenu } from "@/base/src/components";

@Component({
	components: {
		NavigationMenu
	}
})
export default class LeftSiderOutline extends Vue {
	baseMenuList = [
		{
			id: "app1",
			title: "子应用1",
			icon: "home",
			path: "/app1"
		},
		{
			id: "app2",
			title: "子应用2",
			icon: "home",
			path: "/app2"
		},
		{
			id: "app3",
			title: "子应用3",
			icon: "home",
			path: "/app3"
		}
	];

	// 根据功能划分初始化左侧菜单
	get menuList() {
		return this.baseMenuList;
	}
}
</script>

<style lang="stylus" scoped>
.left-sider-outline, .layout {
  background: #e8ecf0 !important;
}

.layout-content {
  margin: 20px 12px;
  height: 100%;
}
</style>
