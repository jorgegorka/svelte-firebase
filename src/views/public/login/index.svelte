<script>
  import { Navigate } from 'svelte-router-spa'

  import LoginForm from './form.svelte'
</script>

<div class="flex items-center justify-center h-screen w-screen bg-gray-100">
  <div class="shadow-lg rounded-lg bg-white">
    <h1 class="mt-6 text-2xl text-blue-500 text-center">Svelte & Firebase</h1>

    <div class="card-content">
      <p class="p-6 text-center">Log In to</p>
      <LoginForm />
      <p class="p-6">
        New user?
        <Navigate to="signup">Create an account</Navigate>
      </p>
    </div>
  </div>
</div>
