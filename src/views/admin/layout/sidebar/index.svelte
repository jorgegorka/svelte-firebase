<script>
  import SidebarAdmin from './admin.svelte'
  import SidebarUser from './user.svelte'
  export let currentUser = {}
</script>

{#if currentUser.isAdmin}
  <SidebarAdmin />
{:else}
  <SidebarUser employeeId={currentUser.id} />
{/if}
