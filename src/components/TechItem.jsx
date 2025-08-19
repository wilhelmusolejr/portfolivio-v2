import React from "react";

export default function TechItem({ techName = "", icon, color }) {
  return (
    <div className="border-border-light flex items-center gap-2 rounded-sm border-1 bg-white/5 p-2 md:gap-5 md:p-3">
      <div
        className={`h-10 w-10 rounded-md p-2`}
        style={{ backgroundColor: `${color}20` }}
      >
        <div className="" dangerouslySetInnerHTML={{ __html: icon }}></div>
      </div>

      <p className="text-tertiary-white text-xs capitalize sm:text-sm md:text-lg">
        {techName}
      </p>
    </div>
  );
}
