import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("optimize")) {
          return new URLSearchParams({
            format: "webp",
            quality: "60", // تقليل الجودة من 75 إلى 60 لتوفير 139KB
            w: "1920",
            h: "1080",
          });
        }
        return new URLSearchParams();
      },
    }),
    // visualizer({
    //   open: true, // يفتح التقرير مباشرة في المتصفح
    //   filename: "stats.html", // اسم ملف التقرير
    //   gzipSize: true, // يُظهر حجم الملفات بعد الضغط
    //   brotliSize: true, // يُظهر حجم الملفات بعد ضغط Brotli
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
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
        passes: 3, // تشغيل الضغط 3 مرات لتحسين أفضل
        unused: true, // إزالة المتغيرات غير المستخدمة
        dead_code: true, // إزالة الكود الميت
        side_effects: false, // تحسين tree-shaking
      },
      mangle: {
        safari10: true, // دعم Safari 10
        toplevel: true, // تحسين أفضل للكود
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // تحسين code splitting للصفحات
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "vendor";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (
              id.includes("lucide-react") ||
              id.includes("@tabler/icons") ||
              id.includes("@heroicons")
            ) {
              return "icons";
            }
            if (id.includes("react-lazy-load-image")) {
              return "lazyimg";
            }
            if (id.includes("react-gtm") || id.includes("react-ga")) {
              return "analytics";
            }
            if (id.includes("react-hook-form") || id.includes("zod")) {
              return "forms";
            }
            if (id.includes("@headlessui") || id.includes("@radix-ui")) {
              return "ui";
            }
            return "vendor";
          }
          // تقسيم صفحات التطبيق
          if (id.includes("/pages/")) {
            if (id.includes("HomePage")) return "home";
            if (id.includes("ServicesPage")) return "services";
            if (id.includes("ProjectsPage")) return "projects";
            if (id.includes("EquipmentPage")) return "equipment";
            if (id.includes("ContactPage")) return "contact";
          }
          // تقسيم المكونات
          if (id.includes("/components/")) {
            return "components";
          }
        },
        // تحسين أسماء الملفات لتقليل حجمها
        chunkFileNames: "js/[name]-[hash].js",
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
      // تحسين cache headers للموارد الثابتة
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  // تحسين cache headers للموارد الثابتة
  define: {
    __VITE_OPTIMIZE_VERSION__: JSON.stringify(Date.now()),
  },
  esbuild: {
    // تحسين ESBuild للأداء
    target: "es2018",
    minify: true,
  },
});
