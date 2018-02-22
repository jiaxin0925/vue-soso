import Vue from 'vue'
import Router from 'vue-router'
import '../css/style.css'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'on',   // 点击样式
  mode: 'history',
  base: '/api/',
  scrollBehavior () {   // 切换路由时滚动到位置
    return {x: 0, y: 0}
  },
  routes: [
    
  ]
})
