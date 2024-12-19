// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
export default defineConfig({
  site: "https://bunestro.vercel.app/",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
