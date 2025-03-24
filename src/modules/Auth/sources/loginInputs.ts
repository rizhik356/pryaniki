import { LoginInput } from '../types/LoginTypes.ts'

const loginInputs: Array<LoginInput> = [
  { name: 'username', label: 'Логин', variant: 'outlined', fullWidth: true },
  { name: 'password', label: 'Пароль', variant: 'outlined', fullWidth: true },
]

export default loginInputs
