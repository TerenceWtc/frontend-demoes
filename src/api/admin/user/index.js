import fetch from '@/api/fetch'

const BASE_URL = '/admin/user'

export function getUserInfo (token) {
  const param = {
    token: token
  }
  return fetch({
    url: `${BASE_URL}/getUserInfo`,
    method: 'get',
    params: param
  })
}
