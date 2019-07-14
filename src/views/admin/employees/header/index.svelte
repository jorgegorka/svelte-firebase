<script>
  import Search from './search.svelte'
</script>

<div class="row">
  <div class="col s9">
    <h4>Employees</h4>
  </div>
  <div class="col s3">
    <a href="/admin/employees/new" class="btn light-blue darken-1 secondary-content new-action">
      New employee
      <i class="material-icons left">add</i>
    </a>
  </div>
</div>
<Search on:updateFilter />
