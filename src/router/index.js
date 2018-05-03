import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/tabbar/home.vue'
import Cart from '@/components/tabbar/cart.vue'
import Member from '@/components/tabbar/member.vue'
import Search from '@/components/tabbar/search.vue'

import PicsLists from '@/components/pics/lists.vue'
import PicsListdetail from '@/components/pics/detail.vue'

import NewsListdetail from '@/components/news/detail.vue'
import NewsLists from '@/components/news/lists.vue'

import GoodsListdetail from '@/components/goods/detail.vue'
import GoodsLists from '@/components/goods/lists.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/member',
        component: Member
      },
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/newsList',
        component: NewsLists
      },
      {
        path: '/newsList/detail/:id',
        component: NewsListdetail
      },
      ,
      {
        path: '/goodsList',
        component: GoodsLists
      },
      {
        path: '/goodsList/detail',
        component: GoodsListdetail
      },
      ,
      {
        path: '/picsList',
        component: PicsLists
      },
      {
        path: '/picsList/detail',
        component: PicsListdetail
      },
  ],
  linkActiveClass: "mui-active"
})
