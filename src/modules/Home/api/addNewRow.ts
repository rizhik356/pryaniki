import { apiUrls, axiosInstance } from '../../../shared/api'
import { RowData } from '../types/TableTypes.ts'

const addNewRow = async (data: RowData) => {
  const response = await axiosInstance.post(apiUrls.ADD_ROW_DATA, data)

  return response.data
}

export default addNewRow
