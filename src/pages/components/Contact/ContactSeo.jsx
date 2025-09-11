import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { getKeywordsForPage } from "@/seo/keywords";

const ContactSeo = () => {
  return (
    <SeoReactHelmet
      title={"تواصل معنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"}
      description={
        "تواصل مع مختبر رمال الصحراء للحصول على استفساراتك حول خدمات فحص التربة والدراسات الجيوتقنية. نحن هنا لتلبية احتياجاتك التقنية."
      }
      keywords={getKeywordsForPage("contact")}
      openGraph={{
        type: "website",
        locale: "ar_SA",
        url:
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://www.remal-elsahra.com") + "/contact",
        title:
          "تواصل معنا | مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية",
        description:
          "تواصل مع مختبر رمال الصحراء للحصول على استفساراتك حول خدمات فحص التربة والدراسات الجيوتقنية. نحن هنا لتلبية احتياجاتك التقنية.",
        site_name: "مختبر رمال الصحراء",
        image:
          (typeof window !== "undefined" ? window.location.origin : "") +
          "/logo.webp",
        imageAlt: "شعار مختبر رمال الصحراء",
      }}
      canonical={
        (typeof window !== "undefined"
          ? window.location.origin
          : "https://www.remal-elsahra.com") + "/contact"
      }
      twitter={{
        cardType: "summary_large_image",
        site: "@RemalElSahra", // حساب تويتر الخاص بالمختبر
        creator: "@RemalElSahra", // حساب تويتر الخاص بالمختبر
      }}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "مختبر رمال الصحراء",
          image: "/logo.webp",
          url:
            (typeof window !== "undefined"
              ? window.location.origin
              : "https://www.remal-elsahra.com") + "/contact",
          telephone: "+966554183175",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
          },
          areaServed: "SA",
          sameAs: [],
        },
      ]}
    />
  );
};

export default ContactSeo;
