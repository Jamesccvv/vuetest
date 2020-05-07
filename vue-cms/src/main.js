// 入口文件

import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import router from './router.js'


import App from './App.vue'

import { Header ,Swipe, SwipeItem} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../lib/mui/css/mui.css';
import '../lib/mui/css/icons-extra.css';

Vue.component(Header.name, Header);

// 安装 npm i vue-resource -S

import VueResource from 'vue-resource'

Vue.use(VueResource);

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
});