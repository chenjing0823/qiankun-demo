/*
 * @Author: jing.chen
 * @Date: 2020-11-06 16:15:20
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-10 10:29:08
 * @Description: 
 */
const { name } = require('./package');
module.exports = {
  devServer: {
      port: 9010,
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  },
  configureWebpack: {
    output: {
        library: `${name}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        jsonpFunction: `webpackJsonp_${name}`,
    },
  }
};
