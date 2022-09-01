import router from '@/router'
import store from '.'
export default {
  namespaced: true,
  state: {},
  mutations: {
    SET_AUTH_DATA_LOCALLY(state, data) {
      localStorage.setItem('token', data['jwt-token'])
    },

    CHECK_ROLES() {},

    RESTORE_AUTH_DATA_LOCALLY() {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
      }
    },
  },
  actions: {
    async signIn(_, credentials) {
      var axios = require('axios')
      var data = JSON.stringify(credentials)

      var config = {
        method: 'post',
        url: 'auth/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      }

      const response = await axios(config)
        .then((response) => {
          store.dispatch('auth/attemptRestore')
          store.dispatch('auth/attempt', response)
          // ROLE CONTROL IS NEEDED HERE
          router.push({ name: 'Home' })
          return { authorized: true, response: response }
        })
        .catch((error) => {
          store.dispatch('auth/attemptRestore')
          return { authorized: false, response: error }
        })

      return response
    },

    async attempt({ commit }, data) {
      commit('SET_AUTH_DATA_LOCALLY', data)
    },

    async attemptRestore({ commit }) {
      commit('RESTORE_AUTH_DATA_LOCALLY')
    },
  },

  getters: {
    checkIfLoggedIn() {
      return Boolean(localStorage.getItem('token'))
    },
  },
}
