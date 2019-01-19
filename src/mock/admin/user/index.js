const userInfoMap = {
  admin: {
    status: 200,
    message: 'success',
    data: {
      userId: 1,
      userName: 'admin',
      roles: ['admin']
    }
  },
  guest: {
    status: 200,
    message: 'success',
    data: {
      userId: 2,
      userName: 'guest',
      roles: ['guest']
    }
  }
}

export default {
  GetUserInfo: config => {
    const token = config.url.split('?')[1].split('token=')[1].split('-')[0]
    return userInfoMap[token]
  }
}
