import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import Navigator from "@components/Navigator";
import SectionLine from "../components/SectionLine";
import showcase from "@assets/projects/showcase.webp";
import { getProject } from "../ProjectData";

export default function Project() {
  const { name } = useParams();

  const project = getProject(name);

  console.log(project);

  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 mb-10 w-10/12 max-w-5xl md:mb-16">
        {/* BACK */}
        <div className="mb-5 flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </div>

        {/* HEADING */}
        <h1 className="mb-2 text-2xl font-bold tracking-wide text-white lg:text-4xl">
          {project.name}
        </h1>

        {/* SMALL INFO */}
        <p className="text-tertiary-white text-sm">
          {project.information.short_description}
        </p>
      </div>

      {/* image */}
      <div className="flex min-h-[40vh] items-center justify-center border-t-2 border-b-2 border-white/10 bg-gradient-to-tr from-[#327B36]/7 to-[#FBCA01]/7 py-15 md:h-[60vh]">
        <img
          src={showcase}
          alt=""
          className="h-full w-auto rounded-2xl object-contain"
        />
      </div>

      {/* details */}
      <div className="container mx-auto mt-24 mb-12 flex w-10/12 max-w-5xl flex-col gap-12">
        {/* ITEM - Overview */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Overview
          </h2>

          {/* overview */}
          <div className="flex flex-col gap-5">
            {project.information.description.map((item, index) => (
              <p
                key={index}
                className="text-tertiary-white leading-relaxed font-light"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* ITEM - Features */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Features
          </h2>

          <ul className="text-tertiary-white ms-5 flex list-disc flex-col gap-2 leading-relaxed font-light">
            {project.information.features.map((feature, index) => (
              <li key={index} className="">
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ITEM - Contact */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Contact
          </h2>

          <p className="text-tertiary-white leading-relaxed font-light">
            If you encounter any issues or have questions about this project,
            please don't hesitate to reach out to me directly at{" "}
            <span className="text-green-600">wilhelmus.olejr@gmail.com</span>.
            As the sole developer, I am dedicated to providing support and will
            do my best to respond to your concerns promptly, aiming to offer
            solutions and address your queries.
          </p>
        </div>

        {/* ITEM - Demo */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Demo
          </h2>

          <a href="#" className="text-tertiary-white font-light underline">
            {project.link.external
              ? project.link.external
              : "No demo available"}
          </a>
        </div>
      </div>

      {/* tags */}
      <div className="container mx-auto my-32 max-w-5xl">
        <div className="mx-auto flex w-10/12 flex-wrap items-center justify-center gap-3">
          {project.information.tags.technology.map((tag, index) => (
            <a
              href={`https://www.google.com/search?q=${tag}`}
              target="_blank"
              key={index}
              className="border-light-white bg-third-black w-fit rounded-md border-1 px-3 py-2"
            >
              <p className="text-tertiary-white font-light">{tag}</p>
            </a>
          ))}
        </div>
      </div>

      {/* album */}
      <div className="scrollbar-hide mx-auto w-10/12 overflow-x-auto lg:overflow-x-visible">
        <div className="flex gap-5 lg:flex-wrap lg:justify-center">
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-red-300 lg:flex-shrink"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-blue-300 lg:flex-shrink"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-green-300 lg:flex-shrink"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-yellow-300 lg:flex-shrink"></div>
        </div>
      </div>

      <SectionLine />

      <div className="container mx-auto mb-32 w-10/12 max-w-5xl">
        <div className="flex flex-wrap gap-15 md:justify-center lg:gap-20">
          {/* FONTS */}
          <div className="capitalize">
            <h3 className="mb-7 text-2xl">Fonts</h3>
            {project.design.font.map((font, index) => (
              <p
                key={index}
                className="text-tertiary-white mb-2 font-light tracking-wider"
              >
                {font}
              </p>
            ))}
          </div>

          {/* LANGUAGES */}
          <div className="">
            <h3 className="mb-7 text-2xl">Languages</h3>

            <div className="mb-5 flex h-2 gap-1">
              <div className="h-2 w-8/12 rounded-s-lg bg-blue-400"></div>
              <div className="h-2 w-3/12 bg-red-500"></div>
              <div className="h-2 w-1/12 rounded-e-lg bg-yellow-400"></div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="">
            <h3 className="mb-7 text-2xl">Colors</h3>
            <div className="flex flex-col gap-4">
              {project.design.color.map((color, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* box */}
                  <div
                    className={`h-10 w-20 rounded-lg border-2 border-black/50`}
                    style={{ backgroundColor: color }}
                  ></div>
                  {/* name */}
                  <p className="text-tertiary-white font-light tracking-wider">
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="">
            <h3 className="mb-7 text-2xl">Tags</h3>
            <div className="flex flex-col gap-2 capitalize">
              {project.information.tags.project.map((tag, index) => (
                <p key={index} className="font-light tracking-wider lowercase">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="container mx-auto my-14 h-52 w-10/12 rounded-md bg-gray-800"></footer>
    </>
  );
}
