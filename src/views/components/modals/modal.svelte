<script>
  import { onMount } from 'svelte'

  export let showModal
  export let modalId = 'modalWindow'
  let modalWindow

  onMount(() => {
    const modalElement = document.getElementById(modalId)
    modalWindow = M.Modal.init(modalElement, { dismissible: false })
  })

  $: if (showModal && modalWindow && !modalWindow.isOpen) {
    modalWindow.open()
  }

  $: if (!showModal && modalWindow && modalWindow.isOpen) {
    modalWindow.close()
  }
</script>

<div id={modalId} class="modal">
  <div class="modal-content">
    <slot />
  </div>
</div>
