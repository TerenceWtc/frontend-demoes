import fetch from '@/api/fetch'

const BASE_URL = '/admin/menu'

export function getMenuList () {
  return fetch({
    url: `${BASE_URL}/getMenuList`,
    method: 'get'
  })
}
