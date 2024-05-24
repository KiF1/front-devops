import axios from 'axios'

const api = axios.create({
  baseURL: 'http://18.209.19.26:3333',
})

export default api
