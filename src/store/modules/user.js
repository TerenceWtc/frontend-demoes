import { setToken, getToken, removeToken } from '@/util/auth'
import { login } from '@/api/login'

const user = {
  state: {
    id: undefined,
    token: getToken()
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    Login ({ commit }, user) {
      removeToken()
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
    }
  }
}

export default user
