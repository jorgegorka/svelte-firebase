<script>
  import { routeIsActive } from 'svelte-router-spa'

  export let item = {}
</script>

<style>
  .sidebar-item {
    padding-left: 0.5em;
  }
  .sidebar-link {
    height: 2em;
    line-height: 2em;
    padding: 0.4em 0.4em;
    width: 100%;
  }
  .is-active,
  a:hover {
    background: #e0f3ff;
    color: #3f6ad8;
    border-radius: 0.25rem;
  }
  .is-active {
    font-weight: bold;
  }
</style>

<li class="sidebar-item">
  <a href={item.to} class="sidebar-link" class:active={routeIsActive(item.to)}>
    <span class="icon">
      <i class="fa {item.icon}" />
    </span>
     {item.title}
  </a>
</li>
