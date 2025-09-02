import React from "react";

import ProjectTagItem from "./ProjectTagItem";
import LazyImage from "./LazyImage";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function PinnedProjectCard({ data }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_pinned.image}`;

  const new_paragraph =
    data.information.description.split(" ").slice(0, 20).join(" ") + "...";

  let url_name = data.link.name;

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // -------------------------

  return (
    <>
      <motion.div
        className="border-dark-gray bg-lightdark group hover:border-primary hover:shadow-primary/20 w-full overflow-hidden rounded-2xl border-1 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-white hover:shadow-lg"
        variants={item}
      >
        <Link to={`/project/${url_name}`} className="md:flex">
          {/* image parent */}
          <div className="relative min-h-80 overflow-hidden rounded-2xl rounded-b-none md:w-6/12 md:rounded-t-none lg:min-w-md">
            <LazyImage
              src={project_image}
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* text */}
          <div className="bg-lightdark flex flex-col gap-5 rounded-2xl rounded-t-none p-5 py-7 md:w-6/12 lg:p-7">
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
        </Link>
      </motion.div>
    </>
  );
}
