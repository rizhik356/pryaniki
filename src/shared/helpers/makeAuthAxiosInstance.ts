import { axiosInstance } from '../api'
import { viewRoutes } from '../../constants/routes'
import { store } from '../store'
import { removeToken } from '../store/slices/authSlice.ts'

const makeAuthAxiosInstance = (
  token: string,
  navigate: (path: string) => void,
) => {
  const request = axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['x-auth'] = `${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  const response = axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error?.response?.status === 401) {
        localStorage.removeItem('token')
        store.dispatch(removeToken())
        navigate(viewRoutes.auth)
      }
      return Promise.reject(error)
    },
  )

  return { request, response }
}

export default makeAuthAxiosInstance
