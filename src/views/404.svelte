<script>
  import { Navigate } from 'svelte-router-spa'
</script>

<style>
  .not-found {
    margin: 3rem;
  }
</style>

<section class="not-found">
  <h1 class="title">Page not found!</h1>
  <h3 class="subtitle">I've searched everywhere but it wasn't there. I'm as puzzled as you are!</h3>
  <h5>
    Return to the
    <Navigate to="/">homepage</Navigate>
  </h5>
</section>
