import * as Yup from 'yup'
import modalInputs from '../sources/modalInputs.ts'
import { ValidationSchema } from '../types/TableTypes.ts'

const modalValidationSchema = Yup.object().shape(
  modalInputs.reduce((acc, { valueKey }): ValidationSchema => {
    acc[valueKey] = Yup.string().required('Это поле обязательно')
    return acc
  }, {} as ValidationSchema),
)

export default modalValidationSchema
