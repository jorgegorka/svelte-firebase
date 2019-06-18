import App from './App.svelte'
import { SpaRouter } from 'svelte-router-spa'
import { routes } from './routes'
import NotFound from './views/404.svelte'
import './middleware/users/auth'

SpaRouter({
  routes,
  pathName: document.location.href,
  notFound: NotFound
}).getActiveRoute

const app = new App({
  target: document.body
})

export default app
