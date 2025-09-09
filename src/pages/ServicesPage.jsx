import ServiceSeo from "./components/Services/ServiceSeo";
import ServicesOverview from "./components/Services/ServicesOverview";
import HeroSection from "@/components/Ui/HeroSection";
import contactUsImage from "@/assets/services/bg.webp";
const ServicesPage = () => {
  return (
    <>
      <ServiceSeo />
      <div className="m-4">
        {" "}
        <HeroSection
          backgroundImage={contactUsImage}
          title="الخدمات"
          subtitle="نقدم خدماتنا المتخصصة لتلبية جميع احتياجاتكم الهندسية"
        />
      </div>
      <div className="m-4 ">
        {" "}
        <ServicesOverview
          initialVisible={7}
          showLoadMore={false}
          showAllInitially={false}
        />
      </div>
    </>
  );
};

export default ServicesPage;
