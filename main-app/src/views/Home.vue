<!--
 * @Author: jing.chen
 * @Date: 2020-10-29 16:57:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-27 17:10:05
 * @Description: 
-->
<template>
  <div class="home">
    <h1>点击上方tab 切换子应用</h1>
    <h1>这里是父应用，请运行子应用1，2后再点击tab才有效果</h1>
    <br />
    <br />
    <span>点击上方tab是通过路由 去切换子项目</span>
    <br />
    <span>如果我只有部分数据需要子项目，例如弹窗之类的，该如何实现呢？</span>
    <br />
    <el-button type="primary" @click="openMicro1">应用1弹窗</el-button>

    <el-dialog
      title="不切路由 父应用内打开 子应用1"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="() => dialogVisible = false">
      <micro-app></micro-app>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MicroApp from './microApp.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    MicroApp
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openMicro1 () {
      this.dialogVisible = true
    }
  }
}
</script>
