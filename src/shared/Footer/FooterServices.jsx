import { Link } from "react-router-dom";
import { cardDetails } from "@/pages/components/Services/ServicescardTitles";

/**
 * FooterServices lists a subset of services as quick links to the services page.
 */
const FooterServices = () => {
  const topServices = cardDetails.slice(0, 5).map((s) => s.title);
  return (
    <section aria-label="خدمات مختصرة" dir="rtl" className="text-right p-4">
      <h6 className="text-base font-extrabold text-slate-800 dark:text-slate-100 mb-3">
        خدمات مختصرة
      </h6>
      <ul className="space-y-2">
        {topServices.map((title) => (
          <li
            key={title}
            className="text-slate-700 dark:text-slate-300 text-sm"
          >
            <Link
              to={`/service/${encodeURIComponent(title)}`}
              className="hover:text-yellow-700 transition-colors"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterServices;
