import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 6263, 
    open: true, 
    host: true,
  },
  build: {
    outDir: "dist", // ✅ Correctly inside `build`
  },
});
