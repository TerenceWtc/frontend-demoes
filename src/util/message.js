import { Message } from 'element-ui'

// type: success/warning/info/error
export function message (message, type = 'warning', duration = 3000, closable = false) {
  Message({
    showClose: closable,
    message: message,
    type: type,
    duration: duration
  })
}
