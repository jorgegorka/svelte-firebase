<script>
  import { navigateTo } from 'svelte-router-spa'

  import { Employees } from '../../../middleware/database/employees'
  import Loading from '../../components/loading.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import Form from './form.svelte'

  export let currentRoute
  let employee = {}
  let loading = true

  const { id } = currentRoute.namedParams

  const editEmployee = event => {
    const employee = { ...event.detail }
    Employees.update(id, employee)
      .then(() => {
        notificationMessage.set({
          message: 'Employee updated successfully',
          type: 'success-toast'
        })
        navigateTo(`/admin/employees`)
      })
      .catch(error => {
        console.log(error)
        notificationMessage.set({
          message: error.message,
          type: 'error-toast'
        })
      })
  }

  $: if (loading) {
    Employees.findOne(id).then(doc => {
      employee = doc.data()
      employee.id = doc.id
      loading = false
    })
  }

  const goHome = () => {
    navigateTo(`/admin/employees`)
  }
</script>

{#if loading}
  <Loading />
{:else}
  <div>
    <div class="row">
      <div class="col s12 m6">
        <h4>{employee.name}</h4>
      </div>
      <div class="col s12 m6">
        <h4>{employee.email}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Form {employee} on:validEmployee={editEmployee} on:cancel={goHome} />
      </div>
    </div>
  </div>
{/if}
