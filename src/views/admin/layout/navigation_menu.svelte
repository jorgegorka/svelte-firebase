<script>
  import { currentUser } from '../../../stores/current_user'

  const logoutUser = () => {
    Auth.signOut().then(() => {
      navigateTo('/')
    })
  }
</script>

<div class="navbar-end">
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-link"> {$currentUser.displayName} </div>
    <div class="navbar-dropdown">
      <a class="navbar-item" href="#">
        <div>
          <span class="icon is-small">
            <i class="fa fa-user-circle" />
          </span>
          Profile
        </div>
      </a>
      <a class="navbar-item" href="#">
        <div>
          <span class="icon is-small">
            <i class="fa fa-bug" />
          </span>
          Report bug
        </div>
      </a>
      <a class="navbar-item" href="#" on:click={logoutUser}>
        <div>
          <span class="icon is-small">
            <i class="fa fa-sign-out-alt" />
          </span>
          Sign Out
        </div>
      </a>
    </div>
  </div>
</div>
