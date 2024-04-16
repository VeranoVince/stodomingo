import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite"; // Import defineConfig

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-icons/fa": path.resolve(__dirname, "node_modules/react-icons/fa"),
    },
  },
});
