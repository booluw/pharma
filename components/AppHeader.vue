<template>
  <header class="bg-green-200 py-5 px-5 md:px-20 fixed top-0 right-0 left-0 z-40 shadow hover:bg-opacity-100 flex justify-between items-center">
    <nuxt-link to="/" class="w-64 h-full inline-flex items-center gap-5">
      <img src="~/assets/imgs/logo-icon-color.svg" class="w-10"/>
      <div class="hidden md:block">
        <h2 class="text-xl text-serif font-bold">Atlas</h2>
        <p class="text-xs -mt-2">Pharmacy & Medical Supplies</p>
      </div>
    </nuxt-link>
    <nav class="">
      <ul class="flex gap-3 justify-between items-center">
        <li>
          <nuxt-link to="/about-us" class="px-3 text-gray-700 font-semibold">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact-us" class="px-3 text-gray-700 font-semibold">Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" class="px-3 text-gray-700 font-semibold">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>
