// @ts-check
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://clcs.club/",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",

  integrations: [icon(), playformCompress()],
});
