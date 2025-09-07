import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
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
          vendor: ["react", "react-dom", "react-router-dom"], // تقسيم الكود إلى وحدات
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
