import { apiUrls, axiosInstance } from '../../../shared/api'

const removeRow = async (id: string)=> {
  const response = await axiosInstance.post(`${apiUrls.DELETE_ROW_DATA}/${id}`, {})

  return response.data
}

export default removeRow