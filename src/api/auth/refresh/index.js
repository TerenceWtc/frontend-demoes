// import axios from 'axios'
import { getRefreshToken } from '@/util/auth'
import { MessageBox } from 'element-ui'
import store from '@/store/index'
import { decode, verify, generateToken } from '@/util/jwt'

export async function refresh () {
  let refreshToken = getRefreshToken()
  if (verify(refreshToken)) {
    MessageBox.confirm('You are logout', {
      confirmButtonText: 'Re-login',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      store.dispatch('FrontendLogOut').then(() => {
        location.reload()
      })
    })
  } else {
    let data = decode(refreshToken)
    let accessToken = generateToken(global.accessExpiration, data, global.jwtSecret)
    store.dispatch('RefreshToken', accessToken)
    return accessToken
  }
}
