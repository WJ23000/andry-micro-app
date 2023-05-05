<template lang="pug">
  div.page-outline.flex.column
    Header
    a-config-provider(:locale="locale")
      router-view.w100
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import Header from "./components/Header.vue";

@Component({
	components: {
		Header
	}
})
export default class Home extends Vue {
	locale = zhCN;
}
</script>

<style lang="stylus" scoped>
.page-outline
  height: 100%;
  min-width: 1280px;
</style>
