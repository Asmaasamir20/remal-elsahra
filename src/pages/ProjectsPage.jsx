import ProjectsOverview from "./components/Projects/ProjectsOverview";
import HeroSection from "@/components/Ui/HeroSection";
import contactUsImage from "@/assets/projects/bg.jpg";


const ProjectsPage = () => {
  return <>
  <div className="m-4">   <HeroSection
          backgroundImage={contactUsImage}
          title="المشاريع"
          subtitle="استعرض مشاريع مختبر رمال الصحراء الرائدة في مجال فحص التربة والدراسات الجيوتقنية. اكتشف كيفية تنفيذنا لاختبارات دقيقة للخرسانة والأسفلت وضبط الجودة."
        />
      </div>
    <ProjectsOverview/>
  </>;
};

export default ProjectsPage;
