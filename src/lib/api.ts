import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.90.245.34:3333',
})

export default api
