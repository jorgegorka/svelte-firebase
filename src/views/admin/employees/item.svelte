<script>
  import { createEventDispatcher } from 'svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Employees } from '../../../middleware/database/employees'

  export let employee = {}
  let teamName = ''
  const dispatch = createEventDispatcher()

  const deleteEmployee = () => {
    Employees.remove(employee.id)
      .then(
        notificationMessage.set({
          message: 'Employee deleted successfully.',
          type: 'success-toast'
        })
      )
      .catch(error => {
        notificationMessage.set({
          message: error.message,
          type: 'error-toast'
        })
      })
  }

  const editEmployee = () => {
    dispatch('editEmployee', employee)
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
    <a href="#" on:click={deleteEmployee} class="secondary-content" title="Delete {employee.name}">
      <i class="material-icons">delete</i>
    </a>
    <a href="#" on:click={editEmployee} class="secondary-content edit-icon" title="Edit {employee.name}">
      <i class="material-icons">edit</i>
    </a>
  </td>
</tr>
