import React, { useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardDetails } from "../Services/ServicescardTitles";
import { Button } from "@/components/Ui/button";
import { ArrowRight } from "lucide-react";
// import CallMe from "@/shared/CallMe";
// import ClientsOverview from "./../Clients/ClientsOverview";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ClientsOverview = React.lazy(() =>
  import("./../Clients/ClientsOverview")
);
const CallMe = React.lazy(() => import("@/shared/CallMe"));
const ServiceDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  // تحسين البحث باستخدام useMemo
  const serviceIndex = useMemo(() => {
    return cardDetails.reduce((acc, curr) => {
      acc[curr.title] = curr;
      return acc;
    }, {});
  }, []);

  const service = serviceIndex[decodedTitle];

  const navigate = useNavigate();

  // إذا كانت الخدمة غير موجودة
  if (!service) {
    return (
      <div className="container max-w-3xl mx-auto my-20 p-6 text-center bg-blue-200 dark:bg-blue-800 border border-blue-400 dark:border-blue-600 rounded-lg shadow-lg transition-all duration-500">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          الخدمة غير موجودة
        </h2>
        <p className="text-lg mt-4 text-gray-500 dark:text-gray-300">
          يرجى التأكد من اختيار خدمة صحيحة.
        </p>
      </div>
    );
  }

  // دالة للانتقال إلى صفحة الخدمات
  const goToServices = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  return (
    <div className="bg-gray-200 p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl mb-8 sm:text-4xl lg:text-5xl sm:my-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-pink-600 text-center py-4 sm:py-8 shadow-lg shadow-blue-400 dark:shadow-blue-600 transition-all duration-500 ease-in-out">
        {service.title}
      </h1>
      <div className="flex Amiri-font items-center justify-center">
        <h4 className="text-sm sm:text-md border-b-2 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold text-sky-600">
          اتصل بنا:
        </h4>
        <CallMe />
      </div>
      <div className="container max-w-7xl bg-gray-100 mx-auto px-4 sm:px-6 py-6 sm:py-10 rounded-xl border transition-all duration-500 transform">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* عرض الصورة إذا كانت موجودة */}
          {service.image && (
            <div className="col-span-1 rounded-xl shadow-md shadow-blue-500 w-full h-full sm:w-full sm:h-full md:w-full md:h-[450px] lg:w-full lg:h-[450px] flex justify-center items-center">
              <div className="col-span-1 rounded-xl shadow-md shadow-blue-500 w-full h-full sm:w-full sm:h-full md:w-full md:h-[450px] lg:w-full lg:h-[450px] flex justify-center items-center transform hover:scale-105 transition-all duration-500 ease-in-out">
                <LazyLoadImage
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl w-full h-full object-cover"
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}

          {/* تفاصيل الخدمة */}
          <div
            className="col-span-1 text-base sm:text-lg lg:text-xl rounded-xl text-gray-700 dark:text-gray-200 leading-8 sm:leading-10 p-6 sm:p-10 bg-white dark:bg-blue-800 shadow-lg shadow-blue-400 transition-all duration-500 hover:scale-105 ease-in-out"
            dangerouslySetInnerHTML={{ __html: service.details }}
          />
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Button
            onClick={goToServices}
            className="px-4 sm:px-6 py-4 sm:py-6 rounded-full bg-blue-500 text-white text-lg sm:text-xl hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg hover:shadow-gray-500 transition-all duration-500 transform hover:scale-105">
            <ArrowRight className="ml-2" />
            جميع الخدمات
          </Button>
        </div>

        <div>
          <ClientsOverview />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
