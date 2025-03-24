import { RootState } from './store.ts'

const getToken = (state: RootState) => state.auth.token

export { getToken }
