import { CreateRoutes } from './constants/routes'
import { useEffect, useState } from 'react'
import { setToken } from './shared/store/slices/authSlice.ts'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(setToken(token))
    }
    setLoading(false)
  }, [])
  return !loading && <CreateRoutes />
}

export default App
