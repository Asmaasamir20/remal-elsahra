import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * AnimatedTooltip component provides a professional tooltip with smooth animations
 * @param {string} message - The message to display in the tooltip
 * @param {string} position - Position of tooltip ('top', 'bottom', 'left', 'right')
 * @param {string} bgColor - Background color class
 * @param {string} textColor - Text color class
 * @param {React.ReactNode} children - The element that triggers the tooltip
 */
const AnimatedTooltip = ({
  message,
  position = "top",
  bgColor = "bg-gray-800",
  textColor = "text-white",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // تحديد موضع الرسالة بناءً على الموقع المحدد
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    }
  };

  // تحديد شكل السهم بناءً على الموضع
  const getArrowClasses = () => {
    switch (position) {
      case "top":
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800";
      case "bottom":
        return "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800";
      case "left":
        return "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800";
      case "right":
        return "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800";
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800";
    }
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
              scale: 0.8,
              y: position === "top" ? 10 : position === "bottom" ? -10 : 0,
              x: position === "left" ? 10 : position === "right" ? -10 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: position === "top" ? 10 : position === "bottom" ? -10 : 0,
              x: position === "left" ? 10 : position === "right" ? -10 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={`absolute z-50 px-3 py-2 rounded-lg shadow-xl ${bgColor} ${textColor} text-sm font-medium whitespace-nowrap ${getPositionClasses()}`}
          >
            {message}
            {/* السهم */}
            <div
              className={`absolute w-0 h-0 border-4 ${getArrowClasses()}`}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

AnimatedTooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AnimatedTooltip;
