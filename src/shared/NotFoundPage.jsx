import notfoundImg from "@/assets/notFoundPage/notFound.webp";
import SeoReactHelmet from "@/shared/SeoReactHelmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const NotFoundPage = () => {
  return (
    <div className="container">
      <SeoReactHelmet
        title={"الصفحة غير موجودة - مختبر رمال الصحراء"}
        description={"عذرًا، الصفحة التي تبحث عنها غير موجودة."}
        noindex
        canonical={
          typeof window !== "undefined" ? window.location.href : undefined
        }
      />
      <LazyLoadImage
        src={notfoundImg}
        alt={"صفحة غير موجودة - مختبر رمال الصحراء"}
        className="w-full "
        effect="blur"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default NotFoundPage;
