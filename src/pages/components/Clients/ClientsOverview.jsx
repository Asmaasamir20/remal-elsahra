import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { clientsImage } from "./clientsImages";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // تأثير تحميل الصور

// زر التنقل السابق
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
  >
    <ChevronLeft size={24} />
  </button>
);

// زر التنقل التالي
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
  >
    <ChevronRight size={24} />
  </button>
);

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

// تحميل react-slick بشكل lazy
const LazySlick = React.lazy(() => import("react-slick"));
import("slick-carousel/slick/slick.css");
import("slick-carousel/slick/slick-theme.css");

const ClientsOverview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="clients-overview text-center py-14 bg-gray-100 relative px-2">
      <div className="container bg-gray-50 border-r-2 border-b-2 border-yellow-600 max-w-7xl lg:min-w-7xl p-2 mx-auto md:px-6 lg:px-10 py-16 rounded-3xl shadow-2xl">
        <div className="px-6">
          <h2 className="text-xl bg-white Amiri-font sm:text-xl lg:text-3xl w-full md:w-1/2 lg:w-1/2 mx-auto text-sky-600 text-center py-6 border-b-2 border-sky-600 transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 font-bold">
            عملائنا
          </h2>
        </div>
        <p className="text-md sm:text-lg lg:w-2/3 mx-auto leading-8 text-md font-normal my-6 py-2 lg:px-10 text-gray-600">
          على مدى الأعوام الماضية، شرفنا بالتعاون مع نخبة من الشركات الرائدة،
          حيث قمنا بتنفيذ مشاريع كبرى وهامة تُجسد الثقة المتبادلة والرؤية
          المشتركة بيننا وبين شركائنا في النجاح.
        </p>

        {/* استخدام Suspense لتغليف Slider */}
        <Suspense fallback={<div className="spinner">Loading...</div>}>
          <LazySlick {...settings}>
            {clientsImage.map((client, index) => (
              <Link
                key={index}
                to={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition duration-300 hover:scale-105 w-full bg-gray-100 min-w-[100px] sm:max-w-[120px] h-20 sm:h-28 mx-auto overflow-hidden rounded-lg shadow-xl"
              >
                <LazyLoadImage
                  src={client.src}
                  alt={`client-logo-${index + 1}`}
                  className="w-full h-full object-contain"
                  effect="blur" // تأثير تحميل الصور
                  width="100%" // تحديد العرض
                  height="100%" // تحديد الطول
                  onError={(e) =>
                    (e.target.src = "/path/to/fallback-image.jpg")
                  } // صورة احتياطية في حال فشل التحميل
                />
              </Link>
            ))}
          </LazySlick>
        </Suspense>
      </div>
    </div>
  );
};

export default ClientsOverview;
