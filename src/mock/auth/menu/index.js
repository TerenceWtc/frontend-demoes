const menuMap = {
  status: 200,
  menu: [
    {
      title: 'introduction',
      code: 'introduction'
    },
    {
      title: 'checkBox',
      code: 'checkBox'
    }
  ]
}

export default {
  GetMenuList: config => {
    return menuMap
  }
}
