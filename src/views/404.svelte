<script>
  import { Navigate } from 'svelte-router-spa'
</script>

<section class="hero is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="container has-text-centered-mobile">
    <h1 class="title">Page not found!</h1>
    <h2 class="subtitle">I've searched everywhere but it wasn't there. I'm as puzzled as you are!</h2>
    <p>
      Return to the
      <Navigate to="/">homepage</Navigate>
    </p>
  </div>

</section>
