import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
import home from '@/views/home/index'
import dateTime from '@/views/dateTime/index'
import login from '@/views/login/index'
import introduction from '@/views/introduction/index'
import checkBox from '@/views/checkBox/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path: 'introduction',
          name: 'introduction',
          component: introduction
        },
        {
          path: 'checkBox',
          name: 'checkBox',
          component: checkBox
        }
      ]
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
