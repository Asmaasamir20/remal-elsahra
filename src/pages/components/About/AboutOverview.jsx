import { memo } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import aboutImg from "@/assets/about/aboutImg.webp";

const AboutOverview = () => {
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      opacity: { duration: 0.6 },
      y: { type: "spring", stiffness: 100, damping: 25 },
    },
    viewport: { once: false },
  };

  return (
    <section className="py-14 about bg-white">
      <div className="container min-w-7xl py-6 mx-auto md:px-18">
        {/* صف يحتوي على عمودين */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-8">
          {/* العمود الأول : النص */}
          <motion.div
            className="flex flex-col justify-center"
            {...animationProps}
          >
            <h3 className="text-xl Amiri-font leading-8 sm:text-xl md:text-2xl lg:text-3xl px-6 bg-gradient-to-br from-white to-amber-50 rounded-xl text-center py-8 border-2 border-amber-200 shadow-lg hover:shadow-amber-200/50 hover:scale-[1.02] transition-all duration-300 mb-5 font-bold relative overflow-hidden group">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600 bg-clip-text text-transparent">
                مرحبا بكم في مختبر رمال الصحراء
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </h3>

            <p className="my-5 flex items-center text-xl px-4 py-4 leading-8 bg-zinc-100 border-l-2 border-yellow-500 text-gray-700">
              <Home className="me-2 text-yellow-800" />
              نحن نصنع رويتك
            </p>

            <p className="text-sm my-2 ps-4 leading-6 md:leading-10 lg:leading-10 lg:text-lg">
              مختبر رمال الصحراء هو مؤسسة متخصصة في تقديم خدمات فحص التربة
              والجيوتقنية، تأسس تلبيةً للحاجة المتزايدة لمشاريع المقاولات في
              المملكة العربية السعودية، التي تتطلب دراسات دقيقة وخدمات هندسية
              متكاملة. في مختبرنا، نتميز بتقديم حلول مبتكرة ومدروسة في مجالات
              فحص التربة، الأساسات، الخرسانة، المواد، والخدمات الجيوتقنية
              والبيئية. نحن نعمل بتفانٍ لتوفير نتائج دقيقة تسهم في نجاح المشاريع
              الإنشائية الكبرى مع الالتزام بأعلى معايير الجودة والمواصفات
              الدولية.
            </p>

            <p className="text-sm my-2 ps-4 leading-6 md:leading-10 lg:leading-10 lg:text-lg">
              يقدم المختبر خدمات عالية الأداء والجودة في المجالات ذات الارتباط
              الوثيق بمجال ميكانيكا التربة والاختبارات والتأكد من الخواص
              الفيزيائية والميكانيكية للتربة والصخر وتقديم التوصيات الخاصة
              بأعمال التأسيس ومدى تأثير المواد الكيميائية الموجودة في التربة
              (كلوريدات وسلفات وغيرها) وضررها على الخرسانات والمنشآت المدفونة
              داخل التربة واستقراء وتقييم نتائج الاختبارات الحقلية والمعملية
              الخاصة بأنظمة تأسيس المباني المختلفة مثل المباني السكنية والتجارية
              والجسور والطرق.
            </p>
          </motion.div>

          {/* العمود الثاني: الصورة */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.6 },
              y: { type: "spring", stiffness: 100, damping: 25 },
            }}
            viewport={{ once: false }}
          >
            <div className="w-full p-4 border-l-2 border-b-2 border-yellow-500 rounded-xl mx-auto h-auto shadow-xl shadow-gray-500 overflow-hidden hover:scale-105 translate duration-500">
              <Link className="w-full h-full">
                <LazyLoadImage
                  src={aboutImg}
                  alt="about img"
                  className="w-full h-full object-cover lg:object-fit"
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutOverview);
