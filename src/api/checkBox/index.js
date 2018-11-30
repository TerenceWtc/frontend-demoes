import fetch from '../fetch'

export function getCheckBoxData () {
  return fetch({
    url: '/checkbox/getData',
    method: 'get'
  })
}
