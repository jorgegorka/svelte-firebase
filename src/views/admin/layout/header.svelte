<script>
  import { onMount } from 'svelte'
  import { Navigate } from 'svelte-router-spa'

  onMount(() => {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, {})
  })
</script>

<style>
  .brand-logo {
    padding-left: 1rem;
  }
</style>

<nav class="teal lighten-1">
  <div class="nav-wrapper">
    <a href="/admin/" class="brand-logo">
      Svelte & Firebase
      <i class="material-icons left">web</i>
    </a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
    <ul class="right hide-on-med-and-down">
      <li>
        <Navigate to="/settings">
          <i class="material-icons left">settings</i>
          Settings
        </Navigate>
      </li>
    </ul>
  </div>
</nav>
<ul class="sidenav" id="mobile-demo">
  <li>
    <Navigate to="/admin/">
      Dashboard
      <i class="material-icons left">dashboard</i>
    </Navigate>
  </li>
  <li>
    <Navigate to="/admin/teams">
      Teams
      <i class="material-icons left">group_work</i>
    </Navigate>
  </li>
  <li>
    <Navigate to="/admin/employees">
      Employees
      <i class="material-icons left">person_pin</i>
    </Navigate>
  </li>
</ul>
