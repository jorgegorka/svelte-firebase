import Login from '../../views/public/login/index.svelte'
import Signup from '../../views/public/signup/index.svelte'
import PublicIndex from '../../views/public/home/index.svelte'
import PublicLayout from '../../views/public/layout/index.svelte'

const publicRoutes = [
  {
    name: '/',
    component: PublicIndex
  },
  { name: 'login', component: Login, layout: PublicLayout },
  { name: 'signup', component: Signup, layout: PublicLayout }
]

export { publicRoutes }
