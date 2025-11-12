import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://kumokumo1653.github.io',
  base: '/Portfolio',
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()]
  }
});