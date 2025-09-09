import { Phone } from "lucide-react";
import ProfessionalTooltip from "../components/Ui/ProfessionalTooltip";

/**
 * CallButton renders a floating circular call action button with professional animated tooltip.
 * It stays fixed at the bottom-right under the WhatsApp button with accessible labeling.
 */
const CallButton = () => {
  return (
    <ProfessionalTooltip message="اتصل بنا الآن" position="left" type="call">
      <a
        href="tel:0554183175"
        aria-label="اتصل بنا على 0554183175"
        className="fixed z-50 bottom-20 right-3 lg:right-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#2563eb] text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <Phone size={18} aria-hidden="true" />
      </a>
    </ProfessionalTooltip>
  );
};

export default CallButton;
