<script>
  import { Navigate } from 'svelte-router-spa'

  export let employeeId = ''
</script>

<nav class="menu">
  <ul>
    <li>
      <Navigate to="/admin/employees/show/{employeeId}">
        <span class="icon">
          <i class="fa user" />
        </span>
        My profile
      </Navigate>
    </li>
  </ul>
</nav>
