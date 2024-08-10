// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts"],

    fonts: {
        experimental: {
            processCSSVariables: true,
        },
        families: [{ name: "Inter", provider: "google" }],
    },

    compatibilityDate: "2024-08-10",
});
