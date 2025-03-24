import { ReactNode } from 'react'

import { Wrappers } from '../../wrappers'

export type RouteType = {
  element: ReactNode
  path: string
  wrapper?: keyof Wrappers
  auth?: boolean
}
