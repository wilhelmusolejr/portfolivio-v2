import React from "react";

import Navigator from "@components/Navigator";
import PinnedProjectCard from "../components/PinnedProjectCard";
import SectionLine from "../components/SectionLine";
import OtherProjectCard from "../components/OtherProjectCard";

export default function Projects() {
  return (
    <>
      <Navigator />

      {/* pinned projects */}
      <div className="container mx-auto mt-24 w-10/12 max-w-5xl">
        <h1 className="mb-16 max-w-lg text-center text-3xl leading-relaxed font-bold tracking-wide uppercase md:mx-auto md:w-10/12 md:text-2xl">
          Projects
        </h1>

        {/* parent   */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* item */}
          <PinnedProjectCard />

          {/* item */}
          <PinnedProjectCard />
        </div>
      </div>

      <SectionLine />

      {/* other projects */}
      <div className="container mx-auto mt-24 w-10/12 max-w-5xl">
        <h2 className="mb-16 max-w-lg text-center text-3xl leading-relaxed font-bold tracking-wide uppercase md:mx-auto md:w-10/12 md:text-2xl">
          other Projects
        </h2>

        <div className="flex flex-col justify-center gap-20">
          {/* card */}
          <OtherProjectCard />

          {/* card */}
          <OtherProjectCard />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="container mx-auto my-14 h-52 w-10/12 rounded-md"></footer>
    </>
  );
}
