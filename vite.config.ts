import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  appType: "mpa",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fromRoot("./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: fromRoot("./index.html"),
        archive: fromRoot("./archive/index.html"),
        caseStudies: fromRoot("./projects/index.html"),
        viralz: fromRoot("./projects/viralz/index.html"),
        snappd: fromRoot("./projects/snappd/index.html"),
        gogrow: fromRoot("./projects/gogrow/index.html"),
        notFound: fromRoot("./404.html"),
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
});
