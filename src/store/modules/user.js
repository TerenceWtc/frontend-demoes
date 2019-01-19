import { setToken, getToken, removeToken } from '@/util/auth'
import { login } from '@/api/auth/login'
import { getUserInfo } from '@/api/admin/user'
import { getMenuList } from '@/api/admin/menu'

const user = {
  state: {
    token: getToken(),
    userId: undefined,
    userName: undefined,
    roles: undefined,
    menus: undefined
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
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
      removeToken()
      commit('SET_MENUS', undefined)
      return new Promise((resolve, reject) => {
        login(user).then(response => {
          setToken(response.data.token)
          commit('SET_TOKEN', response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // function logout for front end
    FrontendLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
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
        getMenuList(state.token).then(response => {
          commit('SET_MENUS', response.menu)
        })
      })
    }
  }
}

export default user
