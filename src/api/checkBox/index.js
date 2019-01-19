import fetch from '../fetch'

export function getCheckboxData () {
  return fetch({
    url: '/checkbox/getData',
    method: 'get'
  })
}
