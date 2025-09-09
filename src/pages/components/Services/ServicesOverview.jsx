import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { cardIcons } from "../../components/Services/CardIcons";
import { cardDetails } from "../Services/ServicescardTitles";
import { MultilayerCardV_1 } from "@/components/Ui/MultilayerCard";
import { CardBody } from "@/components/Ui/CardBody";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServicesOverview = React.memo(
  ({ initialVisible = 6, showLoadMore = false, showAllInitially = true }) => {
    const [showAll, setShowAll] = useState(showAllInitially);

    // استخدام useMemo لتحسين الأداء عند تحميل cardDetails
    const services = useMemo(() => cardDetails, []);

    // عرض عدد محدد في البداية، أو جميع الخدمات إذا تم الضغط على "عرض المزيد" أو إذا كان showAllInitially
    const displayedServices = showAll
      ? services
      : services.slice(0, initialVisible);

    return (
      <>
        {/* Services */}
        <section className=" sm:py-10 home-services bg-gray-200 rounded-xl">
          <div className="container min-w-7xl max-h-full py-10  mx-auto lg:px-8">
            <div className="px-3 sm:px-5 my-6 sm:my-8">
              <h5 className="text-lg Amiri-font lg:w-1/2 mx-auto leading-6 sm:leading-8 sm:text-xl md:text-2xl lg:text-3xl px-6 bg-card rounded-xl text-center py-8 border-2 border-primary shadow-lg hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300 mb-4 sm:mb-5 font-bold relative overflow-hidden group">
                <span className="relative z-10 text-primary">
                  خدماتنا المتخصصة
                </span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </h5>
            </div>
            <div className="lg:px-4 px-2 my-8 sm:my-10 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 sm:gap-12 ">
                {displayedServices.map((title, index) => (
                  <div key={index} className="col-span-1 md:col-span-1">
                    <MultilayerCardV_1>
                      <CardBody
                        title={title.title}
                        icon={cardIcons[index]}
                        id={index}
                        className="h-full bg-white"
                        description={title.details}
                      >
                        {/* عرض الصورة إذا كانت موجودة */}
                        {title.image && (
                          <LazyLoadImage
                            src={title.image}
                            alt={title.title}
                            className="w-full h-full   rounded-xl object-cover"
                            effect="blur"
                            loading="lazy"
                            decoding="async"
                            width="100%"
                            height="100%"
                          />
                        )}
                      </CardBody>
                    </MultilayerCardV_1>
                  </div>
                ))}
              </div>
            </div>
            {/* زر عرض المزيد - يظهر فقط إذا كان showLoadMore=true */}
            {showLoadMore && !showAll && services.length > initialVisible && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-[#a98b5b] text-white font-semibold py-5 px-8 rounded-full shadow-lg hover:bg-[#977b4f] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cdbb9e] focus:ring-offset-2"
                >
                  عرض المزيد ({services.length - initialVisible} خدمة أخرى)
                </button>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
);

ServicesOverview.displayName = "ServicesOverview";
ServicesOverview.propTypes = {
  initialVisible: PropTypes.number,
  showLoadMore: PropTypes.bool,
  showAllInitially: PropTypes.bool,
};

export default ServicesOverview;
