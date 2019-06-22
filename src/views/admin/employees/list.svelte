<script>
  import Item from './item.svelte'

  export let filteredEmployees = []
</script>

<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-mail</th>
      <th>Team</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each filteredEmployees as employee (employee.id)}
      <Item on:editEmployee {employee} />
    {/each}
  </tbody>
</table>
