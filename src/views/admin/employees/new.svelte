<script>
  import { Functions } from '../../../config/firebase'
  import { navigateTo } from 'svelte-router-spa'
  import { Employees } from '../../../middleware/database/employees'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Form from './form.svelte'
  import { currentUser } from '../../../stores/current_user'

  let employee = { name: '', teamId: '000', userCode: '000000' }

  const addEmployee = event => {
    const employee = { ...event.detail }
    employee.createdBy = $currentUser.id
    employee.companyId = $currentUser.companyId

    const createEmployee = Functions.httpsCallable('createEmployee')
    createEmployee(employee)
      .then(() => {
        notificationMessage.set({
          message: 'Employee added successfully.',
          type: 'success-toast'
        })

        navigateTo('/admin/employees')
      })
      .catch(error => {
        notificationMessage.set({
          message: error.message,
          type: 'error-toast'
        })
      })
  }
  const goHome = () => {
    navigateTo('/admin/employees')
  }
</script>

<div>
  <div class="row">
    <div class="col s9">
      <h4>New employee</h4>
    </div>
    <div class="col s3">
      <h4>Help</h4>
    </div>
  </div>
  <div class="row">
    <div class="col s9">
      <Form {employee} on:validEmployee={addEmployee} on:cancel={goHome} />
    </div>
    <div class="col s3 hide-on-med-and-down">
      <p>Teams are optional.</p>
    </div>
  </div>
</div>
