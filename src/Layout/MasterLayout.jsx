import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "./../shared/Footer/Footer";
import ScrollToTop from "./../components/Routing/ScrollToTop";
import { lazy, Suspense } from "react";
import RouteChangeTracker from "@/components/Routing/RouteChangeTracker";
import SeoReactHelmet from "@/shared/SeoReactHelmet";

// Lazy-load floating action buttons to reduce initial bundle size
const CallButton = lazy(() => import("../shared/CallButton"));
const MessageButton = lazy(() => import("../shared/MessageButton"));

const MasterLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--background-light)] text-[color:var(--dark-text)]">
      {/* Default SEO fallbacks and global structured data */}
      <SeoReactHelmet
        title={"مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
        description={
          "مختبر رمال الصحراء يقدم خدمات فحص التربة والدراسات الجيوتقنية والخرسانة وضبط الجودة بخبرة عالية."
        }
        keywords={[
          "مختبر رمال الصحراء",
          "فحص التربة",
          "الدراسات الجيوتقنية",
          "اختبارات الخرسانة",
          "اختبارات الأسفلت",
          "تحليل التربة",
        ]}
        openGraph={{
          type: "website",
          locale: "ar_SA",
          url: typeof window !== "undefined" ? window.location.href : undefined,
          title: "مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
          description:
            "خدمات جيوتقنية متقدمة تشمل اختبارات التربة والخرسانة والأسفلت مع تقارير هندسية دقيقة.",
          image: "/logo.webp",
          site_name: "مختبر رمال الصحراء",
        }}
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + window.location.pathname
            : undefined
        }
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "مختبر رمال الصحراء",
            url: typeof window !== "undefined" ? window.location.origin : "",
            logo: "/logo.webp",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+966554183175",
                contactType: "customer service",
                areaServed: "SA",
                availableLanguage: ["ar", "en"],
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "مختبر رمال الصحراء",
            url: typeof window !== "undefined" ? window.location.origin : "",
            potentialAction: {
              "@type": "SearchAction",
              target: `${
                typeof window !== "undefined" ? window.location.origin : ""
              }/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />
      <ScrollToTop />
      <Navbar />
      <RouteChangeTracker />
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
