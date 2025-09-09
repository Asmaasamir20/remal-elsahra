import { Mail } from "lucide-react";
import ProfessionalTooltip from "../components/Ui/ProfessionalTooltip";
import PropTypes from "prop-types";

/**
 * MessageButton renders a floating circular message action button with animated tooltip.
 * When clicked, it opens the user's email client using a mailto link.
 *
 * Props allow customizing the target email, subject, and body. Defaults are provided.
 *
 * @param {Object} props - Component props
 * @param {string} [props.email] - Target email address
 * @param {string} [props.subject] - Email subject line
 * @param {string} [props.body] - Email body content
 * @returns {JSX.Element}
 */
const MessageButton = ({
  email = "info@remal-elsahra.com",
  subject = "استفسار من موقع رمال الصحراء",
  body = "السلام عليكم،\nأرغب بالتواصل بشأن خدماتكم",
}) => {
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <ProfessionalTooltip message="أرسل رسالة" position="left" type="message">
      <a
        href={mailtoHref}
        aria-label="أرسل رسالة عبر البريد الإلكتروني"
        className="fixed z-50 bottom-4 right-3 lg:right-6 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md shadow-amber-500/20 hover:shadow-md hover:shadow-amber-500/40 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        style={{ backgroundColor: "var(--primary-gold-orange)" }}
      >
        <Mail size={18} aria-hidden="true" />
      </a>
    </ProfessionalTooltip>
  );
};

MessageButton.propTypes = {
  email: PropTypes.string,
  subject: PropTypes.string,
  body: PropTypes.string,
};

export default MessageButton;
