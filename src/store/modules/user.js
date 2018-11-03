import { setToken, getToken, removeToken } from '@/util/auth'
import { login } from '@/api/login'
import { getMenuList } from '@/api/auth/menu'

const user = {
  state: {
    id: undefined,
    token: getToken(),
    menus: undefined
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_TOKEN: (state, token) => {
      state.token = token
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
          setToken(response.data)
          commit('SET_TOKEN', response.data)
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
