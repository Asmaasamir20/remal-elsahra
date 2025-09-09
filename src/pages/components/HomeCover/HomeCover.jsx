import { memo } from "react";
import homeCoverImage from "@/assets/home/homeCover.webp?optimize";

const HomeCover = memo(() => {
  return (
    <section className="home-cover relative flex items-center justify-center overflow-hidden rounded-xl">
      {/* صورة الخلفية المحسّنة للأداء مع fetchpriority=high */}
      <img
        src={homeCoverImage}
        alt="مختبر رمال الصحراء - خلفية رئيسية"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width="1920"
        height="1080"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1920px 1080px",
          willChange: "transform",
        }}
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
