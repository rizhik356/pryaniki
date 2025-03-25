import { RowData } from '../types/TableTypes.ts'
import { apiUrls, axiosInstance } from '../../../shared/api'

const editRow = async (data: RowData, id: string) => {
  return await axiosInstance.post(`${apiUrls.EDIT_ROW_DATA}/${id}`, data)
}

export default editRow
