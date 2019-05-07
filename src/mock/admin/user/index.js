import { decode } from '@/util/jwt'

const userData = {
  admin: {
    userId: 1,
    username: 'admin',
    name: 'Admin',
    groupId: 1,
    groupName: 'admin'
  },
  guest: {
    userId: 2,
    username: 'guest',
    name: 'Guest',
    groupId: 2,
    groupName: 'guest'
  }
}

const userInfoMap = {
  status: 200,
  message: 'success',
  data: undefined
}

export default {
  GetUserInfo: config => {
    let token = config.url.split('?')[1].split('accessToken=')[1]
    let data = decode(token)
    userInfoMap.data = userData[data]
    return userInfoMap
  }
}
