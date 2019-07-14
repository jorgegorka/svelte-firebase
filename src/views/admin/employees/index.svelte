<script>
  import { onDestroy } from 'svelte'

  import { FirebaseResults } from '../../../middleware/database'
  import { Employees } from '../../../middleware/database/employees'
  import { filterResults } from '../../../lib/filter_results'
  import { currentUser } from '../../../stores/current_user'
  import ListEmployees from './list.svelte'
  import Header from './header/index.svelte'

  let employees = []
  let filteredEmployees = []
  let unsubscribeQuery = null
  let active = true

  $: fetchEmployees($currentUser.companyId, active)

  const fetchEmployees = (companyId, active) => {
    if (!companyId) return
    unsubscribeQuery = Employees.findAll({ companyId, active }).onSnapshot(docs => {
      employees = FirebaseResults.map(docs)
      filteredEmployees = [...employees]
    })
  }

  const updateFilter = event => {
    if (active !== event.detail.active) {
      active = event.detail.active
    }
    filterEmployees(event.detail.name)
  }

  const filterEmployees = searchTerm => {
    if (searchTerm.length < 2) {
      filteredEmployees = [...employees]
    } else {
      filteredEmployees = filterResults(searchTerm, employees, 'name').search()
    }
  }

  onDestroy(() => {
    unsubscribeQuery()
  })
</script>

<div>
  <Header on:updateFilter={updateFilter} />
  <ListEmployees {filteredEmployees} />
</div>
