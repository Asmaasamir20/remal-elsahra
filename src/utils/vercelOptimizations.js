/**
 * Vercel-specific Performance Optimizations
 * تحسينات الأداء الخاصة بـ Vercel
 */

/**
 * Check if running on Vercel
 * التحقق من تشغيل الموقع على Vercel
 */
export const isVercel = () => {
  return (
    typeof window !== "undefined" &&
    (window.location.hostname.includes("vercel.app") ||
      (typeof process !== "undefined" && process.env.VERCEL === "1"))
  );
};

/**
 * Optimize for Vercel Edge Runtime
 * تحسين لـ Vercel Edge Runtime
 */
export const optimizeForVercel = () => {
  if (isVercel()) {
    // تحسينات خاصة بـ Vercel
    console.log("Running on Vercel - applying optimizations");

    // إضافة تحسينات إضافية للشبكة
    if ("connection" in navigator) {
      const connection = navigator.connection;
      if (
        connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g"
      ) {
        // تقليل تحميل الموارد للشبكات البطيئة
        document.documentElement.classList.add("slow-connection");
      }
    }
  }
};

/**
 * Preload critical resources for Vercel
 * تحميل الموارد الحرجة مسبقاً لـ Vercel
 */
export const preloadForVercel = () => {
  // تم تعطيل preload للصور لأنها محملة في HTML
  // if (isVercel() && typeof window !== "undefined") {
  //   // تحميل الموارد الحرجة فقط على Vercel
  //   const criticalResources = [
  //     {
  //       href: "/assets/home/homeCover.webp",
  //       as: "image",
  //       type: "image/webp",
  //       priority: true,
  //     },
  //   ];
  //   criticalResources.forEach(({ href, as, type, priority }) => {
  //     const existing = document.querySelector(
  //       `link[rel="preload"][href="${href}"]`
  //     );
  //     if (!existing) {
  //       const link = document.createElement("link");
  //       link.rel = "preload";
  //       link.href = href;
  //       link.as = as;
  //       if (type) link.type = type;
  //       if (priority) link.setAttribute("fetchpriority", "high");
  //       document.head.appendChild(link);
  //     }
  //   });
  // }
};

/**
 * Optimize images for Vercel
 * تحسين الصور لـ Vercel
 */
export const optimizeImagesForVercel = () => {
  if (isVercel() && typeof window !== "undefined") {
    // إضافة تحسينات للصور على Vercel
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // إضافة تحسينات خاصة بـ Vercel
      if (!img.hasAttribute("loading")) {
        img.loading = "lazy";
      }
      if (!img.hasAttribute("decoding")) {
        img.decoding = "async";
      }
    });
  }
};

/**
 * Initialize Vercel optimizations
 * تهيئة تحسينات Vercel
 */
export const initVercelOptimizations = () => {
  if (typeof window !== "undefined") {
    optimizeForVercel();
    preloadForVercel();

    // تطبيق تحسينات الصور بعد تحميل DOM
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", optimizeImagesForVercel);
    } else {
      optimizeImagesForVercel();
    }
  }
};

export default {
  isVercel,
  optimizeForVercel,
  preloadForVercel,
  optimizeImagesForVercel,
  initVercelOptimizations,
};
