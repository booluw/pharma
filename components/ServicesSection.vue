<template>
  <section class="py-20 px-5 md:py-28 md:px-40 bg-gray-50">
    <h1 class="text-4xl font-serif font-semibold header">Services</h1>
    <div class="md:flex gap-5 mt-5">
      <div v-for="i in 4" :key="i" class="h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/medical-bandage-treatment-svgrepo-com.svg" class="w-8 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">PRESCRIPTION DRUG SERVICES</h2>
          <p class="">For all your medication needs.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection"
}
</script>
