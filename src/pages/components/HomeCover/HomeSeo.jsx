import SeoReactHelmet from "@/shared/SeoReactHelmet";

const HomeSeo = () => {
  return (
    <SeoReactHelmet
      title={"الرئيسية | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "مختبر رمال الصحراء هو وجهتك الموثوقة لفحص التربة والدراسات الجيوتقنية. نقدم خدمات متميزة تشمل اختبارات التربة، الخرسانة، وضبط الجودة."
      }
      keywords={[
        "مختبر رمال الصحراء",
        "فحص التربة",
        "الدراسات الجيوتقنية",
        "اختبارات الخرسانة",
        "ضبط الجودة",
        "اختبارات الأسفلت",
        "تحليل المواد الكيميائية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com.com", // رابط الصفحة الرئيسية
        title: "الرئيسية | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "مختبر رمال الصحراء يقدم خدمات متميزة لفحص التربة والدراسات الجيوتقنية، بما في ذلك اختبارات التربة، الخرسانة، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/home-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default HomeSeo;
