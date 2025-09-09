import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "./../shared/Footer/Footer";
import ScrollToTop from "./../components/Routing/ScrollToTop";
import { lazy, Suspense } from "react";

// Lazy-load floating action buttons to reduce initial bundle size
const CallButton = lazy(() => import("../shared/CallButton"));
const MessageButton = lazy(() => import("../shared/MessageButton"));

const MasterLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--background-light)] text-[color:var(--dark-text)]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <CallButton />
        <MessageButton />
      </Suspense>
    </div>
  );
};

export default MasterLayout;
