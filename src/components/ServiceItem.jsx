import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function ServiceItem({ data, variants }) {
  return (
    <motion.div
      variants={variants}
      className="border-border-light max-w-xs rounded-lg border-1 bg-white/5 p-5"
    >
      {/* image */}
      <div className="flex h-72 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <img
          src={data.gif_url}
          alt={`${data.title} gif`}
          className="h-full w-full object-cover"
        />
      </div>
      {/* description */}
      <div className="mt-10 flex flex-col gap-5">
        <h2 className="text-xl font-bold capitalize sm:text-2xl">
          {data.title}
        </h2>
        <p className="text-font-light leading-relaxed font-extralight">
          {data.description}
        </p>

        {/* Check list */}
        <div className="flex flex-col gap-3 capitalize">
          {/* Item */}
          {data.list.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <div className="">
                <FontAwesomeIcon icon={faCheck} className="text-lg" />
              </div>
              <p className="text-font-light font-extralight">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
