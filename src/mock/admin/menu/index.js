import { decode } from '@/util/jwt'

const menuData = {
  admin: {
    menu: [
      {
        title: 'introduction',
        code: 'introduction/index',
        icon: 'introduction'
      },
      {
        title: 'checkbox',
        code: 'demoes/checkbox',
        icon: 'validation'
      },
      {
        title: 'formValidation',
        code: 'demoes/formValidation',
        icon: 'validation'
      },
      {
        title: 'line',
        code: 'demoes/line',
        icon: 'chart'
      },
      {
        title: 'userManagement',
        code: 'admin/user/index',
        icon: 'chart'
      }
    ]
  },
  guest: {
    menu: [
      {
        title: 'introduction',
        code: 'introduction/index'
      },
      {
        title: 'checkbox',
        code: 'demoes/checkbox'
      },
      {
        title: 'formValidation',
        code: 'demoes/formValidation'
      }
    ]
  }
}

const menuMap = {
  status: 200,
  message: 'success',
  data: undefined
}

export default {
  GetMenuList: config => {
    const token = config.url.split('?')[1].split('accessToken=')[1]
    let data = decode(token)
    menuMap.data = menuData[data].menu
    return menuMap
  }
}
