<script>
  import { Navigate } from 'svelte-router-spa'

  import SignupForm from './form.svelte'
</script>

<style>
  .bottom-text {
    margin-top: 1em;
  }
</style>

<section>
  <div class="columns is-centered">
    <div class="column is-6-tablet is-5-desktop is-4-widescreen">
      <h3 class="has-text-centered is-size-3">Svelte & Firebase</h3>
      <div class="box">
        <div class="field has-text-centered">
          <p class="is-size-5">Create your account</p>
        </div>
        <SignupForm />
        <div class="field bottom-text">
          <Navigate to="login">Already have an account? Log in</Navigate>
        </div>
      </div>

    </div>
  </div>
</section>
