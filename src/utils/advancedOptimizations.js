/**
 * Advanced Performance Optimizations
 * تحسينات الأداء المتقدمة
 */

/**
 * Optimize third-party scripts loading
 * تحسين تحميل سكريبتات الطرف الثالث
 */
export const optimizeThirdPartyScripts = () => {
  // تأجيل تحميل جميع سكريبتات الطرف الثالث
  const thirdPartyScripts = [
    "https://www.googletagmanager.com/gtm.js",
    "https://www.google-analytics.com/analytics.js",
    "https://www.googletagmanager.com/gtag/js",
  ];

  thirdPartyScripts.forEach((scriptUrl) => {
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.setAttribute("defer", "");
      existingScript.setAttribute("async", "");
    }
  });
};

/**
 * Optimize images with better compression
 * تحسين الصور بضغط أفضل
 */
export const optimizeImageCompression = () => {
  if (typeof window !== "undefined") {
    // إضافة تحسينات للصور الموجودة
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // إضافة تحسينات إضافية
      if (!img.hasAttribute("loading") && img.src.includes("homeCover")) {
        img.setAttribute("loading", "eager");
      }

      // تحسين lazy loading
      if (!img.hasAttribute("loading") && !img.src.includes("homeCover")) {
        img.loading = "lazy";
      }
    });
  }
};

/**
 * Optimize CSS delivery
 * تحسين تسليم CSS
 */
export const optimizeCSSDelivery = () => {
  if (typeof window !== "undefined") {
    // إضافة تحسينات للـ CSS
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach((link) => {
      if (!link.hasAttribute("media")) {
        link.media = "all";
      }
    });
  }
};

/**
 * Optimize font loading
 * تحسين تحميل الخطوط
 */
export const optimizeFontLoading = () => {
  if (typeof window !== "undefined") {
    // تحسين تحميل الخطوط
    const fontLinks = document.querySelectorAll(
      'link[rel="preload"][as="font"]'
    );
    fontLinks.forEach((link) => {
      if (!link.hasAttribute("crossorigin")) {
        link.crossOrigin = "anonymous";
      }
    });
  }
};

/**
 * Optimize resource hints
 * تحسين تلميحات الموارد
 */
export const optimizeResourceHints = () => {
  if (typeof window !== "undefined") {
    // إضافة dns-prefetch للموارد الخارجية
    const externalDomains = [
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];

    externalDomains.forEach((domain) => {
      const existing = document.querySelector(
        `link[rel="dns-prefetch"][href="${domain}"]`
      );
      if (!existing) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }
};

/**
 * Optimize critical rendering path
 * تحسين مسار العرض الحرجة
 */
export const optimizeCriticalRenderingPath = () => {
  if (typeof window !== "undefined") {
    // تحسين مسار العرض الحرجة
    const criticalElements = document.querySelectorAll(
      ".home-cover, .navbar, .hero"
    );
    criticalElements.forEach((element) => {
      element.style.contentVisibility = "auto";
      element.style.containIntrinsicSize = "300px 200px";
    });
  }
};

/**
 * Optimize JavaScript execution
 * تحسين تنفيذ JavaScript
 */
export const optimizeJavaScriptExecution = () => {
  if (typeof window !== "undefined") {
    // تحسين تنفيذ JavaScript
    const scripts = document.querySelectorAll("script[src]");
    scripts.forEach((script) => {
      if (!script.hasAttribute("defer") && !script.hasAttribute("async")) {
        script.defer = true;
      }
    });
  }
};

/**
 * Initialize all advanced optimizations
 * تهيئة جميع التحسينات المتقدمة
 */
export const initAdvancedOptimizations = () => {
  if (typeof window !== "undefined") {
    // تطبيق التحسينات بعد تحميل DOM
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        optimizeThirdPartyScripts();
        optimizeImageCompression();
        optimizeCSSDelivery();
        optimizeFontLoading();
        optimizeResourceHints();
        optimizeCriticalRenderingPath();
        optimizeJavaScriptExecution();
      });
    } else {
      optimizeThirdPartyScripts();
      optimizeImageCompression();
      optimizeCSSDelivery();
      optimizeFontLoading();
      optimizeResourceHints();
      optimizeCriticalRenderingPath();
      optimizeJavaScriptExecution();
    }
  }
};

export default {
  optimizeThirdPartyScripts,
  optimizeImageCompression,
  optimizeCSSDelivery,
  optimizeFontLoading,
  optimizeResourceHints,
  optimizeCriticalRenderingPath,
  optimizeJavaScriptExecution,
  initAdvancedOptimizations,
};
