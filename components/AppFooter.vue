<template>
  <footer class="bg-gray-200 py-10 md:py-16 md:px-40 flex flex-col justify-center items-center">
    <img src="~/assets/imgs/Logo-dark.svg" class="w-1/3 md:w-1/6" />
    <div class="flex gap-8 justify-center items-center mt-10">
      <nuxt-link to="/about-us" class="text-gray-600 font-semibold hover:opacity-95">About</nuxt-link>
      <nuxt-link to="/contact-us" class="text-gray-600 font-semibold hover:opacity-95">Contact</nuxt-link>
      <nuxt-link to="/blog" class="text-gray-600 font-semibold hover:opacity-95">Blog</nuxt-link>
    </div>
    <div class="flex gap-3 justify-center items-center mt-5 text-gray-500 w-2/3 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden md:inline">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      3585 S Maryland Pkwy Ste.J, Las Vagas, NV. 89169
    </div>
    <div class="flex gap-3 justify-center items-center mt-5 text-gray-600 text-center">
      Mondays to Fridays: 10AM - 6PM<br />
      Saturdays: 10AM - 2PM
    </div>
    <p class="mt-5 text-gray-400">
      &copy; Atlas P&MS - {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>
