<template>
  <section
    class="bg-green-100 min-h-screen md:flex md:justify-between md:gap-10 md:pl-20 md:pr-0 relative overflow-hidden"
  >
    <purple-stroke
      class="w-1/2 absolute right-10 top-32 md:bottom-auto md:right-0 md:top-48 opacity-50 grayscale"
    />

    <div
      class="md:w-1/2 h-96 overflow-hidden md:overflow-hidden md:h-screen flex justify-end items-end pb-16 relative md:order-2"
    >
      <div
        class="absolute -bottom-16 -left-5 md:shadow-none md:top-16 md:left-0 md:z-20 md:bottom-auto my-0 mx-auto bg-emerald-400 rounded-3xl overflow-hidden shadow-md"
      >
        <img src="@/assets/imgs/Doctor.png" class="w-[250px]" />
      </div>
      <div
        class="bg-teal-500 w-4/6 shadow-md z-10 -mb-24 -mr-16 md:mt-10 md:mb-0 md:mr-0 md:z-0 md:w-[500px] rounded-3xl rounded-r-none overflow-hidden"
      >
        <img src="@/assets/imgs/Thumbs-up-Dos.png" />
      </div>
    </div>
    <div
      class="py-10 px-5 md:p-0 md:w-1/2 md:h-screen flex flex-col justify-center md:order-1"
    >
      <h1 class="font-bold text-3xl md:text-5xl relative z-10 font-serif">
        ATLAS: The Pharmacy<br />
        you can <span class="opacity-90 text-blue-500">trust</span>
        <yellow-stroke
          class="-z-10 absolute -bottom-16 left-0 w-1/2 md:top-16 md:bottom-0"
        />
      </h1>
      <p class="z-20 relative text-xl md:text-2xl my-7 md:mt-7 md:mb-5">
        American's suffer from fake drugs, we at Atlas are fighting against
        that.
      </p>
      <button
        class="font-semibold text-lg md:font-bold md:w-1/3 px-3 py-4 rounded-2xl bg-[#30BEA0] border-2 border-[#30BEA0] text-white opacity-80 hover:opacity-100 hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
        @click="quoteModal = true"
      >
        Get A Quote
      </button>
    </div>
    <quote-modal v-if="quoteModal" @close="quoteModal = false" />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  components: {
    YellowStroke: () => import('~/components/arts/YellowStroke.vue'),
    PurpleStroke: () => import('~/components/arts/PurpleStroke.vue'),
    QuoteModal: () => import('~/components/QuoteModal.vue'),
  },
  data() {
    return {
      quoteModal: true
    }
  },
}
</script>
