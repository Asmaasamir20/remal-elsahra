import ProjectsOverview from "./components/Projects/ProjectsOverview";
import HeroSection from "@/components/Ui/HeroSection";
import bgImage from "@/assets/Projects/bg.webp";

const ProjectsPage = () => {
  return (
    <>
      <div className="m-4">
        {" "}
        <HeroSection
          backgroundImage={bgImage}
          title="المشاريع"
          subtitle="استعرض مشاريع مختبر رمال الصحراء الرائدة في مجال فحص التربة والدراسات الجيوتقنية. اكتشف كيفية تنفيذنا لاختبارات دقيقة للخرسانة والأسفلت وضبط الجودة."
        />
      </div>
      <ProjectsOverview />
    </>
  );
};

export default ProjectsPage;
