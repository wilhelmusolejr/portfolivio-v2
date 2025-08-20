import React from "react";
import { Link } from "react-router-dom";

export default function NavigatorLink({ CurrentPath, location }) {
  return (
    <Link
      to={`/${location}`}
      className={` ${CurrentPath.includes(location) ? "font-bold tracking-wider text-white" : ""} transition-colors duration-200 hover:text-yellow-400 hover:underline`}
    >
      {location}
    </Link>
  );
}
