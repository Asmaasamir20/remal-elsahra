import Clients from "./components/Clients/clients";
import HeroSection from "@/components/Ui/HeroSection";
import contactUsImage from "@/assets/al3ml2/bg.webp";
import ClientsSeo from "./components/Clients/ClientsSeo";

const ClientsPage = () => {
  return (
    <>
      <ClientsSeo />
      <div className="m-4">
        {" "}
        <HeroSection
          backgroundImage={contactUsImage}
          title="عملائنا"
          subtitle="تعرف على عملاء مختبر رمال الصحراء الذين يثقون في خدماتنا في فحص التربة والدراسات الجيوتقنية. نحن نقدم حلولًا مبتكرة ومتخصصة للمشاريع الكبرى والصغيرة."
        />
      </div>
      <div className="m-4">
        <Clients />
      </div>
    </>
  );
};

export default ClientsPage;
