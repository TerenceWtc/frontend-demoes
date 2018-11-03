const userMap = {
  admin: {
    status: 200,
    message: 'mock login success',
    name: 'admin user',
    data: 'admin'
  },
  guest: {
    status: 40101,
    message: 'mock guest can not login',
    name: 'guest',
    data: 'undefined'
  }
}

export default {
  Login: config => {
    const user = JSON.parse(config.body)
    return userMap[user.username]
  }
}
