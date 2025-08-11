import React from "react";

export default function TechItem({ techName = "", color = "" }) {
  return (
    <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:p-5">
      <div className={`h-8 w-8 rounded-md ${color}`}></div>
      <p className="text-sm md:text-lg">{techName}</p>
    </div>
  );
}
