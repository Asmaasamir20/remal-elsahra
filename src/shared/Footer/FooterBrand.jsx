/**
 * FooterBrand renders the brand title and brief description.
 */
const FooterBrand = () => {
  return (
    <div className="text-right p-4">
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 leading-tight tracking-tight">
        مُخْتَبَر
        <span className="px-1 text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-primary">
          رِمالُ الصَّحراءِ
        </span>
      </h4>

      <p className="text-md text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
        أحد رواد مختبرات التربة في الدراسات الجيوتقنية وفحص التربة والخرسانة
        والمواد وضبط الجودة
      </p>
    </div>
  );
};

export default FooterBrand;
