<script>
  import validate from 'validate.js'
  import { createEventDispatcher } from 'svelte'

  import DateInput from './date_input.svelte'

  export let startDate = new Date()
  export let endDate = new Date()
  const dispatch = createEventDispatcher()

  let startDateError = false
  let startDateMessage = ''
  let endDateError = false
  let endDateMessage = ''

  const rangeConstraints = {
    startDate: {
      presence: true
    },
    endDate: {
      presence: true
    }
  }

  const updateStartDate = event => {
    startDate = event.detail
    submitRange()
  }

  const updateEndDate = event => {
    endDate = event.detail
    submitRange()
  }
  const resetErrorInfo = () => {
    startDateError = false
    startDateMessage = ''
    endDateError = false
    endDateMessage = ''
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    let errors = false
    const validationResult = validate({ startDate, endDate }, rangeConstraints)

    if (startDate > endDate) {
      startDateMessage = 'La fecha de inicio debe ser menor que la de fin'
      startDateError = true
      endDateError = true
      errors = true
    }

    if (!validationResult && !errors) {
      return true
    } else {
      if (validationResult && validationResult.startDate && validationResult.startDate.length > 0) {
        startDateMessage = validationResult.startDate[0]
        startDateError = true
      }
      if (validationResult && validationResult.endDate && validationResult.endDate.length > 0) {
        endDateMessage = validationResult.endDate[0]
        endDateError = true
      }
    }
  }

  const submitRange = () => {
    if (validateLoginForm() && startDate <= endDate) {
      dispatch('rangeUpdated', { startDate, endDate })
    }
  }
</script>

<div class="row">
  <div class="col s12 m6">
    <DateInput
      on:startDate={updateStartDate}
      error={startDateError}
      label="Fecha de inicio"
      icon="event"
      inputName="startDate"
      id="startDate"
      value={startDate}
      errorMessage={startDateMessage} />
  </div>
  <div class="col s12 m6">
    <DateInput
      on:endDate={updateEndDate}
      error={endDateError}
      label="Fecha de fin"
      icon="event"
      inputName="endDate"
      id="endDate"
      value={endDate}
      errorMessage={endDateMessage} />
  </div>
</div>
