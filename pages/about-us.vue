<template>
  <main>
    <about-us-hero />
    <section class="section flex items-center justify-center my-24">
      <div
        class="w-1/2 -ml-16 md:ml-0 md:w-1/4 flex flex-wrap items-center justify-center"
      >
        <div class="flex items-end">
          <img src="~/assets/imgs/doc.jpg" class="w-2/3 h-auto slideInLeft" />
          <img
            src="~/assets/imgs/Doctor.png"
            class="w-2/3 h-auto bg-primary slideDown"
          />
        </div>
        <div class="flex items-start">
          <img src="~/assets/imgs/black-doc.jpg" class="w-2/3 h-auto slideUp" />
          <img
            src="~/assets/imgs/female-doctor.jpg"
            class="w-2/3 h-auto slideInRight"
          />
        </div>
      </div>
    </section>
    <section class="py-10 px-10 md:py-24 md:px-40">
      <h2 class="text-4xl font-serif font-semibold header">About Atlas</h2>
      <p class="mt-5 slideText">
        Atlas Pharmacy is a Las Vegas-based pharmacy dedicated to providing
        excellent customer service, the highest quality products and
        pharmaceutical care. Our pharmacists have solid pedigree and expertise
        and are committed to using these in providing medical therapies and
        treatments to our customers. We help patients understand their
        medications, so that they can make informed decisions about their
        health, and we strive to build relationships with our customers by
        providing individualized care and creating a welcoming atmosphere for
        all.
      </p>
    </section>
    <section class="py-10 px-10 md:py-24 md:px-40 bg-gray-200">
      <h2 class="text-4xl font-serif font-semibold header">Our Mission</h2>
      <p class="mt-5 slideText">
        At Atlas Pharmacy, our focus is on your health and well being. We are
        passionate about our work and committed to understanding the needs of
        our customers while exceeding their expectations. Our pharmacy services
        are tailored to meet the individual needs of our patients who come from
        diverse backgrounds. We also understand that your time is valuable and
        we strive to provide you with quick but informative service at each
        visit.
      </p>
    </section>
    <services-section />
  </main>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'AboutUsPage',
  mounted() {
    gsap.utils.toArray('.header').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i,
        },
        x: '-50px',
        opacity: 0.5,
      })
    })
    gsap.utils.toArray('.slideText').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i,
        },
        y: '50px',
        opacity: 0.5,
      })
    })
    gsap.from('.slideDown', {
      scrollTrigger: {
        trigger: '.slideDown',
        scrub: 1,
      },
      y: '-50px',
      opacity: 1,
    })
    gsap.from('.slideInLeft', {
      scrollTrigger: {
        trigger: '.slideInLeft',
        scrub: 1,
      },
      x: '-50px',
      opacity: 1,
    })
    gsap.from('.slideInRight', {
      scrollTrigger: {
        trigger: '.slideInRight',
        scrub: 1,
      },
      x: '50px',
      opacity: 0.7,
    })
    gsap.from('.slideUp', {
      scrollTrigger: {
        trigger: '.slideUp',
        scrub: 1,
      },
      y: '30px',
      opacity: 0.7,
    })
    gsap.from('.slideText', {
      scrollTrigger: {
        trigger: '.header',
        scrub: 0,
      },
      y: '30px',
      opacity: 0.7,
    })
  },
}
</script>
