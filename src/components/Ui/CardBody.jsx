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

        {/* Premium Action Button - زر العمل المميز */}
        <Link
          to={targetUrl}
          className="premium-action-button group/btn  mt-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="premium-button-main group-hover/btn:translate-x-1">
            <span className="premium-button-text">اكتشف المزيد</span>
          </div>
          <div className="premium-button-icon group-hover/btn:scale-110 group-hover/btn:rotate-12">
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:translate-y-1 transition-transform duration-300 text-white" />
          </div>
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
