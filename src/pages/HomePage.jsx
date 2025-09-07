import AboutOverview from "./components/About/AboutOverview";
import InnovationJourney from "./components/About/InnovationJourney";
import Location from "./components/Contact/Location";
import HomeCover from "./components/HomeCover/HomeCover";
import HomeSeo from "./components/HomeCover/HomeSeo";

import ServicesOverview from "./components/Services/ServicesOverview";
import ClientsOverview from "./components/Clients/ClientsOverview";


const HomePage = () => {
  return (
    <>
      <HomeSeo />
      <HomeCover />

      <AboutOverview />

      <ServicesOverview />

      <InnovationJourney />
      <Location />
      <ClientsOverview />
    </>
  );
};

export default HomePage;
