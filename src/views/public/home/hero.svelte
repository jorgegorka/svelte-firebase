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
      <h1 class="header center teal-text text-lighten-2">Svelte & Firebase</h1>
      <div class="row center">
        <h5 class="header col s12 light">
          A free template that you can use to create new applications using Svelte and Firebase
        </h5>
      </div>
      <div class="row center">
        <a
          href="http://materializecss.com/getting-started.html"
          id="download-button"
          class="btn-large waves-effect waves-light teal lighten-1">
          Get Started
        </a>
      </div>
      <br />
      <br />

    </div>
  </div>
  <div class="parallax">
    <img src="/images/hamburg_bridge.jpg" alt="A template to learn svelte and firebase" />
  </div>
</div>
