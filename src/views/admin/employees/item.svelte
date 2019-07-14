<script>
  import { createEventDispatcher } from 'svelte'

  export let employee = {}
  let teamName = ''
  const dispatch = createEventDispatcher()

  const removeEmployee = () => {
    dispatch('removeEmployee', employee)
  }

  $: if (!employee.teamName) {
    teamName = '- No team assigned -'
  } else {
    teamName = employee.teamName
  }

  const statusIcon = () => {
    if (!employee.active) {
      return 'unarchive'
    } else {
      return 'archive'
    }
  }

  const statusTitle = () => {
    if (!employee.active) {
      return `Activar a ${employee.name}`
    } else {
      return `Archivar a ${employee.name}`
    }
  }
</script>

<style>
  .edit-icon {
    margin-right: 1rem;
  }
</style>

<tr>
  <td>
    <a href={`/admin/employees/show/${employee.id}`}>{employee.name}</a>
  </td>
  <td>{employee.email}</td>
  <td>{teamName}</td>
  <td>{employee.role}</td>
  <td>
    <a href="#" on:click={removeEmployee} class="secondary-content" title={statusTitle()}>
      <i class="material-icons">{statusIcon()}</i>
    </a>
    <a href={`/admin/employees/edit/${employee.id}`} class="secondary-content edit-icon" title="Edit {employee.name}">
      <i class="material-icons">edit</i>
    </a>
  </td>
</tr>
