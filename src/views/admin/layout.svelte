<script>
  import { onMount, onDestroy } from "svelte";
  import Route from "svelte-router-spa";
  import { currentUser } from "../../stores/current_user";

  export let currentRoute;
  let unsubscribe;
  let userInfo = {};

  onMount(() => {
    unsubscribe = currentUser.subscribe(user => (userInfo = user));
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>
  <h1>Admin Layout</h1>
  <Route {currentRoute} />
</div>
