<script>
  import { Navigate } from 'svelte-router-spa'

  export let item = {}
</script>

<li class="sidebar-item">
  <Navigate to={item.to}>
     {item.title}
    <i class="material-icons left">{item.icon}</i>
  </Navigate>
</li>
