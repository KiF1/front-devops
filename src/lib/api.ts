import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.196.243.201:3333',
})

export default api
