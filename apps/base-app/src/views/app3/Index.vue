<template lang="pug">
  div.app-3
    h2 子应用3
    micro-app(name='app3' url='http://101.132.166.2:5210/app3/#/')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App3 extends Vue {
	
}
</script>

<style lang="stylus" scoped>
.app-3
  height 100%
</style>