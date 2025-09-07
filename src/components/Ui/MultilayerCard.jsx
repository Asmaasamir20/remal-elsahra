import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// MultilayerCardNew.jsx
export const CardBody = ({ title, icon, className = "", id }) => {
  const formatNameForUrl = (name) => encodeURIComponent(name);

  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-xl transition-all duration-500 hover:scale-105 ease-in-out  hover:bg-gray-100 dark:hover:bg-zinc-700",
        className,
        "h-full backdrop-blur-xl bg-white"
      )}>
      <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-full w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 shadow-lg">
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg sm:text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
        {title}
      </h3>
      <div className="flex items-center justify-center mt-auto">
        <Link
          to={`/service/${formatNameForUrl(title)}`}
          className="flex items-center text-sm sm:text-base font-medium border border-blue-400 bg-blue-50 dark:bg-blue-800 dark:border-blue-600 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-lg">
          <span className="mr-1 sm:mr-2">تفاصيل الخدمة</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </div>
  );
};

export const MultilayerCardV_1 = ({ children }) => {
  return (
    <div className="relative py-6 sm:py-8 px-4 sm:px-6 max-w-md sm:max-w-lg mx-auto  transition-all duration-500 hover:scale-105 ease-in-out  h-full">
      <div className="absolute inset-0 transform rotate-0 bg-gradient-to-br from-gray-300 to-gray-200 dark:from-zinc-700 dark:to-zinc-800 backdrop-blur-xl rounded-lg shadow-lg shadow-gray-500 transition-shadow duration-500 filter" />
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl h-full">
        {children}
      </div>
    </div>
  );
};
