<script>
  import { Navigate } from 'svelte-router-spa'
</script>

<style>
  .hero {
    background-image: url('images/hamburg_bridge.jpeg');
    background-size: cover;
  }
  .hero-body h1,
  .hero-body h2 {
    color: #fff;
  }
</style>

<section class="hero is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">Svelte & Firebase</a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">Index</a>
            <a class="navbar-item" href="/login">Login</a>
            <a class="navbar-item" href="/signup">Signup</a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted" href="https://www.gitlab.com">
                <span class="icon">
                  <i class="fab fa-github" />
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero-body">
    <div class="container has-text-centered-mobile">
      <h1 class="title">Svelte & Firebase</h1>
      <h2 class="subtitle">A free template that you can use to create new applications using Svelte and Firebase.</h2>
    </div>
  </div>
</section>
