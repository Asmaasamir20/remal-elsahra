import { RouterProvider } from "react-router-dom";
import router from "./components/Routing/Routes";
import { Suspense, lazy, useEffect } from "react";
import { RingLoader } from "react-spinners";
import ReactGA from "react-ga4"; // استيراد react-ga4
import FontFaceObserver from "fontfaceobserver";
import TagManager from "react-gtm-module"; // استيراد react-gtm-module

import "./App.css";

const WhatsAppLazy = lazy(() => import("./shared/WhatsApp"));

function App() {
  // تفعيل Google Tag Manager
  useEffect(() => {
    if (import.meta.env.PROD) {
      const tagManagerArgs = {
        gtmId: "GTM-W9MZMH9B",
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  // تفعيل Google Analytics
  useEffect(() => {
    if (import.meta.env.PROD) {
      ReactGA.initialize("G-RW5JNT36KP");
      ReactGA.send("pageview");

      const handleLocationChange = () => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname + window.location.search,
        });
      };

      window.addEventListener("popstate", handleLocationChange);
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, []);

  // تفعيل Google Ads Conversion Tracking
  useEffect(() => {
    if (import.meta.env.PROD) {
      // التأكد من عدم تحميل gtag.js أكثر من مرة
      if (!window.gtag) {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://www.googletagmanager.com/gtag/js?id=AW-16877002370";
        document.head.appendChild(script);

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          window.gtag = gtag;

          gtag("js", new Date());
          gtag("config", "AW-16877002370"); // معرف Google Ads

          // إرسال حدث التحويل عند تحميل الصفحة
          gtag("event", "conversion", {
            send_to: "AW-16877002370/wHFBCPeps58aEIK9yu8-", // معرف التحويل الصحيح
          });
        };
      }
    }
  }, []);

  // تحميل الخطوط
  useEffect(() => {
    const cairoFont = new FontFaceObserver("Cairo");
    const amiriFont = new FontFaceObserver("Amiri");

    Promise.all([cairoFont.load(), amiriFont.load()])
      .then(() => {
        document.documentElement.classList.add("fonts-loaded");
      })
      .catch((error) => {
        console.error("فشل تحميل الخطوط:", error);
      });
  }, []);

  return (
    <Suspense
      fallback={
        <div className="loading-screen">
          <div className="spinner-container">
            <RingLoader color="#3498db" size={80} />
            <p className="loading-text">جاري التحميل... يرجى الانتظار</p>
          </div>
        </div>
      }
    >
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_skipActionErrorRevalidation: true,
        }}
      />
      <WhatsAppLazy />
    </Suspense>
  );
}

export default App;
