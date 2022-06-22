import { defineNuxtConfig } from 'nuxt3'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],
  script: [
    {
      src: "bootstrap/bootstrap.bundle.min.js",
      type: "text/javascript"
    }
   ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'bootstrap/dist/js/bootstrap.esm.min.js',
    // 'bootstrap/dist/js/bootstrap.min.js',
  ]
})
