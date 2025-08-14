import React from "react";

export default function Project() {
  return (
    <>
      <div className="container mx-auto my-14 w-10/12 max-w-5xl">
        <h1 className="mb-16 text-center text-3xl font-bold tracking-wide uppercase md:text-2xl lg:text-3xl">
          Project Title
        </h1>

        <div className="project-content">
          <p className="text-lg leading-relaxed font-extralight">
            This is a description of the project. It explains what the project
            is about, its features, and its purpose.
          </p>
        </div>
      </div>
    </>
  );
}
