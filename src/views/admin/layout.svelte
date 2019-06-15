<script>
  import { onMount, onDestroy } from 'svelte'
  import { Route, navigateTo } from 'svelte-router-spa'
  import { Auth } from '../../config/firebase'
  import { notificationMessage } from '../../stores/notification_message.js'

  import { currentUser } from '../../stores/current_user'

  export let currentRoute
  let unsubscribe
  let userInfo = {}

  onMount(() => {
    unsubscribe = currentUser.subscribe(user => {
      userInfo = user
      if (!userInfo.id) {
        navigateTo('/')
      }
    })
  })

  onDestroy(() => {
    unsubscribe()
  })

  const logoutUser = () => {
    Auth.signOut().then(() => {
      navigateTo('/')
    })
  }
</script>

<div>
  <h1>Admin Layout. Welcome!</h1>
  <Route {currentRoute} />
  <a href="#" on:click={logoutUser}>Log out</a>
</div>
