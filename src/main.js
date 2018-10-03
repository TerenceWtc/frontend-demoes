// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getToken } from '@/util/auth'
import store from './store'
import '@/mock/index.js'

// white list for not redirection
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    // rediret to '/' if token not null & route to login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
    // store.dispatch('FronteLogOut').then(() => {
    //   next({ path: '/login' })
    // })
  } else {
    // redirect to login page if token null
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
