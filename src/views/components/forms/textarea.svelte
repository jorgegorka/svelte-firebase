<script>
  export let inputName = 'textarea'
  export let id = 'textarea'
  export let label = ''
  export let value = ''
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Añade una descripción.'
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <textarea
    bind:value
    on:input={() => (error = false)}
    name={inputName}
    {id}
    class="materialize-textarea"
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} data-success="right" />
</div>
