<template>
  <div class="bg-gray-100 text-black py-20 px-10 md:p-40">
    <div class="w-2/3 md:w-1/2 relative">
      <img src="~/assets/doddles/jobs-doodle.svg" class="w-28 md:w-52 absolute top-0 -right-16 md:right-auto md:-top-40" />
      <h2 class="text-4xl font-semibold mb-5 font-serif">Customers love Atlas</h2>
    </div>
    <div class="flex justify-end gap-5 mb-10">
      <button
        class="rounded-full border p-3 text-secondary hover:bg-secondary hover:text-white"
        :class="{'active': hasPrev, 'cursor-not-allowed': !hasPrev}"
        :disabled="!hasPrev"
        @click.prevent="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        class="rounded-full border p-3 text-secondary hover:bg-secondary hover:text-white"
        :class="{'active': hasNext, 'cursor-not-allowed': !hasNext}"
        :disabled="!hasNext"
        @click.prevent="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
    <vue-horizontal ref="horizontal" class="this" :button="false" @scroll-debounce="onScroll">
      <div class="pl-5">
        <div class="flex-shrink-0 w-72 md:w-80 h-72 rounded-3xl pt-14 pl-14 p-10 bg-gray-200 border border-gray-300 relative">
          <p class="">
            I always tell them it’s the breadth of challenges, scale, engineering talent, big goals and the constant drive to achieve them.
          </p>
          <div class="absolute bottom-10 left-14 font-bold opacity-50 font-serif">
            John Doe
          </div>
          <img src="~/assets/doddles/quote.svg" class="absolute -top-5 -left-5" />
        </div>
      </div>
      <div class="mx-8 flex-shrink-0 w-72 md:w-80 h-72 rounded-3xl pt-14 pl-14 p-10 bg-gray-200 border border-gray-300 relative">
        <p class="">
          I always tell them it’s the breadth of challenges, scale, engineering talent, big goals and the constant drive to achieve them.
        </p>
        <div class="absolute bottom-10 left-14 font-bold opacity-50 font-serif">
          John Doe
        </div>
        <img src="~/assets/doddles/quote.svg" class="absolute -top-5 -left-5" />
      </div>
      <div class="flex-shrink-0 w-72 md:w-80 h-72 rounded-3xl pt-14 pl-14 p-10 bg-gray-200 border border-gray-300 relative">
        <p class="">
          I always tell them it’s the breadth of challenges, scale, engineering talent, big goals and the constant drive to achieve them.
        </p>
        <div class="absolute bottom-10 left-14 font-bold opacity-50 font-serif">
          John Doe
        </div>
        <img src="~/assets/doddles/quote.svg" class="absolute -top-5 -left-5" />
      </div>
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
  components: { VueHorizontal },
  data() {
    return {
      hasPrev: false,
      hasNext: true,
    }
  },
  methods: {
    prev() {
      this.$refs.horizontal.prev()
    },
    next() {
      this.$refs.horizontal.next()
    },
    onScroll({hasPrev, hasNext}) {
      this.hasPrev = hasPrev
      this.hasNext = hasNext
    }
  },
}
</script>
<style scoped>
.this >>> .v-hl-container {
  padding: 30px;
}
</style>