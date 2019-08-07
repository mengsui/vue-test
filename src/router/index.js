import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Resume from '@/views/Resume/Resume'
import Percentage from '@/views/Percentage/Percentage'
import ChinaMap from '@/views/ChinaMap/ChinaMap'

Vue.use(Router)

export default new Router({
  mode: 'history',//加载模式选择  注意：默认是hash 但是选择的时候不会刷新
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/percentage',
      name: 'Percentage',
      component: Percentage
    },
    {
      path: '/chinaMap',
      name: 'ChinaMap',
      component: ChinaMap
    },
  ]
})
