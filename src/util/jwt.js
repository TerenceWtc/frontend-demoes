const jwt = require('jwt-decode')

// verify whether token is expired
export function verify (accessToken) {
  let now = new Date().getTime()
  let decode = jwt(accessToken)
  console.log((now / 1000) - decode.exp)
  return (now / 1000) > decode.exp
}
