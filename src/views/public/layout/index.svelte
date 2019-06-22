<script>
  import { onDestroy } from 'svelte'
  import { Route } from 'svelte-router-spa'
  import Notification from '../../components/notification.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Footer from './footer.svelte'
  export let currentRoute
  let visible = false
  let notification = ''
  const unsubscribe = notificationMessage.subscribe(currentNotification => {
    if (currentNotification.message && currentNotification.message.length > 0) {
      notification = currentNotification
      visible = true
    } else {
      visible = false
    }
  })

  onDestroy(() => {
    unsubscribe()
  })
</script>

<div class="app">
  <Notification {notification} {visible} />
  <section class="section">
    <Route {currentRoute} />
  </section>
  <Footer />
</div>
