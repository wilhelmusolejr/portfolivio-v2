import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function WorkItem({ workName, workDate }) {
  return (
    <div className="border-light-white bg-lightdark flex items-center justify-between rounded-md border-1 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h3>{workName}</h3>
        <p className="text-xs text-gray-400">{workDate}</p>
      </div>
      <div className="">
        <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
      </div>
    </div>
  );
}
