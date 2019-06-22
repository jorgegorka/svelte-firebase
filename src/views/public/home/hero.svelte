<script>
  import { Navigate } from 'svelte-router-spa'
</script>

<style>
  .hero {
    background-image: url('images/hamburg_bridge.jpeg');
    background-size: cover;
  }
  .hero-body h1,
  .hero-body h2 {
    color: #fff;
  }
</style>

<div id="index-banner" class="parallax-container">
  <div class="section no-pad-bot">
    <div class="container">
      <br />
      <br />
      <h1 class="header light-green-text">Svelte & Firebase</h1>
      <div class="row">
        <h5 class="header col s12 light white-text">
          A free template that you can use to create new applications using Svelte and Firebase
        </h5>
      </div>
      <div class="row center">
        <a
          href="https://github.com/jorgegorka/svelte-firebase"
          id="download-button"
          class="btn-large waves-effect waves-light light-green lighten-1"
          title="Download the template">
          <i class="material-icons left">cloud_download</i>
          Download
        </a>
      </div>
      <br />
      <br />

    </div>
  </div>
  <div class="parallax">
    <img src="/images/ebro_river.jpg" alt="A template to learn svelte and firebase" />
  </div>
</div>
