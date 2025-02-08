import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // ✅ Ensures output goes to "dist"
    emptyOutDir: true,  // ✅ Clears old builds before creating new ones
  },
  server: {
    port: 6263,
    open: true,
    host: true,
  },
});
