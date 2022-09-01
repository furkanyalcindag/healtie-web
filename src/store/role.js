import router from '@/router'
import store from '.'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getRoles(state, page) {
      // CHECK IF USER LOGGED IN ALREADY
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        var data = JSON.stringify({
          filters: [],
          pageNumber: page.page - 1,
          pageSize: page.rowsPerPage,
        })

        var config = {
          method: 'post',
          url: 'get-all-by-filter',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        const response = await axios(config)
          .then(function (response) {
            return response.data
          })
          .catch(function (error) {
            console.log(error)
            return null
          })
        return response
      } else {
        // ROLE CHECK IS NEEDED HERE
        router.push({ name: 'Login Admin' })
      }
    },
    async deleteRole(state, uuid) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')

        var config = {
          method: 'delete',
          url: uuid,
          headers: {},
        }

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data))
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        // ROLE CHECK IS NEEDED HERE
        router.push({ name: 'Login Admin' })
      }
    },
    async addRole(state, roleData) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        var data = JSON.stringify({
          name: roleData.name,
        })

        var config = {
          method: 'post',
          // url: 'https://healtie.herokuapp.com/',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data))
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        // ROLE CHECK IS NEEDED HERE
        router.push({ name: 'Login Admin' })
      }
    },
  },
  getters: {},
}
