// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getRefreshToken } from '@/util/auth'
import store from './store'
import '@/mock/index.js'
import i18n from './lang'
import SvgIcon from '@/components/SvgIcon'
import '@/global'
import axios from 'axios'

async function refresh () {
  console.log(getRefreshToken())
  return axios({
    method: 'POST',
    url: '/api/auth/refresh',
    headers: {
      'X-refresh-token': getRefreshToken()
    }
  })
}

// white list for not redirection
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  let accessToken = store.getters.accessToken
  if (accessToken) {
    await refresh().then(response => {
      // logout if refreshToken expired
      if (response.data.status === 60202) {
        store.dispatch('FrontendLogOut').then(() => {
          location.reload()
        })
        // reject the request chains
        return Promise.reject(new Error(response.message))
      }
      // store the new accessToken
      store.dispatch('RefreshToken', response.data.data)
    }
    )
    // rediret to '/' if token not null & route to login
    if (to.path === '/login') {
      next('/')
    } else {
      if (store.getters.menus === undefined) {
        store.dispatch('GetInfo').then(response => {
        })
        store.dispatch('GetMenus').then(response => {
        })
      }
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

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.component('svg-icon', SvgIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
