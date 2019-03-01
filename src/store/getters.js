const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  accessToken: state => state.user.accessToken,
  refreshToken: state => state.user.refreshToken,
  userId: state => state.user.userId,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  menus: state => state.user.menus
}
export default getters
