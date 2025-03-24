import { Children, Wrappers } from '../types/WrapperTypes.ts'
import wrapperByKey from '../sources/wrapperByKey.tsx'
import { AuthProvider } from '../../providers'

const selectWrapper = (component: Children, wrapper: keyof Wrappers) => {
  return <AuthProvider>{wrapperByKey[wrapper](component)}</AuthProvider>
}

export default selectWrapper
