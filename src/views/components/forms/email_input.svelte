<script>
  export let inputName = 'email'
  export let id = 'email'
  export let label = 'E-Mail'
  export let value = ''
  export let icon = 'email'
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Please enter a valid email'
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <input
    bind:value
    on:input={() => (error = false)}
    type="email"
    name={inputName}
    {id}
    class="validate"
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} />
</div>
