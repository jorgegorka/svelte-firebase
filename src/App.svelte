<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import '../node_modules/materialize-css/dist/css/materialize.min.css'
  import '../node_modules/materialize-css/dist/js/materialize.min.js'
</script>

<Router {routes} />
