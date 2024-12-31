// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
});
