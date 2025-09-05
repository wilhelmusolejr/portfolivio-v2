import React from "react";

import Navigator from "@components/Navigator";
import PinnedProjectCard from "@components/PinnedProjectCard";
import SectionLine from "@components/SectionLine";
import OtherProjectCard from "@components/OtherProjectCard";
import Footer from "@components/Footer";

import { projects } from "../ProjectData";

import { motion } from "framer-motion";

export default function Projects() {
  const project = projects();

  const pinnedProjects = project[1];
  const otherProjects = project[0];

  const pinnedProjectContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between items
      },
    },
  };

  return (
    <>
      <Navigator />

      {/* pinned projects */}
      <div className="container mx-auto mt-24 w-10/12 max-w-5xl">
        <h1 className="mb-16 max-w-lg text-center text-3xl leading-relaxed font-bold tracking-wide uppercase md:mx-auto md:w-10/12 md:text-2xl lg:text-3xl">
          Projects
        </h1>

        {/* parent   */}
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          variants={pinnedProjectContainer}
          initial="hidden"
          whileInView="show"
          animate="show" // <-- fallback to ensure it runs
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* item */}
          {pinnedProjects.map((project, index) => (
            <PinnedProjectCard key={index} data={project} />
          ))}
        </motion.div>
      </div>

      <SectionLine />

      {/* other projects */}
      <div className="container mx-auto mt-24 mb-32 w-10/12 max-w-5xl">
        <h2 className="mb-16 max-w-lg text-center text-3xl leading-relaxed font-bold tracking-wide uppercase md:mx-auto md:w-10/12 md:text-2xl">
          other Projects
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-20 md:gap-10 md:gap-y-20">
          {/* card */}
          {otherProjects.map((project, index) => (
            <OtherProjectCard data={project} key={index} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
