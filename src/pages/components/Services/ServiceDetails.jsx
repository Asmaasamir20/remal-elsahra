import React, { useMemo, useCallback, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardDetails } from "../Services/ServicescardTitles";
import { Button } from "@/components/Ui/button";
import { ArrowRight } from "lucide-react";
// import CallMe from "@/shared/CallMe";
// import ClientsOverview from "./../Clients/ClientsOverview";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";
const ClientsOverview = React.lazy(() =>
  import("./../Clients/ClientsOverview")
);
const CallMe = React.lazy(() => import("@/shared/CallMe"));
const ServiceDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  // Build an index map once to allow O(1) lookup for service by title
  const serviceIndex = useMemo(() => {
    return cardDetails.reduce((acc, curr) => {
      acc[curr.title] = curr;
      return acc;
    }, {});
  }, []);

  const service = serviceIndex[decodedTitle];

  const navigate = useNavigate();

  // Navigate to services listing
  const goToServices = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  // إذا كانت الخدمة غير موجودة
  if (!service) {
    return (
      <div className="container max-w-3xl mx-auto my-20 p-6 text-center bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          الخدمة غير موجودة
        </h2>
        <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
          يرجى التأكد من اختيار خدمة صحيحة.
        </p>
        <div className="mt-6">
          <Button
            onClick={goToServices}
            className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="ml-2" /> جميع الخدمات
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <SeoReactHelmet
        title={`${service.title} | الخدمات | مختبر رمال الصحراء`}
        description={`تعرف على خدمة ${service.title} المقدمة من مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية.`}
        keywords={getKeywordsForPage("service", [service.title])}
        openGraph={{
          type: "website",
          url:
            (typeof window !== "undefined"
              ? window.location.href
              : "https://www.remal-elsahra.com") || undefined,
          title: `${service.title} | الخدمات | مختبر رمال الصحراء`,
          description: `تفاصيل خدمة ${service.title} من مختبر رمال الصحراء`,
          image:
            (typeof window !== "undefined" ? window.location.origin : "") +
            (service.image || ""),
          site_name: "مختبر رمال الصحراء",
        }}
        canonical={
          typeof window !== "undefined" ? window.location.href : undefined
        }
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            provider: {
              "@type": "Organization",
              name: "مختبر رمال الصحراء",
              url: typeof window !== "undefined" ? window.location.origin : "",
              logo: "/logo.webp",
            },
            areaServed: {
              "@type": "Country",
              name: "Saudi Arabia",
            },
            image:
              (typeof window !== "undefined" ? window.location.origin : "") +
              (service.image || ""),
            url: typeof window !== "undefined" ? window.location.href : "",
          },
          {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl:
              (typeof window !== "undefined" ? window.location.origin : "") +
              (service.image || ""),
            name: service.title,
            caption: service.title,
            license:
              typeof window !== "undefined" ? window.location.origin : "",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "الرئيسية",
                item:
                  typeof window !== "undefined"
                    ? window.location.origin + "/"
                    : "https://www.remal-elsahra.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "الخدمات",
                item:
                  typeof window !== "undefined"
                    ? window.location.origin + "/services"
                    : "https://www.remal-elsahra.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: typeof window !== "undefined" ? window.location.href : "",
              },
            ],
          },
        ]}
      />
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-center">
            <div className="px-3 sm:px-5 my-6 sm:my-8">
              <h1 className="text-3xl Amiri-font lg:w-1/2 mx-auto leading-6 sm:leading-8 sm:text-4xl lg:text-5xl px-6 bg-card rounded-xl text-center py-8 border-2 border-primary shadow-lg hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300 mb-4 sm:mb-5 font-bold relative overflow-hidden group">
                <span className="relative z-10 text-primary">
                  {service.title}
                </span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </h1>
            </div>
            <nav
              className="mt-3 text-sm text-gray-600 dark:text-gray-300"
              aria-label="breadcrumb"
            >
              <ol className="inline-flex items-center gap-2">
                <li>
                  <button
                    onClick={goToServices}
                    className="text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300 underline-offset-2 hover:underline"
                  >
                    الخدمات
                  </button>
                </li>
                <li aria-hidden="true" className="text-gray-400">
                  /
                </li>
                <li
                  aria-current="page"
                  className="text-gray-800 dark:text-gray-200"
                >
                  {service.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Image */}
          {service.image && (
            <figure className="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 bg-white/60 dark:bg-white/5">
              <div className="aspect-[4/3] md:aspect-[5/4] w-full">
                <LazyLoadImage
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  effect="blur"
                  width="100%"
                  height="100%"
                />
                <noscript>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    width="100%"
                    height="100%"
                    loading="eager"
                    decoding="async"
                  />
                </noscript>
              </div>
            </figure>
          )}

          {/* Details */}
          <article className="rounded-2xl bg-white/80 dark:bg-slate-900/50 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm p-6 sm:p-8 text-gray-700 dark:text-gray-200 leading-8 sm:leading-9">
            <div
              className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: service.details }}
            />

            {/* Call to action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={goToServices}
                className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors text-base sm:text-lg"
                aria-label="عرض جميع الخدمات"
              >
                <ArrowRight className="ml-2" />
                جميع الخدمات
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="Amiri-font">تواصل سريع:</span>
                <Suspense
                  fallback={
                    <span className="inline-flex h-9 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
                  }
                >
                  <CallMe />
                </Suspense>
              </div>
            </div>
          </article>
        </div>

        {/* Clients */}
        <div className="mt-12">
          <Suspense
            fallback={
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-16 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <ClientsOverview />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
