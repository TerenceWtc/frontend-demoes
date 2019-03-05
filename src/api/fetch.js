import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store/index'
import { getAccessToken, getRefreshToken } from '@/util/auth'
import { verify } from '@/util/jwt'
import i18n from '@/lang'

const s = 1000

// create an axios' instance
const instance = axios.create({
  // use process.env.BASE_API
  baseURL: process.env.BASE_API,
  timeout: 30 * s
})

async function refresh () {
  return axios({
    method: 'POST',
    url: '/api/auth/refresh',
    headers: {
      'X-refresh-token': getRefreshToken()
    }
  })
}

// request interceptor
instance.interceptors.request.use(async config => {
  // set accessToken in request headers if exist
  if (store.getters.accessToken) {
    // verify whether token expired
    if (verify(getAccessToken())) {
      // refresh accessToken by refreshToken
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
        config.headers['X-access-token'] = 'Bearer ' + response.data.data
      })
    } else {
      config.headers['X-access-token'] = 'Bearer ' + getAccessToken()
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

// response interceptor
instance.interceptors.response.use(response => {
  let data = response.data
  let status = data.status
  if (status === 60201 || status === 60202 || response.status === 401) {
    MessageBox.confirm('You are logout', {
      confirmButtonText: 'Re-login',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      store.dispatch('FrontendLogOut').then(() => {
        location.reload()
      })
    })
    return Promise.reject(new Error(data.message))
  }
  if (status !== 200) {
    Message({
      message: i18n.t(`code.${status}`),
      type: 'warning',
      duration: 5 * s
    })
    return Promise.reject(new Error(data.message))
  }
  return data
}, error => {
  Promise.reject(error)
})

export default instance
