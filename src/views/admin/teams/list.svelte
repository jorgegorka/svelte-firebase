<script>
  import Item from './item.svelte'

  export let filteredTeams = []
</script>

<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th># Employees</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each filteredTeams as team (team.id)}
      <Item on:editTeam {team} />
    {/each}
  </tbody>
</table>
