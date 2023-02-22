export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  loading: '~/components/Loading.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pharma',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  build: {},
  tailwindcss: {
    configPath: '~/config/tailwind.js',
  },
}
