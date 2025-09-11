import { Link } from "react-router-dom";

/**
 * FooterLinks renders a list of quick navigation links in RTL layout.
 */
const FooterLinks = () => {
  const links = [
    { label: "الرئيسية", to: "/" },
    { label: "خدمتنا", to: "/services" },
    { label: "المشاريع", to: "/Projects" },
    { label: "المعدات", to: "/equipment" },
    { label: "عملائنا", to: "/clients" },
    { label: "تواصل معنا", to: "/contact" },
  ];

  return (
    <nav aria-label="روابط سريعة" dir="rtl">
      <h6 className="text-base font-extrabold text-slate-800 dark:text-slate-100 mb-4">
        روابط سريعة
      </h6>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-yellow-700 transition-colors text-sm"
            >
              <span className="i-heroicons-arrow-uturn-left-20-solid hidden" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
