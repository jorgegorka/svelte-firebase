<script>
  import { createEventDispatcher } from 'svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Teams } from '../../../middleware/database/teams'

  export let team = {}
  const dispatch = createEventDispatcher()

  const deleteTeam = () => {
    if (team && team.employeesCount === 0) {
      Teams.remove(team.id).then(
        notificationMessage.set({
          message: 'Team deleted successfully.',
          type: 'success-toast'
        })
      )
    }
  }

  const editTeam = () => {
    dispatch('editTeam', team)
  }
</script>

<style>
  .edit-icon {
    margin-right: 1rem;
  }
</style>

<tr>
  <td>
    <a href={`/admin/teams/show/${team.id}`}>{team.name}</a>
  </td>
  <td class="left"> {team.employeesCount} </td>
  <td>
    {#if team.employeesCount === 0}
      <a href="#" on:click={deleteTeam} class="secondary-content" title="Delete {team.name}">
        <i class="material-icons">delete</i>
      </a>
    {/if}
    <a href="#" on:click={editTeam} class="secondary-content edit-icon" title="Edit {team.name}">
      <i class="material-icons">edit</i>
    </a>
  </td>
</tr>
