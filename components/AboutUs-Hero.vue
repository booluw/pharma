<template>
  <div
    class="about h-screen bg-green-200 text-black py-28 px-8 md:flex gap-5 md:items-center md:py-20 md:pl-40 overflow-hidden"
  >
    <div class="md:w-1/2">
      <h1 class="font-serif text-4xl font-bold" data-gsap="staggered-text">
        We are Atlas, the leading Pharmacy in the United States
      </h1>
      <p class="mt-5 opacity-75">
        Atlas Pharmacy is a Las Vegas-based pharmacy dedicated to providing
        excellent customer service, the highest quality products and
        pharmaceutical care.
      </p>
    </div>
    <div class="md:w-1/2 relative flex justify-end px-10 mt-10">
      <img
        src="~/assets/imgs/lab.jpg"
        class="w-3/4 h-auto rounded-lg"
        data-slide="inBottom"
      />
      <img
        src="~/assets/imgs/nurse.jpg"
        class="w-2/3 h-auto absolute left-0 bottom-5 md:bottom-16 rounded-lg z-30 shadow-lg"
        data-slide="inRight"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default {
  mounted() {
    const myText = new SplitType('[data-gsap="staggered-text"]', {
      types: 'chars',
    })
    gsap.from('[data-slide="inRight"]', {
      x: '-30px',
      opacity: 0.7,
      duration: 4,
    })
    gsap.from('[data-slide="inBottom"]', {
      y: '-30px',
      opacity: 0.7,
      duration: 4,
    })
    gsap.fromTo(
      myText.chars,
      {
        y: 0,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
      }
    )
  },
}
</script>
