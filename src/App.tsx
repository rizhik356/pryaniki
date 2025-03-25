import { CreateRoutes } from './constants/routes'
import { useEffect, useState } from 'react'
import { setToken } from './shared/store/slices/authSlice.ts'
import { useDispatch } from 'react-redux'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'
import { ruRU as ruRUMaterial } from '@mui/material/locale'
import { createTheme, ThemeProvider } from '@mui/material'
import { ruRU } from '@mui/x-date-pickers/locales'

dayjs.locale('ru')

function App() {
  const dispatch = useDispatch()

  const russianLocale =
    ruRU.components.MuiLocalizationProvider.defaultProps.localeText

  const [loading, setLoading] = useState(true)

  const appliedTheme = createTheme(ruRUMaterial, ruRU)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(setToken(token))
    }
    setLoading(false)
  }, [])
  return (
    !loading && (
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={russianLocale}
      >
        <ThemeProvider theme={appliedTheme}>
          <CreateRoutes />
        </ThemeProvider>
      </LocalizationProvider>
    )
  )
}

export default App
