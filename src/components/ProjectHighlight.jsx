import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function ProjectHighlight({ data, index }) {
  const project_image = `/assets/${data.project_showcase.url}${data.project_showcase.is_intro.image}`;

  let url_name = data.link.name;

  const ltrItem = {
    hidden: { opacity: 0, x: -100 }, // start left + invisible
    show: {
      opacity: 1,
      x: 0, // slide to place
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rtlItem = {
    hidden: { opacity: 0, x: 100 }, // start right + invisible
    show: {
      opacity: 1,
      x: 0, // slide to place
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={index % 2 === 0 ? ltrItem : rtlItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
        className="project-item w-full max-w-lg md:mb-10 md:w-5/12 lg:w-5/12 lg:gap-20"
      >
        {/* image parent */}
        <Link to={`/project/${url_name}`}>
          <div className="mx-auto h-[400px] overflow-hidden rounded-4xl lg:h-[600px]">
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
      </motion.div>
    </>
  );
}
