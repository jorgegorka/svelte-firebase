import AdminLayout from '../../views/admin/layout/index.svelte'
import DashboardIndex from '../../views/admin/dashboard/index.svelte'
import EmployeesIndex from '../../views/admin/employees/index.svelte'
import EmployeesNew from '../../views/admin/employees/new.svelte'
import EmployeesEdit from '../../views/admin/employees/edit.svelte'
import EmployeesShow from '../../views/admin/employees/show.svelte'
import EmployeesLayout from '../../views/admin/employees/layout.svelte'
import TeamsIndex from '../../views/admin/teams/index.svelte'
import TeamsShow from '../../views/admin/teams/show.svelte'

const protectedRoutes = [
  {
    name: 'admin',
    component: AdminLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex },
      {
        name: 'employees',
        component: EmployeesLayout,
        nestedRoutes: [
          { name: 'index', component: EmployeesIndex },
          { name: 'show/:id', component: EmployeesShow },
          { name: 'new', component: EmployeesNew },
          { name: 'edit/:id', component: EmployeesEdit }
        ]
      },
      {
        name: 'teams',
        component: TeamsIndex
      },
      { name: 'teams/show/:id', component: TeamsShow }
    ]
  }
]

export { protectedRoutes }
