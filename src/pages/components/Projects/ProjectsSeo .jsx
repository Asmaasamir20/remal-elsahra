import SeoReactHelmet from "@/shared/SeoReactHelmet";

const ProjectsSeo = () => {
  return (
    <SeoReactHelmet
      title={"المشاريع | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "استعرض مشاريع مختبر رمال الصحراء الرائدة في مجال فحص التربة والدراسات الجيوتقنية. اكتشف كيفية تنفيذنا لاختبارات دقيقة للخرسانة والأسفلت وضبط الجودة."
      }
      keywords={[
        "مشاريع مختبر رمال الصحراء",
        "فحص التربة",
        "الدراسات الجيوتقنية",
        "اختبارات الخرسانة",
        "مشاريع البناء",
        "تحليل المواد",
        "ضبط الجودة",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com/projects", // رابط صفحة المشاريع
        title: "المشاريع | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "استعرض مشاريع مختبر رمال الصحراء المتنوعة والتي تشمل فحص التربة، الخرسانة، الأسفلت، وضبط الجودة.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/projects-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@SandDesertLab",
        creator: "@SandDesertLab",
      }}
    />
  );
};

export default ProjectsSeo;
