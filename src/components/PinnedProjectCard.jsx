import React from "react";

import ProjectTagItem from "./ProjectTagItem";

export default function PinnedProjectCard({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_pinned.image}`;

  const new_paragraph =
    data.information.description.split(" ").slice(0, 20).join(" ") + "...";

  let url_name = data.link.name;

  return (
    <>
      <a
        href={`/project/${url_name}`}
        className="bg-lightdark border-dark-gray rounded-3xl border-1 md:flex"
      >
        {/* image */}
        <div className="overflow-hidden rounded-t-3xl md:w-6/12 md:rounded-t-none md:rounded-l-3xl">
          {/* image */}
          <img
            src={project_image}
            alt="Logo"
            className="mx-auto h-full w-auto object-cover"
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-5 p-5 py-7 md:w-6/12 lg:p-7">
          {/* paragraph */}
          <div className="capitalize">
            <h2 className="mb-2 text-xl font-medium tracking-wide text-white lg:text-2xl">
              {data.name}
            </h2>
            <p className="text-tertiary-white text-sm">
              {data.information.short_description}
            </p>
          </div>

          {/* paragraph */}
          <div className="">
            <p className="text-tertiary-white text-sm leading-relaxed font-light">
              {new_paragraph}
            </p>
          </div>

          {/* tags */}
          <div className="">
            <div className="flex flex-wrap gap-3">
              {data.information.tags.project.map((tag, index) => (
                <ProjectTagItem key={index} data={tag} />
              ))}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
