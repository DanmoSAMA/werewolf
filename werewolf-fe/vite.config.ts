import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { svgBuilder } from "./src/plugins/svgBuilder";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgBuilder("./public/assets/icons/")],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/mobx": path.resolve(__dirname, "./src/mobx"),
      "@/network": path.resolve(__dirname, "./src/network"),
      "@/constants": path.resolve(__dirname, "./src/constant"),
      "@/plugins": path.resolve(__dirname, "./src/plugins"),
    },
  },
});
