
import $ from 'jquery';

//导入css
import '../css/index.css'
import '../css/index.less'
import '../css/index.scss'


// 如果是引用node_modules 可以不加目录
import 'bootstrap/dist/css/bootstrap.css'

// webpack 默认只能打包js 文件

$(function(){
    $('ul>li:odd').css('color','pink');
    $('ul>li:even').css('background','red');
    $('ul>li:even').height('66px')

});

// 1.使用webpack-dev-server 自动打包   直接用 webpack 方式每次都要运行

// 安装 npm i webpack-dev-server -D    npm i -D webpack-cli

// 用法和使用webpack 一样  非全局安装  "dev": "webpack-dev-server"  运行npm run dev  即可  http://localhost:8080/ 目前直接托管到内存中了bundle.js

// --open 代表打开浏览器 --port 3000 端口  --contentBase src 可以直接打开这个目录 --hot 热更新追加方式

// npm i html-webpack-plugin  页面缓存插件

//如果处理非js安装 npm i style-loader css-loader -D   配置匹配规则    webpack.config.js

// 安装能处理less 包  npm i less -D   npm i less-loader -D

// 安装scss   npm i sass-loader -D   npm i node-sass -D 下载很慢

// 安装 css 中的涉及url 地址     npm i url-loader  file-loader -D  并建立匹配规则

// es6 语法  webpack 只能处理部分语法 更高级的需要第三方处理
// 1. npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 2. npm i babel-preset-env babel-preset-stage-0 -D
// 3. 配置规则{test:/\.js$/,use:'babel-loader',exclude:/node_model/}  排除第三方包的文件
// 4. 在项目根目录创建一个 .babelrc 的配置文件 json 格式
// 5. 配置项
//  {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
//  }


class Person {
    static info = {name: 'james', age: 20}
}
console.log(Person.info.name);
// console.log(Person.info);
//var p1 = new Person();