<script>
  import { navigateTo } from 'svelte-router-spa'
  import validate from 'validate.js'
  import { Auth, Functions } from '../../../config/firebase'

  import TextInput from '../../components/forms/text_input.svelte'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'

  const signupConstraints = {
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
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: 'must be at least 6 characters'
      }
    }
  }

  let name = ''
  let nameError = false
  let nameMessage = ''
  let email = ''
  let emailError = false
  let emailMessage = ''
  let passwordMessage = ''
  let password = ''
  let passwordError = false
  let disableAction = false

  const resetErrorInfo = () => {
    let nameError = false
    let nameMessage = ''
    let emailError = false
    let emailMessage = ''
    let passwordMessage = ''
    let passwordError = false
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
      if (validationResult.password && validationResult.password.length > 0) {
        passwordMessage = validationResult.password[0]
        passwordError = true
      }
      if (validationResult.name && validationResult.name.length > 0) {
        nameMessage = validationResult.name[0]
        nameError = true
      }
    }

    return false
  }

  const signInUser = async () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      const { user } = await Auth.createUserWithEmailAndPassword(email, password)
      if (user) {
        const createCompany = Functions.httpsCallable('createCompany')
        createCompany({ companyName: name })
          .then(() => {
            notificationMessage.set({
              message: 'Your account was created successfully. Please log in',
              type: 'success-toast'
            })
            // We logout the user to generate a new jwt with right token info
            Auth.signOut().then(() => {
              navigateTo('/login')
            })
          })
          .catch(error => {
            notificationMessage.set({ message: error.message, type: 'danger-toast' })
            console.log(error)
          })
      }
    } else {
      disableAction = false
    }
  }
</script>

<form ref="form" on:submit|preventDefault={signInUser}>
  <TextInput
    bind:value={name}
    error={nameError}
    label="Your name"
    icon="person"
    isFocused={true}
    errorMessage={nameMessage} />
  <EmailInput bind:value={email} error={emailError} errorMessage={emailMessage} />
  <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} />
  <FormButtons cancelButton={false} submitText="Create account" isLoading={disableAction} />
</form>
