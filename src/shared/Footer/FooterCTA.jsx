import React, { Suspense } from "react";

const CallMe = React.lazy(() => import("./../CallMe"));

/**
 * FooterCTA renders the call-to-action block with the lazy CallMe component.
 */
const FooterCTA = () => {
  return (
    <div className="text-center flex items-center justify-center rounded-xl bg-white/70 dark:bg-slate-900/50 backdrop-blur ring-1 ring-slate-900/10 dark:ring-white/10 transition-all duration-300 hover:-translate-y-1">
      <div>
        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 leading-tight py-4">
          اِتَّصِلْ بِنَا عَلَى
        </h5>
        <div className="my-5">
          <Suspense
            fallback={
              <span className="inline-block h-9 w-28 rounded-full bg-gray-200 animate-pulse" />
            }
          >
            <CallMe color="text-sky-800" hoverColor="hover:text-sky-700" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
