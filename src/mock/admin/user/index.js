import { decode } from '@/util/jwt'

// GetUserInfo api

const userInfoResponse = {
  status: 200,
  message: 'success',
  data: undefined
}

// UserList api
const userListResponse = {
  status: 200,
  message: 'success',
  data: {
    total: 2,
    rows: undefined
  }
}

let userListData = [
  {
    userId: 1,
    username: 'admin',
    password: 'admin',
    name: 'Admin',
    email: 'admin@qq.com',
    gender: 'male',
    mobile: '138888888888',
    groupName: 'admin'
  },
  {
    userId: 2,
    username: 'guest',
    password: 'admin',
    name: 'Guest',
    email: 'guest@qq.com',
    gender: 'female',
    mobile: '137777777777',
    groupName: 'guest'
  }
]

// GetObj api
const userDetailResponse = {
  status: 200,
  message: 'success',
  data: undefined
}

export default {
  GetUserInfo: config => {
    let token = config.url.split('?')[1].split('accessToken=')[1]
    let data = decode(token)
    userInfoResponse.data = userListData.filter(item => item.username === data)[0]
    return userInfoResponse
  },
  UserList: () => {
    console.log(userListData)
    userListResponse.data.rows = userListData
    return userListResponse
  },
  AddObj: config => {
    let body = JSON.parse(config.body)
    userListData.push(body)
    return null
  },
  DeleteObj: config => {
    let id = config.url.split('user/')[1]
    userListData = userListData.filter(item => (item.userId + '') !== (id + ''))
  },
  UpdateObj: config => {
    let body = JSON.parse(config.body)
    console.log(body)
    let userId = body.userId
    userListData.forEach((item, index, arr) => {
      if (userId === item.userId) {
        arr[index] = body
      }
    })
    return null
  },
  GetObj: config => {
    let id = config.url.split('user/')[1]
    userDetailResponse.data = userListData.filter(item => (item.userId + '') === (id + ''))[0]
    return userDetailResponse
  }
}
