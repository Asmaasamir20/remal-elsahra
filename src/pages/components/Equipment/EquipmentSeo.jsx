import SeoReactHelmet from "@/shared/SeoReactHelmet";

const EquipmentSeo = () => {
  return (
    <SeoReactHelmet
      title={"المعدات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "اكتشف المعدات المتطورة التي يستخدمها مختبر رمال الصحراء في فحص التربة والدراسات الجيوتقنية. نحن نستخدم أحدث التكنولوجيا لضمان دقة وجودة الفحوصات."
      }
      keywords={[
        "المعدات",
        "مختبر رمال الصحراء",
        "فحص التربة",
        "الدراسات الجيوتقنية",
        "المعدات الحديثة",
        "اختبارات الخرسانة",
        "تحليل المواد",
        "تقنيات الفحص",
        "المعدات العلمية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com/equipment", // رابط صفحة المعدات
        title: "المعدات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "تعرّف على المعدات الحديثة التي يستخدمها مختبر رمال الصحراء لضمان دقة وجودة فحوصات التربة والدراسات الجيوتقنية. نحن نستخدم أحدث التقنيات في مجال الفحص.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/equipment-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default EquipmentSeo;
