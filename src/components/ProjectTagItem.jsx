import React from "react";

export default function ProjectTagItem({ data }) {
  return (
    <div className="bg-third-black text-tertiary-white inline-block rounded-full px-2 py-1 text-xs tracking-wider">
      <p>{data}</p>
    </div>
  );
}
