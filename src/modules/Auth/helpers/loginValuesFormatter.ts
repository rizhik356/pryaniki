import { Values } from '../types/LoginTypes.ts'

const loginValues = ({ username, password }: Values) => {
  return { username: username.toLowerCase().trim(), password: password }
}

export default loginValues
