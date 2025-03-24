import { viewRoutes } from '../../viewRoutes.ts'
import { HomePage } from '../../../../pages'
import { RouteType } from '../../../../shared/types/RouteTypes.ts'

const AuthRoutes = (): Array<RouteType> => {
  const { home } = viewRoutes
  return [{ element: <HomePage />, path: home, wrapper: 'media', auth: true }]
}

export default AuthRoutes
