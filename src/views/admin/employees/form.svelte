<script>
  import { afterUpdate } from 'svelte'
  import TextInput from '../../components/form/text_input.svelte'
  import PasswordInput from '../../components/form/password_input.svelte'
  import EmailInput from '../../components/form/email_input.svelte'
  import FormButtons from '../../components/form/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { createEventDispatcher } from 'svelte'

  export let employee = {}
  export let showForm = false
  const dispatch = createEventDispatcher()
  let formTitle = 'New employee'
  let nameError = false
  let nameMessage = ''
  let emailError = false
  let emailMessage = ''
  let disableAction = false
  let modalWindow = null
  const addUser = () => {
    dispatch('close')
    modalWindow.close()
  }
  afterUpdate(() => {
    const elems = document.querySelectorAll('.modal')
    modalWindow = M.Modal.init(elems[0], { dismissible: false })
  })

  $: if (showForm) {
    modalWindow.open()
  }
</script>

<div id="employees-modal" class="modal">
  <div class="modal-content">
    <h4>{formTitle}</h4>
    <form ref="form" on:submit|preventDefault={addUser}>
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
</div>
