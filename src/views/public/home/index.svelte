<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  // import Features from './features.svelte'
  import HowToUseIt from './how_to_use_it.svelte'
  import Technology from './technology.svelte'
  import Footer from './footer.svelte'

  onMount(() => {
    console.log('on mount')
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
          <h5 class="header col s12 light">Amazing technologies already included</h5>
        </div>
      </div>
    </div>
    <div class="parallax">
      <img src="/images/hamburg_bridge.jpg" alt="Svelte & Firebase web development template" />
    </div>
  </div>
  <Technology />

  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot all-width">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light">How to use it</h5>
        </div>
      </div>
    </div>
    <div class="parallax">
      <img src="/images/hamburg_bridge.jpg" alt="Svelte & Firebase is licensed under MIT" />
    </div>
  </div>
  <HowToUseIt />
  <Footer />
</div>
