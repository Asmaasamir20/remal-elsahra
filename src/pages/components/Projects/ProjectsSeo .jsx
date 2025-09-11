import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const ProjectsSeo = () => {
  return (
    <SeoReactHelmet
      title={"المشاريع | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "استعرض مشاريع مختبر رمال الصحراء الرائدة في مجال فحص التربة والدراسات الجيوتقنية. اكتشف كيفية تنفيذنا لاختبارات دقيقة للخرسانة والأسفلت وضبط الجودة."
      }
      keywords={getKeywordsForPage("projects")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/projects",
        title: "المشاريع | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "استعرض مشاريع مختبر رمال الصحراء المتنوعة والتي تشمل فحص التربة، الخرسانة، الأسفلت، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/projects"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ProjectsSeo;
