<script>
  import { Route, navigateTo } from 'svelte-router-spa'

  import Notification from '../../components/notification.svelte'
  import Sidebar from './sidebar/index.svelte'
  import Navigation from './navigation.svelte'
  import { Auth } from '../../../config/firebase'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { currentUser } from '../../../stores/current_user'

  export let currentRoute
  let unsubscribe
  let userInfo = {}
  let visible = false
  let notification = ''

  const logoutUser = () => {
    Auth.signOut().then(() => {
      navigateTo('/')
    })
  }
  console.log(currentRoute)
</script>

{#if $currentUser}
  <div class="app">
    <Navigation />
    <Notification notification={$notificationMessage} {visible} />
    <section class="section">
      <div class="columns">
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <Sidebar currentUser={$currentUser} />
        </div>
        <div class="column">
          <Route {currentRoute} />
        </div>
      </div>
    </section>
  </div>
{/if}
