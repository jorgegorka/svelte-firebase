import AdminLayout from '../../views/admin/layout.svelte'
import AdminIndex from '../../views/admin/index.svelte'
import EmployeesIndex from '../../views/admin/employees/index.svelte'
import EmployeesShow from '../../views/admin/employees/show.svelte'

const protectedRoutes = [
  {
    name: 'admin',
    component: AdminIndex,
    layout: AdminLayout,
    nestedRoutes: [
      {
        name: 'employees',
        component: EmployeesIndex,
        nestedRoutes: [{ name: 'show/:id', component: EmployeesShow }]
      }
    ]
  }
]

export { protectedRoutes }
