import PropTypes from "prop-types";

/**
 * HeroSection - مكون لعرض قسم البطل الرئيسي مع خلفية صورة ونص
 * يستخدم لتقديم العناوين الرئيسية والصفحات المهمة
 *
 * @param {string} backgroundImage - رابط الصورة الخلفية
 * @param {string} title - العنوان الرئيسي
 * @param {string} subtitle - العنوان الفرعي (اختياري)
 * @returns {JSX.Element} مكون HeroSection
 */
const HeroSection = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-[20px] overflow-hidden text-white w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
      }}
    >
      {/* Overlay - طبقة شفافة لتحسين قراءة النص */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none"></div>

      {/* Content - المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-col items-center w-full p-8">
        <h1 className="text-4xl md:text-7xl font-light mb-4 text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg font-light text-center max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeroSection;
