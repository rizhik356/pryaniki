import { FormControlOwnProps } from '@mui/material'
import { FormikErrors, FormikValues } from 'formik'
import { StringSchema } from 'yup'

export type Data = {
  id: string | null
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
}

export type BodyProps = {
  rows: Array<Data>
  handleEditClick: (row: Data) => void
  handleDelete: (id: Data['id']) => void
}

export type ModalProps = {
  open: boolean
  handleClose: () => void
  currentRow: Data
  setCurrentRow: (row: Data) => void
  handleSave: (data: Data) => void
}

export type ModalInputs = {
  autoFocus?: boolean
  margin: FormControlOwnProps['margin']
  label: string
  type: string
  valueKey: keyof Data
}

export type RowData = Omit<Data, 'id'>

export type DateFieldProps = Omit<ModalInputs, 'type'> & {
  value: string | null
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<FormikValues>>
}

export type InputFieldProps = ModalInputs

export type ValidationSchema = { [key: string]: StringSchema }
