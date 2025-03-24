import { Props } from '../types/WrapperTypes.ts'

import styles from '../scss/styles.module.scss'

const AuthWrapper = ({ children }: Props) => {
  return (
    <div className={styles['auth_container']}>
      <div className={styles['auth_modal']}>{children}</div>
    </div>
  )
}

export default AuthWrapper
