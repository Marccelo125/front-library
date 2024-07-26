// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "vuetify-nuxt-module"],
  runtimeConfig: {
    public: {
      apiUrl: "url",
    },
  },
  css: ["~/assets/css/main.css"],
});
