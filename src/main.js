import App from './App.svelte'
import './middleware/users/auth'

const app = new App({
  target: document.body,
})

export default app
