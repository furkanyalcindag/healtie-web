import router from '@/router'
import store from '@/store/'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getCategories(state, page, filter) {
      // CHECK IF USER LOGGED IN ALREADY
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        let filterBy = filter ? filter : []
        var data = JSON.stringify({
          filters: filterBy,
          pageNumber: page.page - 1,
          pageSize: page.rowsPerPage,
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
    // eslint-disable-next-line
    async getCategory(state, uuid) {},
    async addCategory(state, categoryData) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')
        var data = JSON.stringify(categoryData)
        console.log(data)
        var config = {
          method: 'post',
          url: 'category/',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        const response = await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data.name))
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
    async deleteCategory(state, uuid) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        var axios = require('axios')

        var config = {
          method: 'delete',
          url: 'category/' + uuid,
          headers: {},
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
    // eslint-disable-next-line
    async updateCategory(state, newCategoryData) {
      if (store.getters['auth/checkIfLoggedIn']) {
        // ROLE CHECK IS NEEDED HERE DUE BY SECURITY
        newCategoryData.parentList = !newCategoryData.parentList
          ? []
          : newCategoryData.parentList
        newCategoryData.parentList = newCategoryData.parentList.map(
          (category) => {
            return category.uuid
          },
        )
        var axios = require('axios')
        var data = JSON.stringify({
          language: newCategoryData.language,
          name: newCategoryData.name,
          parentList: newCategoryData.parentList,
        })

        var config = {
          method: 'put',
          url: 'category/' + newCategoryData.uuid,
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
        // ROLE CHECK IS NEEDED HERE
        router.push({ name: 'Login Admin' })
      }
    },
  },
  getters: {},
}
