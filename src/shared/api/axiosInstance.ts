import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://test.v5.pryaniky.com`,
})

export default axiosInstance
