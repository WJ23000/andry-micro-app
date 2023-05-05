<template lang="pug">
  div.app1
    div 子应用主体1
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {}
})
export default class App1 extends Vue {}
</script>

<style lang="stylus" scoped>
</style>
