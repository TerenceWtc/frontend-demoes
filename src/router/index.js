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
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/introduction',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'introduction',
          component: () => import('@/views/introduction/index')
        }
      ]
    },
    {
      path: '/demoes',
      component: layout,
      children: [
        {
          path: 'checkbox',
          name: 'checkbox',
          component: () => import('@/views/demoes/checkbox/index')
        },
        {
          path: 'formValidation',
          name: 'formValidation',
          component: () => import('@/views/demoes/formValidation/index')
        },
        {
          path: 'line',
          name: 'e-line',
          component: () => import('@/views/demoes/line/index')
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
