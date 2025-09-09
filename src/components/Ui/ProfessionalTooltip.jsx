import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 * ProfessionalTooltip component provides an advanced tooltip with sophisticated animations
 * Features include pulse effects, gradient backgrounds, and smooth transitions
 * @param {string} message - The message to display in the tooltip
 * @param {string} position - Position of tooltip ('top', 'bottom', 'left', 'right')
 * @param {string} type - Type of tooltip ('whatsapp', 'call', 'info', 'success', 'warning')
 * @param {React.ReactNode} children - The element that triggers the tooltip
 */
const ProfessionalTooltip = ({
  message,
  position = "top",
  type = "info",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // تحديد الألوان والأنماط بناءً على نوع الرسالة
  const getTypeStyles = () => {
    switch (type) {
      case "whatsapp":
        return {
          bg: "bg-gradient-to-r from-green-500 to-green-600",
          shadow: "shadow-green-500/30",
          border: "border-green-400",
          icon: "💬",
        };
      case "call":
        return {
          bg: "bg-gradient-to-r from-blue-500 to-blue-600",
          shadow: "shadow-blue-500/30",
          border: "border-blue-400",
          icon: "📞",
        };
      case "success":
        return {
          bg: "bg-gradient-to-r from-emerald-500 to-emerald-600",
          shadow: "shadow-emerald-500/30",
          border: "border-emerald-400",
          icon: "✅",
        };
      case "warning":
        return {
          bg: "bg-gradient-to-r from-amber-500 to-amber-600",
          shadow: "shadow-amber-500/30",
          border: "border-amber-400",
          icon: "⚠️",
        };
      default:
        return {
          bg: "bg-gradient-to-r from-gray-700 to-gray-800",
          shadow: "shadow-gray-500/30",
          border: "border-gray-400",
          icon: "ℹ️",
        };
    }
  };

  const typeStyles = getTypeStyles();

  // الموضع والسهم يتم التحكم بهما مباشرة عبر style أدناه، لذلك لا حاجة لدوال إضافية
  // تحديد الإزاحة الرأسية حسب نوع الزر لضمان ظهور الرسالة بجانب نفس الزر
  const getBottomOffset = () => {
    // القيم هنا متوافقة مع قيم Tailwind المستخدمة في الأزرار:
    // WhatsApp => bottom-36 (9rem), Call => bottom-20 (5rem), Message => bottom-4 (1rem)
    if (type === "whatsapp") return "9rem";
    if (type === "call") return "5rem";
    return "1rem"; // للرسائل أو الأنواع الأخرى
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.3,
              y: position === "top" ? 20 : position === "bottom" ? -20 : 0,
              x: position === "left" ? 20 : position === "right" ? -20 : 0,
              rotateX:
                position === "top" ? -90 : position === "bottom" ? 90 : 0,
              rotateY:
                position === "left" ? 90 : position === "right" ? -90 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              rotateX: 0,
              rotateY: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.3,
              y: position === "top" ? 20 : position === "bottom" ? -20 : 0,
              x: position === "left" ? 20 : position === "right" ? -20 : 0,
              rotateX:
                position === "top" ? -90 : position === "bottom" ? 90 : 0,
              rotateY:
                position === "left" ? 90 : position === "right" ? -90 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`fixed z-[9999] px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg ${typeStyles.bg} text-white text-xs sm:text-sm font-medium whitespace-nowrap backdrop-blur-sm max-w-xs sm:max-w-none`}
            style={{
              background: `linear-gradient(135deg, ${
                typeStyles.bg.includes("green")
                  ? "#10b981, #059669"
                  : typeStyles.bg.includes("blue")
                  ? "#3b82f6, #2563eb"
                  : "#6b7280, #4b5563"
              })`,
              boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)`,
              // تحديد الموضع بناءً على نوع الزر وموضع الرسالة مع responsive
              ...(position === "left"
                ? {
                    right: window.innerWidth < 768 ? "5rem" : "6rem", // مسافة أصغر على الموبايل
                    bottom: getBottomOffset(),
                  }
                : position === "right"
                ? {
                    left: window.innerWidth < 768 ? "5rem" : "6rem", // مسافة أصغر على الموبايل
                    bottom: getBottomOffset(),
                  }
                : position === "top"
                ? {
                    right: window.innerWidth < 768 ? "2rem" : "3rem", // مسافة أصغر على الموبايل
                    bottom: getBottomOffset(),
                  }
                : {
                    right: window.innerWidth < 768 ? "2rem" : "3rem", // مسافة أصغر على الموبايل
                    bottom: getBottomOffset(),
                  }),
            }}
          >
            {/* تأثير النبض البسيط */}
            <motion.div
              animate={{
                scale: [1, 1.01, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-xl bg-white/10"
            />

            {/* المحتوى البسيط والجميل */}
            <div className="relative flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse z-10">
              <motion.span
                className="text-sm sm:text-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {typeStyles.icon}
              </motion.span>
              <span className="font-semibold text-white text-xs sm:text-sm">
                {message}
              </span>
            </div>

            {/* السهم البسيط والجميل */}
            <div
              className={`absolute w-0 h-0 border-3 sm:border-4 ${
                position === "left"
                  ? "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent"
                  : position === "right"
                  ? "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent"
                  : position === "top"
                  ? "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent"
                  : "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent"
              }`}
              style={{
                // تعديل موضع السهم ليكون أقرب للزر مع responsive
                ...(position === "left"
                  ? { right: window.innerWidth < 768 ? "-0.75rem" : "-1rem" }
                  : position === "right"
                  ? { left: window.innerWidth < 768 ? "-0.75rem" : "-1rem" }
                  : position === "top"
                  ? { bottom: window.innerWidth < 768 ? "-0.75rem" : "-1rem" }
                  : { top: window.innerWidth < 768 ? "-0.75rem" : "-1rem" }),
                borderColor:
                  position === "left"
                    ? type === "whatsapp"
                      ? "transparent transparent transparent #10b981"
                      : type === "call"
                      ? "transparent transparent transparent #3b82f6"
                      : "transparent transparent transparent #6b7280"
                    : position === "right"
                    ? type === "whatsapp"
                      ? "transparent #10b981 transparent transparent"
                      : type === "call"
                      ? "transparent #3b82f6 transparent transparent"
                      : "transparent #6b7280 transparent transparent"
                    : position === "top"
                    ? type === "whatsapp"
                      ? "transparent transparent #10b981 transparent"
                      : type === "call"
                      ? "transparent transparent #3b82f6 transparent"
                      : "transparent transparent #6b7280 transparent"
                    : type === "whatsapp"
                    ? "#10b981 transparent transparent transparent"
                    : type === "call"
                    ? "#3b82f6 transparent transparent transparent"
                    : "#6b7280 transparent transparent transparent",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfessionalTooltip;

// PropTypes validation to satisfy eslint react/prop-types
ProfessionalTooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  type: PropTypes.oneOf([
    "whatsapp",
    "call",
    "info",
    "success",
    "warning",
    "message",
  ]).isRequired,
  children: PropTypes.node.isRequired,
};
