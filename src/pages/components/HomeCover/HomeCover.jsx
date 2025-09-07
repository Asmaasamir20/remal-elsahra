import { memo } from "react";
import homeCover from "@/assets/home/homeCover.webp";

const HomeCover = memo(() => {
  return (
    <section className="home-cover flex items-center justify-center p-6">
      {/* Preload LCP background image without affecting layout */}
      <img
        src={homeCover}
        alt=""
        fetchPriority="high"
        decoding="async"
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <div className="container min-w-7xl md:px-10 mx-auto py-10">
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
