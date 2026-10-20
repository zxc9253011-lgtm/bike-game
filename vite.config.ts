import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "pages" ? "/bike-game/" : "/",
  plugins: [react()],
  server: { host: "0.0.0.0" },
}));
