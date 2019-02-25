import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3000/'
  // baseURL: 'http://172.16.0.153:3000/'
  // baseURL: 'http://127.0.0.1:3000/'
})