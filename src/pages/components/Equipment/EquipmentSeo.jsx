import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const EquipmentSeo = () => {
  return (
    <SeoReactHelmet
      title={"المعدات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "اكتشف المعدات المتطورة التي يستخدمها مختبر رمال الصحراء في فحص التربة والدراسات الجيوتقنية. نحن نستخدم أحدث التكنولوجيا لضمان دقة وجودة الفحوصات."
      }
      keywords={getKeywordsForPage("equipment")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/equipment",
        title: "المعدات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "تعرّف على المعدات الحديثة التي يستخدمها مختبر رمال الصحراء لضمان دقة وجودة فحوصات التربة والدراسات الجيوتقنية. نحن نستخدم أحدث التقنيات في مجال الفحص.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/equipment"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default EquipmentSeo;
