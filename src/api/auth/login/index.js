import fetch from '@/api/fetch'

const BASE_URL = '/auth/login'

export function login (user) {
  return fetch({
    url: `${BASE_URL}`,
    method: 'post',
    data: user
  })
}

export function test () {
  return fetch({
    url: '/auth/test',
    method: 'get'
  })
}
