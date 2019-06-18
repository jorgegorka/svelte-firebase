<script>
  import { Route, navigateTo } from 'svelte-router-spa'

  import Header from './header.svelte'
  import { Auth } from '../../../config/firebase'
  import { currentUser } from '../../../stores/current_user'

  export let currentRoute

  const logoutUser = () => {
    Auth.signOut().then(() => {
      navigateTo('/')
    })
  }
</script>

{#if $currentUser}
  <Header />
  <main>
    <div class="container">
      <Route {currentRoute} />
    </div>
  </main>
{/if}
