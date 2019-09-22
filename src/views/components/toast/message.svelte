<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let notification = {}
  export let index = 0

  const dispatch = createEventDispatcher()

  function closeElement() {
    dispatch('closeNotification', index)
  }

  onMount(function() {
    setTimeout(function() {
      dispatch('closeNotification', index)
    }, 7000)
  })
</script>

<div class="w-full mb-4 p-2 bg-green-300 rounded shadow-lg text-white">
  <div class="close cursor-pointer flex justify-end w-full">
    <svg
      on:click={closeElement}
      class="fill-current text-white h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18">
      <path
        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47
        1.06-1.06L10.06 9z" />
    </svg>
  </div>
  <p class="pb-4">{notification.message}</p>
</div>
