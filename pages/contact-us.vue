<template>
  <div class="">
    <section class="py-40 px-5 md:h-screen md:flex gap-10 md:pl-40 md:pr-0 md:py-20 items-center bg-green-300">
      <div class="md:w-1/2">
        <h1 class="font-bold text-3xl md:text-5xl relative z-10 font-serif" data-gsap="staggered-text">
          Contact Us!
        </h1>
        <p class="text-xl opacity-75 mt-5">
          Our Full-service pharmacy is here to serve your needs.
          We invite you to contact us by phone or email.
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:w-1/2">
        <img
          src="~/assets/imgs/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare-stethoscope-black-woman-doctor.compressed.jpg"
          class="w-full h-auto rounded-lg slideRight"
        />
      </div>
    </section>
    <section class="py-20 px-5 min-h-screen md:flex gap-10 md:pl-40 md:py-20">
      <div class="md:w-1/2">
        <h2 class="text-4xl font-serif font-semibold header">We are open!</h2>
        <p class="text-xl mt-5">
          3585 S Maryland Pkwy Ste.J,<br />
          Las Vagas, NV. 89169<br />
          Opposite Blvd mall
        </p>
        <div class="mt-10">
          <div class="flex items-center gap-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <a href="tel:+1725-205-3641">725-205-3641</a>
          </div>
          <div class="flex items-center gap-3 text-primary mt-3">
            <b>FAX</b>
            <span>725-205-4926</span>
          </div>
        </div>
        <div class="flex gap-5 mt-5">
          <a
            href="https://www.yelp.ca/biz/atlas-pharmacy-Maryland-Pkwy"
            class="p-2 bg-primary rounded-full text-gray-600 hover:bg-red-500 hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
            target="_blank"
            title="Atlas pharmacy on Yelp"
          >
            <img src="~/assets/imgs/yelp.svg" class="w-6" />
          </a>
          <a
            href="https://www.yelp.ca/biz/atlas-pharmacy-Maryland-Pkwy"
            class="p-2 bg-primary rounded-full text-gray-600 hover:bg-red-700 hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
            target="_blank"
            title="Atlas pharmacy on Google Plus"
          >
            <img src="~/assets/imgs/google-plus.svg" class="w-6" />
          </a>
          <a
            href="https://www.yelp.ca/biz/atlas-pharmacy-Maryland-Pkwy"
            class="p-2 bg-primary rounded-full text-gray-600 hover:bg-secondary hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
            target="_blank"
            title="Atlas pharmacy on Facebook"
          >
            <img src="~/assets/imgs/facebook.svg" class="w-6" />
          </a>
        </div>
        <h2 class="mt-16 text-2xl font-serif font-semibold header">Hours of operation</h2>
        <div class="mt-3 md:w-2/3">
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Monday' ? 'bg-gray-100' : ''"
          >
            Monday
            <p class="text-gray-500">
              10:00 AM - 6:00PM
            </p>
          </div>
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Tuesday' ? 'bg-gray-100' : ''"
          >
            Tuesday
            <p class="text-gray-500">
              10:00 AM - 6:00PM
            </p>
          </div>
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Wednesday' ? 'bg-gray-100' : ''"
          >
            Wednesday
            <p class="text-gray-500">
              10:00 AM - 6:00PM
            </p>
          </div>
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Thursday' ? 'bg-gray-100' : ''"
          >
            Thursday
            <p class="text-gray-500">
              10:00 AM - 6:00PM
            </p>
          </div>
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Friday' ? 'bg-gray-100' : ''"
          >
            Friday
            <p class="text-gray-500">
              10:00 AM - 6:00PM
            </p>
          </div>
          <div
            class="time flex justify-between items-center border-b p-3"
            :class="today ==='Saturday' ? 'bg-gray-100' : ''"
          >
            Saturday
            <p class="text-gray-500">
              10:00 AM - 2:00PM
            </p>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.7323040080287!2d-115.13992038521594!3d36.124379013148825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4f6ed900001%3A0xe9b860bea57d7e5e!2s3585%20S%20Maryland%20Pkwy%20suite%20J%2C%20Las%20Vegas%2C%20NV%2089169%2C%20USA!5e0!3m2!1sen!2sng!4v1678238615853!5m2!1sen!2sng"
        class="w-full mt-10 mf:mt-0 md:w-1/2 h-auto rounded slideRight"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>
    <section class="py-20 px-5 min-h-screen md:flex gap-16 md:pl-0 md:pr-40 md:py-20">
      <div class="mb-5 md:mb-0 md:w-1/2">
        <img
          src="~/assets/imgs/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare.compressed.compressed.jpg"
          class="w-full rounded-lg slideLeft" />
      </div>
      <div class="md:w-1/2">
        <h1 class="header font-bold text-3xl md:text-5xl relative z-10 font-serif">
          Get in touch!
        </h1>
        <p class="">
          We love to hear from you. Send us your feedback or questions and we will get back
          to you as soon as possible
        </p>
        <form ref="form" class="slideUp border rounded-lg p-5 md:p-10 mt-9" @submit.prevent="sendEmail()">
          <label class="flex flex-col" for="name">
          <span class="text-sm">Name:</span>
          <input
            id="name"
            v-model="user.name"
            name="name"
            type="text"
            class="border-b border-green-300 outline-none"
            required
          />
          </label>
          <label class="flex flex-col mt-5" for="email">
            <span class="text-sm">Email:</span>
            <input
              id="email"
              v-model="user.email"
              name="email"
              type="email"
              class="border-b border-green-300 outline-none"
              required
            />
          </label>
          <label class="flex flex-col mt-5" for="phone">
            <span class="text-sm">Phone Number:</span>
            <input
              id="phone"
              v-model="user.phone"
              name="phone"
              type="tel"
              class="border-b border-green-300 outline-none"
              required
            />
          </label>
          
          <label class="flex flex-col mt-5" for="note">
            <span class="text-sm">Note:</span>
            <textarea
              id="note"
              v-model="user.other_details"
              name="other_details"
              class="border-b border-green-300 outline-none"
            ></textarea>
          </label>
          <button
            type="submit"
            class="font-semibold text-lg md:font-bold w-full mt-16 md:mt-5 px-3 py-4 rounded-2xl bg-[#30BEA0] border-2 border-[#30BEA0] text-white opacity-80 hover:opacity-100 hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
            :class="{ 'bg-gray-500 cursor-not-allowed' : submitting}"
            :disabled="submitting"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import { format } from 'date-fns'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: '',
        note: ''
      },
      submitting: false
    }
  },
  computed: {
    today () {
      return format(new Date(), 'EEEE')
    }
  },
  mounted() {
    gsap.from('.slideUp', {
      scrollTrigger: {
        trigger: '.slideUp',
        scrub: 1
      },
      y: '100px'
    })
    gsap.from('.slideLeft', {
      scrollTrigger: {
        trigger: '.slideLeft',
        scrub: 1
      },
      x: '-100px'
    })
    gsap.utils.toArray('.slideRight').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i
        },
        x: '50px',
        opacity: 0.5
      })
    })
    gsap.utils.toArray('.time').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i
        },
        x: '-50px',
        opacity: 0.5
      })
    })
    gsap.utils.toArray('.header').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i
        },
        x: '-50px',
        opacity: 0.5
      })
    })
    const myText = new SplitType('[data-gsap="staggered-text"]', { types: 'chars'})
    gsap.fromTo(
    myText.chars,
      { 
        y: 0,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 5,
        ease: 'power4.out',
      }
    )
  },
  methods: {
    sendEmail () {
      this.submitting = true
      emailjs.sendForm('service_5ktdebn', 'message', this.$refs.form, 'OcUbO9k2E6-CRQxTE')
      .then((response) => {
        this.$fire({
          title: 'Message received',
          text: 'We will contact you soonest',
          type: 'success',
          timer: 3000
        })
        this.user = {
          name: '',
          email: '',
          phone: '',
          note: ''
        }
      }).catch((error) => {
        this.$fire({
          title: "Couldn't send message",
          text: 'Please try again',
          type: 'error',
          timer: 3000
        })
        console.error(error)
      })
      this.submitting = false
    }
  }
}
</script>

<style>

</style>