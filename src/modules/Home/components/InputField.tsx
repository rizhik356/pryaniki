import { ErrorMessage, Field } from 'formik'
import { FormHelperText, TextField } from '@mui/material'
import { InputFieldProps } from '../types/TableTypes.ts'

const InputField = ({
  valueKey,
  margin,
  autoFocus,
  label,
  type,
}: InputFieldProps) => {
  return (
    <div key={valueKey}>
      <Field
        as={TextField}
        margin={margin}
        autoFocus={autoFocus}
        label={label}
        type={type}
        fullWidth
        variant={'standard'}
        name={valueKey}
      />
      <ErrorMessage name={valueKey}>
        {(msg) => <FormHelperText error>{msg}</FormHelperText>}
      </ErrorMessage>
    </div>
  )
}

export default InputField
