<script>
  import Item from './item.svelte'
  import Form from './form.svelte'
  let employees = []
  let employee = {}
  let showForm = false

  const openModal = () => {
    showForm = true
  }
  const closeModal = () => {
    showForm = false
  }
</script>

<style>
  .new-employee {
    margin-top: -55px;
  }
</style>

<div>
  <ul class="collection">
    <li class="collection-item">
      <div>
        <h4>Employees</h4>
        <a class="btn light-blue darken-1 secondary-content new-employee" on:click={openModal}>
          New employee
          <i class="material-icons left">add</i>
        </a>
      </div>
    </li>
    {#each employees as employee (employee.id)}
      <Item {employee} />
    {/each}
  </ul>
</div>
<Form {employee} {showForm} on:cancel={closeModal} />
