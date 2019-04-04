import fetch from '@/api/fetch'

const BASE_URL = '/admin/user'

export function getUserInfo (token) {
  const param = {
    accessToken: token
  }
  return fetch({
    url: `${BASE_URL}/getUserInfo`,
    method: 'get',
    params: param
  })
}

export function list (page, size) {
  return fetch({
    url: `${BASE_URL}/list?page=${page}&size=${size}`,
    method: 'get'
  })
}

export function addObj (user) {
  return fetch({
    url: `${BASE_URL}`,
    method: 'post',
    data: user
  })
}

export function deleteObj (id) {
  return fetch({
    url: `${BASE_URL}/${id}`,
    method: 'delete'
  })
}

export function updateObj (user) {
  return fetch({
    url: `${BASE_URL}`,
    method: 'put',
    data: user
  })
}

export function getObj (id) {
  return fetch({
    url: `${BASE_URL}/${id}`,
    method: 'get'
  })
}
