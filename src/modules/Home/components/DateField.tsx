import { DateTimeField } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { dateFormats } from '../../../constants/dateFormats.ts'
import { ErrorMessage } from 'formik'
import { FormHelperText } from '@mui/material'
import { DateFieldProps } from '../types/TableTypes.ts'

const DateField = ({
  valueKey,
  margin,
  autoFocus,
  label,
  value,
  setFieldValue,
}: DateFieldProps) => {
  const handleChange = (newValue: Dayjs | null) => {
    if (newValue) {
      const formatValue = dayjs(newValue).format(dateFormats.clientFormat)
      setFieldValue(valueKey, formatValue, true)
    } else {
      setFieldValue(valueKey, '', true)
    }
  }

  return (
    <div key={valueKey}>
      <DateTimeField
        key={valueKey}
        margin={margin}
        autoFocus={autoFocus}
        label={label}
        fullWidth
        format="L HH:mm:ss"
        variant={'standard'}
        value={value ? dayjs(value, dateFormats.clientFormat) : null}
        onChange={handleChange}
      />
      <ErrorMessage name={valueKey}>
        {(msg) => <FormHelperText error>{msg}</FormHelperText>}
      </ErrorMessage>
    </div>
  )
}

export default DateField
