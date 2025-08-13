import React from "react";

export default function TechItem({ techName = "", color = "" }) {
  return (
    <div className="border-border-light flex items-center gap-2 rounded-sm border-1 p-2 md:gap-5 md:p-3">
      <div className={`h-8 w-8 rounded-md ${color}`}></div>
      <p className="text-tertiary-white text-xs sm:text-sm md:text-lg">
        {techName}
      </p>
    </div>
  );
}
