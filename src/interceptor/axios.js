// @ts-check
import axios from 'axios'

axios.interceptors.request.use((request) => {
  console.log('Adding token to header', request)
})
