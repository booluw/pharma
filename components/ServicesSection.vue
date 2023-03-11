<template>
  <section class="py-20 px-5 md:py-28 md:px-40 bg-gray-50">
    <h1 class="text-4xl font-serif font-semibold header">What we offer</h1>
    <p class="mt-2 md:w-1/2">At Atlas we make sure our patients receive quality service and expert advice. Here are just a few of the services we provide:</p>
    <div class="md:flex flex-wrap justify-center gap-5 mt-10">
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/capsule.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">PRESCRIPTION DRUG SERVICES</h2>
          <p class="">For all your medication needs.</p>
        </div>
      </div>
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/doctor.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">MEDICATION REVIEW</h2>
          <p class="">We provide one-on-one FREE Medication Review to all of our patients</p>
        </div>
      </div>
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/ambulance-cross.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">MEDICATION DELIVERY SERVICE</h2>
          <p class="">FREE prescription delivery within the GTA. Simply call us to get started.</p>
        </div>
      </div>
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/dollar.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">LOW PRICES</h2>
          <p class="">Our goal is to provide you the best health care at the best prices.</p>
        </div>
      </div>
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/drug-pack.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">COMPLIANCE & BLISTER PACKAGING</h2>
          <p class="">FREE easy-to-use packaging to take your medications in the right dose and time.</p>
        </div>
      </div>
      <div class="border-box bos h-32 md:h-auto md:w-1/4 mb-5 md:mb-0 bg-gray-100 p-5 rounded-md flex gap-3 items-start border">
        <img src="~/assets/imgs/prescription.svg" class="w-6 h-auto text-gray-100" />
        <div class="">
          <h2 class="font-semibold text-md mb-3">MEDICATION REVIEW</h2>
          <p class="">We provide one-on-one FREE Medication Review to all of our patients</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: "ServicesSection",
  mounted() {
    gsap.utils.toArray('.bos').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i
        },
        y: '100px',
        opacity: 0.5
      })
    })
  }
}
</script>
