// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/styles/main.scss',
    '~/styles/variables.scss',
    '~/styles/fonts.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/mixins.scss" as *;',
        },
      },
    },
  }
})
