import { FormControlOwnProps } from '@mui/material'

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
  handleSave: () => void
}

export type ModalInputs = {
  autoFocus?: boolean
  margin: FormControlOwnProps['margin']
  label: string
  type: string
  valueKey: keyof Data
}
