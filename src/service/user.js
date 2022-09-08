import router from '@/router'
import store from '@/store/'
//import axios from 'axios'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async addUserByRole(state, roleData) {
      //debugger
      if (store.getters['auth/checkIfLoggedIn']) {
        var axios = require('axios')
        var data = JSON.stringify(roleData)

        var config = {
          method: 'post',
          // url: `user-api/${userData.uuid}`,
          url: 'user-api/' + roleData.uuid,
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        const response = axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data))
            return true
          })
          .catch(function (error) {
            console.log(error)
            return false
          })
        return response
      } else {
        router.push({ name: 'Login Admin' })
      }
    },
    async getUserByRole(state, pageAndData) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        //    debugger
        var axios = require('axios')
        console.log(pageAndData.pageOptions)
        let pageNumber = pageAndData.pageOptions.page - 1
        console.log(pageNumber)
        var data = await JSON.parse(
          JSON.stringify({
            filters: [],
            pageNumber: pageAndData.pageOptions.page - 1,
            pageSize: pageAndData.pageOptions.rowsPerPage,
          }),
        )
        console.log(data)
        var config = {
          method: 'get',
          url:
            'user-api/get-all-by-role/' +
            pageAndData.roleData.uuid +
            '?pageNumber=' +
            data.pageNumber +
            '&pageSize=' +
            data.pageSize,

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
    async deleteUser(state, uuid) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        var config = {
          method: 'delete',
          url: 'user-api/' + uuid,
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const response = await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data))
            return true
          })
          .catch(function (error) {
            console.log(error)
            return false
          })
        return response
      } else {
        // ROLE CHECK IS NEEDED HERE
        router.push({ name: 'Login Admin' })
      }
    },
  },
  getters: {},
}
