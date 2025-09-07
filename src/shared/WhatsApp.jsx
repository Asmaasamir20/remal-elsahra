import { FaWhatsapp } from "react-icons/fa"; // استيراد أيقونة WhatsApp
import { Tooltip } from "react-tooltip"; // استيراد Tooltip بشكل صحيح

const WhatsAppButton = () => {
  return (
    <div className="relative">
      {/* إضافة نص التلميح على الأيقونة */}
      <a
        href="https://wa.me/+966554183175"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-50"
        data-tip="تواصل معنا عبر واتساب" // نص التلميح
        data-for="whatsapp-tooltip" // ربط التلميح بالأيقونة
      >
        <FaWhatsapp
          className="text-white flex justify-center items-center bottom-10 right-3 rounded-full w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-r from-green-600 to-green-500 fixed z-50 p-3 
                    transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
                    hover:shadow-2xl hover:shadow-green-500 cursor-pointer"
        />
      </a>

      {/* تفعيل التلميح باستخدام Tooltip */}
      <Tooltip
        id="whatsapp-tooltip" // تعيين الـ id الخاص بالتلميح
        effect="solid"
        place="top" // تحديد مكان التلميح في الأعلى
        delayShow={500} // تأخير ظهور التلميح
      />
    </div>
  );
};

export default WhatsAppButton;
