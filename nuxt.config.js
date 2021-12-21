export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kmsasdjnasd',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Anton&display=swap'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https:///fonts.googleapis.com/earlyaccess/notosanskr.css'
      },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6%2Ces7%2CArray.from'}
   ],
  }, 

 
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper',  ssr: false  },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/function.scss',
  ], 
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'

  ], 

  gsap: {
    /* module options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  styleResources: {
    // your settings here 
    sass: [],
    scss: [
    ],
    less: [ 
      // '~/assets/scss/*.scss',
    ],
    stylus: [],
    hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },
  //loading
  // loading: '~/components/LoadingBar.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [ 'babel-polyfill', 'eventsource-polyfill' ]
  }
}
