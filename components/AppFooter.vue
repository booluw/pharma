<template>
  <footer class="bg-gray-200 py-10 md:py-16 md:px-40 flex flex-col justify-center items-center">
    <img src="~/assets/imgs/Logo-dark.svg" class="w-1/3 md:w-1/6" />
    <div class="flex gap-8 justify-center items-center mt-10">
      <nuxt-link to="/about-us" class="text-gray-600 font-semibold hover:opacity-95">About</nuxt-link>
      <nuxt-link to="/contact-us" class="text-gray-600 font-semibold hover:opacity-95">Contact</nuxt-link>
      <nuxt-link to="/blog" class="text-gray-600 font-semibold hover:opacity-95">Blog</nuxt-link>
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
