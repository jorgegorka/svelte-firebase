<script>
  import { format } from 'date-fns'
  import validate from 'validate.js'
  import { createEventDispatcher } from 'svelte'

  import TimeInput from './time_input.svelte'

  export let startTime = format(new Date(), 'HH:mm')
  export let endTime = format(new Date(), 'HH:mm')
  const dispatch = createEventDispatcher()

  let startTimeError = false
  let startTimeMessage = ''
  let endTimeError = false
  let endTimeMessage = ''

  const rangeConstraints = {
    startTime: {
      presence: true
    },
    endTime: {
      presence: true
    }
  }

  const updateStartTime = event => {
    startTime = event.detail
    submitRange()
  }

  const updateEndTime = event => {
    endTime = event.detail
    submitRange()
  }
  const resetErrorInfo = () => {
    startTimeError = false
    startTimeMessage = ''
    endTimeError = false
    endTimeMessage = ''
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    let errors = false
    const validationResult = validate({ startTime, endTime }, rangeConstraints)

    if (!validationResult && !errors) {
      return true
    } else {
      if (validationResult && validationResult.startTime && validationResult.startTime.length > 0) {
        startTimeMessage = validationResult.startTime[0]
        startTimeError = true
      }
      if (validationResult && validationResult.endTime && validationResult.endTime.length > 0) {
        endTimeMessage = validationResult.endTime[0]
        endTimeError = true
      }
    }
  }

  const submitRange = () => {
    if (validateLoginForm()) {
      dispatch('timeRangeUpdated', { startTime, endTime })
    }
  }
</script>

<div class="row">
  <div class="col s12 m6">
    <TimeInput
      on:startTimeUpdated={updateStartTime}
      error={startTimeError}
      label="Hora de inicio"
      icon="event"
      inputName="startTime"
      id="startTime"
      value={startTime}
      errorMessage={startTimeMessage} />
  </div>
  <div class="col s12 m6">
    <TimeInput
      on:endTimeUpdated={updateEndTime}
      error={endTimeError}
      label="Hora de fin"
      icon="event"
      inputName="endTime"
      id="endTime"
      value={endTime}
      errorMessage={endTimeMessage} />
  </div>
</div>
