import React, { useState, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imagesProject } from "./ProjectImages.js";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CallMe from "@/shared/CallMe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ProjectsSeo from "./ProjectsSeo ";

// مكون لعرض صورة واحدة
const ImageCard = React.memo(({ image, index, onClick }) => (
  <motion.div
    key={index}
    className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
    onClick={() => onClick(index)}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    whileHover={{
      scale: 1.05, // تكبير الصورة عند التمرير فوقها
      transition: { duration: 0.3, ease: "easeOut" }, // إضافة تأثير سلس
    }}
    whileTap={{ scale: 0.95 }}>
    <LazyLoadImage
      src={image}
      alt={`Project ${index + 1}`}
      className="w-full h-96 object-cover"
      effect="blur"
      width="100%"
      height="100%"
      loading="lazy"
    />
  </motion.div>
));

const ProjectsOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  // تخزين الصور باستخدام useMemo لتحسين الأداء
  const images = useMemo(() => Object.values(imagesProject), []);

  // فتح المودال
  const openModal = useCallback((index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }, []);

  // إغلاق المودال
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // الانتقال للصورة التالية
  const nextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // الانتقال للصورة السابقة
  const prevImage = useCallback(() => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  return (
    <>
      <ProjectsSeo />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full my-8 mx-auto text-center">
        <h2 className="text-xl Amiri-font w-1/2 mx-auto bg-gray-50 text-sky-600 text-center py-6 border-r-2 border-b-2 border-sky-600 rounded-s-xl rounded-e-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:text-2xl lg:text-3xl mb-5 font-bold custom-shadow">
          صور من مشاريعنا
        </h2>
      </motion.div>

      <div className="container max-w-2xl mx-auto md:px-8">
        <div className="flex Amiri-font items-center justify-center">
          <h4 className="text-md border-b-2 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold text-sky-600">
            اتصل بنا:
          </h4>
          <CallMe />
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            index={index}
            onClick={openModal}
          />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}>
            <motion.div
              className="relative w-[90%] md:w-[80%] lg:w-[60%] bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10">
                <X size={24} />
              </button>
              <LazyLoadImage
                src={images[selectedImageIndex]}
                alt={`Project Image ${selectedImageIndex + 1}`}
                className="w-full h-[90vh] object-contain rounded-lg"
                effect="blur"
                width="100%"
                height="100%"
                loading="lazy"
              />
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                  <ChevronRight size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                  <ChevronLeft size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsOverview;
