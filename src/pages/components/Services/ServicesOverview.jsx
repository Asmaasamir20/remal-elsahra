import React, { useMemo } from "react";
import { cardIcons } from "../../components/Services/CardIcons";
import { cardDetails } from "../Services/ServicescardTitles";
import { MultilayerCardV_1 } from "@/components/Ui/MultilayerCard";
import { CardBody } from "@/components/Ui/MultilayerCard";
import CallMe from "@/shared/CallMe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServicesOverview = React.memo(() => {
  // استخدام useMemo لتحسين الأداء عند تحميل cardDetails
  const services = useMemo(() => cardDetails, []);

  return (
    <>
      {/* Services */}
      <section className="py-4 sm:py-10 home-services bg-zinc-300">
        <div className="container min-w-7xl max-h-full py-4  mx-auto lg:px-8">
          <div className="px-3 sm:px-5 my-6 sm:my-8">
            <h5 className="text-lg Amiri-font lg:w-1/2 mx-auto leading-6 sm:leading-8 sm:text-xl md:text-2xl lg:text-3xl px-3 sm:px-4 bg-gray-50 rounded-s-xl rounded-e-xl text-sky-600 text-center py-4 sm:py-6 border-r-2 border-b-2 border-sky-600 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 mb-4 sm:mb-5 font-bold">
              خدماتنا المتخصصة
            </h5>
          </div>
          <div className="container max-w-2xl mx-auto md:px-8">
            <div className="flex Amiri-font items-center justify-center">
              <h4 className="text-sm sm:text-md border-b-2 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold text-sky-600">
                اتصل بنا:
              </h4>
              <CallMe />
            </div>
          </div>
          <div className="lg:px-4 px-2 my-8 sm:my-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-8">
              {services.map((title, index) => (
                <div
                  key={index}
                  className={`col-span-1 md:col-span-1 ${
                    services.length % 2 === 1 && index === services.length - 1
                      ? "lg:col-span-3 md:col-span-2"
                      : ""
                  }`}
                >
                  <MultilayerCardV_1>
                    <CardBody
                      title={title.title}
                      icon={cardIcons[index]}
                      id={index}
                      className="px-4 sm:px-6 my-2 py-4 sm:py-6 font-bold relative mx-auto rounded-lg shadow-xl dark:bg-zinc-900/90 backdrop-blur-xl hover:dark:bg-zinc-100/90 hover:bg-gray-100 hover:shadow-gray-600 transition-all duration-500 ease-in-out"
                    >
                      {/* عرض الصورة إذا كانت موجودة */}
                      {title.image && (
                        <LazyLoadImage
                          src={title.image}
                          alt={title.title}
                          className="w-full h-auto rounded-md mb-3 sm:mb-4 transition-all duration-300 ease-in-out"
                          effect="blur"
                          loading="lazy"
                          decoding="async"
                          width="100%"
                          height="100%"
                        />
                      )}

                      <div
                        dangerouslySetInnerHTML={{ __html: title.details }}
                        className="text-sm sm:text-lg text-gray-800 dark:text-gray-200 mt-3 sm:mt-4 leading-relaxed transition-all duration-300 ease-in-out"
                      />
                    </CardBody>
                  </MultilayerCardV_1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

ServicesOverview.displayName = "ServicesOverview";

export default ServicesOverview;
