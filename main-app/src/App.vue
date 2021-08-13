<!--
 * @Author: jing.chen
 * @Date: 2020-10-29 16:57:52
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-10 11:13:05
 * @Description: 主应用入口
-->
<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item v-for="app in  microApp" :key="app.key" :index="app.router">{{ app.name }}</el-menu-item>
    </el-menu>
    <router-view />
    <!-- 子应用入口 -->
    <div id="vue"></div>
  </div>
</template>

<script>
export default {
  name: "main01",
  data() {
    return {
      microApp: [
        { key: 1, name: '子应用1', router: 'child01' },
        { key: 2, name: '子应用2', router: 'child02' }
      ]
    };
  },
};
</script>