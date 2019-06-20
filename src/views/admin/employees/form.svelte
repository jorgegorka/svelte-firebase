<script>
  import { onMount } from 'svelte'
  import TextInput from '../../components/forms/text_input.svelte'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'

  import { createEventDispatcher } from 'svelte'

  export let employee = {}
  export let showForm = false
  const employeeConstraints = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    },
    email: {
      presence: true,
      email: true
    }
  }
  const dispatch = createEventDispatcher()
  let formTitle = 'New employee'
  let nameError = false
  let nameMessage = ''
  let emailError = false
  let emailMessage = ''
  let disableAction = false
  let modalWindow = null

  const resetErrorInfo = () => {
    let nameError = false
    let nameMessage = ''
    let emailError = false
    let emailMessage = ''
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    const validationResult = validate({ name, email, password }, signupConstraints)
    if (!validationResult) {
      return true
    } else {
      if (validationResult.email && validationResult.email.length > 0) {
        emailMessage = validationResult.email[0]
        emailError = true
      }
      if (validationResult.name && validationResult.name.length > 0) {
        nameMessage = validationResult.name[0]
        nameError = true
      }
    }

    return false
  }

  const updateUser = async () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      console.log(employee)
    } else {
      disableAction = false
    }
  }

  const addUser = () => {
    dispatch('cancel')
  }
</script>

<!-- <div id="employees-modal" class="modal">
  <div class="modal-content">
    <h4>{formTitle}</h4>
    <form ref="form" on:submit|preventDefault={updateUser}>
      <TextInput
        bind:value={employee.name}
        error={nameError}
        label="Your name"
        icon="person"
        isFocused={true}
        errorMessage={nameMessage} />
      <EmailInput bind:value={employee.email} error={emailError} errorMessage={emailMessage} />
      <FormButtons cancelText="Cancel" on:cancel submitText="Create employee" isLoading={disableAction} />
    </form>
  </div>
</div> -->
