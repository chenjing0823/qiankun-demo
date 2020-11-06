<!--
 * @Author: jing.chen
 * @Date: 2020-11-06 13:58:56
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-11-06 15:14:26
 * @Description: 
-->
### 基于qiankun，前端微服务说明
#### 开始
父应用、子应用1、子应用2都可以单独进入文件夹，运行命令启动服务
```
npm run serve
```
#### 效果
在父应用启动时，且启动了子应用，才可以在父应用的相关页面内看到子应用。效果类似iframe。
#### 为什么用qiankun，不用iframe
可以在[官方手册](https://qiankun.umijs.org/zh)，看到更多介绍


#### 最外层server.js脚本
避免进入多个文件夹单独启动应用，直接写一个node脚本，一次性启动全部应用，用法
+ 在最外层目录: ./qiankun-demo 目录下
```
node server.js
```
即可

其中涉及并行和串行可以自行了解
+ async.series()
+ async.parallel