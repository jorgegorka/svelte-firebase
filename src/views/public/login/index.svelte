<script>
  import { Navigate } from 'svelte-router-spa'

  import LoginForm from './form.svelte'
</script>

<style>
  .mt10 {
    padding-top: 1rem;
  }
</style>

<main>
  <div class="container">
    <div class="row">
      <div class="col s8 offset-s2">
        <div class="card card-login">
          <div class="card-login-splash">
            <div class="wrapper">
              <h3 class="center-align mt10">Svelte & Firebase</h3>
            </div>
          </div>
          <div class="card-content">
            <span class="card-title center-align">Log In</span>
            <LoginForm />
            <p>
              <Navigate to="signup">Create an account.</Navigate>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
