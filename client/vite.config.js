import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemapIgnoreList: (path) => {
      // Suppress warnings for missing `quill.snow.css.map`
      return !path.includes("quill.snow.css.map");
    },
  },
  build: {
    sourcemap: false, // Optional: Disable source maps in production builds
  },
});
