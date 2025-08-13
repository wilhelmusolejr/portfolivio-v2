import React from "react";

export default function TechItemParent({ children }) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}
