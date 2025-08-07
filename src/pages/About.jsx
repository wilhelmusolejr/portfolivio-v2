import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Navigator from "@components/Navigator";

export default function About() {
  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 w-10/12 max-w-2xl py-5">
        {/* group 1 */}
        <div className="">
          {/* Circle */}
          <div className="mx-auto flex w-10/12 items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-slate-200"></div>
          </div>

          {/* Text */}
          <div className="mt-16">
            {/* Heading */}
            <h1 className="text-2xl leading-relaxed">
              Hey, I'm{" "}
              <span className="font-bold tracking-wide uppercase">
                Wilhelmus Ole
              </span>{" "}
              a software developer from Philippines.
            </h1>

            {/* Paragraph */}
            <p className="text-font-light mt-10 text-lg leading-loose font-extralight">
              I'm an self-taught Junior Full-Stack Web Developer focused on
              building modern, clean, responsive, and functional websites. I
              also have experience in web automation and web design.
            </p>
          </div>
        </div>

        {/* group 2 */}
        <div className="">
          {/* Interest */}
          <div className="mt-16">
            <h2>I'm interested in</h2>

            {/* Parent */}
            <div className="mt-5 flex flex-col gap-3 font-light capitalize">
              {/* Item */}
              <div className="bg-dark-gray border-light-white w-fit rounded-md border-1 p-3">
                Front-end web development
              </div>
              {/* Item */}
              <div className="bg-dark-gray border-light-white w-fit rounded-md border-1 p-3">
                Bot Development
              </div>
              {/* Item */}
              <div className="bg-dark-gray border-light-white w-fit rounded-md border-1 p-3">
                Web Design
              </div>
              {/* Item */}
              <div className="bg-dark-gray border-light-white w-fit rounded-md border-1 p-3">
                Machine learning
              </div>
            </div>

            <div className="bg-border-light my-16 h-0.5 w-9/12"></div>
          </div>

          {/* Paragraphs */}
          <div className="text-font-light mt-10 flex flex-col gap-10 leading-loose">
            <p className="font-extralight">
              Kamusta! I’m a recent graduate with a degree in Computer Science.
              During my studies, I developed strong programming skills and
              gained hands-on experience through various school projects,
              including app development, software engineering, and my thesis.
              Additionally, I have experience as a Freelance Full Stack Web
              Developer and Web Designer. Along the way, I taught myself web
              automation, building bots for personal projects.
            </p>

            <p className="font-extralight">
              I focus on front-end development but I’m comfortable as a full
              stack developer. I’m passionate about creating websites that are
              clean, modern, responsive, and easy to use. My goal is to build
              user-friendly and visually appealing websites that offer a great
              user experience.
            </p>

            <p className="font-extralight">
              As a self-taught developer, I know that learning never really
              stops. Currently, I’m improving my knowledge in MERN and Laravel
              technologies, applying what I learn to real-world and hobby
              projects.
            </p>

            <p className="font-extralight">
              Looking ahead, I’m excited to keep growing, learning new tools,
              and taking on more complex projects. My goal is to work on
              projects that make a real difference and have a positive impact,
              and I’m always open to opportunities to collaborate and create
              meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="bg-border-light my-24 h-0.5"></div>

      <div className="flex flex-wrap gap-20">
        {/* Card */}
        <div className="border-border-light mx-auto w-10/12 rounded-lg border-1 p-7">
          {/* image */}
          <div className="h-72 rounded-lg bg-slate-50"></div>
          {/* description */}
          <div className="mt-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold capitalize">Web automation</h2>
            <p className="text-font-light leading-relaxed font-extralight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              rem velit eveniet vitae esse, magnam quasi architecto ipsa maiores
              corporis?
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

        {/* Card */}
        <div className="border-border-light mx-auto w-10/12 rounded-lg border-1 p-7">
          {/* image */}
          <div className="h-72 rounded-lg bg-slate-50"></div>
          {/* description */}
          <div className="mt-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold capitalize">Web automation</h2>
            <p className="text-font-light leading-relaxed font-extralight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              rem velit eveniet vitae esse, magnam quasi architecto ipsa maiores
              corporis?
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
      </div>

      {/* LINE */}
      <div className="bg-border-light my-24 h-0.5"></div>

      <div className="container mx-auto mt-36 w-10/12 max-w-2xl py-5">
        <h2 className="mb-16 text-center text-xl leading-relaxed">
          Below are the technologies I have worked with and am still learning
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {/* Item */}
          {/* WEB DEV */}
          <div className="">
            <h3 className="font-light uppercase">Web development</h3>

            <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>

              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>

              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>
            </div>
          </div>

          {/* Item */}
          {/* WEB DES */}
          <div className="">
            <h3 className="font-light uppercase">Web Designer</h3>

            <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>

              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>

              {/* item */}
              <div className="border-border-light flex items-center gap-2 rounded-md border-1 p-3 md:w-1/3 lg:w-1/4">
                <div className="h-8 w-8 rounded-md bg-red-200"></div>
                <p className="text-sm">Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="bg-border-light my-24 h-0.5"></div>

      {/* WORK EXPERIENCE */}
      <div className="container mx-auto mt-36 w-10/12 max-w-2xl bg-red-100">
        {/* LEFT */}
        <div className="border-light-white border-1 bg-black py-32 text-center">
          <h2 className="text-2xl font-semibold uppercase">Work experience</h2>
        </div>
        {/* RIGHT */}
        <div className="border-light-white border-1 bg-black p-4 py-10">
          <div className="flex flex-col gap-5">
            {/* Item */}
            <div className="border-light-white flex items-center justify-between rounded-md border-1 p-4">
              <div className="flex flex-col gap-2">
                <h3>Freelance Web Developer</h3>
                <p className="text-xs text-gray-400">Jan 2023 - Mar 2024</p>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
              </div>
            </div>
            {/* Item */}
            <div className="border-light-white flex items-center justify-between rounded-md border-1 p-4">
              <div className="flex flex-col gap-2">
                <h3>Freelance Web Developer</h3>
                <p className="text-xs text-gray-400">Jan 2023 - Mar 2024</p>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <p className="mb-2">Help me to add more?</p>
            <div className="mx-auto w-fit rounded-lg bg-white px-4 py-2 text-black uppercase">
              Get in touch
            </div>
          </div>
        </div>
      </div>

      {/* OUTRO */}
      <div className="mx-auto my-52 flex w-10/12 max-w-2xl flex-col gap-3 leading-relaxed font-extralight tracking-wider">
        <p>
          Halo, thank you for the visit! I'm so glad you made it to this
          section. If you're interested in working together, have a question, or
          just want to say hi, feel free to reach out! I'm always open to new
          projects, ideas, or opportunities. Drop me an email, and I’ll respond
          as soon as I can.
        </p>

        <div className="mt-10">
          <p className="uppercase">get in touch (Click to copy)</p>
          <p className="text-[clamp(1.3rem,3vw,2.5rem)] font-bold text-white">
            wilhelmus.olejr@gmail.com
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="container mx-auto my-14 h-52 w-10/12 rounded-md"></footer>
    </>
  );
}
4;
