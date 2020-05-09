// 入口文件

import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import router from './router.js'


import App from './App.vue'

import MintUI from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

Vue.use(MintUI);

import '../lib/mui/css/mui.css';
import '../lib/mui/css/icons-extra.css';

//Vue.component(Header.name, Header);

// 安装 npm i vue-resource -S

import VueResource from 'vue-resource'


// 时间格式化npm i moment
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})


Vue.use(VueResource);
Vue.http.options.root = 'https://douban.uieee.com/';
Vue.http.options.emulateJSON = true;
var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
});

// 去除严格模式  npm install babel-plugin-transform-remove-strict-mode

// 图片缩略 插件  npm i vue-preview -S


/****************一些特殊注意地方*******************/

// 1.图片地址  :src="item.images.small"

// router-link 中的to  如果拼接需要  :to="'/home/newsinfo/'+item.id"

// 父组件给子组件传递参数 :id = 'this.' 子组件中要定义 props: ["newsId"] 来接收使用

// 使用js 进行路由导航 编程试导航
// 1.this.$router.push()
// 2.this.$router.push({path:''})
// 3.this.$router.push({name:'home',params:{id:123}}) name 来自路由后的自定义名字


// 添加样式判断 :class="{full:isfull}"

// 只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册 ref="ball"  获取：this.$refs.ball. 相当于获取dom

// es6 拼接字符串 const test ='' $({test}px)

// 子组件向父组件传递 （事件调度机制）