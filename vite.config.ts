import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: {
        initialIsOpen: true,
      },
    }),
  ],
  base: "./", // Use relative paths for GitHub Pages with HashRouter
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true, // Show errors as overlay in the browser (default: true)
    },
  },
});
