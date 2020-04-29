
import $ from 'jquery';

// 导入css
import '../css/index.css'

// webpack 默认只能打包js 文件

$(function(){
    $('ul>li:odd').css('color','pink');
    $('ul>li:even').css('background','red');
    $('ul>li:even').height('66px')

});

// 1.使用webpack-dev-server 自动打包   直接用 webpack 方式每次都要运行

// 安装 npm i webpack-dev-server -D

// 用法和使用webpack 一样  非全局安装  "dev": "webpack-dev-server"  运行npm run dev  即可  http://localhost:8080/ 目前直接托管到内存中了bundle.js

// --open 代表打开浏览器 --port 3000 端口  --contentBase src 可以直接打开这个目录 --hot 热更新追加方式

// npm i html-webpack-plugin  页面缓存插件

//如果处理非js安装 npm i style-loader css-loader -D   配置匹配规则    webpack.config.js