<template>
  <div class="microApp">
    <!-- <div id="child1"></div> -->
    <div ref="child1"></div>
  </div>
</template>

<script>
// https://www.yuque.com/kuitos/gky7yw/uyp6wi
import { loadMicroApp } from 'qiankun';
export default {
  name: 'microApp',

  data () {
    return {
      microApp: null
    }
  },

  mounted () {
    // const container = document.
    // this.microApp = loadMicroApp({ name: '子应用child01', container: '#child1', entry: 'http://localhost:9010' });
    this.microApp = loadMicroApp({ name: '子应用child01', container: this.$refs.child1, entry: 'http://localhost:9010' });
    
  },
  beforeDestroy () {
    this.microApp.unmount();
  }
}
</script>

<style lang="scss" scoped>

</style>
