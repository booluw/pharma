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
  css: ['~/assets/css/fonts.css'],
  plugins: [{ src: '~/plugins/alert', mode: 'client' }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  build: {},
  tailwindcss: {
    configPath: '~/tailwind.js',
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
    families: {
      'Montserrat': true,
      'Raleway': true,
    }
  }
}
