import { Disclosure } from "@headlessui/react";
// import React hooks are not needed after restoring static background
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AlignRight, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
// شعار أساسي + srcset استجابي مولد كسلسلة نصية
import logoDark from "@/assets/logo.webp";
import logoSrcSet from "@/assets/logo.webp?w=96;150&format=webp&as=srcset&imagetools";
// استبدال مكوّن التحميل الكسول بصورة عادية لتقليل JS ووقت الحجب
import "./Navbar.css";

const Navbar = () => {
  const navigation = [
    { name: "الرئيسية", to: "/", current: true },
    { name: "خدمتنا", to: "services", current: false },
    { name: "المشاريع", to: "Projects", current: false },
    { name: "المعدات", to: "equipment", current: false },
    { name: "عملائنا", to: "clients", current: false },
    { name: "تواصل معنا", to: "contact", current: false },
  ];

  // Scroll state removed after restoring static background

  return (
    <Disclosure
      as="nav"
      dir="rtl"
      className="navbar-root fixed w-full top-0 border-b border-slate-200 bg-white/85 supports-[backdrop-filter]:backdrop-blur-md dark:bg-slate-900/70 shadow-sm transition-colors duration-300 h-auto z-50"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="relative flex items-center py-2 h-20">
              {/* زر القائمة - في يسار الشاشة للـ RTL */}
              <div className="absolute inset-y-0 left-0 flex justify-center items-center lg:hidden h-full">
                <Disclosure.Button className="relative inline-flex items-center justify-center ml-3 rounded-md p-3 font-bold text-black transition-all duration-200 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignRight
                      className="block h-6 w-6 font-extrabold"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center w-full justify-between">
                {/* الشعار - يمين */}
                <Link
                  className="flex items-center justify-center navbar-brand logoimg"
                  to="/"
                >
                  <img
                    src={logoDark}
                    srcSet={logoSrcSet}
                    alt="شعار مختبر رمال الصحراء"
                    width={150}
                    height={150}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 96px, 150px"
                    className="transition-all duration-300 select-none"
                  />
                </Link>
                {/* الروابط - وسط مع تمدد للمسافات المتساوية */}
                <div className="hidden lg:flex flex-1 justify-center">
                  <div className="flex items-center gap-x-8 py-0">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                          `navlink text-black ${
                            isActive
                              ? "active font-extrabold"
                              : "font-extrabold"
                          } px-3 py-0.5 text-md transition-colors hover:text-yellow-600 hover:font-extrabold duration-200`
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                {/* زر الهاتف لسطح المكتب - يسار */}
                <Link
                  to="tel:0554183175"
                  aria-label="Call 0554183175"
                  className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 text-sm font-bold shadow-md hover:from-amber-700 hover:to-amber-600 hover:shadow-lg active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  <span className="tracking-wider">0554183175</span>
                  <Phone size={18} className="opacity-90" />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col items-stretch gap-y-1 py-4 px-4 w-full bg-white/90 supports-[backdrop-filter]:backdrop-blur-md text-slate-800 border-t border-slate-200">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => close()}
                  className={({ isActive }) =>
                    `text-right w-full px-4 py-3 text-md transition duration-200 text-slate-800 hover:text-yellow-600 border-b border-slate-200/80 ${
                      isActive ? "active font-extrabold text-yellow-700" : ""
                    }`
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center justify-center w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 transition-colors duration-200 text-white gap-2 mt-4 rounded-md shadow-md">
                <Link
                  to="tel:0554183175"
                  className="font-semibold py-3 flex items-center justify-center text-lg w-full"
                >
                  <span className="px-2">0554183175</span>
                  <Phone size={26} className="opacity-90" />
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
