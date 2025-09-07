import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <div className="flex items-center bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-500">
    <div className="p-2 lg:p-4 bg-cyan-500 rounded-full shadow-lg hover:bg-cyan-600 transform transition-all duration-300">
      <Icon className="text-white w-4 h-4 sm:w-8 sm:h-8"  />
    </div>
    <div className="ml-4 px-2 sm:ml-6">
      <h4 className="text-sm sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base ">
        {link ? (
          <Link to={link} className="text-blue-800 hover:text-blue-800">
            {content}
          </Link>
        ) : (
          content
        )}
      </p>
    </div>
  </div>
);

const Location = () => {
  return (
    <section className="py-4 bg-zinc-300">
      <div className="container max-w-7xl lg:min-w-7xl p-2 mx-auto md:px-6 lg:px-10 py-16 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 border-l-2 border-b-2 border-yellow-600 p-2 sm:p-6 md:p-10 lg:p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-700 dark:to-zinc-800 shadow-xl rounded-xl">
          {/* الخريطة */}
          <div className="h-full w-full mx-auto rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://maps.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86%20%D8%A8%D9%86%20%D8%A8%D8%B4%D9%8A%D8%B1,%20%D8%A7%D9%84%D8%AD%D8%B2%D9%85,%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&t=m&z=17&output=embed"
              title="شارع النعمان بن بشير، الحزم، الرياض"
              loading="lazy"></iframe>
          </div>

          {/* تفاصيل الاتصال */}
          <div className="space-y-10 flex flex-col justify-between w-full">
            <h2 className="text-xl bg-white Amiri-font sm:text-xl lg:text-3xl w-full md:w-1/2 lg:w-1/2 mx-auto text-sky-600 text-center py-6 border-b-2 border-sky-600 transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 font-bold">
              تفاصيل الاتصال
            </h2>

            <div className="space-y-8">
              {/* الموقع */}
              <ContactItem
                icon={MapPin}
                title="المركز الرئيسي"
                content="مدينة الرياض _حي الحزم _شارع النعمان بن بشير"
              />

              {/* الهاتف */}
              <ContactItem
                icon={Phone}
                title="أرقام الهاتف"
                content="0554183175"
                link="tel:+966554183175"
              />

              {/* البريد الإلكتروني */}
              <ContactItem
                icon={Mail}
                title="البريد الإلكتروني"
                content="info@remal-elsahra.com"
                link="mailto:info@remal-elsahra.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Location);
