<script>
  export let id = 'checkbox'
  export let label = ''
  export let group = 'radio'
  export let checked = false
</script>

<div class="radio-field">
  <label for={id}>
    <input type="checkbox" {id} bind:checked />
    <span>{label}</span>
  </label>
</div>
