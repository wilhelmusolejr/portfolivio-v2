import React from "react";
import LazyImage from "./LazyImage";

export default function OtherProjectCard({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_other.image}`;

  let url_name = data.name.replace(/ /g, "-").toLowerCase();

  return (
    <>
      <a href={`/project/${url_name}`} className="w-full md:w-5/12 lg:w-3/12">
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={project_image}
            alt={data.name}
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
