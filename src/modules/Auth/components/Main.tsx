import styles from '../scss/styles.module.scss'
import FormContainer from './FormContainer.tsx'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../shared/hooks'
import { getToken } from '../../../shared/store'
import { viewRoutes } from '../../../constants/routes'

const Main = () => {
  const location = useLocation()
  const token = useAppSelector(getToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate(viewRoutes.home)
    }
  }, [location])

  return (
    <div className={styles.modal}>
      <div className={`${styles.side} ${styles.logo}`}></div>
      <FormContainer />
    </div>
  )
}

export default Main
