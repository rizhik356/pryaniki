import { Data } from '../types/TableTypes'
import dateFormatter from '../../../shared/helpers/dateFormatter.ts'

const tableDataFormatter = (data: Array<Data>) => {
  return data.map(({ companySigDate, employeeSigDate, ...rest }) => {
    return {
      ...rest,
      companySigDate: dateFormatter(companySigDate),
      employeeSigDate: dateFormatter(employeeSigDate),
    }
  })
}

export default tableDataFormatter
