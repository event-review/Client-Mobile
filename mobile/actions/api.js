import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.43.195:3000/'
})