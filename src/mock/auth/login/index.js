/* mock accounts for login */
const userLoginData = [
  {
    username: 'admin',
    password: 'admin'
  },
  {
    username: 'guest',
    password: 'guest'
  }
]

/* mock login failed resposne */
const accountNotExist = {
  status: 40301,
  message: 'your account not exist!'
}

const accountPasswordWrong = {
  status: 40302,
  message: 'your account or password wrong!'
}

const userMap = {
  admin: {
    status: 200,
    message: 'mock admin login success',
    data: {
      token: 'admin-mock-token'
    }
  },
  guest: {
    status: 200,
    message: 'mock guest login success',
    data: {
      token: 'guest-mock-token'
    }
  }
}

export default {
  Login: config => {
    const user = JSON.parse(config.body)
    let userExist = false
    for (let i = 0; i < userLoginData.length; i++) {
      if (userLoginData[i].username === user.username) {
        userExist = true
        if (userLoginData[i].password === user.password) {
          return userMap[userLoginData[i].username]
        } else {
          return accountPasswordWrong
        }
      }
    }
    if (!userExist) {
      return accountNotExist
    }
  }
}
