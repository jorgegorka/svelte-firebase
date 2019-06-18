<script>
  import { Route } from 'svelte-router-spa'

  export let currentRoute
</script>

<Route {currentRoute} />
