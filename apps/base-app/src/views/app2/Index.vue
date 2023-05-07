<template lang="pug">
  div.app-2
    h2 子应用2
    micro-app(name='app2' url='http://an.local-dev.andry.com:5210/app2/#/')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App2 extends Vue {
	
}
</script>

<style lang="stylus" scoped>
.app-2
  height 100%
</style>