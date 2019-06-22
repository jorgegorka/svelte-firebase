<script>
  import { onDestroy } from 'svelte'
  import { Route, navigateTo, Navigate } from 'svelte-router-spa'

  import Header from './header.svelte'
  import { Auth } from '../../../config/firebase'
  import { currentUser } from '../../../stores/current_user'
  import Notification from '../../components/notification.svelte'
  import Loading from '../../components/loading.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  export let currentRoute
  let visible = false
  let notification = ''
  let showPage = false
  const unsubscribe = notificationMessage.subscribe(currentNotification => {
    if (currentNotification.message && currentNotification.message.length > 0) {
      notification = currentNotification
      visible = true
    } else {
      visible = false
    }
  })

  $: if (!$currentUser) {
    showPage = false
  } else {
    if ($currentUser.id === 0) {
      notificationMessage.set({ message: 'Please log in first in order to access this page.', type: 'warning-toast' })
      navigateTo('/login')
    } else {
      showPage = true
    }
  }

  onDestroy(() => {
    unsubscribe()
  })

  const logoutUser = () => {
    Auth.signOut().then(() => {
      notificationMessage.set({ message: "You've been logged out successfully.", type: 'success-toast' })
    })
  }
</script>

<style>
  .sidenav-fixed {
    margin-top: 64px;
  }
</style>

{#if !showPage}
  <Loading />
{:else}
  <div>
    <Notification {notification} {visible} />
    <Header />
    <main>
      <div class="row">
        <div class="col s3">
          <ul id="sidenav-left" class="sidenav sidenav-fixed">
            <li>
              <h5 class="center">Main menu</h5>
            </li>
            <li>
              <Navigate to="/admin/">
                Dashboard
                <i class="material-icons left">dashboard</i>
              </Navigate>
            </li>
            <li>
              <Navigate to="/admin/teams">
                Teams
                <i class="material-icons left">group_work</i>
              </Navigate>
            </li>
            <li>
              <Navigate to="/admin/employees">
                Employees
                <i class="material-icons left">person_pin</i>
              </Navigate>
            </li>
          </ul>
        </div>

        <div class="col s9">
          <Route {currentRoute} />
        </div>
      </div>
    </main>
  </div>
{/if}
