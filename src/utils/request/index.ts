import axios from 'axios'

axios.interceptors.request.use(function (config) {
  return config
})

export default axios.create({
  baseURL: import.meta.env.BASE_URL,
})
