// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      script: [
        {
          // runs synchronously in <head>, before body paints
          innerHTML: `
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var theme = stored === 'light' || stored === 'dark'
                  ? stored
                  : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                document.documentElement.style.colorScheme = theme;
              } catch (e) {}
            })();
          `,
          type: "text/javascript",
        },
      ],
    },
  },
});
