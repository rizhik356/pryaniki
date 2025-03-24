import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Props } from '../types/WrapperTypes.ts'
import styles from '../scss/styles.module.scss'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../shared/store/slices/authSlice.ts'
import { useNavigate } from 'react-router-dom'
import { viewRoutes } from '../../constants/routes/viewRoutes.ts'

const AuthWrapper = ({ children }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(removeToken())
    localStorage.removeItem('token')
    navigate(viewRoutes.auth)
  }

  return (
    <div className={styles['media_container']}>
      <AppBar position="sticky" className={styles['media_container_header']}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Пряники здесь
          </Typography>
          <Button onClick={logOut} color="inherit">
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
      <div className={styles['media_container_inner']}>{children}</div>
    </div>
  )
}

export default AuthWrapper
