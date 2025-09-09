import EquipmentsOverview from "./components/Equipment/EquipmentsOverview";
import HeroSection from "@/components/Ui/HeroSection";
import contactUsImage from "@/assets/Equipment/Image_fx.webp";

const EquipmentPage = () => {
  return (
    <>
      <div className="m-4">
        {" "}
        <HeroSection
          backgroundImage={contactUsImage}
          title="المعدات"
          subtitle="استعرض المعدات المتطورة التي يستخدمها مختبر رمال الصحراء في فحص التربة والدراسات الجيوتقنية. نحن نستخدم أحدث التكنولوجيا لضمان دقة وجودة الفحوصات."
        />
      </div>
      <EquipmentsOverview />
    </>
  );
};

export default EquipmentPage;
