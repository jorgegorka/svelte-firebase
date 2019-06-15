<script>
  export let name = 'text'
  export let id = 'text'
  export let label = ''
  export let value = ''
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Please enter a value.'
</script>

<div class="field">
  <label for={id} class="label">{label}</label>
  <div class="control" class:has-icons-left={icon}>
    <input
      bind:value
      on:input={() => (error = false)}
      type="text"
      {name}
      {id}
      class="input"
      class:is-danger={error}
      autofocus={isFocused}
      on:blur />
    {#if icon}
      <span class="icon is-small is-left">
        <i class="fa {icon}" />
      </span>
    {/if}
  </div>
  <p class="error-message">
    {#if error}{errorMessage}{/if}
  </p>
</div>
