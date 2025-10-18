import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        concurrency: 7,
        crawlLinks: true,
        retryCount: 3,
      },
      srcDirectory: "src/app",
      sitemap: {
        enabled: true,
        host: "https://www.thegridline.site",
      },
    }),
    react(),
    nitro(),
  ],
});
