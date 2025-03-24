import { Children, Wrappers } from '../types/WrapperTypes.ts'
import AuthWrapper from '../components/AuthWrapper.tsx'
import MediaWrapper from '../components/MediaWrapper.tsx'

const wrapperByKey: Wrappers = {
  auth: (children: Children) => <AuthWrapper>{children}</AuthWrapper>,
  media: (children: Children) => <MediaWrapper>{children}</MediaWrapper>,
}

export default wrapperByKey
