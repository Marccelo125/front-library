import darkTheme from "./config/themes/darkTheme";
import lightTheme from "./config/themes/lightTheme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module"],
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:8000"
    },
  },
  css: ["~/assets/styles/main.scss"],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "lightTheme",
        themes: {
          lightTheme,
          darkTheme,
        },
      },
    },
  },
});
