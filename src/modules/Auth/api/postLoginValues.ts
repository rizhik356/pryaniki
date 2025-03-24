import { Values } from '../types/LoginTypes.ts'
import { apiUrls, axiosInstance } from '../../../shared/api'

const postLoginValues = async (values: Values) => {
  const response = await axiosInstance.post(apiUrls.POST_LOGIN, values)

  return response.data
}

export default postLoginValues
