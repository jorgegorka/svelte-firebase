<script>
  import { Navigate, navigateTo } from 'svelte-router-spa'

  import LoginForm from './form.svelte'
</script>

<style>
  .bottom-text {
    margin-top: 1em;
  }
</style>

<section>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <h3 class="has-text-centered is-size-3">Svelte & Firebase</h3>
        <div class="box">
          <div class="field has-text-centered">
            <p class="is-size-5">Access your account</p>
          </div>
          <LoginForm />
          <div class="field bottom-text">
            <Navigate to="signup">Create an account.</Navigate>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
