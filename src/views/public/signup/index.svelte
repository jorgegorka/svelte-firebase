<script>
  import { Navigate } from 'svelte-router-spa'

  import SignupForm from './form.svelte'
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
            <span class="card-title center-align">Create your account</span>
            <SignupForm />
            <p>
              <Navigate to="login">Already have an account? Log in</Navigate>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
