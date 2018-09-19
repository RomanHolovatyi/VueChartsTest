import Vue from 'vue'
import Axios from 'axios'
import { api } from '@/modules/api'


const instance = Axios.create({
  baseURL: api.baseUrl
})

// Add axios instance to the store and Vue prototype
Vue.prototype.$axios = instance

export default instance
