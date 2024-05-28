import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.234.111.72:3333',
})

export default api
