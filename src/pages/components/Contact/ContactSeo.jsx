import SeoReactHelmet from "@/shared/SeoReactHelmet";

const ContactSeo = () => {
  return (
    <SeoReactHelmet
      title={"تواصل معنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تواصل مع مختبر رمال الصحراء للحصول على استفساراتك حول خدمات فحص التربة والدراسات الجيوتقنية. نحن هنا لتلبية احتياجاتك التقنية."
      }
      keywords={[
        "تواصل معنا",
        "مختبر رمال الصحراء",
        "فحص التربة",
        "الدراسات الجيوتقنية",
        "استفسارات",
        "دعم العملاء",
        "خدمات مختبر رمال",
        "الاختبارات الجيوتقنية",
        "استشارات هندسية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.remal-elsahra.com/contact", // الرابط الخاص بصفحة تواصل معنا
        title:
          "تواصل معنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "تواصل مع مختبر رمال الصحراء للحصول على استفساراتك حول خدمات فحص التربة والدراسات الجيوتقنية. نحن هنا لتلبية احتياجاتك التقنية.",
        site_name: "مختبر رمال الصحراء",
        image: "https://www.remal-elsahra.com/contact-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@RemalElSahra", // حساب تويتر الخاص بالمختبر
        creator: "@RemalElSahra", // حساب تويتر الخاص بالمختبر
      }}
    />
  );
};

export default ContactSeo;
