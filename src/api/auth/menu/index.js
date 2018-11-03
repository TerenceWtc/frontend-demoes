import fetch from '../../fetch'

export function getMenuList () {
  return fetch({
    url: '/auth/menu/getMenuList',
    method: 'get'
  })
}
