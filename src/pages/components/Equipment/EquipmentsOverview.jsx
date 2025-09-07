import { useCallback, useReducer } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imagesEquipment } from "../Equipment/equipmentImages";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CallMe from "@/shared/CallMe";
import EquipmentSeo from "./EquipmentSeo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// reducer لتحديث حالة المودال
const reducer = (state, action) => {
  switch (action.type) {
    case "openModal":
      return { ...state, isModalOpen: true, selectedImageIndex: action.index };
    case "closeModal":
      return { ...state, isModalOpen: false };
    case "nextImage":
      return {
        ...state,
        selectedImageIndex:
          (state.selectedImageIndex + 1) % state.images.length,
      };
    case "prevImage":
      return {
        ...state,
        selectedImageIndex:
          (state.selectedImageIndex - 1 + state.images.length) %
          state.images.length,
      };
    default:
      return state;
  }
};

const EquipmentsOverview = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // استخدام useMemo لتحسين الأداء
  const images = Object.values(imagesEquipment);

  // استخدام useReducer بدلاً من useState لتقليل التكرار
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedImageIndex: 0,
    images,
  });

  const openModal = useCallback((index) => {
    dispatch({ type: "openModal", index });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: "closeModal" });
  }, []);

  const nextImage = useCallback(() => {
    dispatch({ type: "nextImage" });
  }, []);

  const prevImage = useCallback(() => {
    dispatch({ type: "prevImage" });
  }, []);

  return (
    <>
      <EquipmentSeo />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full my-8 mx-auto text-center"
      >
        <h2 className="text-xl Amiri-font w-1/2 mx-auto bg-gray-50 text-sky-600 text-center py-6 border-r-2 border-b-2 border-sky-600 rounded-s-xl rounded-e-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:text-2xl lg:text-3xl mb-5 font-bold custom-shadow">
          صور من معداتنا
        </h2>
        <div className="container max-w-2xl mx-auto md:px-8">
          <div className="flex Amiri-font items-center justify-center">
            <h4 className="text-md border-b-2 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold text-sky-600">
              اتصل بنا:
            </h4>
            <CallMe />
          </div>
        </div>
        <p className="text-md sm:text-lg lg:w-2/3 mx-auto leading-8 text-md font-normal mt-4 py-2 lg:px-10 text-gray-600">
          يتميز مختبر &quot;رمال الصحراء&quot; في المملكة العربية السعودية
          بتوفير أحدث المعدات والتقنيات المتقدمة في مجال دراسات التربة
          والاختبارات الجيوتقنية.
        </p>
      </motion.div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
            onClick={() => openModal(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05, // تكبير الصورة أثناء الهوفر
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // إضافة تأثير الظل
              transition: { duration: 0.3 }, // تقليل مدة الانتقال إلى 0.3 ثانية
            }}
            whileTap={{
              scale: 0.95, // تصغير الصورة عند النقر
              boxShadow: "none", // إزالة الظل عند الضغط
              transition: { duration: 0.3 }, // تقليل مدة الانتقال عند النقر
            }}
          >
            <LazyLoadImage
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-96 object-cover transition-transform duration-500"
              loading="lazy" // تحميل الصور بشكل كسول
              effect="blur"
              width="100%"
              height="100%"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {state.isModalOpen && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative w-[90%] md:w-[80%] lg:w-[60%] bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                >
                  <X size={24} />
                </button>
                <LazyLoadImage
                  src={state.images[state.selectedImageIndex]}
                  alt={`Project Image ${state.selectedImageIndex + 1}`}
                  className="w-full h-[90vh] object-contain rounded-lg"
                  loading="lazy" // تحميل الصور بشكل كسول
                  effect="blur"
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default EquipmentsOverview;
