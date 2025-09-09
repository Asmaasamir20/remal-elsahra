/**
 * Image Optimization Utilities
 * أدوات تحسين الصور
 */

/**
 * Generate responsive image srcset
 * إنشاء srcset للصور المتجاوبة
 */
export const generateImageSrcSet = (
  basePath,
  widths = [400, 800, 1200, 1600]
) => {
  return widths
    .map((width) => `${basePath}?w=${width}&format=webp&quality=80 ${width}w`)
    .join(", ");
};

/**
 * Generate responsive image sizes
 * إنشاء sizes للصور المتجاوبة
 */
export const generateImageSizes = () => {
  return "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw";
};

/**
 * Lazy load image component with optimization
 * مكون تحميل الصور الكسول مع التحسين
 */
export const createOptimizedImage = (
  src,
  alt,
  className = "",
  priority = false
) => {
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;
  img.className = className;
  img.loading = priority ? "eager" : "lazy";
  img.decoding = "async";

  if (priority) {
    img.setAttribute("fetchpriority", "high");
  }

  // إضافة تحسينات الأداء
  img.style.contentVisibility = "auto";
  img.style.containIntrinsicSize = "300px 200px";

  return img;
};

/**
 * Preload critical images
 * تحميل الصور الحرجة مسبقاً
 */
export const preloadCriticalImages = () => {
  const criticalImages = [
    {
      src: "/assets/home/homeCover.webp",
      type: "image/webp",
      priority: true,
    },
    {
      src: "/assets/logo.webp",
      type: "image/webp",
      priority: false,
    },
  ];

  criticalImages.forEach(({ src, type, priority }) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.type = type;

    if (priority) {
      link.setAttribute("fetchpriority", "high");
    }

    document.head.appendChild(link);
  });
};

/**
 * Convert images to WebP format
 * تحويل الصور إلى تنسيق WebP
 */
export const convertToWebP = (imagePath) => {
  // في بيئة الإنتاج، استخدم Vite imagetools
  if (import.meta.env.PROD) {
    return `${imagePath}?format=webp&quality=80`;
  }

  return imagePath;
};

/**
 * Generate AVIF images for modern browsers
 * إنشاء صور AVIF للمتصفحات الحديثة
 */
export const generateAVIFImage = (imagePath) => {
  if (import.meta.env.PROD) {
    return `${imagePath}?format=avif&quality=60`;
  }

  return imagePath;
};

/**
 * Image loading optimization
 * تحسين تحميل الصور
 */
export const optimizeImageLoading = () => {
  // إضافة event listeners للصور
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
      // تحسين تحميل الصور
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      img.addEventListener("error", () => {
        img.classList.add("error");
        // إضافة صورة بديلة في حالة فشل التحميل
        if (!img.dataset.fallback) {
          img.src = "/assets/logo.webp";
        }
      });
    });
  });
};

export default {
  generateImageSrcSet,
  generateImageSizes,
  createOptimizedImage,
  preloadCriticalImages,
  convertToWebP,
  generateAVIFImage,
  optimizeImageLoading,
};
