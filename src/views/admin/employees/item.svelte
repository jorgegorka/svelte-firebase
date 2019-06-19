<script>
  import { Navigate } from 'svelte-router-spa'
  export let employee = {}
</script>

<tr>
  <td>
    <Navigate to="/admin/employees/{employee.id}">
      <strong>{employee.name}</strong>
    </Navigate>
  </td>
  <td class="right-element"> {employee.email} </td>
  <td class="right-element"> {employee.teamName} </td>
  <td>
    <div class="buttons">
      <!-- <a class="button is-small" @click.prevent="editEmployee" href="#">
          <span class="icon">
            <i class="fa fa-edit"></i>
          </span>
          <span>{{ $t('edit') }}</span>
        </a>
        <a class="button is-small">
          <span class="icon">
            <i class="fa fa-trash"></i>
          </span>
          <span>{{ $t('delete') }}</span>
        </a> -->
    </div>
  </td>
</tr>
