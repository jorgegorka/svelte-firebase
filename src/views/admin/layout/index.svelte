<script>
  import { Route, navigateTo, Navigate } from 'svelte-router-spa'

  import Header from './header.svelte'
  import { Auth } from '../../../config/firebase'
  import { currentUser } from '../../../stores/current_user'

  export let currentRoute

  const logoutUser = () => {
    Auth.signOut().then(() => {
      navigateTo('/')
    })
  }
</script>

<style>
  .logo-container {
    height: 64px;
    line-height: 64px;
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .logo-container i {
    line-height: inherit;
  }
</style>

{#if $currentUser.id}
  <Header />
  <main>
    <div class="row">
      <div class="col s3">
        <ul id="sidenav-left" class="sidenav sidenav-fixed">
          <li>
            <a href="dashboard.html" class="logo-container">
              RRHH
              <i class="material-icons left">people</i>
            </a>
          </li>
          <li>
            <Navigate to="/admin/">
              Dashboard
              <i class="material-icons left">dashboard</i>
            </Navigate>
          </li>
          <li>
            <Navigate to="/admin/employees">
              Employees
              <i class="material-icons left">person_pin</i>
            </Navigate>
          </li>
        </ul>
      </div>

      <div class="col s9">
        <Route {currentRoute} />
      </div>
    </div>
  </main>
{/if}
