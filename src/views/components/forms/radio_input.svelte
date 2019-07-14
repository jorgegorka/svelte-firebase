<script>
  export let id = 'radio'
  export let label = ''
  export let value = ''
  export let group = 'radio'
  export let checked = false
</script>

<div class="radio-field">
  <label for={id}>
    <input {group} type="radio" name={group} on:click {id} {value} {checked} />
    <span>{label}</span>
  </label>
</div>
