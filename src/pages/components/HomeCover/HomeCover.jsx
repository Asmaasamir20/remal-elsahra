import { memo, useEffect } from "react";
// مصدر أساسي + srcset استجابي مولّد عبر imagetools
import homeCover from "@/assets/home/homeCover.webp";
import homeCoverSrcSet from "@/assets/home/homeCover.webp?w=480;768;1280;1920&format=webp&as=srcset&imagetools";

const HomeCover = memo(() => {
  // Preload LCP image without Helmet to avoid provider errors in some trees
  useEffect(() => {
    try {
      const exists = document.querySelector(
        `link[rel="preload"][as="image"][href="${homeCover}"]`
      );
      if (!exists) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = homeCover;
        // Ensure the browser understands responsive candidates for the preloaded image
        link.setAttribute("imagesrcset", homeCoverSrcSet);
        link.setAttribute("imagesizes", "100vw");
        document.head.appendChild(link);
      }
    } catch {}
  }, []);
  return (
    <section className="home-cover relative flex items-center justify-center p-6 overflow-hidden">
      {/* LCP: عرض الصورة عبر <picture> مع srcset تلقائي */}
      <img
        src={homeCover}
        srcSet={homeCoverSrcSet}
        alt=""
        loading="eager"
        fetchpriority="high"
        decoding="async"
        aria-hidden="true"
        width={1920}
        height={1080}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* طبقة تدرّج مطابقة للتصميم السابق */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(38, 49, 64, 0.7), rgba(0, 0, 0, 0.8))",
        }}
      />
      <div className="relative container min-w-7xl md:px-10 mx-auto py-10">
        <div className="lg:py-6 lg:px-14 text-center">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 py-6">
            مُخْتَبَر
            <span className="text-yellow-600"> رِمالُ الصَّحراءِ </span>
          </h1>

          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200 mt-6">
            أحد رواد مختبرات التربة في الدراسات الجيوتقنية وفحص التربة والخرسانة
            والمواد وضبط الجودة
          </h2>
        </div>
      </div>
    </section>
  );
});

HomeCover.displayName = "HomeCover";

export default HomeCover;
