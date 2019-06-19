<script>
  import { notificationMessage } from '../../stores/notification_message.js'

  export let visible = false
  export let notification = ''

  $: if (visible) {
    M.toast({
      html: notification.message,
      classes: notification.type || 'primary-toast'
    })
  }
</script>
