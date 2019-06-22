<script>
  import { onDestroy } from 'svelte'
  import { FirebaseResults } from '../../../middleware/database'
  import { Employees } from '../../../middleware/database/employees'
  import { filterResults } from '../../../lib/filter_results'
  import { currentUser } from '../../../stores/current_user'
  import ListEmployees from './list.svelte'
  import Form from './form.svelte'
  let employees = []
  let filteredEmployees = []
  let employee = {}
  let showModal = false
  let unsubscribeQuery = null

  const addEmployee = () => {
    employee = { name: '', email: '', password: '', teamId: '' }
    showModal = true
  }
  const closeModal = () => {
    showModal = false
  }

  $: fetchEmployees($currentUser.companyId)

  const fetchEmployees = companyId => {
    if (!companyId) return
    unsubscribeQuery = Employees.findAll(companyId).onSnapshot(docs => {
      employees = FirebaseResults.map(docs)
      filteredEmployees = [...employees]
    })
  }
  const filterEmployees = searchTerm => {
    if (searchTerm.length < 2) {
      filteredEmployees = [...employees]
    } else {
      filteredEmployees = filterResults(searchTerm, employees, 'name').search()
    }
  }

  const editEmployee = event => {
    employee = event.detail
    showModal = true
  }

  onDestroy(() => {
    unsubscribeQuery()
  })
</script>

<style>
  .new-employee {
    margin-top: 2em;
  }
</style>

<div>
  <div class="row">
    <div class="col s9">
      <h4>Employees</h4>
    </div>
    <div class="col s3">
      <a href="#" class="btn light-blue darken-1 secondary-content new-employee" on:click={addEmployee}>
        New employee
        <i class="material-icons left">add</i>
      </a>
    </div>
  </div>
  <ListEmployees on:editEmployee={editEmployee} {filteredEmployees} />
</div>
<Form {employee} {showModal} on:cancel={closeModal} />
