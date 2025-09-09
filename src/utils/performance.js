/**
 * Performance Optimization Utilities
 * أدوات تحسين الأداء
 */

/**
 * Lazy load images with intersection observer
 * تحميل الصور بشكل كسول باستخدام Intersection Observer
 */
export const lazyLoadImages = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              img.classList.remove("lazy");
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: "50px 0px", // تحميل الصور قبل 50px من ظهورها
        threshold: 0.01,
      }
    );

    // مراقبة جميع الصور الكسولة
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Preload critical resources
 * تحميل الموارد الحرجة مسبقاً
 */
export const preloadCriticalResources = () => {
  // تم تعطيل preload للصور لأنها محملة في HTML
  // const criticalImages = ["/assets/home/homeCover.webp", "/assets/logo.webp"];
  // criticalImages.forEach((src) => {
  //   const link = document.createElement("link");
  //   link.rel = "preload";
  //   link.as = "image";
  //   link.href = src;
  //   link.setAttribute("fetchpriority", "high");
  //   document.head.appendChild(link);
  // });
};

/**
 * Optimize scroll performance
 * تحسين أداء التمرير
 */
export const optimizeScrollPerformance = () => {
  let ticking = false;

  const updateScrollElements = () => {
    // إضافة تحسينات التمرير هنا
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollElements);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestTick, { passive: true });
};

/**
 * Defer non-critical JavaScript
 * تأجيل JavaScript غير الحرجة
 */
export const deferNonCriticalJS = () => {
  // تأجيل تحميل المكتبات غير الحرجة
  const deferredScripts = ["react-lazy-load-image-component", "framer-motion"];

  // تحميل هذه المكتبات بعد تحميل الصفحة
  window.addEventListener("load", () => {
    setTimeout(() => {
      deferredScripts.forEach((script) => {
        // تحميل ديناميكي للمكتبات
        import(/* @vite-ignore */ script).catch(() => {
          // تجاهل الأخطاء إذا فشل التحميل
        });
      });
    }, 2000);
  });
};

/**
 * Optimize animations for performance
 * تحسين الرسوم المتحركة للأداء
 */
export const optimizeAnimations = () => {
  // تعطيل الرسوم المتحركة للمستخدمين الذين يفضلون تقليل الحركة
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty(
      "--animation-duration",
      "0.01ms"
    );
    document.documentElement.style.setProperty(
      "--animation-iteration-count",
      "1"
    );
  }
};

/**
 * Initialize all performance optimizations
 * تهيئة جميع تحسينات الأداء
 */
export const initPerformanceOptimizations = () => {
  // تحميل الموارد الحرجة
  preloadCriticalResources();

  // تحسين أداء التمرير
  optimizeScrollPerformance();

  // تحسين الرسوم المتحركة
  optimizeAnimations();

  // تحميل الصور بشكل كسول
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", lazyLoadImages);
  } else {
    lazyLoadImages();
  }

  // تأجيل JavaScript غير الحرجة
  deferNonCriticalJS();
};

/**
 * Performance monitoring
 * مراقبة الأداء
 */
export const monitorPerformance = () => {
  if ("performance" in window && "PerformanceObserver" in window) {
    // مراقبة LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log("LCP:", lastEntry.startTime);
    });

    try {
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      // تجاهل الأخطاء في المتصفحات القديمة
    }

    // مراقبة FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          console.log("FCP:", entry.startTime);
        }
      });
    });

    try {
      fcpObserver.observe({ entryTypes: ["paint"] });
    } catch (e) {
      // تجاهل الأخطاء في المتصفحات القديمة
    }
  }
};

export default {
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
  deferNonCriticalJS,
  optimizeAnimations,
  initPerformanceOptimizations,
  monitorPerformance,
};
