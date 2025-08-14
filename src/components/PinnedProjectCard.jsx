import React from "react";

import showcase from "@assets/projects/showcase.webp";
import ProjectTagItem from "./ProjectTagItem";

export default function PinnedProjectCard() {
  return (
    <>
      <div className="bg-lightdark border-dark-gray rounded-lg border-1 md:flex">
        {/* image */}
        <div className="overflow-hidden rounded-t-lg md:w-6/12 md:rounded-t-none md:rounded-l-lg">
          {/* image */}
          <img
            src={showcase}
            alt="Logo"
            className="mx-auto h-full w-auto object-cover"
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-5 p-5 py-7 md:w-6/12">
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
            <p className="text-tertiary-white text-sm font-light tracking-wide">
              Philippine Currency Identifier is a thesis-developed app that
              helps visually impaired people in the Philippines identify
              currency denominations using a...
            </p>
          </div>

          {/* tags */}
          <div className="">
            <div className="flex flex-wrap gap-3">
              {/* item */}
              <ProjectTagItem />

              {/* item */}
              <ProjectTagItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
