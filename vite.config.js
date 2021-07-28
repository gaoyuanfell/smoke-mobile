import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import viteCompression from "vite-plugin-compression";
export default defineConfig({
  plugins: [createVuePlugin(), viteCompression()],
  base: '/m',
  server: {
    port: 8081,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@": path.resolve("src")
    }
  }
});
