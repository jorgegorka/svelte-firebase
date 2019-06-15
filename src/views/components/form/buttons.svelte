<script>
  export let cancelText = 'Cancel'
  export let cancelButton = true
  export let submitText = 'Submit'
  export let isLoading = false
  const cancelAction = event => {
    event.preventDefault()
    return true
  }
</script>

<style>
  .form-buttons {
    display: flex;
    justify-content: flex-end;
  }
  .cancel {
    margin-right: 1em;
  }
</style>

<div class="field form-buttons">
  {#if cancelButton}
    <button type="button" on:click={cancelAction} class="button cancel is-outlined">{cancelText}</button>
  {/if}
  <button type="submit" class="button is-success" class:is-loading={isLoading}> {submitText} </button>
</div>
