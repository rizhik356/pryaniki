import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import { routes } from './groups'
import { selectWrapper } from '../../wrappers'
import { viewRoutes } from './viewRoutes.ts'
import { useAppSelector } from '../../shared/hooks'
import { getToken } from '../../shared/store'

const CreatePages = () => {
  const token = useAppSelector(getToken)

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ element, path, wrapper, auth }) => {
          const newRoute = (
            <Route
              path={path}
              element={wrapper ? selectWrapper(element, wrapper) : element}
              key={path}
            />
          )
          if (auth) {
            return token ? (
              newRoute
            ) : (
              <Route
                path={path}
                element={<Navigate to={viewRoutes.auth} />}
                key={path}
              />
            )
          }
          return newRoute
        })}
        <Route
          path="/pryaniki/"
          element={<Navigate to={token ? viewRoutes.home : viewRoutes.auth} />}
        />
        <Route path="*" element={<>nikogo net</>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CreatePages
