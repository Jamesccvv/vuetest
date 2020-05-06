
import VueRouter from 'vue-router'
import account from './main/account.vue';
import goodsList from './main/goodsList.vue';

// 子路由
import subLogin from './subcom/login.vue';
import subRegister from './subcom/register.vue';

var router = new VueRouter({
    routes: [
        {
            path: '/account', component: account,
            children: [
                {path: 'subLogin', component: subLogin},
                {path: 'subRegister', component: subRegister}
            ]
        },
        {path: '/goodsList', component: goodsList}
    ]
});

// es6 语法暴露对象
export default router