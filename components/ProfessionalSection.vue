<template>
  <div
    class="bg-blue-500 text-white py-20 md:py-40 md:pr-40 md:flex gap-10 overflow-hidden"
  >
    <div class="md:w-1/2 relative mr-10 md:mr-0">
      <img
        src="~/assets/imgs/nurse and black woman.jpg"
        class="w-full rounded-r-3xl"
        data-slide="scrollInRight"
      />
      <img
        src="~/assets/doddles/yellow-doodle.svg"
        class="absolute -bottom-10"
      />
    </div>
    <div class="md:w-1/2 p-5 md:p-0 relative mt-5 md:mt-0">
      <h2 class="text-4xl font-semibold mb-5 font-serif">
        Professionals available to help
      </h2>
      <p class="text-lg">
        We have a team of highly qualified and experienced pharmacists, who are
        always at your beck and call, ensuring that you recieve utmost
        attention, care and highly professional service.
      </p>
      <p class="text-lg mt-2">
        Our Pharmacist has gained additional designations in the field of
        Diabetes and Smoking Cessation. Whether you are having trouble managing
        your blood sugar levels or would like to know your options to quit
        smoking, our Pharmacist is dedicated to ensuring your needs are met.
        Walk-in or arrange for a one-on-one consultation with our Pharmacist.
      </p>
      <img
        src="~/assets/doddles/springs.svg"
        class="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  mounted() {
    gsap.from('[data-slide="scrollInRight"]', {
      scrollTrigger: {
        trigger: '[data-slide="scrollInRight"]',
        scrub: 0.5,
      },
      x: '-30px',
      opacity: 0.7,
      duration: 4,
    })
  },
}
</script>
