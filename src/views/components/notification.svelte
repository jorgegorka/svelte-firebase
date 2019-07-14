<script>
  import { onDestroy } from 'svelte'

  import { notificationMessage } from '../../stores/notification_message.js'

  export let visible = false
  export let notification = ''
  let unsubscribe = false

  $: if (!unsubscribe) {
    unsubscribe = notificationMessage.subscribe(currentNotification => {
      if (currentNotification.message && currentNotification.message.length > 0) {
        notification = currentNotification
        visible = true
      } else {
        visible = false
      }
    })
  }

  $: if (visible) {
    M.toast({
      html: notification.message,
      classes: notification.type || 'primary-toast'
    })
  }

  onDestroy(() => {
    unsubscribe()
  })
</script>
