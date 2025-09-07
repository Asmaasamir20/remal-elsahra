import { RouterProvider } from "react-router-dom";
import router from "./components/Routing/Routes";
import { Suspense, lazy, useEffect } from "react";

import "./App.css";

const WhatsAppLazy = lazy(() => import("./shared/WhatsApp"));

function App() {
  // أداة لجدولة تنفيذ مهمة عند خمول المتصفح مع بديل setTimeout
  const scheduleIdle = (task) => {
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      requestIdleCallback(() => task());
    } else {
      setTimeout(task, 1500);
    }
  };

  // تفعيل Google Tag Manager
  useEffect(() => {
    if (import.meta.env.PROD) {
      const initGTM = () => {
        import("react-gtm-module").then((mod) => {
          const TagManager = mod.default || mod;
          const tagManagerArgs = { gtmId: "GTM-W9MZMH9B" };
          TagManager.initialize(tagManagerArgs);
        });
      };

      if (document.readyState === "complete") {
        scheduleIdle(initGTM);
      } else {
        const onLoad = () => {
          scheduleIdle(initGTM);
          window.removeEventListener("load", onLoad);
        };
        window.addEventListener("load", onLoad);
      }
    }
  }, []);

  // تفعيل Google Analytics
  useEffect(() => {
    if (import.meta.env.PROD) {
      const initGA = () => {
        import("react-ga4").then((mod) => {
          const ReactGA = mod.default || mod;
          ReactGA.initialize("G-RW5JNT36KP");
          ReactGA.send("pageview");

          const handleLocationChange = () => {
            ReactGA.send({
              hitType: "pageview",
              page: window.location.pathname + window.location.search,
            });
          };

          window.addEventListener("popstate", handleLocationChange);
          // تنظيف
          window.addEventListener("beforeunload", () => {
            window.removeEventListener("popstate", handleLocationChange);
          });
        });
      };

      scheduleIdle(initGA);
    }
  }, []);

  // تفعيل Google Ads Conversion Tracking
  useEffect(() => {
    if (import.meta.env.PROD) {
      const initAds = () => {
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
              window.dataLayer.push(arguments);
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
      };

      // تأجيل إضافي بعد الخمول لتقليل تأثيره على FCP/LCP
      scheduleIdle(() => setTimeout(initAds, 1500));
    }
  }, []);

  // تحميل الخطوط
  useEffect(() => {
    // لم نعد نستخدم FontFaceObserver لتقليل JS؛ نعتمد على font-display: swap
  }, []);

  return (
    <Suspense
      fallback={
        <div className="loading-screen">
          <div className="spinner-container">
            <div className="spinner" aria-label="Loading" />
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
