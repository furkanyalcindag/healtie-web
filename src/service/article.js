/* eslint-disable */
import router from '@/router'
import store from '@/store/'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async addArticle(state, articleData) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        articleData.description = articleData.description.substring(3,articleData.description.length - 4)
        var axios = require('axios')
        var data = JSON.parse(JSON.stringify(articleData))
//debugger
        var config = {
          method: 'post',
          url: 'article/user-api',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        const response = await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data.title))
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
    async getArticles(state, pageAndSearchValue) {
      // CHECK IF USER LOGGED IN ALREADY
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        let filterBy = pageAndSearchValue.filter
          ? pageAndSearchValue.filter
          : []

        var data = JSON.stringify({
          filters: filterBy,
          pageNumber: pageAndSearchValue.pageOptions.page - 1,
          pageSize: pageAndSearchValue.pageOptions.rowsPerPage,
        })

        var config = {
          method: 'post',
          url: 'category/get-all-by-filter',
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
  },
  getters: {},
}
