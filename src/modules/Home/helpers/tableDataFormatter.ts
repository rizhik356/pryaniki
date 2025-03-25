import { Data } from '../types/TableTypes'
import { dateFormatFromIso } from '../../../shared/helpers/dateFormatters.ts'

const tableDataFormatter = (data: Array<Data>) => {
  return data.map(({ companySigDate, employeeSigDate, ...rest }) => {
    return {
      ...rest,
      companySigDate: dateFormatFromIso(companySigDate),
      employeeSigDate: dateFormatFromIso(employeeSigDate),
    }
  })
}

export default tableDataFormatter
