<script>
  import { notificationMessage } from '../../stores/notification_message.js'

  export let visible = false
  export let notification = ''

  // notificationMessage.set({})

  // $: if (visible) {
  //   bulmaToast.toast({
  //     message: notification.message,
  //     type: notification.type || 'is-primary',
  //     position: 'top-center',
  //     dismissible: true,
  //     pauseOnHover: true,
  //     duration: 6000
  //   })
  // }
</script>
