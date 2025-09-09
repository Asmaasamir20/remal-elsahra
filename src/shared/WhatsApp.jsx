import { FaWhatsapp } from "react-icons/fa";
import ProfessionalTooltip from "../components/Ui/ProfessionalTooltip";

/**
 * WhatsAppButton component renders a floating WhatsApp button with professional animated tooltip
 * Positioned fixed at bottom-right with smooth hover animations and professional messaging
 */
const WhatsAppButton = () => {
  return (
    <ProfessionalTooltip
      message="تواصل معنا عبر واتساب"
      position="left"
      type="whatsapp"
    >
      <a
        href="https://wa.me/+966554183175"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-50"
        aria-label="تواصل معنا عبر واتساب"
      >
        <FaWhatsapp
          className="text-white flex justify-center items-center fixed bottom-36 right-3 lg:right-6 rounded-full w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 p-2 shadow-xl shadow-green-500/20 
                   transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
                   hover:shadow-2xl hover:shadow-green-500 cursor-pointer"
        />
      </a>
    </ProfessionalTooltip>
  );
};

export default WhatsAppButton;
