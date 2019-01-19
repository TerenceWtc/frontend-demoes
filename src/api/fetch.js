import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/util/auth'
import i18n from '@/lang'

const s = 1000

// create an axios' instance
const instance = axios.create({
  // use process.env.BASE_API
  baseURL: process.env.BASE_API,
  timeout: 30 * s
})

// request interceptor
instance.interceptors.request.use(config => {
  // set token in request headers if exist
  if (store.getters.token) {
    config.headers.token = getToken()
  }
  return config
}, error => {
  Promise.reject(error)
})

// response interceptor
instance.interceptors.response.use(response => {
  let data = response.data
  let status = data.status
  if (status === 40101 || status === 40102) {
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
