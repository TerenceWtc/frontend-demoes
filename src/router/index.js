import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
// import home from '@/views/home/index'
import dateTime from '@/views/dateTime/index'

Vue.use(Router)

/**
 * Note
 * path: use in breadcrumb for router
 * name: use in breadcrumb for display
 * redirect: flag to judge whether to redirect
 */

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      // component: () => import('@/views/login/index')
      component: resolve => require(['@/views/login/index'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component: layout
    },
    {
      path: '/introduction',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'introduction',
          // component: () => import('@/views/introduction/index')
          component: resolve => require(['@/views/introduction/index'], resolve)
        }
      ]
    },
    {
      path: '/admin',
      component: layout,
      children: [
        {
          path: 'user/index',
          name: 'user',
          component: resolve => require(['@/views/admin/user/index'], resolve)
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
          // component: () => import('@/views/demoes/checkbox/index')
          component: resolve => require(['@/views/demoes/checkbox/index'], resolve)
        },
        {
          path: 'formValidation',
          name: 'formValidation',
          // component: () => import('@/views/demoes/formValidation/index')
          component: resolve => require(['@/views/demoes/formValidation/index'], resolve)
        },
        {
          path: 'line',
          name: 'e-line',
          // component: () => import('@/views/demoes/line/index')
          component: resolve => require(['@/views/demoes/line/index'], resolve)
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    {
      path: '/dateTime',
      name: 'dateTime',
      component: dateTime
    }
  ]
})
