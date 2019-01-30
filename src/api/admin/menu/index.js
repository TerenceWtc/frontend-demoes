import fetch from '@/api/fetch'

const BASE_URL = '/admin/menu'

export function getMenuList (token) {
  const param = {
    token: token
  }
  return fetch({
    url: `${BASE_URL}/getMenuList`,
    method: 'get',
    params: param
  })
}
