<script>
  import validate from 'validate.js'
  import { addTeam } from '../../../middleware/teams/crud.js'
  import Modal from '../../components/modal.svelte'
  import TextInput from '../../components/forms/text_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import { currentUser } from '../../../stores/current_user'

  export let team = { name: '' }
  export let showModal = false
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
  let nameError = false
  let nameMessage = ''
  let disableAction = false
  let modalWindow = null

  const resetErrorInfo = () => {
    let nameError = false
    let nameMessage = ''
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

  const updateTeam = async () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      team.createdBy = $currentUser.id
      await addTeam(team)
      showModal = false
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
    <FormButtons cancelText="Cancel" on:cancel submitText="Create team" isLoading={disableAction} />
  </form>
</Modal>
