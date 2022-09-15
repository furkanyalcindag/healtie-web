import router from '@/router'
import store from '@/store'

/* eslint-disable */
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getParentCommentsFromArticle(state, articleUUIDandPageOptions) {
      // CHECK IF USER LOGGED IN ALREADY
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        var config = {
          method: 'get',
          url:
            'comment/article/' +
            articleUUIDandPageOptions.articleUUID +
            '?pageNumber=' +
            articleUUIDandPageOptions.pageOptions.number +
            '&pageSize=' +
            articleUUIDandPageOptions.pageOptions.size,
          headers: {},
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
    async getRepliesFromComment(state, commentUUIDandPageOptions) {
      // CHECK IF USER LOGGED IN ALREADY
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')

        var config = {
          method: 'get',
          url:
            'comment/comment/' +
            commentUUIDandPageOptions.commentUUID +
            '?pageNumber=' +
            commentUUIDandPageOptions.pageOptions.number +
            '&pageSize=' +
            commentUUIDandPageOptions.pageOptions.size,
          headers: {},
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
