<script>
  import Item from './item.svelte'
  import Modal from '../../components/modals/modal.svelte'
  import ModalButtons from '../../components/modals/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Employees } from '../../../middleware/database/employees'

  export let filteredEmployees = []
  let showModal = false
  let employee = ''

  const warnUser = event => {
    employee = event.detail
    showModal = true
  }

  const cancelAction = () => {
    showModal = false
  }

  const confirmTitle = () => {
    if (employee && employee.active) {
      return 'Archive'
    } else {
      return 'Activate'
    }
  }

  const archiveEmployee = () => {
    showModal = false
    if (employee.id) {
      Employees.toggleStatus(employee)
        .then(
          notificationMessage.set({
            message: 'Employee status updated successfully',
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
<Modal modalId="archiveEmployee" {showModal}>
  {#if employee && employee.active}
    <h5>Archive employee?</h5>
    <p>Archived employees can not access the application but their data is kept.</p>
  {:else}
    <h5>Activate employee?</h5>
    <p>Active employees can access the application.</p>
  {/if}
  <ModalButtons
    cancelText="Cancel"
    submitText={confirmTitle()}
    on:cancel={cancelAction}
    on:confirmAction={archiveEmployee} />
</Modal>
