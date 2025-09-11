import { RouterProvider } from "react-router-dom";
import router from "./components/Routing/Routes";
import { Suspense, lazy, useEffect } from "react";
import {
  initPerformanceOptimizations,
  monitorPerformance,
} from "./utils/performance";
import { initVercelOptimizations } from "./utils/vercelOptimizations";
import { initAdvancedOptimizations } from "./utils/advancedOptimizations";

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

  // تم نقل تهيئة Google Tag Manager إلى GTMProvider لمنع التكرار

  // تفعيل Google Analytics - تأجيل أطول
  useEffect(() => {
    if (import.meta.env.PROD) {
      const initGA = () => {
        // تحميل GA فقط عند الحاجة
        if (
          window.location.pathname === "/" ||
          window.location.pathname.includes("contact")
        ) {
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
        }
      };

      // تأجيل أطول لتقليل التأثير على FCP/LCP
      setTimeout(() => {
        scheduleIdle(initGA);
      }, 3000);
    }
  }, []);

  // تفعيل Google Ads Conversion Tracking - تأجيل أطول
  useEffect(() => {
    if (import.meta.env.PROD) {
      const initAds = () => {
        // إذا كان GTM تم تهيئته، دع GTM يدير Google Ads لتجنب الازدواجية
        const gtmPresent =
          typeof window !== "undefined" &&
          (window.__gtmInitialized ||
            document.querySelector(
              'script[src*="googletagmanager.com/gtm.js"]'
            ));
        if (gtmPresent) return;

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

      // تأجيل أطول لتقليل التأثير على FCP/LCP
      setTimeout(() => {
        scheduleIdle(() => setTimeout(initAds, 2000));
      }, 4000);
    }
  }, []);

  // تهيئة تحسينات الأداء
  useEffect(() => {
    // تأجيل تحميل التحسينات لتقليل التأثير على FCP
    const initOptimizations = () => {
      initPerformanceOptimizations();
      initVercelOptimizations();
      initAdvancedOptimizations();
    };

    // تحميل التحسينات بعد تحميل الصفحة
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initOptimizations);
    } else {
      setTimeout(initOptimizations, 100);
    }

    // مراقبة الأداء في بيئة التطوير فقط
    if (import.meta.env.DEV) {
      monitorPerformance();
    }
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
