import { Data } from '../types/TableTypes.ts'
import { dateFormatToIso } from '../../../shared/helpers/dateFormatters.ts'

const rowData = ({companySigDate, employeeSigDate, ...rest}: Data) => {
  return ({
    companySigDate: dateFormatToIso(companySigDate),
    employeeSigDate: dateFormatToIso(employeeSigDate),
    ...rest
  })
}

export default rowData;