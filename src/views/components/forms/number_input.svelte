<script>
  import { afterUpdate } from 'svelte'

  export let inputName = 'number'
  export let id = 'number'
  export let maxlength = 40
  export let label = ''
  export let value = ''
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Por favor introduce un valor'

  afterUpdate(() => {
    M.updateTextFields()
  })
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <input
    bind:value
    on:input={event => {
      const number = event.target.value
      if (number.length > maxlength) {
        value = number.slice(0, maxlength)
      }
      error = false
    }}
    type="number"
    name={inputName}
    {id}
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} data-success="right" />
</div>
