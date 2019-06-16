<script>
  import SidebarItem from './item.svelte'

  let menuItems = [
    { to: '/admin/', icon: 'fa-tachometer-alt', title: 'Dashboard' },
    { to: '/admin/employees', icon: 'fa-user', title: 'Employees' }
  ]
</script>

<style>
  .side-menu {
    border-left: 2px solid #e0f3ff;
  }
</style>

<nav class="menu">
  <ul class="side-menu">
    {#each menuItems as item, index}
      <SidebarItem {item} />
    {/each}
  </ul>
</nav>
