import { Data } from '../types/TableTypes.ts'
import { apiUrls, axiosInstance } from '../../../shared/api'

const editRow = async (data: Data, id: string) => {
  const response = await axiosInstance.post(
    `${apiUrls.EDIT_ROW_DATA}/${id}`,
    data,
  )

  return response.data
}

export default editRow
