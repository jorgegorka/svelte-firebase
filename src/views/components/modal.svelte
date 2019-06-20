<script>
  import { onMount } from 'svelte'

  export let showModal
  let modalWindow

  onMount(() => {
    const modalElement = document.getElementById('modalWindow')
    modalWindow = M.Modal.init(modalElement, { dismissible: false })
  })

  $: if (showModal && modalWindow && !modalWindow.isOpen) {
    console.log('again')

    modalWindow.open()
  }
</script>

<div id="modalWindow" class="modal">
  <div class="modal-content">
    <slot />
  </div>
</div>
