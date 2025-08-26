import React from "react";
import LazyImage from "./LazyImage";

export default function OtherProjectCard({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_other.image}`;

  let url_name = data.name.replace(/ /g, "-").toLowerCase();

  return (
    <>
      <a href={`/project/${url_name}`} className="w-full md:w-5/12 lg:w-3/12">
        <div className="group relative h-48 overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-black/80 to-black/10 transition-all duration-500 group-hover:from-black/10 group-hover:to-black/10"></div>
          <LazyImage
            src={project_image}
            alt={data.name}
            className="mx-auto h-full w-auto rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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
