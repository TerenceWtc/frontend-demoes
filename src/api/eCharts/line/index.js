import fetch from '../../fetch'

export function getLine () {
  return fetch({
    url: '/echarts/line',
    method: 'get'
  })
}
