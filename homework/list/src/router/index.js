import Vue from 'vue'
import Router from 'vue-router'
import '../css/style.css'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'on',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('@/components/New')
    },
    {
      path: '/tao',
      name: 'tao',
      component: () => import('@/components/Tao')
    },
    {
      path: '/sou',
      name: 'sou',
      component: () => import('@/components/Sou')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/components/Main')
    }
  ]
})
