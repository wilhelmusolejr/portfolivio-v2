import React from "react";
import { Link } from "react-router-dom";

export default function ProjectHighlight({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_intro.image}`;

  let url_name = data.link.name;

  return (
    <>
      <div className="project-item w-full max-w-lg md:mb-10 md:w-5/12 lg:w-5/12 lg:gap-20">
        {/* image parent */}
        <Link to={`/project/${url_name}`}>
          <div className="mx-auto h-[300px] overflow-hidden rounded-4xl md:h-[400px] lg:h-[600px]">
            <img
              src={project_image}
              alt={`${data.name} image mock up`}
              className="h-full w-full rounded-4xl object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </Link>
        <div className="mt-12 flex flex-col items-center justify-center gap-1 text-center tracking-wide">
          <h2 className="mb-1 font-medium md:text-lg lg:text-xl">
            {data.name}
          </h2>
          <p className="text-tertiary-white text-sm font-light lg:text-base">
            {data.information.short_description}
          </p>
        </div>
      </div>
    </>
  );
}
