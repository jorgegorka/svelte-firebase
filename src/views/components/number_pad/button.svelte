<script>
  export let title = ''
  export let color = 'cyan darken-3'
</script>

<style>
  .pad {
    height: 100px;
    margin-left: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2.5rem;
  }
</style>

<button on:click class="btn-large pad {color}">{title}</button>
