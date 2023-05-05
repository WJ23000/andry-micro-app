<template lang="pug">
  div.app-1
    h2 子应用1
    micro-app(name='app1' url='http://101.132.166.2:5210/app1/#/' baseroute='/sub-application-1')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App1 extends Vue {
	
}
</script>

<style lang="stylus" scoped>
.app-1
  height 100%
</style>
