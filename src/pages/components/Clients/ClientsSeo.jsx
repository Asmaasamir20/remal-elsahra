import SeoReactHelmet from "@/shared/SeoReactHelmet";

const ClientsSeo = () => {
  return (
    <SeoReactHelmet
      title={"عملاءنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تعرّف على عملاء مختبر رمال الصحراء الذين يثقون في خدماتنا في فحص التربة والدراسات الجيوتقنية. نحن نقدم حلولًا مبتكرة ومتخصصة للمشاريع الكبرى والصغيرة."
      }
      keywords={[
        "عملاءنا",
        "مختبر رمال الصحراء",
        "فحص التربة",
        "الدراسات الجيوتقنية",
        "اختبارات الخرسانة",
        "مشاريع البناء",
        "تحليل المواد",
        "ضبط الجودة",
        "خدمات مختبر التربة",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com/clients", // رابط صفحة العملاء
        title: "عملاءنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "استعرض عملاء مختبر رمال الصحراء الذين يثقون في خدماتنا في فحص التربة والدراسات الجيوتقنية. لدينا شراكات ناجحة في العديد من المشاريع الكبرى.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/clients-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ClientsSeo;
