import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(
  ({ className, type, endIcon: EndIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer flex h-12 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-md placeholder-gray-500 focus:border-blue-400 focus:ring-0 transition-all duration-200 shadow-sm hover:shadow-md",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <EndIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 peer-focus:text-blue-400 transition-colors duration-200" />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
