<script>
  import { onMount, onDestroy } from 'svelte'

  import Message from './message.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'

  let unsubscribe
  let notifications = []

  function closeNotification(event) {
    notificationMessage.remove(event.detail)
  }

  onMount(function() {
    const unsubscribe = notificationMessage.subscribe(function(currentNotifications) {
      console.log(currentNotifications)
      notifications = [...currentNotifications]
    })
  })

  onDestroy(function() {
    unsubscribe()
  })
</script>

<div class="alert-toast fixed bottom-0 md:top-0 right-0 md:m-8 w-5/6 w-full md:max-w-sm z-50">
  {#each notifications as notification, index (index)}
    <Message {notification} {index} on:closeNotification={closeNotification} />
  {/each}
</div>
