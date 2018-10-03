import fetch from '../fetch'

export function login (user) {
  return fetch({
    url: '/auth/login',
    method: 'post',
    data: user
  })
}
