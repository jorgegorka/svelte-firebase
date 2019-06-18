<script>
  import { onMount } from 'svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import Features from './features.svelte'
  import HowToUseIt from './how_to_use_it.svelte'
  import Technology from './technology.svelte'
  import Footer from './footer.svelte'

  onMount(() => {
    const elems = document.querySelectorAll('.parallax')
    const instances = M.Parallax.init(elems, {})
  })
</script>

<main>
  <div class="parallax-container">
    <div class="parallax">
      <img src="images/hamburg_bridge.jpeg" />
    </div>
  </div>
  <div class="section white">
    <div class="row container">
      <h2 class="header">Parallax</h2>
      <p class="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this case, is moved at a different speed than the
        foreground content while scrolling.
      </p>
    </div>
  </div>
  <div class="parallax-container">
    <div class="parallax">
      <img src="images/hamburg_bridge.jpeg" />
    </div>
  </div>
</main>

<!-- <Hero />
<Features />
<HowToUseIt />
<Technology />
<Footer /> -->
