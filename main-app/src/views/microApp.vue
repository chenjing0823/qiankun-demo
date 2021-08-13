<!--
 * @Author: jing.chen
 * @Date: 2021-04-27 16:56:23
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-10 11:19:37
 * @Description: 
-->
<template>
  <div class="microApp">
    <el-button type="primary" @click="changeState">父按钮 改变传参</el-button>
    <div ref="child1"></div>
  </div>
</template>

<script>
// https://www.yuque.com/kuitos/gky7yw/uyp6wi
import { loadMicroApp, initGlobalState } from 'qiankun';
export default {
  name: 'microApp',

  data () {
    return {
      messageEvent: initGlobalState({event: null}),
      microApp: null
    }
  },

  mounted () {
    this.microAppInit()
    this.messageInit()

    
  },
  methods: {
    microAppInit () {
      this.microApp = loadMicroApp({
        name: '子应用child01',
        container: this.$refs.child1,
        entry: 'http://localhost:9010',
        props: { 
          test_param: {
            userid: 111,
            corpid: 222
          }
        }
      });
    },
    messageInit() {
      this.messageEvent.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log("main-onGlobalStateChange", state, prev);
      });
    },
    changeState () {
      this.messageEvent.setGlobalState({b:1});
    }
  },
  beforeDestroy () {
    this.messageEvent.offGlobalStateChange()
    this.microApp.unmount();
  }
}
</script>

<style lang="scss" scoped>

</style>
