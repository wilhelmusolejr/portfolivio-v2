import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ServiceItem({ data }) {
  return (
    <div className="border-border-light rounded-lg border-1 p-7 md:w-10/12 md:max-w-xs">
      {/* image */}
      <div className="h-72 rounded-lg bg-slate-50"></div>
      {/* description */}
      <div className="mt-10 flex flex-col gap-5">
        <h2 className="text-2xl font-bold capitalize">{data.title}</h2>
        <p className="text-font-light leading-relaxed font-extralight">
          {data.description}
        </p>

        {/* Check list */}
        <div className="flex flex-col gap-3 capitalize">
          {/* Item */}
          <div className="flex items-center gap-3">
            <div className="">
              <FontAwesomeIcon icon={faCheck} className="text-lg" />
            </div>
            <p className="text-font-light">Task automation</p>
          </div>

          {/* Item */}
          <div className="flex items-center gap-3">
            <div className="">
              <FontAwesomeIcon icon={faCheck} className="text-lg" />
            </div>
            <p className="text-font-light">Efficiency tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}
