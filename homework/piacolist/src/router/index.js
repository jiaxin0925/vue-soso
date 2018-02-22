import Vue from 'vue'
import Router from 'vue-router'
import '../css/style.css'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'on',
  routes: [
    {
      path: '/',
      name: 'hot',
      component: () => import('@/components/Hot')
    },
    {
      path: '/xing',
      name: 'xing',
      component: () => import('@/components/Xing')
    },
    {
      path: '/zimu',
      name: 'zimu',
      component: () => import('@/components/Zimu')
    }
  ]
})
