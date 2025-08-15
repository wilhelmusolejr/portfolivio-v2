import React from "react";

export default function OtherProjectCard({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_other.image}`;

  let url_name = data.name.replace(/ /g, "-").toLowerCase();

  return (
    <>
      <a href={`/project/${url_name}`} className="">
        <div className="h-48 overflow-hidden">
          <img
            src={project_image}
            alt="Logo"
            className="mx-auto h-full w-auto rounded-lg object-cover"
          />
        </div>
        {/* text */}
        <div className="mt-10 text-center capitalize">
          <h3>{data.name}</h3>
        </div>
      </a>
    </>
  );
}
