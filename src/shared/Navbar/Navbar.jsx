import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AlignRight, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logoDark from "@/assets/logo.webp";
// استبدال مكوّن التحميل الكسول بصورة عادية لتقليل JS ووقت الحجب
import "./Navbar.css";

const Navbar = () => {
  const navigation = [
    { name: "الرئيسية", to: "/", current: true },
    { name: "خدمتنا", to: "services", current: false },
    { name: "عملائنا", to: "clients", current: false },
    { name: "المشاريع", to: "Projects", current: false },
    { name: "المعدات", to: "equipment", current: false },
    { name: "تواصل معنا", to: "contact", current: false },
  ];

  return (
    <Disclosure
      as="nav"
      className="fixed w-full top-0 bg-gray-100 shadow-sm shadow-gray-400 transition-colors duration-300 h-auto z-50"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto lg:px-6">
            <div className="relative flex items-center justify-between h-full">
              <div className="absolute inset-y-0 right-0 flex justify-center items-center lg:hidden h-full">
                <Disclosure.Button className="relative inline-flex items-center justify-center mx-5 rounded-5 p-3 font-bold  bg-slate-700 hover:bg-gray-800 transition-all duration-300 text-white  ease-in-out shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
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

              <div className="flex items-center  justify-between w-full lg:flex-row lg:justify-btween">
                <div className="hidden   sm:ml-6 lg:block">
                  <div className="flex items-center space-x-4 py-2">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                          `text-black ${
                            isActive
                              ? "active font-extrabold"
                              : "font-extrabold"
                          } px-4 mx-2 md:mx-8 py-2 text-md transition-colors hover:text-yellow-600 hover:font-extrabold duration-200`
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                {/* إضافة رقم الهاتف هنا */}
                <div className="hidden lg:flex items-center space-x-2  mr-6 text-gray-600 font-semibold hover:text-sky-800 transition duration-200">
                  <Link
                    to="tel:0554183175"
                    className="text-lg flex items-center justify-center"
                  >
                    <span className="px-2 ">0554183175</span>
                    <Phone size={26} className="text-sky-500" />
                  </Link>
                </div>
                <Link
                  className="flex items-center ms-auto justify-center navbar-brand logoimg"
                  to="/"
                >
                  <img
                    src={logoDark}
                    alt="شعار مختبر رمال الصحراء"
                    width={150}
                    height={150}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 96px, 150px"
                    className="transition-all duration-300 select-none"
                    fetchPriority="low"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col items-start space-y-1 py-4 px-4 w-full bg-gray-100">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => close()}
                  className={({ isActive }) =>
                    `text-right w-full px-4 py-2 text-md transition hover:text-yellow-600 duration-200 text-black ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
              {/* رقم الهاتف في القائمة الجانبية */}
              <div className="flex items-center justify-center w-full  bg-slate-700 hover:bg-gray-800 transition-all duration-300 text-white space-x-2 mt-4 ">
                <Link
                  to="tel:0554183175"
                  className="font-semibold py-4 flex items-center justify-center text-lg"
                >
                  <span className="px-2">0554183175</span>
                  <Phone size={26} className="text-sky-500" />
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
