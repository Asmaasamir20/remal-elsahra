import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { imagetools } from "vite-imagetools";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    visualizer({
      open: true, // يفتح التقرير مباشرة في المتصفح
      filename: "stats.html", // اسم ملف التقرير
      gzipSize: true, // يُظهر حجم الملفات بعد الضغط
      brotliSize: true, // يُظهر حجم الملفات بعد ضغط Brotli
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom", "react-router", "react-router-dom"],
  },
  build: {
    target: "es2018", // تجنّب تحويلات غير ضرورية لمتصفحات حديثة
    outDir: "dist",
    assetsDir: "assets",
    assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
    sourcemap: false,
    minify: "terser", // تمكين minification
    terserOptions: {
      compress: {
        drop_console: true, // إزالة console.log
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
          lazyimg: ["react-lazy-load-image-component"],
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    hmr: true, // دعم Hot Module Replacement
  },
});
