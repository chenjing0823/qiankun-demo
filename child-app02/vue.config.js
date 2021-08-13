/*
 * @Author: jing.chen
 * @Date: 2020-10-29 17:18:43
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-10 10:29:35
 * @Description: 
 */
const { name } = require('./package');
module.exports = {
  devServer: {
      port: 9020,
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