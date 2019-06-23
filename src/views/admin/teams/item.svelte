<script>
  import { createEventDispatcher } from 'svelte'

  export let team = {}
  const dispatch = createEventDispatcher()

  const editTeam = () => {
    dispatch('editTeam', team)
  }

  const removeTeam = () => {
    dispatch('removeTeam', team.id)
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
      <a href="#" on:click={removeTeam} class="secondary-content" title="Delete {team.name}">
        <i class="material-icons">delete</i>
      </a>
    {/if}
    <a href="#" on:click={editTeam} class="secondary-content edit-icon" title="Edit {team.name}">
      <i class="material-icons">edit</i>
    </a>
  </td>
</tr>
