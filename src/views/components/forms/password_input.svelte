<script>
  export let inputName = 'password'
  export let id = 'password'
  export let label = 'Contraseña'
  export let value = ''
  export let placeholder = ''
  export let icon = 'lock'
  export let error = false
  export let isFocused = false
  export let hintMessage = 'At least 6 characters'
</script>

<div class="form-element pb-4">
  <label class="text-gray-700" for={id}>{label}</label>
  <!-- svelte-ignore a11y-autofocus -->
  <div class="relative">
    {#if icon}
      <div class=" absolute inset-y-0 left-0 pl-2 text-gray-600 flex items-center">
        <i class="material-icons">{icon}</i>
      </div>
    {/if}
    <input
      bind:value
      autofocus={isFocused}
      on:blur
      on:input={() => (error = false)}
      name={inputName}
      type="password"
      class="form-input mt-1 block w-full text-lg z-50 {icon ? 'pl-10' : ''}"
      class:invalidInput={error}
      {placeholder} />
  </div>
  <span class="text-sm {error ? 'hintError' : 'hint'}">{hintMessage}</span>
</div>
