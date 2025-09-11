import { useEffect, useRef } from "react";
import FooterBrand from "./FooterBrand";
import FooterLogo from "./FooterLogo";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";
const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      className="footer relative mt-12 mb-0 border-t border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-3">
          <FooterBrand />
          <FooterServices />
          <FooterContact />
          <FooterLogo />
        </div>

        <div className="pt-6 mt-10 border-t border-slate-200/60 dark:border-slate-800">
          <div className="container mx-auto text-center">
            <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300">
              جميع الحقوق محفوظة © لمُخْتَبَر رِمالُ الصَّحراءِ
              {` ${new Date().getFullYear()}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
