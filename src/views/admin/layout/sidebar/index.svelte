<script>
  import SidebarMenu from './menu.svelte'
  export let currentUser = {}
  let adminMenuItems = [
    { to: '/admin/', icon: 'dashboard', title: 'Dashboard' },
    { to: '/admin/teams', icon: 'group_work', title: 'Teams' },
    { to: '/admin/employees', icon: 'person_pin', title: 'Employees' }
  ]

  let userMenuItems = [{ to: '/admin/', icon: 'dashboard', title: 'Dashboard' }]
</script>

<style>
  .sidenav-fixed {
    margin-top: 64px;
  }
</style>

<ul id="sidenav-left" class="sidenav sidenav-fixed">
  <li>
    <h5 class="center">Main menu</h5>
  </li>
  {#if currentUser.isAdmin}
    <SidebarMenu items={adminMenuItems} />
  {:else}
    <SidebarMenu items={userMenuItems} employeeId={currentUser.id} />
  {/if}
</ul>
