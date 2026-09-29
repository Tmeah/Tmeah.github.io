import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { firstPaint } from "./scripts/first-paint-plugin";

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  appType: "mpa",
  plugins: [react(), firstPaint()],
  resolve: {
    alias: {
      "@": fromRoot("./src"),
    },
  },
  build: {
    copyPublicDir: !isSsrBuild,
    rollupOptions: isSsrBuild ? {} : {
      input: {
        home: fromRoot("./index.html"),
        archive: fromRoot("./archive/index.html"),
        caseStudies: fromRoot("./projects/index.html"),
        viralz: fromRoot("./projects/viralz/index.html"),
        snappd: fromRoot("./projects/snappd/index.html"),
        gogrow: fromRoot("./projects/gogrow/index.html"),
        notFound: fromRoot("./404.html"),
        reels: fromRoot("./reels/index.html"),
      },
    },
  },
  server: {
    port: 43123,
    host: true,
    allowedHosts: [".trycloudflare.com"],
  },
  preview: {
    port: 43124,
    host: true,
  },
}));
