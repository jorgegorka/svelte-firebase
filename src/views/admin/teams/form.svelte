<script>
  import { createEventDispatcher } from 'svelte'
  import validate from 'validate.js'
  import { Teams } from '../../../middleware/database/teams'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Modal from '../../components/modals/modal.svelte'
  import TextInput from '../../components/forms/text_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import { currentUser } from '../../../stores/current_user'

  export let team = { name: '' }
  export let showModal = false

  const dispatch = createEventDispatcher()
  const teamConstraints = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    }
  }

  let formTitle = 'New team'
  let submitText = 'Create'
  let nameError = false
  let nameMessage = ''
  let disableAction = false
  let modalWindow = null

  $: if (team.id) {
    formTitle = 'Edit team'
    submitText = 'Save'
  } else {
    formTitle = 'New team'
    submitText = 'Create'
  }

  const resetErrorInfo = () => {
    nameError = false
    nameMessage = ''
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    const validationResult = validate({ name: team.name }, teamConstraints)
    if (!validationResult) {
      return true
    } else {
      if (validationResult.name && validationResult.name.length > 0) {
        nameMessage = validationResult.name[0]
        nameError = true
      }
    }

    return false
  }

  const updateTeam = () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      team.createdBy = $currentUser.id
      team.companyId = $currentUser.companyId
      if (team.id) {
        Teams.update(team.id, team).then(
          notificationMessage.set({
            message: 'Team updated successfully.',
            type: 'success-toast'
          })
        )
      } else {
        Teams.add(team).then(
          notificationMessage.set({
            message: 'Team created successfully.',
            type: 'success-toast'
          })
        )
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
  <form ref="form" on:submit|preventDefault={updateTeam}>
    <TextInput
      bind:value={team.name}
      error={nameError}
      label="Team name"
      icon="group_work"
      isFocused={true}
      errorMessage={nameMessage} />
    <FormButtons cancelText="Cancel" on:cancel {submitText} isLoading={disableAction} />
  </form>
</Modal>
