// @ts-check
import axios from 'axios'
import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = 'https://healtie.herokuapp.com/'

axios.interceptors.request.use(
  (request) => {
    //console.log('Adding token to header', request)
    const isLoggedIn = store.getters['auth/checkIfLoggedIn']
    if (isLoggedIn) {
      request.headers.token = localStorage.getItem('token')
    } else {
      router.push({ name: 'Login Admin' })
    }

    return request
  },
  (err) => {
    console.log('Request timeout')
    if (err.response.data.errorMessage != null) {
      return Promise.reject(err.response.data.errorMessage)
    }
    return Promise.reject(err.message)
  },
)

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // res is the result of the response
    console.log(response)
    return response
  },
  (err) => {
    switch (err.response.status) {
      case 401:
        // Response to successful interception
        console.log('Response Interceptor:')
        // console.log(response.data)

        store.dispatch('auth/attemptRestore')
        // ROLE CHECK IS NEEDED
        router.push({ name: 'Login Admin' })
        break

      default:
        break
    }

    return Promise.reject(err)
  },
)
