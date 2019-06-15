import { publicRoutes } from './lib/routes/public'
import { protectedRoutes } from './lib/routes/protected'

const routes = [...publicRoutes, ...protectedRoutes]

export { routes }
