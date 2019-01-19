const menuMap = {
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
    },
    {
      title: 'line',
      code: 'demoes/line'
    }
  ]
}

export default {
  GetMenuList: () => {
    return menuMap
  }
}
