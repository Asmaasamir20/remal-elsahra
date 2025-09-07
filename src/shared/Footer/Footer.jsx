import { Link } from "react-router-dom";
import logoimg from "@/assets/logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CallMe from "./../CallMe";
const Footer = () => {
  return (
    <footer className="footer py-6 ">
      <div className="container mx-auto px-8 md:px-18 min-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-3 lg:px-4">
          <div className="text-center px-4 py-3 rounded-lg shadow-lg shadow-gray-500  transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
            <h4 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold  text-gray-800 mb-2 leading-tight">
              مُخْتَبَر
              <span className="text-primary shadow-xl px-1 text-2xl sm:text-3xl md:text-4xl lg:text-4xl  transition-all duration-500 hover:text-yellow-700">
                رِمالُ الصَّحراءِ
              </span>
            </h4>

            <p className="text-md text-gray-700  mt-12 leading-relaxed">
              أحد رواد مختبرات التربة في الدراسات الجيوتقنية وفحص التربة
              والخرسانة والمواد وضبط الجودة
            </p>
          </div>

          <div className="text-center  flex items-center justify-center  rounded-lg shadow-lg shadow-gray-500  transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
            <div>
              <h5 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold  text-gray-800 mb-2 leading-tight py-4 shadow-lg ">
                اِتَّصِلْ بِنَا عَلَى
              </h5>
              <p className="my-5">
                <CallMe color="text-sky-800 " hoverColor="hover:text-sky-700" />
              </p>
            </div>
          </div>

          <div className="text-center px-4 py-3  rounded-lg shadow-lg shadow-gray-500  transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
            <Link to="/" className="image-footer">
              <LazyLoadImage
                src={logoimg}
                alt="logo"
                className="mx-auto object-contain"
                effect="blur"
               
              />
            </Link>
          </div>
        </div>

        <div className="py-5 mt-8  shadow-xl shadow-gray-600">
          <div className="container mx-auto text-center">
            <p className="text-sm lg:text-xl text-shadow text-gray-700 transition-all duration-500 hover:text-gray-900">
              جميع الحقوق محفوظة © لمُخْتَبَر رِمالُ الصَّحراءِ
              {` ${new Date().getFullYear()}`}
            </p>
          </div>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
