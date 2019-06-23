<script>
  import Item from './item.svelte'
  import Modal from '../../components/modals/modal.svelte'
  import ModalButtons from '../../components/modals/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Teams } from '../../../middleware/database/teams'

  export let filteredTeams = []
  let showModal = false
  let teamId = ''

  const warnUser = event => {
    teamId = event.detail
    showModal = true
  }

  const cancelAction = () => {
    showModal = false
  }

  const deleteTeam = () => {
    showModal = false
    if (teamId) {
      Teams.remove(teamId).then(
        notificationMessage.set({
          message: 'Team deleted successfully.',
          type: 'success-toast'
        })
      )
    }
  }
</script>

<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th># Employees</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each filteredTeams as team (team.id)}
      <Item on:editTeam on:removeTeam={warnUser} {team} />
    {/each}
  </tbody>
</table>
<Modal modalId="deleteTeam" {showModal}>
  <h5>Delete this team?</h5>
  <ModalButtons cancelText="Cancel" submitText="Delete" on:cancel={cancelAction} on:confirmAction={deleteTeam} />
</Modal>
