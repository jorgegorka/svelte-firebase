<script>
  import NavigationMenu from './navigation_menu.svelte'
</script>

<nav class="navbar has-shadow">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">Svelte & Firebase</a>
    <div class="navbar-burger">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <small>Developing web applications in the 21st century!</small>
      </div>
    </div>
    <NavigationMenu />
  </div>
</nav>
