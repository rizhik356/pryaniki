import { useAppSelector } from '../../shared/hooks'
import { getToken } from '../../shared/store'
import { useNavigate } from 'react-router-dom'
import { ReactNode, useEffect } from 'react'
import makeAuthAxiosInstance from '../../shared/helpers/makeAuthAxiosInstance.ts'
import destroyAxiosInterceptors from '../../shared/helpers/destroyAxiosInterceptors.ts'
import { useState } from 'react'
import { AxiosData } from '../types/AxiosData.ts'
import { viewRoutes } from '../../constants/routes'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(getToken)
  const navigate = useNavigate()

  const [axiosInstanceId, setAxiosInstanceId] = useState<AxiosData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      const axiosId = makeAuthAxiosInstance(token, navigate)
      setAxiosInstanceId(axiosId)
      setLoading(false)
    } else if (axiosInstanceId) {
      destroyAxiosInterceptors(axiosInstanceId)
      setAxiosInstanceId(null)
      navigate(viewRoutes.auth)
    }
    //  navigate(viewRoutes.auth)
  }, [token])

  return !loading && children
}

export default AuthProvider
