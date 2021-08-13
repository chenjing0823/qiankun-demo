/*
 * @Author: jing.chen
 * @Date: 2020-11-06 16:15:20
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-09 19:19:53
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]
console.log('process.env')
console.log(process.env)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
