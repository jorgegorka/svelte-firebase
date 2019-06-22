<style>
  .navbar-item {
    color: #444;
  }
</style>

<nav class="white" role="navigation">
  <div class="nav-wrapper container">
    <a id="logo-container" href="/" class="brand-logo light-green-text">Svelte & Firebase</a>
    <ul class="right hide-on-med-and-down">
      <li>
        <a href="/" class="navbar-item active">Home</a>
      </li>
      <li>
        <a class="navbar-item" href="/login">Login</a>
      </li>
      <li>
        <a class="navbar-item" href="/signup">Signup</a>
      </li>
    </ul>

    <ul id="nav-mobile" class="sidenav">
      <li>
        <a href="/" class="navbar-item active">Home</a>
      </li>
      <li>
        <a class="navbar-item" href="/login">Login</a>
      </li>
      <li>
        <a class="navbar-item" href="/signup">Signup</a>
      </li>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
  </div>
</nav>
