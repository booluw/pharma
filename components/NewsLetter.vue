<template>
  <div class="bg-gray-100 px-10 py-20 md:pb-40 md:px-40">
    <div class="bg-secondary rounded-xl p-5 md:py-24 md:px-32 newsletter">
      <div class="mb-16">
        <h2 class="text-4xl font-semibold mb-2 font-serif text-white">Subscribe to our newsletter</h2>
        <p class="text-white opacity-75">Would you love to be informed about our special offers, discounts and bonuses?</p>
      </div>
      <iframe id="frame" name="frame" class="hidden" @load="subscribed = true" />
      <p v-if="subscribed" class="text-xl text-white">Thank you for subscribing to our offers and health tips.</p>
      <form
        v-else
        action="https://docs.google.com/forms/d/e/1FAIpQLScqhaAs_V6kifU35oWKQlLXIF__RmWR8dZCBScmjAHSx8-lgw/formResponse"
        class=""
        target="frame"
        method="post"
        @submit="submitEmail()"
      >
        <div class="flex rounded-lg overflow-hidden">
          <input
            type="email"
            required
            name="entry.1619630260"
            placeholder="Your email address"
            class="w-2/3 p-5 outline-none"
          />
          <button class="w-1/3 bg-primary text-white font-serif font-semibold hover:opacity-95">Yes I'd Love To</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribed: false
    }
  },
  methods: {
    submitEmail () {
      return true
    },
  }
}
</script>

<style>

</style>