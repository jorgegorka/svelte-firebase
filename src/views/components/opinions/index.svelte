<script>
  export let name = ''
  export let bio = ''
  export let imageUrl = ''
</script>

<div class="lg:w-1/3 mt-10 mb-24 mx-4 lg:mx-12 shadow-2xl bg-white rounded-lg">
  <div class="flex flex-col items-center">
    <i class="fa fa-quote-right text-gray-400 text-4xl mt-6" />
    <p class="mt-6 mx-4 text-gray-700 text-sm ">{bio}</p>
    <h3 class="mt-4 font-display font-bold">{name}</h3>
    <img src={imageUrl} alt={name} class="w-32 h-32 -mb-16 mt-4 rounded-full" />
  </div>
</div>
