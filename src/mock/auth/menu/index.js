const menuMap = {
  status: 200,
  menu: [
    {
      title: 'introduction',
      code: 'introduction'
    }
  ]
}

export default {
  GetMenuList: config => {
    return menuMap
  }
}
