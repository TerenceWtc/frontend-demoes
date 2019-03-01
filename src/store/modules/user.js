import { setAccessToken, getAccessToken, removeAccessToken, setRefreshToken, getRefreshToken, removeRefreshToken } from '@/util/auth'
import { login, test } from '@/api/auth/login'
import { getUserInfo } from '@/api/admin/user'
import { getMenuList } from '@/api/admin/menu'

const user = {
  state: {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
    userId: undefined,
    userName: undefined,
    roles: undefined,
    menus: undefined
  },

  mutations: {
    SET_ACCESS_TOKEN: (state, token) => {
      state.accessToken = token
    },
    SET_REFRESH_TOKEN: (state, token) => {
      state.refreshToken = token
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    Login ({ commit }, user) {
      removeAccessToken()
      removeRefreshToken()
      commit('SET_MENUS', undefined)
      return new Promise((resolve, reject) => {
        login(user).then(response => {
          setAccessToken(response.data.accessToken)
          commit('SET_ACCESS_TOKEN', response.data.accessToken)
          setRefreshToken(response.data.refreshToken)
          commit('SET_REFRESH_TOKEN', response.data.refreshToken)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // function logout for front end
    FrontendLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ACCESS_TOKEN', '')
        commit('SET_REFRESH_TOKEN', '')
        removeAccessToken()
        removeRefreshToken()
        resolve()
      })
    },
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.accessToken).then(response => {
          commit('SET_USER_ID', response.data.userId)
          commit('SET_USER_NAME', response.data.userName)
          commit('SET_ROLES', response.data.roles)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetMenus ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getMenuList(state.accessToken).then(response => {
          commit('SET_MENUS', response.menu)
        })
      })
    },
    RefreshToken ({ commit }, token) {
      setAccessToken(token)
      commit('SET_ACCESS_TOKEN', token)
    },
    test () {
      return new Promise((resolve, reject) => {
        test().then(response => {
          console.log(response)
        })
      })
    }
  }
}

export default user
