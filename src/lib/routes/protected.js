import AdminLayout from '../../views/admin/layout/index.svelte'
import DashboardIndex from '../../views/admin/dashboard/index.svelte'
import EmployeesIndex from '../../views/admin/employees/index.svelte'
import EmployeesShow from '../../views/admin/employees/show.svelte'
import EmployeesLayout from '../../views/admin/employees/layout.svelte'

const protectedRoutes = [
  {
    name: 'admin',
    component: AdminLayout,
    nestedRoutes: [
      { name: 'index', component: DashboardIndex },
      {
        name: 'employees',
        component: EmployeesLayout,
        nestedRoutes: [{ name: 'index', component: EmployeesIndex }, { name: 'show/:id', component: EmployeesShow }]
      }
    ]
  }
]

export { protectedRoutes }
