<template>
  <div>
    <app-header />
    <nuxt-child />
    <app-footer />
    <div v-if="true" class="fixed bottom-5 md:bottom-24 right-0 p-5 w-auto flex gap-4">
      <a href="tel:+1725-205-3641" class="bg-secondary p-3 rounded-full shadow-md text-white  hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </a>
      <p class="bg-primary text-white md:bg-white md:text-black py-3 px-5 rounded-3xl shadow-md text-sm">
        Hello, we are open.
      </p>
    </div>
  </div>
</template>

<script>
import { isMonday, isFriday, isWithinInterval, setHours, setMinutes, isSaturday } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'


export default {
  components: { AppHeader, AppFooter },
  data () {
    return {
      isOpen: false
    }
  },
  head () {
    return {
      title: "Atlas Pharmacy"
    }
  },
  mounted () {
    this.weekday()
    this.isSaturdayBusinessHours()
  },
  methods: {
    weekday () {
    const vegasTimezone = 'America/Los_Angeles'
    const now = new Date()
    const nowVegas = utcToZonedTime(now, vegasTimezone)

    const isWeekday = isMonday(nowVegas) || isFriday(nowVegas)
    const isBusinessHours = isWithinInterval(nowVegas, {
      start: setHours(setMinutes(new Date(), 0), 10),
      end: setHours(setMinutes(new Date(), 0), 17),
    })

    this.isOpen =  isWeekday && isBusinessHours

    },
    isSaturdayBusinessHours() {
      const vegasTimezone = 'America/Los_Angeles'
      const now = new Date()
      const nowVegas = utcToZonedTime(now, vegasTimezone)

      const isSat = isSaturday(nowVegas)
      const isBusinessHours = isWithinInterval(nowVegas, {
        start: setHours(setMinutes(new Date(), 0), 10),
        end: setHours(setMinutes(new Date(), 0), 14),
      })

      this.isOpen =  isSat && isBusinessHours
    }
  }
}
</script>
