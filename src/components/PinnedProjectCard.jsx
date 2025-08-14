import React from "react";

import showcase from "@assets/projects/showcase.webp";

export default function PinnedProjectCard() {
  return (
    <>
      <div className="bg-lightdark border-dark-gray rounded-lg border-1">
        {/* image */}
        <div className="h-48 overflow-hidden rounded-t-lg">
          {/* image */}
          <img src={showcase} alt="Logo" className="object-cover" />
        </div>
        {/* text */}
        <div className="flex flex-col gap-5 p-5 py-7">
          {/* paragraph */}
          <div className="capitalize">
            <h2 className="mb-2 text-xl font-medium tracking-wide text-white">
              Philippine currency identifier
            </h2>
            <p className="text-tertiary-white text-sm">
              Currency recognition app.
            </p>
          </div>

          {/* paragraph */}
          <div className="">
            <p className="text-tertiary-white font-light tracking-wide">
              Philippine Currency Identifier is a thesis-developed app that
              helps visually impaired people in the Philippines identify
              currency denominations using a...
            </p>
          </div>

          {/* tags */}
          <div className="">
            <div className="flex flex-wrap gap-3">
              {/* item */}
              <div className="bg-third-black text-tertiary-white inline-block rounded-full px-4 py-2 text-xs tracking-wider">
                <p>voice-assistance</p>
              </div>

              {/* item */}
              <div className="bg-third-black text-tertiary-white inline-block rounded-full px-4 py-2 text-xs tracking-wider">
                <p>voice-assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
