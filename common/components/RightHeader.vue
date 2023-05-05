<!--
  右侧内容区域Header
-->
<template lang="pug">
  div.right-header
    div.header.flex.justify-between
      div.f3 {{ actionContent.title }}{{ showCount ? `（${actionContent.totalCount}）`: "" }}
      slot(name="action-bar")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class RightHeader extends Vue {
  @Prop()
  actionContent: any;
  @Prop({ default: true })
  showCount!: boolean;
}
</script>

<style lang="stylus" scoped>
.right-header {
  .header {
    height: 32px;
    padding-bottom: 16px;
  }
}
</style>
