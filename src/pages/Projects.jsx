import React from "react";

import Navigator from "@components/Navigator";
import PinnedProjectCard from "../components/PinnedProjectCard";

export default function Projects() {
  return (
    <>
      <Navigator />

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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
