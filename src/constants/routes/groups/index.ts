import AuthRoutes from './Auth/AuthRoutes.tsx'
import HomeRoutes from './Home/HomeRoutes.tsx'

const routes = [...AuthRoutes(), ...HomeRoutes()]

export { routes }
