// 在webpack 中使用vue
// 
//  安装 vue npm i vue
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue';   // You are using the runtime-only  默认加载runtime-only
//import Vue from '../node_modules/vue/mui/vue.js'   // 一种写法
// webpack.cofig.js 中配置路径
//  npm i vue-loader  -D  npm install vue-template-compiler   导入并定义一个vue 结尾的  template script style

// 配置 webpack.config.js
//const VueLoaderPlugin = require('vue-loader/lib/plugin'); new VueLoaderPlugin(),  匹配规则 {test:/\.vue$/,use:['vue-loader'],exclude:/node_modules/}

import login from './login.vue';
// es6 中使使用 import 暴露成员  import 模块 from '模块标识符'  export default  向外暴露成员  export default  info  几首必须用info
// export var title='test';  可以用export 和export default  来暴露成员  如何接收 import login {title as a2 }from './login.vue'

/*************************路由相关*********************************/
// 安装并导入  npm install vue-router
 import VueRouter from 'vue-router'


import account from './main/account.vue';
import goodsList from './main/goodsList.vue';

// 子路由
import subLogin from './subcom/login.vue';
import subRegister from './subcom/register.vue';

Vue.use(VueRouter);
// var router = new VueRouter({
//     routes: [
//         {
//             path: '/account', component: account,
//             children: [
//                 {path: 'subLogin', component: subLogin},
//                 {path: 'subRegister', component: subRegister}
//             ]
//         },
//         {path: '/goodsList', component: goodsList}
//     ]
// });


/****************导入mint-ui*********************/
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);// 安装到vue


// 按需导入   npm install babel-plugin-component -D
import { Button, Cell } from 'mint-ui'
import router from './router.js'
Vue.component(Button.name, Button) // 注册   mui 相当于bootstrap  不能用npm 下载手动下载解压拷贝到项目中

import '../lib/mui/css/mui.css'  // 导入css 样式




var vm = new Vue({
    el: '#app',
    data: {
        msg: 3333
    },
    render: c => c(login), // 不能直接写router-view 和 router-link   render 渲染和路由坚挺渲染
    router
});
