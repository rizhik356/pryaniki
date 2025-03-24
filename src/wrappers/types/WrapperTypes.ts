import { ReactNode } from 'react'

export type Children = ReactNode

export type Wrappers = {
  auth: (children: Children) => ReactNode
  media: (children: Children) => ReactNode
}

export type Props = {
  children: Children
}
