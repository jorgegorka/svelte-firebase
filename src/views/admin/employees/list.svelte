<script>
  import Item from './item.svelte'
  import Modal from '../../components/modals/modal.svelte'
  import ModalButtons from '../../components/modals/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Employees } from '../../../middleware/database/employees'

  export let filteredEmployees = []
  let showModal = false
  let employeeId = ''

  const warnUser = event => {
    employeeId = event.detail
    showModal = true
  }

  const cancelAction = () => {
    showModal = false
  }

  const deleteEmployee = () => {
    showModal = false
    if (employeeId) {
      Employees.remove(employeeId)
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
  }
</script>

<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-mail</th>
      <th>Team</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each filteredEmployees as employee (employee.id)}
      <Item on:editEmployee on:removeEmployee={warnUser} {employee} />
    {/each}
  </tbody>
</table>
<Modal modalId="deleteEmployee" {showModal}>
  <h5>Delete this employee?</h5>
  <ModalButtons cancelText="Cancel" submitText="Delete" on:cancel={cancelAction} on:confirmAction={deleteEmployee} />
</Modal>
