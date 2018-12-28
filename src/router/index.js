import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Resume from './../components/pages/resume'
import Percentage from './../components/pages/percentage'

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
      path: '/Percentage',
      name: 'Percentage',
      component: Percentage
    }
  ]
})
