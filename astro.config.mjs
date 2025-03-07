// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://hkaar.github.io",
  base: import.meta.env.PROD ? "/taxidus-docs" : "/",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  // To change these change clear the cached images and site data in the browser first
  // to do this in chrome or firefox just press (CTRL+SHIFT+DELETE)
  redirects: {
    "/docs": {
      destination: "/docs/intro",
      status: 303,
    },
    "/guides": {
      destination: "/guides/intro",
      status: 303,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ["js-big-decimal"],
    },
  },
});
