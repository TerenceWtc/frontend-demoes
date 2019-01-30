const menuMap = {
  admin: {
    status: 200,
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
      }
    ]
  },
  guest: {
    status: 200,
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

export default {
  GetMenuList: config => {
    const token = config.url.split('?')[1].split('token=')[1].split('-')[0]
    return menuMap[token]
  }
}
