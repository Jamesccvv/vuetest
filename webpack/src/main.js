
import $ from 'jquery';

$(function(){
    $('ul>li:odd').css('color','pink');
    $('ul>li:even').css('background','pink');
    $('ul>li:even').height('22px')

});

// 1.使用webpack-dev-server 自动打包

// 安装 npm i webpack-dev-server -D

// 用法和使用webpack 一样  非全局安装  "dev": "webpack-dev-server"  运行npm run dev  即可  http://localhost:8080/ 目前直接托管到内存中了bundle.js

// --open 代表打开浏览器 --port 3000 端口  --contentBase src 可以直接打开这个目录 --hot 热更新