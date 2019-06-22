<script>
  import { onDestroy } from 'svelte'
  import { Route, navigateTo } from 'svelte-router-spa'

  import Header from './header.svelte'
  import Sidebar from './sidebar/index.svelte'
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
</script>

{#if !showPage}
  <Loading />
{:else}
  <div>
    <Notification {notification} {visible} />
    <Header />
    <main>
      <div class="row">
        <div class="col s3 hide-on-med-and-down">
          <Sidebar currentUser={$currentUser} />
        </div>

        <div class="col s12 l9">
          <Route {currentRoute} />
        </div>
      </div>
    </main>
  </div>
{/if}
