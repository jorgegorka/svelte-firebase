<script>
  import { createEventDispatcher } from 'svelte'

  import TextInput from '../../../components/forms/text_input.svelte'
  const dispatch = createEventDispatcher()

  let name = ''
  let active = true

  const updateFilter = () => {
    dispatch('updateFilter', { name, active })
  }

  const toggleActive = () => {
    active = !active
    updateFilter()
  }

  $: if (name) {
    updateFilter()
  }
</script>

<div class="row">
  <div class="col s12 m9">
    <TextInput bind:value={name} label="Search by employee name" icon="search" isFocused={true} />
  </div>
  <div class="col s12 m3">
    {#if active}
      <a href="#" on:click={toggleActive} class="btn-flat yellow lighten-1 black-text secondary-content new-action">
        Show inactive
        <i class="material-icons left">archive</i>
      </a>
    {:else}
      <a href="#" on:click={toggleActive} class="btn-flat green accent-1 black-text secondary-content new-action">
        Show active
        <i class="material-icons left">unarchive</i>
      </a>
    {/if}
  </div>
</div>
