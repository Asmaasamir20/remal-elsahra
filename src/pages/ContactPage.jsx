import HeroSection from "@/components/Ui/HeroSection";
import ContactForm from "./components/Contact/ContactForm";
import ContactSeo from "./components/Contact/ContactSeo";
import Location from "./components/Contact/Location";
import ContactDetails from "./components/Contact/ContactDetails";
import contactUsImage from "@/assets/contact/contactUs.jpg";

const ContactPage = () => {
  return (
    <>
      <ContactSeo />
      <div className="m-4">
        <HeroSection
          backgroundImage={contactUsImage}
          title="تواصل معنا"
          subtitle="نحن هنا للإجابة على جميع استفساراتكم وتقديم أفضل الخدمات الهندسية"
        />
      </div>

      {/* تفاصيل الاتصال */}
      <ContactDetails />

      {/* قسم الفورم والخريطة */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 cairo-font">
              أرسلوا لنا رسالة
            </h2>
            <p className="text-lg text-gray-600 cairo-font">
              املأوا النموذج أدناه وسنرد عليكم في أقرب وقت ممكن
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* الخريطة */}
            <div className=" rounded-3xl p-8 ">
              <Location />
            </div>
            {/* الفورم */}
            <div className=" rounded-3xl p-8 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
