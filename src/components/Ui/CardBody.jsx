import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

// MultilayerCardNew.jsx - تصميم نظيف وعصري مثل الصورة
export const CardBody = ({ title, className = "", description, children }) => {
  const formatNameForUrl = (name) => encodeURIComponent(name);
  const navigate = useNavigate();
  const targetUrl = `/service/${formatNameForUrl(title)}`;

  const handleNavigate = () => {
    navigate(targetUrl);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(targetUrl);
    }
  };

  return (
    <div
      className={cn("clean-service-card group  p-5 cursor-pointer", className)}
      onClick={handleNavigate}
      role="link"
      tabIndex={0}
      aria-label={`فتح تفاصيل خدمة ${title}`}
      onKeyDown={handleKeyDown}
    >
      {/* Image Section - قسم الصورة */}
      <div className="relative overflow-hidden">
        {children && (
          <div className="relative h-48 sm:h-56 overflow-hidden">
            {/* Service Image - صورة الخدمة */}
            <div className="w-full h-full  rounded-t-xl overflow-hidden">
              <div className="w-full h-full transform transition-transform duration-300 group-hover:scale-105 rounded-xl overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section - قسم المحتوى */}
      <div className="py-6">
        {/* Service Title - عنوان الخدمة */}
        <h3 className="service-title-clean mb-4">{title}</h3>

        {/* Service Description - وصف الخدمة */}
        <div className="service-description-clean line-clamp-3">
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {/* Action Button - زر الدعوة لاتخاذ إجراء */}
        <Link
          to={targetUrl}
          onClick={(e) => e.stopPropagation()}
          aria-label={`اكتشف المزيد عن ${title}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow-md ring-1 ring-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 group"
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            اكتشف المزيد
          </span>
        </Link>
      </div>
    </div>
  );
};

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
