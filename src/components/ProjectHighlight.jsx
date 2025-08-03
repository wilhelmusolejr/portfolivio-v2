import React from "react";

export default function ProjectHighlight({ data }) {
  return (
    <>
      <div className="project-item w-full max-w-lg md:mb-10 md:w-2xs lg:w-5/12 lg:gap-20">
        <div className="mx-auto">
          <img
            src={data.image}
            alt="Logo"
            className="h-full rounded-4xl object-cover xl:h-[600px]"
          />
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-1 text-center tracking-wide">
          <h2 className="mb-1 font-medium md:text-lg lg:text-xl">
            {data.title}
          </h2>
          <p className="text-tertiary-white text-sm font-light lg:text-base">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
}
