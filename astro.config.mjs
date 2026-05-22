import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://tu-nnicolasluna.github.io",
  base: "/andencode-web",
});