<script>
  import { onMount, afterUpdate, createEventDispatcher } from 'svelte'
  import { spanishCalendar } from '../../../lib/languages/spanish/calendar_picker'
  export let inputName = 'text'
  export let id = 'datepicker'
  export let label = ''
  export let value = new Date()
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Please enter a value.'

  const dispatch = createEventDispatcher()
  const updateValue = newDate => {
    dispatch(inputName, newDate)
  }
  const datePicker = null
  const options = {
    format: 'dd/mm/yyyy',
    firstDay: 1,
    i18n: spanishCalendar,
    showClearBtn: true,
    onSelect: updateValue,
    defaultDate: value,
    setDefaultDate: true,
    autoClose: true
  }

  onMount(() => {
    const datePicker = document.getElementById(id)
    M.Datepicker.init(datePicker, options)
  })

  afterUpdate(() => {
    M.Datepicker.init(datePicker, options)
  })
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <input
    on:input={() => (error = false)}
    type="text"
    name={inputName}
    {id}
    class="datepicker"
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} data-success="right" />
</div>
