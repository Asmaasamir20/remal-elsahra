/**
 * FooterContact renders contact information and actions.
 */
const FooterContact = () => {
  return (
    <address dir="rtl" className="not-italic text-right p-4">
      <h6 className="text-base font-extrabold text-slate-800 dark:text-slate-100 mb-4">
        تواصل معنا
      </h6>
      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li>
          الهاتف:{" "}
          <a href="tel:0554183175" className="hover:text-yellow-700">
            0554183175
          </a>
        </li>
        <li>
          واتساب:{" "}
          <a
            href="https://wa.me/+966554183175"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-700"
          >
            مراسلة مباشرة
          </a>
        </li>
        <li>
          البريد:{" "}
          <a href="mailto:info@remal-lab.sa" className="hover:text-yellow-700">
            info@remal-lab.sa
          </a>
        </li>
        <li>العنوان: المملكة العربية السعودية</li>
      </ul>
    </address>
  );
};

export default FooterContact;
