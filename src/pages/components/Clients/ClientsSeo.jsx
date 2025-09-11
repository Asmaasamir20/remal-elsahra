import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const ClientsSeo = () => {
  return (
    <SeoReactHelmet
      title={"عملاءنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تعرّف على عملاء مختبر رمال الصحراء الذين يثقون في خدماتنا في فحص التربة والدراسات الجيوتقنية. نحن نقدم حلولًا مبتكرة ومتخصصة للمشاريع الكبرى والصغيرة."
      }
      keywords={getKeywordsForPage("clients")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/clients",
        title: "عملاءنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "استعرض عملاء مختبر رمال الصحراء الذين يثقون في خدماتنا في فحص التربة والدراسات الجيوتقنية. لدينا شراكات ناجحة في العديد من المشاريع الكبرى.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/clients"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ClientsSeo;
