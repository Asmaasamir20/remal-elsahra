import { Link } from "react-router-dom";
import logoimg from "@/assets/logo.webp";

/**
 * FooterLogo renders the brand logo with preserved size.
 */
const FooterLogo = () => {
  return (
    <div className="text-center   transition-all duration-300 hover:-translate-y-1">
      <Link
        to="/"
        className="image-footer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={logoimg}
          alt="شعار مختبر رمال الصحراء لفحص التربة والدراسات الجيوتقنية"
          className="mx-auto object-contain"
          loading="lazy"
          decoding="async"
          width={180}
          height={180}
        />
      </Link>
    </div>
  );
};

export default FooterLogo;
