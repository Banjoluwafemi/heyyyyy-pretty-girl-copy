import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Ensure Vite outputs to "dist"
  server: {
    port: 6263,
    open: true,
    host: true,
  },
});
