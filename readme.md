<!--
 * @Author: jing.chen
 * @Date: 2020-11-06 13:58:56
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-11-06 15:14:26
 * @Description: 
-->
### 基于qiankun，前端微服务说明
#### 开始
父应用、子应用1、子应用2都可以单独进入文件夹，分别运行命令启动服务
```
npm install
npm run serve
```
#### 效果

三个服务都成功启动后，可以看到三个页面都可以单独访问。

最终效果就是：在父应用页面内，可以看到里面的两个子应用服务效果类似iframe。

#### 为什么用qiankun，不用iframe
可以在[官方手册](https://qiankun.umijs.org/zh)，看到更多介绍



***

手动启动服务可以不看以下


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