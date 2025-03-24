import { apiUrls, axiosInstance } from '../../../shared/api'

const getTableData = async () => {
  const response = await axiosInstance.get(apiUrls.GET_TABLE_DATA)

  return response.data
}

export default getTableData
