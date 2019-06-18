<script>
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('header mounted')

    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, {})
  })
</script>

<nav>
  <div class="nav-wrapper">
    <a href="/admin" class="brand-logo">
      Admin
      <i class="material-icons left">web</i>
    </a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
    <ul class="right hide-on-med-and-down">
      <li>
        <a href="/admin/employees">Employees</a>
      </li>
      <li>
        <a href="/admin/settings">Settings</a>
      </li>
    </ul>
  </div>
</nav>
<ul class="sidenav" id="mobile-demo">
  <li>
    <a href="sass.html">Sass</a>
  </li>
  <li>
    <a href="badges.html">Components</a>
  </li>
  <li>
    <a href="collapsible.html">Employees</a>
  </li>
  <li>
    <a href="mobile.html">Settings</a>
  </li>
</ul>
