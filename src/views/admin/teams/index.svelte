<script>
  import { onDestroy } from 'svelte'
  import { FirebaseResults } from '../../../middleware/database'
  import { Teams } from '../../../middleware/database/teams'
  import { filterResults } from '../../../lib/filter_results'
  import { currentUser } from '../../../stores/current_user'
  import ListTeams from './list.svelte'
  import Form from './form.svelte'
  let teams = []
  let filteredTeams = []
  let team = {}
  let showModal = false
  let unsubscribeQuery = null

  const addTeam = () => {
    team = { name: '' }
    showModal = true
  }
  const closeModal = () => {
    showModal = false
  }

  $: fetchTeams($currentUser.companyId)

  const fetchTeams = companyId => {
    if (!companyId) return
    unsubscribeQuery = Teams.findAll(companyId).onSnapshot(docs => {
      teams = FirebaseResults.map(docs)
      filteredTeams = [...teams]
    })
  }
  const filterTeams = searchTerm => {
    if (searchTerm.length < 2) {
      filteredTeams = [...teams]
    } else {
      filteredTeams = filterResults(searchTerm, teams, 'name').search()
    }
  }

  const editTeam = event => {
    team = event.detail
    showModal = true
  }

  onDestroy(() => {
    unsubscribeQuery()
  })
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
      <a href="#" class="btn light-blue darken-1 secondary-content new-team" on:click={addTeam}>
        New team
        <i class="material-icons left">add</i>
      </a>
    </div>
  </div>
  <ListTeams on:editTeam={editTeam} {filteredTeams} />
</div>
<Form {team} {showModal} on:cancel={closeModal} />
