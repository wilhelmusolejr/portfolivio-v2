import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Navigator from "@components/Navigator";
import TechItem from "../components/TechItem";
import TechHeading from "../components/TechHeading";
import TechItemParent from "../components/TechItemParent";
import SectionLine from "../components/SectionLine";
import WorkItem from "../components/WorkItem";
import InterestItem from "../components/InterestItem";

export default function About() {
  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 w-10/12 py-5">
        {/* group 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Circle */}
          <div className="mx-auto flex w-3/12 items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-slate-200"></div>
          </div>

          {/* Text */}
          <div className="mt-16 lg:mt-0 lg:w-9/12">
            {/* Heading */}
            <h1 className="w-10/12 text-2xl leading-relaxed md:text-4xl lg:w-full">
              Hey, I'm{" "}
              <span className="font-bold tracking-wide uppercase">
                Wilhelmus Ole
              </span>{" "}
              a software developer from Philippines.
            </h1>

            {/* Paragraph */}
            <p className="text-font-light mt-10 text-lg leading-relaxed font-extralight">
              I'm an self-taught Junior Full-Stack Web Developer focused on
              building modern, clean, responsive, and functional websites. I
              also have experience in web automation and web design.
            </p>

            <div className="bg-border-light my-10 hidden h-0.5 w-9/12 lg:block"></div>
          </div>
        </div>

        {/* INTEREST */}
        {/* group 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Interest */}
          <div className="mt-16 lg:mt-0 lg:w-3/12">
            <h2>I'm interested in</h2>

            {/* Parent */}
            <div className="mt-5 flex flex-wrap gap-3 font-light capitalize">
              {/* Item */}
              <InterestItem interestName="Web Development" />
              <InterestItem interestName="Bot Development" />
              <InterestItem interestName="Web Design" />
              <InterestItem interestName="Machine learning" />
            </div>
          </div>

          <div className="bg-border-light my-10 hidden h-0.5 w-9/12"></div>

          {/* Paragraphs */}
          <div className="text-font-light flex flex-col gap-6 leading-relaxed lg:mt-0 lg:w-8/12">
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

      <SectionLine />

      {/* SERVICES */}
      <div className="flex flex-wrap gap-20">
        {/* Card */}
        <div className="border-border-light mx-auto w-10/12 max-w-md rounded-lg border-1 p-7">
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
        <div className="border-border-light mx-auto w-10/12 max-w-md rounded-lg border-1 p-7">
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
        <div className="border-border-light mx-auto w-10/12 max-w-md rounded-lg border-1 p-7">
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

      <SectionLine />

      {/* TECHNOLOGIES */}
      <div className="container mx-auto mt-36 w-10/12 max-w-2xl py-5">
        <h2 className="mb-24 text-center text-xl leading-relaxed md:mx-auto md:w-10/12 md:text-2xl">
          Below are the technologies I have worked with and am still learning
        </h2>

        <div className="mt-10 flex flex-col gap-12">
          {/* WEB DEV */}
          <div className="">
            <TechHeading heading="Web development" />

            <TechItemParent>
              {/* item */}
              <TechItem techName="Typescript" color="bg-red-200" />
              <TechItem techName="HTML" color="bg-blue-200" />
              <TechItem techName="JavaScript" color="bg-yellow-200" />
            </TechItemParent>
          </div>

          {/* WEB DES */}
          <div className="">
            <TechHeading heading="Web Designer" />

            <TechItemParent>
              {/* item */}
              <TechItem techName="Typescript" color="bg-red-200" />
              <TechItem techName="HTML" color="bg-blue-200" />
              <TechItem techName="JavaScript" color="bg-yellow-200" />
              <TechItem techName="Typescript" color="bg-red-200" />
            </TechItemParent>
          </div>
        </div>
      </div>

      <SectionLine />

      {/* WORK EXPERIENCE */}
      <div className="container mx-auto mt-36 w-10/12 max-w-2xl bg-red-100">
        {/* LEFT */}
        <div className="border-border-superlight flex h-[40vh] items-center justify-center border-1 bg-black text-center">
          <h2 className="text-2xl font-semibold uppercase md:text-3xl">
            Work experience
          </h2>
        </div>
        {/* RIGHT */}
        <div className="border-border-superlight flex h-[60vh] flex-col justify-between border-1 bg-black px-4 py-10 md:px-10">
          <div className="flex flex-col gap-5">
            {/* Item */}
            <WorkItem
              workName="Freelance Web Developer"
              workDate="Jan 2023 - Mar 2024"
            />

            {/* Item */}
            <WorkItem
              workName="Freelance Web Developer"
              workDate="Jan 2023 - Mar 2024"
            />
          </div>

          <div className="text-center">
            <p className="mb-2">Help me to add more?</p>
            <div className="mx-auto w-fit rounded-lg bg-white px-4 py-2 text-black uppercase">
              Get in touch
            </div>
          </div>
        </div>
      </div>

      {/* OUTRO */}
      <div className="mx-auto my-52 flex w-10/12 max-w-2xl flex-col gap-3 leading-relaxed font-extralight">
        <p>
          Halo, thank you for the visit! I'm so glad you made it to this
          section. If you're interested in working together, have a question, or
          just want to say hi, feel free to reach out! I'm always open to new
          projects, ideas, or opportunities. Drop me an email, and I’ll respond
          as soon as I can.
        </p>

        <div className="mt-10">
          <p className="uppercase">get in touch (Click to copy)</p>
          <p className="text-2xl font-bold text-white md:text-4xl">
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
