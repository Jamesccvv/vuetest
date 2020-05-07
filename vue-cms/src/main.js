// 入口文件

import Vue from 'vue'

import App from './App.vue'

import { Header } from 'mint-ui';

import '../lib/mui/css/mui.css';
Vue.component(Header.name, Header);


var vm = new Vue({
    el: '#app',
    render: c => c(App)
});