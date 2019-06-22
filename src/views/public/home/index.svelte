<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import HowToUseIt from './how_to_use_it.svelte'
  import Technology from './technology.svelte'
  import Footer from '../layout/footer.svelte'

  onMount(() => {
    console.log('index -> on mount')
    // const elems = document.querySelectorAll('.parallax')
    // M.Parallax.init(elems, {})
  })

  setTimeout(() => {
    const elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems, {})
  }, 300)
</script>

<style>
  .parallax {
    height: 750px;
  }
  .all-width {
    width: 100%;
  }
</style>

<div>
  <Menu />
  <Hero />
  <MainFeatures />

  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot all-width">
      <div class="container ">
        <div class="row center">
          <h2 class="col s12 light pink-text">Amazing technologies ready to use</h2>
        </div>
      </div>
    </div>
    <div class="parallax">
      <img src="/images/almond.jpg" alt="Svelte & Firebase web development template" />
    </div>
  </div>
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
  <Footer />
</div>
