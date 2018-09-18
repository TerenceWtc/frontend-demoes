import fetch from '../fetch'

export function test () {
  return fetch({
    url: '/changeZone',
    method: 'get'
  })
}
