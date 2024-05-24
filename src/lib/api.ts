import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.242.61.98:3333',
})

export default api
