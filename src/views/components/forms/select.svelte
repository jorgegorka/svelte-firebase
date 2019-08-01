<script>
  import { afterUpdate } from 'svelte'

  export let inputName = 'select'
  export let id = 'selectElement'
  export let label = 'Select'
  export let value = ''
  export let error = false
  export let errorMessage = 'Please select an option'
  export let helpText = ''
  export let options = []
  export let defaultOption = {}

  $: if (defaultOption.id) {
    options.unshift(defaultOption)
  }

  afterUpdate(() => {
    const elems = document.getElementById(id)
    M.FormSelect.init(elems, {})
  })
</script>

<div class="input-field">
  <select bind:value {id} class:invalid={error}>
    {#each options as option (option.id)}
      <option value={option.id}>{option.name}</option>
    {/each}
  </select>
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage}>{helpText}</span>
</div>
