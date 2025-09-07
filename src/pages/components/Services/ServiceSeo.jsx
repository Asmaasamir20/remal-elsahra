import SeoReactHelmet from "@/shared/SeoReactHelmet";

const ServiceSeo = () => {
  return (
    <SeoReactHelmet
      title={"الخدمات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تعرّف على خدمات مختبر رمال الصحراء، الرائد في مجال فحص التربة والدراسات الجيوتقنية. نقدم خدمات شاملة لفحص التربة، الخرسانة، المواد، وضبط الجودة."
      }
      keywords={[
        "فحص التربة",
        "مختبر رمال الصحراء",
        "الدراسات الجيوتقنية",
        "اختبارات الخرسانة",
        "اختبارات الأسفلت",
        "تحليل المواد الكيميائية",
        "ضبط الجودة",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com/services",
        title: "الخدمات | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "مختبر رمال الصحراء يقدم خدمات متخصصة في فحص التربة والدراسات الجيوتقنية، بما في ذلك اختبارات التربة، الخرسانة، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/services-og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ServiceSeo;
