import { viewRoutes } from '../../viewRoutes.ts'
import { AuthPage } from '../../../../pages'
import { RouteType } from '../../../../shared/types/RouteTypes.ts'

const AuthRoutes = (): Array<RouteType> => {
  const { auth } = viewRoutes
  return [{ element: <AuthPage />, path: auth, wrapper: 'auth' }]
}

export default AuthRoutes
