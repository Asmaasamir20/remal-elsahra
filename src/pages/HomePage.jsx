import AboutOverview from "./components/About/AboutOverview";
import InnovationJourney from "./components/About/InnovationJourney";
import Location from "./components/Contact/Location";
import HomeCover from "./components/HomeCover/HomeCover";
import HomeSeo from "./components/HomeCover/HomeSeo";
import React, { Suspense } from "react";
import ContactForm from "./components/Contact/ContactForm";

import ServicesOverview from "./components/Services/ServicesOverview";
// Lazy load ClientsOverview to defer heavy slider JS/CSS off the initial load
const ClientsOverviewLazy = React.lazy(() =>
  import("./components/Clients/ClientsOverview")
);

const HomePage = () => {
  return (
    <>
      <HomeSeo />
      <div className="m-4">
        {" "}
        <HomeCover />
      </div>

      <AboutOverview />

      <ServicesOverview
        initialVisible={6}
        showLoadMore={true}
        showAllInitially={false}
      />

      <InnovationJourney />
      <div className="bg-gray-200 py-16">
        {" "}
        <div className="container max-w-7xl mx-auto ">
          <h2 className="text-lg Amiri-font lg:w-1/2 mx-auto leading-6 sm:leading-8 sm:text-xl md:text-2xl lg:text-3xl px-6 bg-card rounded-xl text-center py-8 border-2 border-primary shadow-lg hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300 mb-4 sm:mb-5 font-bold relative overflow-hidden group">
            <span className="relative z-10 text-primary">تواصل معنا</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-6 my-12">
            {/* الخريطة */}
            <div className=" rounded-3xl p-8 ">
              <Location />
            </div>
            {/* الفورم */}
            <div className=" rounded-3xl p-8 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <ClientsOverviewLazy />
      </Suspense>
    </>
  );
};

export default HomePage;
