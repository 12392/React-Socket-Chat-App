// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api/user": {
//         target: "http://127.0.0.1:5000",
//         changeOrigin: true,
//         // rewrite: (path) => path.replace(/^\/api/, '')
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/user": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      "/api/chat": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      "/api/message": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
