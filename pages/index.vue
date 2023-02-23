<template>
  <main class="bg-gray-500 h-screen">
    <hero-section />
    <professional-section />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import ProfessionalSection from '~/components/ProfessionalSection.vue'
export default {
  name: 'IndexPage',
  components: { HeroSection, ProfessionalSection },
}
</script>
