var jwt = require('jsonwebtoken')

export function generateToken (exp, data, secret) {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + exp,
    data: data
  }, secret)
}

export function verify (accessToken) {
  try {
    jwt.verify(accessToken, global.jwtSecret)
  } catch (err) {
    return true
  }
  return false
}

export function decode (accessToken) {
  return jwt.verify(accessToken, global.jwtSecret).data
}
