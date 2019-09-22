<script>
  import { onMount, onDestroy } from 'svelte'
  import { Route } from 'svelte-router-spa'
  import Notification from '../../components/toast/index.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Menu from './menu.svelte'
  import Footer from './footer.svelte'

  export let currentRoute
  export let params = {}

  let visible = false
  let notification = ''

  onMount(function() {
    const unsubscribe = notificationMessage.subscribe(function(currentNotification) {
      if (currentNotification.message && currentNotification.message.length > 0) {
        notification = currentNotification
        visible = true
      } else {
        visible = false
      }
    })
  })

  onDestroy(function() {
    unsubscribe()
  })
</script>

<div class="app">
  <Menu />
  <Notification notification={{ message: 'Hola a todo el mundo mundial' }} visible={true} />
  <main>
    <Route {currentRoute} />
  </main>
  <Footer />
</div>
