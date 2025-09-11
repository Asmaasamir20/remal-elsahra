import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const HomeSeo = () => {
  return (
    <SeoReactHelmet
      title={"الرئيسية | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "مختبر رمال الصحراء هو وجهتك الموثوقة لفحص التربة والدراسات الجيوتقنية. نقدم خدمات متميزة تشمل اختبارات التربة، الخرسانة، وضبط الجودة."
      }
      keywords={getKeywordsForPage("home")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/",
        title: "الرئيسية | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "مختبر رمال الصحراء يقدم خدمات متميزة لفحص التربة والدراسات الجيوتقنية، بما في ذلك اختبارات التربة، الخرسانة، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default HomeSeo;
