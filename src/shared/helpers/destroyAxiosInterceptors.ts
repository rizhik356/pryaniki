import axiosInstance from '../api/axiosInstance.ts'

const destroyAxiosInterceptors = ({
  request,
  response,
}: {
  response: number
  request: number
}) => {
  axiosInstance.interceptors.request.eject(request)
  axiosInstance.interceptors.response.eject(response)
}

export default destroyAxiosInterceptors
