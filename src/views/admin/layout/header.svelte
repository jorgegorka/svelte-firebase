<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, {})
  })
</script>

<style>
  .brand-logo {
    padding-left: 1rem;
  }
</style>

<nav>
  <div class="nav-wrapper">
    <a href="/admin" class="brand-logo">
      Gestión Recursos Humanos
      <i class="material-icons left">web</i>
    </a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
    <ul class="right hide-on-med-and-down">
      <li>
        <a href="/admin">
          <i class="material-icons left">settings</i>
          Settings
        </a>
      </li>
    </ul>
  </div>
</nav>
<ul class="sidenav" id="mobile-demo">
  <li>
    <a href="mobile.html">Settings</a>
  </li>
</ul>
