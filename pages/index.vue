<template>
  <main class="bg-gray-500 h-screen">
    <hero-section />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
export default {
  name: 'IndexPage',
  components: { HeroSection },
}
</script>
