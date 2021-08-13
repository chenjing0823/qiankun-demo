/*
 * @Author: jing.chen
 * @Date: 2020-11-06 16:15:20
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-13 15:27:23
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element);
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

const microApp = [
  { key: 1, name: '子应用1', router: 'child01', url: 'http://localhost:9010' },
  { key: 2, name: '子应用2', router: 'child02', url: 'http://localhost:9020' }
]
let apps = [];
microApp.forEach(app => {
  const { name, router, url } = app
  apps.push(
    {
      name: name,
      entry: url,
      //fetch,
      container: '#vue',
      activeRule: router,
      props: { 
        test_param: {
          userid: 111,
          corpid: 222
        },
        app
      }
    }
  );
})
const config = {
    beforeLoad: [
        app => {
            console.log("%c before load",
            'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
            app);
        }
    ], // 挂载前回调
    beforeMount: [
        app => {
            console.log("%c before mount",
            'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
            app);
        }
    ], // 挂载后回调
    afterUnmount: [
        app => {
            console.log("%c after unload",
            'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
            app);
        }
    ] // 卸载后回调
  }
registerMicroApps(apps, config);
let option = { prefetch: false }
start();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
