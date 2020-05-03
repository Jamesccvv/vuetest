// 在webpack 中使用vue
// 
//  安装 vue npm i vue

import Vue from 'vue'   // You are using the runtime-only  默认加载runtime-only
//import Vue from '../node_modules/vue/dist/vue.js'   // 一种写法
// webpack.cofig.js 中配置路径
//  npm i vue-loader vue-template-complier -D   导入并定义一个vue 结尾的  template script style

// 配置匹配规则
import login from './login.vue'
// es6 中使使用 import 暴露成员  import 模块 from '模块标识符'  export default  向外暴露成员  export default  info  几首必须用info
//  export var title='test';  可以用export 和export default  来暴露成员  如何接收 import login {title as a2 }from './login.vue'
var vm = new Vue({
    el: '#app',
    data: {
        msg: 3333
    },
    render: c => c(login)

})
