import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { imagetools } from "vite-imagetools";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    // visualizer({
    //   open: true, // يفتح التقرير مباشرة في المتصفح
    //   filename: "stats.html", // اسم ملف التقرير
    //   gzipSize: true, // يُظهر حجم الملفات بعد الضغط
    //   brotliSize: true, // يُظهر حجم الملفات بعد ضغط Brotli
    // }),
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
    // تحسين تحميل الخطوط
    assetsInlineLimit: 0, // عدم تضمين الخطوط في CSS
    terserOptions: {
      compress: {
        drop_console: true, // إزالة console.log
        drop_debugger: true, // إزالة debugger statements
        pure_funcs: ["console.log", "console.info", "console.debug"], // إزالة console functions
        passes: 2, // تشغيل الضغط مرتين لتحسين أفضل
      },
      mangle: {
        safari10: true, // دعم Safari 10
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react", "@tabler/icons-react", "@heroicons/react"],
          lazyimg: ["react-lazy-load-image-component"],
          analytics: ["react-gtm-module", "react-ga4", "react-ga"],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
          ui: [
            "@headlessui/react",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
        },
        // تحسين أسماء الملفات لتقليل حجمها
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId
                .split("/")
                .pop()
                .replace(".jsx", "")
                .replace(".js", "")
            : "chunk";
          return `js/[name]-[hash].js`;
        },
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    hmr: true, // دعم Hot Module Replacement
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  esbuild: {
    // تحسين ESBuild للأداء
    target: "es2018",
    minify: true,
  },
});
