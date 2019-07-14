<script>
  import { createEventDispatcher } from 'svelte'
  import validate from 'validate.js'
  import { Auth, Functions } from '../../../config/firebase'
  import { FirebaseResults } from '../../../middleware/database'
  import { Employees } from '../../../middleware/database/employees'
  import { Teams } from '../../../middleware/database/teams'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import TextInput from '../../components/forms/text_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import Select from '../../components/forms/select.svelte'
  import { currentUser } from '../../../stores/current_user'

  export let employee = { name: '', email: '', password: '', teamId: '' }
  export let showModal = false
  let loading = true

  const dispatch = createEventDispatcher()
  const employeeConstraints = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    },
    email: {
      presence: !employee.id,
      email: true
    },
    password: {
      presence: !employee.id,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    }
  }
  let teams = []
  let submitText = 'Create'
  let nameError = false
  let nameMessage = ''
  let emailError = false
  let emailMessage = ''
  let passwordError = false
  let passwordMessage = ''
  let disableAction = false

  $: if (employee.id) {
    submitText = 'Update employee'
  } else {
    submitText = 'Add employee'
  }

  $: fetchTeams($currentUser.companyId)

  const fetchTeams = companyId => {
    if (!companyId) return
    Teams.findAll(companyId)
      .get()
      .then(querySnapshot => {
        const results = FirebaseResults.map(querySnapshot)
        teams = results.map(team => ({ id: team.id, name: team.name }))
        loading = false
      })
  }

  const updateTeamInfo = () => {
    if (employee.teamId !== '000') {
      const team = teams.find(team => team.id === employee.teamId)
      employee.teamName = team.name
    } else {
      delete employee.teamId
      delete employee.teamName
    }
  }

  const resetErrorInfo = () => {
    nameError = false
    nameMessage = ''
    emailError = false
    emailMessage = ''
    passwordError = false
    passwordMessage = ''
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    const validationResult = validate(
      { name: employee.name, email: employee.email, password: employee.password },
      employeeConstraints
    )

    if (!validationResult) {
      return true
    } else {
      if (validationResult.name && validationResult.name.length > 0) {
        nameMessage = validationResult.name[0]
        nameError = true
      }
      if (validationResult.email && validationResult.email.length > 0) {
        emailMessage = validationResult.email[0]
        emailError = true
      }
      if (validationResult.password && validationResult.password.length > 0) {
        passwordMessage = validationResult.password[0]
        passwordError = true
      }
    }

    return false
  }

  const submitEmployee = () => {
    disableAction = true
    if (validateLoginForm()) {
      if (employee.teamId) {
        updateTeamInfo()
      }
      dispatch('validEmployee', employee)
    }
    disableAction = false
  }
</script>

<form ref="form" on:submit|preventDefault={submitEmployee}>
  <TextInput
    bind:value={employee.name}
    error={nameError}
    label="Employee name"
    icon="person"
    isFocused={true}
    errorMessage={nameMessage} />
  {#if !employee.id}
    <EmailInput
      bind:value={employee.email}
      error={emailError}
      label="Employee e-mail"
      icon="email"
      errorMessage={emailMessage} />
    <PasswordInput
      bind:value={employee.password}
      error={passwordError}
      label="Password"
      icon="lock"
      errorMessage={passwordMessage} />
  {/if}
  <Select
    options={teams}
    bind:value={employee.teamId}
    defaultOption={{ id: '000', name: 'Select a team (opcional)' }} />
  <FormButtons cancelText="Cancel" on:cancel {submitText} isLoading={disableAction} />
</form>
