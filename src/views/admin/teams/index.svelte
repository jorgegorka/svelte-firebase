<script>
  // import Item from './item.svelte'
  import Form from './form.svelte'
  let teams = []
  let team = {}
  let showModal = false

  const openModal = () => {
    showModal = true
  }
  const closeModal = () => {
    showModal = false
  }
</script>

<style>
  .new-team {
    margin-top: 2em;
  }
</style>

<div>
  <div class="row">
    <div class="col s9">
      <h4>Teams</h4>
    </div>
    <div class="col s3">
      <a href="#" class="btn light-blue darken-1 secondary-content new-team" on:click={openModal}>
        New team
        <i class="material-icons left">add</i>
      </a>
    </div>
  </div>
  <ul class="collection">
    {#each teams as team (team.id)}
      <!-- <Item {team} /> -->
    {/each}
  </ul>
</div>
<Form {team} {showModal} on:cancel={closeModal} />
