import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "van-shake.vercel.app",
  integrations: [tailwind(), icon()],
});
