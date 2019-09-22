<script>
  import Opinions from '../../components/opinions/index.svelte'
</script>

<div class="py-12 bg-gray-100 text-center text-gray-800">
  <h2 class=" text-2xl font-display font-bold lg:text-4xl">
    Qué dicen
    <span class="text-landBg">nuestros clientes</span>
  </h2>
  <p class="mt-4 mx-2 lg:mx-12 text-sm lg:text-xl">
    Para nosotros es esencial la comunicación continua con los clientes, algo que nos permite observar y detectar sus
    necesidades y, de manera proactiva, proponer y elaborar soluciones. Estamos muy agradecidos a todos nuestros
    clientes por contar con nosotros.
  </p>
  <div class="pb-12 flex flex-col lg:flex-row">
    <Opinions
      name="Svelte"
      bio="Build boilerplate-free components using languages you already know like HTML, CSS and JavasScript."
      imageUrl="/images/svelte-logo.svg" />
    <Opinions
      name="Firebase"
      bio="Database, hosting, authentication, cloud functions, storage, analytics, in-app messaging, performance
      monitoring and more." />
    <Opinions
      name="Svelte Router"
      bio="A router for Svelte and your single page applications."
      imageUrl="/images/svelte-router-logo.png" />
    <Opinions
      name="Validate.js"
      bio="A declarative way of validating javascript objects."
      imageUrl="/images/validate-js-logo.png" />
    <Opinions
      name="Tailwind CSS"
      bio="A utility-first CSS framework for rapidly building custom designs."
      imageUrl="/images/svelte-router-logo.png" />
  </div>
</div>

<div class="container">
  <!-- <h2 class="center brown-text">Amazing technologies already included</h2> -->
  <section class="section">
    <div class="row">
      <div class="col s12 m6">
        <div class="icon-block">
          <div class="center">
            <a href="https://svelte.dev/" title="Svelte Cibernetically enhanced web apps">
              <img src="/images/svelte-logo.svg" class="logo-image" alt="Svelte" />
            </a>
          </div>
          <p class="light">
            Build boilerplate-free components using languages you already know like HTML, CSS and JavasScript.
          </p>
        </div>
      </div>
      <div class="col s12 m6">
        <div class="icon-block">
          <div class="center">
            <a href="https://firebase.google.com/" title="Google Firebase">
              <img src="/images/firebase-logo.png" class="logo-image" alt="Firebase" />
            </a>
          </div>
          <p class="light">
            Database, hosting, authentication, cloud functions, storage, analytics, in-app messaging, performance
            monitoring and more.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="icon-block">
          <div class="center">
            <a href="https://github.com/jorgegorka/svelte-router" title="A svelte router component">
              <img src="/images/svelte-router-logo.png" class="logo-image" alt="Svelte Routing" />
            </a>
          </div>
          <p class="light">A router for Svelte and your single page applications.</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="icon-block">
          <div class="center">
            <a href="https://validatejs.org/" title="Validate.js validates javascript objects">

              <img src="/images/validate-js-logo.png" class="logo-image" alt="Validate.js" />

            </a>
          </div>
          <p class="light">A declarative way of validating javascript objects.</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="icon-block">
          <div class="center">
            <a href="https://materializecss.com/" title="Materialize CSS responsive front-end framework">
              <img src="/images/materialize.svg" class="logo-image" alt="Materialize css" />
            </a>
          </div>
          <p class="light">Materialize CSS A modern responsive front-end framework based on Material Design.</p>
        </div>
      </div>
    </div>
  </section>
</div>
