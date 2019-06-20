<script>
  export let cancelText = 'Cancel'
  export let cancelButton = true
  export let submitText = 'Submit'
  export let isLoading = false
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const cancelAction = event => {
    event.preventDefault()
    dispatch('cancel')
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
    <button type="button" on:click={cancelAction} class="btn cancel btn-flat">{cancelText}</button>
  {/if}
  {#if isLoading}
    <div class="preloader-wrapper small active">
      <div class="spinner-layer spinner-green-only">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>
    </div>
  {:else}
    <button type="submit" class="btn green darken-1">{submitText} </button>
  {/if}
</div>
