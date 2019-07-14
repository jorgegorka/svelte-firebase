<script>
  import { format } from 'date-fns'
  import { onMount, afterUpdate, createEventDispatcher } from 'svelte'

  export let inputName = 'text'
  export let id = 'timepicker'
  export let label = ''
  export let value = format(new Date(), 'HH:mm')
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Por favor, añade horas y minutos.'
  const timePicker = null
  const dispatch = createEventDispatcher()

  const updateValue = (hours, minutes) => {
    const eventName = `${id}Updated`
    dispatch(eventName, `${hours}:${minutes}`)
  }

  const options = {
    defaultTime: value,
    twelveHour: false,
    i18n: { cancel: 'Cancelar', clear: 'Borrar', done: 'Guardar' },
    showClearBtn: false,
    onSelect: updateValue
  }

  onMount(() => {
    const timePicker = document.getElementById(id)
    M.Timepicker.init(timePicker, options)
  })

  afterUpdate(() => {
    M.Timepicker.init(timePicker, options)
  })
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <input
    bind:value
    on:input={() => (error = false)}
    type="text"
    name={inputName}
    {id}
    class="timepicker"
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} data-success="right" />
</div>
