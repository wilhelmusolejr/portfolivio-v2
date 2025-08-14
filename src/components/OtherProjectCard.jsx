import React from "react";

import showcase from "@assets/projects/showcase.webp";

export default function OtherProjectCard() {
  return (
    <>
      <div className="">
        <div className="h-48 overflow-hidden">
          <img
            src={showcase}
            alt="Logo"
            className="mx-auto h-full w-auto rounded-lg object-cover"
          />
        </div>
        {/* text */}
        <div className="mt-10 text-center capitalize">
          <h3>Mobhie</h3>
        </div>
      </div>
    </>
  );
}
