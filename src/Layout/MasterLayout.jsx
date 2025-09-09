import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "./../shared/Footer/Footer";
import ScrollToTop from "./../components/Routing/ScrollToTop";
import CallButton from "../shared/CallButton";
import MessageButton from "../shared/MessageButton";

const MasterLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <CallButton />
      <MessageButton />
    </div>
  );
};

export default MasterLayout;
