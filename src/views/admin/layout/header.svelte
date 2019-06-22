<script>
  import { onMount } from 'svelte'
  import { Navigate } from 'svelte-router-spa'

  import { Auth } from '../../../config/firebase'

  onMount(() => {
    const sideNav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sideNav, {})
    const dropdownSettings = document.getElementById('dropdownSettings')
    M.Dropdown.init(dropdownSettings, {})
  })

  const logoutUser = () => {
    Auth.signOut().then(() => {
      notificationMessage.set({ message: "You've been logged out successfully.", type: 'success-toast' })
    })
  }
</script>

<style>
  #settingsMenu {
    top: 64px !important;
  }
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
        <a href="#" class="dropdown-trigger" id="dropdownSettings" data-target="settingsMenu">
          <i class="material-icons left">settings</i>
          Settings
        </a>
        <ul id="settingsMenu" class="dropdown-content">

          <li>
            <a href="#" on:click={logoutUser}>
              Log out
              <i class="material-icons left">exit_to_app</i>
            </a>
          </li>
        </ul>
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
  <li>
    <a href="#" on:click={logoutUser}>
      Log out
      <i class="material-icons left">exit_to_app</i>
    </a>
  </li>
</ul>
