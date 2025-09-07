import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "./../shared/Footer/Footer";
import ScrollToTop from "./../components/Routing/ScrollToTop";



const MasterLayout = () => {
  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;
