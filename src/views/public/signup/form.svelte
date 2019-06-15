<script>
  import validate from 'validate.js'
  import TextInput from '../../components/form/text_input.svelte'
  import PasswordInput from '../../components/form/password_input.svelte'
  import EmailInput from '../../components/form/email_input.svelte'
  import FormButtons from '../../components/form/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Auth } from '../../../config/firebase'

  const loginConstraints = {
    name: {
      presence: true
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
    const validationResult = validate({ email, password }, loginConstraints)
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
        // There is a new user
        console.log(user)
      }
    } else {
      disableAction = false
    }
  }
</script>

<form ref="form" on:submit|preventDefault={signInUser}>
  <TextInput bind:value={name} error={nameError} label="Your name" isFocused={true} errorMessage={nameMessage} />
  <EmailInput bind:value={email} error={emailError} errorMessage={emailMessage} />
  <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} />
  <FormButtons cancelButton={false} submitText="Login" isLoading={disableAction} />
</form>
