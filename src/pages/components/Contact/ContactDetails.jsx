import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

/**
 * ContactDetails - مكون لعرض تفاصيل الاتصال في بطاقات منفصلة
 * يعرض العنوان ورقم الهاتف والبريد الإلكتروني في تصميم أنيق
 *
 * @returns {JSX.Element} مكون ContactDetails
 */
const ContactDetails = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 cairo-font">
            تفاصيل الاتصال
          </h2>
          <p className="text-lg text-gray-600 cairo-font">
            تواصلوا معنا عبر القنوات التالية
          </p>
        </div>

        {/* بطاقات تفاصيل الاتصال */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* بطاقة العنوان */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 cairo-font">
              المركز الرئيسي
            </h3>
            <p className="text-gray-600 leading-relaxed cairo-font">
              مدينة الرياض - حي الحزم
              <br />
              شارع النعمان بن بشير
            </p>
          </div>

          {/* بطاقة رقم الهاتف */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 cairo-font">
              أرقام الهاتف
            </h3>
            <p className="text-gray-600 leading-relaxed cairo-font">
              0554183175
            </p>
          </div>

          {/* بطاقة البريد الإلكتروني */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 cairo-font">
              البريد الإلكتروني
            </h3>
            <p className="text-gray-600 leading-relaxed cairo-font">
              info@remal-elsahra.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
