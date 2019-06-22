<script>
  import { createEventDispatcher } from 'svelte'
  import validate from 'validate.js'
  import { Auth, Functions } from '../../../config/firebase'
  import { FirebaseResults } from '../../../middleware/database'
  import { Employees } from '../../../middleware/database/employees'
  import { Teams } from '../../../middleware/database/teams'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Modal from '../../components/modal.svelte'
  import TextInput from '../../components/forms/text_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import Select from '../../components/forms/select.svelte'
  import { currentUser } from '../../../stores/current_user'

  export let employee = { name: '', email: '', password: '', teamId: '' }
  export let showModal = false

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
      presence: !!employee.id,
      email: true
    },
    password: {
      presence: !!employee.id,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    }
  }
  let teams = []
  let formTitle = 'New employee'
  let submitText = 'Create'
  let nameError = false
  let nameMessage = ''
  let emailError = false
  let emailMessage = ''
  let passwordError = false
  let passwordMessage = ''
  let disableAction = false
  let modalWindow = null

  $: if (employee.id) {
    formTitle = 'Edit employee'
    submitText = 'Save'
  } else {
    formTitle = 'New employee'
    submitText = 'Create'
  }

  $: fetchTeams($currentUser.companyId)

  const fetchTeams = companyId => {
    if (!companyId) return
    Teams.findAll(companyId)
      .get()
      .then(querySnapshot => {
        const results = FirebaseResults.map(querySnapshot)
        teams = results.map(team => ({ id: team.id, name: team.name }))
      })
  }

  const updateTeamInfo = () => {
    const team = teams.find(team => team.id === employee.teamId)
    employee.teamName = team.name
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

  const updateEmployee = () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      employee.createdBy = $currentUser.id
      employee.companyId = $currentUser.companyId
      if (employee.teamId) {
        updateTeamInfo()
      }
      if (employee.id) {
        Employees.update(employee.id, employee).then(
          notificationMessage.set({
            message: 'Employee updated successfully.',
            type: 'success-toast'
          })
        )
      } else {
        const createEmployee = Functions.httpsCallable('createEmployee')
        createEmployee(employee)
          .then(
            notificationMessage.set({
              message: 'Employee created successfully.',
              type: 'success-toast'
            })
          )
          .catch(error => {
            notificationMessage.set({
              message: error.message,
              type: 'error-toast'
            })
          })
      }
      dispatch('cancel')
      disableAction = false
    } else {
      disableAction = false
    }
  }
</script>

<Modal {showModal}>
  <h4>{formTitle}</h4>
  <form ref="form" on:submit|preventDefault={updateEmployee}>
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
    <Select options={teams} bind:value={employee.teamId} />
    <FormButtons cancelText="Cancel" on:cancel {submitText} isLoading={disableAction} />
  </form>
</Modal>
