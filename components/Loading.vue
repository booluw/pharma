<template>
  <div v-if="loading" class=""></div>
</template>

<script>
export default {
  name: "LoadingPage",
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
