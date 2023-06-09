<template lang="pug">
	div.navigation-menu(@click.stop)
		a-layout-sider(
			theme="light", 
			v-model="collapsed", 
			:trigger="null", 
			collapsible)
			a-menu(
				:inlineIndent="inlineIndent",
				:defaultSelectedKeys="[$route.path]",
				:openKeys="openKeys",
				mode="inline",
				:inline-collapsed="collapsed",
				@openChange="onOpenChange",
				@click="menuClick")
				template(v-for="item in menuList")
					a-menu-item(v-if="!item.children", :key="item.path")
						a-icon(v-if="item.icon", :type="item.icon")
						span {{ item.title }}
					Sider(v-else, :key="item.path", :menuInfo="item")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Sider from "./components/Sider.vue";

@Component({
	components: {
		Sider
	}
})
export default class NavigationMenu extends Vue {
	@Prop()
	menuList;

	// 菜单缩进
	inlineIndent = 22;
	// 默认不折叠
	collapsed = false;
	// 全部顶级父节点,用来控制所有父级菜单只展开其中的一项，可用遍历菜单信息进行赋值
	rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub5"];
	// 展开的父菜单项
	openKeys: string[] = [];
	// 选中的子菜单项
	defaultSelectedKeys = [];

	created() {
		// 将从缓存中取出openKeys
		const openKeys = window.sessionStorage.getItem("openKeys");
		if (openKeys) {
			// 存在即赋值
			this.openKeys = JSON.parse(openKeys);
		}
	}

	// 点击菜单，路由跳转,注意的是当点击MenuItem才会触发此函数
	menuClick({ item, key, keyPath }) {
		if (key !== this.$route.path) {
			// 获取到当前的key,并且跳转
			this.$router.push({
				path: key
			});
		}
	}

	onOpenChange(openKeys) {
		console.log("触发了不", openKeys);
		window.sessionStorage.setItem(
			"openKeys",
			JSON.stringify(openKeys.slice(-1))
		);
		//  控制只打开一个
		const latestOpenKey = openKeys.find(
			key => this.openKeys.indexOf(key) === -1
		);
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.openKeys = openKeys;
		} else {
			this.openKeys = latestOpenKey ? [latestOpenKey] : [];
		}
	}
}
</script>

<style lang="stylus" scoped>
.navigation-menu {
  background: #ffffff;

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #f6f7fb;
  }

  .ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after {
    left: 0;
    border-left: 4px solid #1890ff;
    border-right: 0px;
  }
}
</style>
