import dayjs from 'dayjs'
import { dateFormats } from '../../constants/dateFormats.ts'

const dateFormatFromIso = (isoDate: string) => {
  return isoDate ? dayjs(isoDate).format(dateFormats.clientFormat) : isoDate
}

const dateFormatToIso = (dateString: string) => {
  if (dateString) {
    const date = dayjs(dateString, dateFormats.clientFormat)
    return date.toISOString()
  }
  return dateString
}

export { dateFormatFromIso, dateFormatToIso }
