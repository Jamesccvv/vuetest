import VueRouter from 'vue-router'


import HomeContttainer from '../component/tabbar/HomeContainer.vue'
import MemberContttainer from '../component/tabbar/MemberContainer.vue'
import SearchContttainer from '../component/tabbar/SearchContainer.vue'
import ShopCarContttainer from '../component/tabbar/ShopCarContainer.vue'

import NewsList from '../component/news/NewsList.vue'
import NewsInfo from '../component/news/NewsInfo.vue'

import photoList from '../component/photo/photoList.vue'


var router = new VueRouter({
    routes: [
        // {
        //     path: '/account', component: account,
        //     children: [
        //         {path: 'subLogin', component: subLogin},
        //         {path: 'subRegister', component: subRegister}
        //     ]
        // },
        {path: '/', redirect: '/home'},
        {
            path: '/home', component: HomeContttainer
        },
        {path: '/member', component: MemberContttainer},
        {path: '/shopcar', component: ShopCarContttainer},
        {path: '/search', component: SearchContttainer},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsinfo/:id', component: NewsInfo},
        {path: '/home/photo', component: photoList, name: 'photo'},
    ],
    linkActiveClass: 'mui-active'
});

// es6 语法暴露对象
export default router