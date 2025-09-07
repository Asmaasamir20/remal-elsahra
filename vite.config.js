import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [
        "defaults",
        "> 0.2%",
        "not dead",
        "not op_mini all",
        "not IE 11",
      ],
    }),
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
