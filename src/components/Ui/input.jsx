import { forwardRef } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Input = forwardRef(
  ({ className, type, endIcon: EndIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer flex h-12 w-full rounded-xl border border-gray-300 bg-white py-3 pl-4 pr-10 text-md placeholder-gray-500 outline-none focus:border-[var(--primary-gold-orange)] focus:ring-2 focus:ring-[var(--primary-gold-orange)] focus:ring-offset-1 hover:border-[var(--primary-gold-orange)] transition-all duration-200 shadow-sm hover:shadow-md",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <EndIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 peer-hover:text-[var(--primary-gold-orange)] peer-focus:text-[var(--primary-gold-orange)] transition-colors duration-200" />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  endIcon: PropTypes.elementType,
};

export { Input };
