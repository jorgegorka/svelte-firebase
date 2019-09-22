<script>
  import { onMount } from 'svelte'

  let moving = false
  onMount(function() {
    window.onscroll = function() {
      if (window.pageYOffset < 64) {
        moving = false
      } else {
        moving = true
      }
    }
  })
</script>

<nav id="header" class="fixed w-full z-30 top-0 text-white" class:bg-white={moving}>
  <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="pl-4 flex items-center">
      <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
        <svg
          class="h-8 w-8 -mt-2 fill-current inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 510 510"
          style="enable-background:new 0 0 510 510;"
          xml:space="preserve">
          <path
            d="M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925
            c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25
            C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925
            c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25
            C459,235.875,379.95,307.274,257.55,419.475z" />

        </svg>
        Svelte & Firebase
      </a>
    </div>

    <div class="block lg:hidden pr-4">
      <button
        id="nav-toggle"
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800
        hover:border-teal-500 appearance-none focus:outline-none">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent
      text-black p-4 lg:p-0 z-20"
      id="nav-content">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#!">Home</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
            Technologies
          </a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
            Components
          </a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
            Login
          </a>
        </li>
      </ul>
      <button
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8
        shadow opacity-75">
        Sign up
      </button>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
