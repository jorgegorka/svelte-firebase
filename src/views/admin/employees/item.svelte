<script>
  import { createEventDispatcher } from 'svelte'

  export let employee = {}
  let teamName = ''
  const dispatch = createEventDispatcher()

  const editEmployee = () => {
    dispatch('editEmployee', employee)
  }

  const removeEmployee = () => {
    dispatch('removeEmployee', employee.id)
  }

  $: if (!employee.teamName) {
    teamName = '- Not assigned -'
  } else {
    teamName = employee.teamName
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
  <td>{employee.email} </td>
  <td>{teamName} </td>
  <td>{employee.status} </td>
  <td>
    <a href="#" on:click={removeEmployee} class="secondary-content" title="Delete {employee.name}">
      <i class="material-icons">delete</i>
    </a>
    <a href="#" on:click={editEmployee} class="secondary-content edit-icon" title="Edit {employee.name}">
      <i class="material-icons">edit</i>
    </a>
  </td>
</tr>
