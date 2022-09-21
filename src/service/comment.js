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
        console.log(articleUUIDandPageOptions)
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
            commentUUIDandPageOptions.commentData.uuid +
            '?pageNumber=' +
            commentUUIDandPageOptions.pageNumber +
            '&pageSize=' +
            commentUUIDandPageOptions.pageSize,
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
    async addReply(state, commentUUIDandContent) {
      if (store.getters['auth/checkIfLoggedIn']) {
        var axios = require('axios')
        var data = JSON.stringify({
          language: 'TR',
          content: commentUUIDandContent.replyContent.text,
          parentUuid: commentUUIDandContent.selectedComment.uuid,
        })

        var config = {
          method: 'post',
          url: 'comment/' + commentUUIDandContent.articleUUID,
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
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
