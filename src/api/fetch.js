import axios from 'axios'

// create an axios' instance
const instance = axios.create({
  // use process.env.BASE_API
  baseURL: process.env.BASE_API,
  timeout: 30 * 1000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

instance.interceptors.response.use(resposne => {
  return resposne
}, error => {
  Promise.reject(error)
})

export default instance
