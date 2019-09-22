<script>
  export let inputName = 'textarea'
  export let id = 'textarea'
  export let label = ''
  export let value = ''
  export let placeholder = ''
  export let icon = null
  export let rows = 3
  export let error = false
  export let isFocused = false
  export let hintMessage = 'Añade una descripción.'
</script>

<div class="form-element pb-4">
  <label class="text-gray-700" for={id}>{label}</label>
  <!-- svelte-ignore a11y-autofocus -->
  <textarea
    bind:value
    autofocus={isFocused}
    on:blur
    on:input={() => (error = false)}
    name={inputName}
    type="text"
    {rows}
    class="form-textarea mt-1 block w-full text-lg z-50 {icon ? 'pl-10' : ''}"
    class:invalidInput={error}
    {placeholder} />

  <span class="text-sm {error ? 'hintError' : 'hint'}">{hintMessage}</span>
</div>
