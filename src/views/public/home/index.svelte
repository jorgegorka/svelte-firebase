<script>
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import HowToUseIt from './how_to_use_it.svelte'
  import Technology from './technology.svelte'
</script>

<Hero />
<MainFeatures />

<Technology />

<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot all-width">
    <div class="container">
      <div class="row center">
        <h2 class="header col s12 light pink-text">How to use it</h2>
      </div>
    </div>
  </div>
  <div class="parallax">
    <img src="/images/waterfall.jpg" alt="Svelte & Firebase is licensed under MIT" />
  </div>
</div>
<HowToUseIt />
