import React from "react"; // تأكد من استيراد React
import PropTypes from "prop-types";
import {
  FaAward,
  FaTools,
  FaCheckCircle,
  FaLightbulb,
  FaProjectDiagram,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
// مكون بطاقة يستخدم خصائص موحدة
const InfoCard = React.memo(
  ({ Icon, title, description, initial, whileInView }) => {
    return (
      <motion.div
        className="flex flex-col items-center text-center p-6 bg-white text-gray-800 rounded-2xl shadow-lg"
        initial={initial} // الحركة عند التمرير
        whileInView={whileInView} // الحركة عند التمرير
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Icon className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-gray-700 leading-relaxed text-md">
          {description}
        </div>
      </motion.div>
    );
  }
);

InfoCard.displayName = "InfoCard";

InfoCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initial: PropTypes.object,
  whileInView: PropTypes.object,
};

const InnovationJourney = () => {
  return (
    <section className="InnovationJourney py-10">
      <div className="container max-w-7xl lg:min-w-7xl mx-auto  rounded-3xl py-10 md:px-6">
        <div className="px-6">
          <h6 className="text-xl  bg-gray-50 Amiri-font w-full md:w-3/4 lg:w-1/2 mx-auto shadow-xl text-sky-600 rounded-s-xl rounded-e-xl text-center py-6 border-l-2 border-b-2 border-sky-600 transition-all duration-500 sm:text-2xl lg:text-3xl mb-5 font-bold hover:scale-105 hover:shadow-2xl">
            لماذا تختار مختبر رمال الصحراء؟
          </h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 bg-gray-200 border-r-2 border-b-2 border-yellow-600 shadow-gray-500 gap-10 bg-opacity-80 px-6 py-20 rounded-3xl shadow-lg mx-6">
          {/* استخدام المكون المشترك لعرض البطاقات */}
          <InfoCard
            Icon={FaAward}
            title="خبرة عالية وكفاءة متخصصة"
            description="يمتلك فريقنا من المهندسين والفنيين خبرة واسعة في مجال فحص التربة والجيوتقنية، مما يمكننا من تقديم حلول مبتكرة ودقيقة تتناسب مع طبيعة التربة في مختلف مناطق المملكة."
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
          <InfoCard
            Icon={FaTools}
            title="تقنيات متقدمة وأجهزة حديثة"
            description="نحن نستخدم أحدث الأجهزة والتقنيات في إجراء جميع أنواع الاختبارات الميدانية والمعملية، مما يضمن الحصول على نتائج دقيقة وموثوقة."
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
          <InfoCard
            Icon={FaCheckCircle}
            title="التزام كامل بالجودة"
            description="يلتزم مختبر رمال الصحراء بتقديم خدمات عالية الجودة تلتزم بالمعايير السعودية والدولية (مثل ASTM وISO)."
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
          <InfoCard
            Icon={FaLightbulb}
            title="حلول هندسية شاملة"
            description="لا تقتصر خدماتنا على إجراء الاختبارات فقط، بل نقدم حلولًا هندسية شاملة تشمل التوصيات الفنية لأنسب الأساسات وطرق معالجة التربة."
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
          <InfoCard
            Icon={FaProjectDiagram}
            title="دعم شامل للمشاريع المختلفة"
            description="سواء كان المشروع سكنيًا، تجاريًا، أو يتعلق بالبنية التحتية مثل الجسور والطرق، نحن نقدم الدعم الكامل لجميع أنواع المشاريع."
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
          <InfoCard
            Icon={FaEye}
            title="رؤيتنا ورسالتنا"
            description="نؤمن أن أساس أي مشروع ناجح يبدأ من دراسة دقيقة للتربة والمواد. نحن ملتزمون بتقديم أفضل الحلول لضمان نجاح المشاريع."
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
