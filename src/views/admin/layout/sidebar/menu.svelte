<script>
  import SidebarItem from './item.svelte'

  export let items = []
  export let employeeId = null
</script>

{#each items as item, index}
  <SidebarItem {item} />
{/each}
