import { TextFieldVariants } from '@mui/material'

export type Values = {
  username: string
  password: string
}

export type LoginInput = {
  name: string
  label: string
  variant: TextFieldVariants
  fullWidth?: boolean
}
