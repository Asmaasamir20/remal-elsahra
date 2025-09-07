import AboutOverview from "./components/About/AboutOverview";
import InnovationJourney from "./components/About/InnovationJourney";
import Location from "./components/Contact/Location";
import HomeCover from "./components/HomeCover/HomeCover";
import HomeSeo from "./components/HomeCover/HomeSeo";
import React, { Suspense } from "react";

import ServicesOverview from "./components/Services/ServicesOverview";
// Lazy load ClientsOverview to defer heavy slider JS/CSS off the initial load
const ClientsOverviewLazy = React.lazy(() =>
  import("./components/Clients/ClientsOverview")
);

const HomePage = () => {
  return (
    <>
      <HomeSeo />
      <HomeCover />

      <AboutOverview />

      <ServicesOverview />

      <InnovationJourney />
      <Location />
      <Suspense fallback={null}>
        <ClientsOverviewLazy />
      </Suspense>
    </>
  );
};

export default HomePage;
