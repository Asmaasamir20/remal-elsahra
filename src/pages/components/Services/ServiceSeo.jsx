import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const ServiceSeo = () => {
  return (
    <SeoReactHelmet
      title={"الخدمات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تعرّف على خدمات مختبر رمال الصحراء، الرائد في مجال فحص التربة والدراسات الجيوتقنية. نقدم خدمات شاملة لفحص التربة، الخرسانة، المواد، وضبط الجودة."
      }
      keywords={getKeywordsForPage("services")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/services",
        title: "الخدمات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "مختبر رمال الصحراء يقدم خدمات متخصصة في فحص التربة والدراسات الجيوتقنية، بما في ذلك اختبارات التربة، الخرسانة، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/services"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ServiceSeo;
