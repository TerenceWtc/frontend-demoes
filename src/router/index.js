import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
import home from '@/views/home/index'
import dateTime from '@/views/dateTime/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dateTime',
      name: 'dateTime',
      component: dateTime
    }
  ]
})
