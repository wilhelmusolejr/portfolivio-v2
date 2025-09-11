import { React, useState } from "react";

// COMPONENT
// COMPONENT
// COMPONENT
import Navigator from "@components/Navigator";
import TechItem from "@components/TechItem";
import TechHeading from "@components/TechHeading";
import TechItemParent from "@components/TechItemParent";
import SectionLine from "@components/SectionLine";
import WorkItem from "@components/WorkItem";
import InterestItem from "@components/InterestItem";
import ServiceItem from "@components/ServiceItem";
import Footer from "@components/Footer";

// DATA IMPORT
// DATA IMPORT
// DATA IMPORT
import technologies from "@data/technologies";
import services from "@data/services";
import aboutMeParagraphs from "@data/aboutMe";

import { motion } from "framer-motion";

export default function About() {
  const [isCopied, setIsCopied] = useState(false);

  const listInterest = [
    "Web Development",
    "Bot Development",
    "Web Design",
    "Machine Learning",
  ];

  // ANIMATION
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between items
      },
    },
  };

  const listInterestVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const serviceAnimationContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const goingUpAnimationItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 5000);
  }

  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 w-10/12 max-w-5xl py-5">
        {/* group 1 */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Circle */}
          <div className="w-h-full mx-auto flex items-center lg:w-3/12">
            <div className="h-60 w-60 rounded-full bg-slate-200"></div>
          </div>

          {/* Text */}
          <div className="mt-0 lg:w-9/12">
            {/* Heading */}
            <motion.h1
              className="text-2xl leading-normal md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Hey, I'm{" "}
              <span className="font-bold tracking-wide uppercase">
                Wilhelmus Ole
              </span>{" "}
              <br />a software developer from Philippines.
            </motion.h1>

            {/* Paragraph */}
            <p className="text-font-light mt-10 text-lg leading-relaxed font-extralight lg:w-10/12">
              I'm an self-taught Junior Full-Stack Web Developer focused on
              building modern, clean, responsive, and functional websites. I
              also have experience in web automation and web design.
            </p>

            <div className="bg-border-light my-14 hidden h-0.5 w-9/12 lg:block"></div>
          </div>
        </div>

        {/* INTEREST */}
        {/* group 2 */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Interest */}
          <div className="mt-10 lg:mt-0 lg:w-3/12">
            <h2>I'm interested in</h2>

            {/* Parent */}
            <motion.div
              className="mt-5 flex flex-wrap gap-3 font-light capitalize lg:flex-col"
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // trigger when 30% is visible
            >
              {/* Item */}
              {listInterest.map((interest, index) => (
                <motion.div key={index} variants={listInterestVariants}>
                  <InterestItem interestName={interest} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-border-light my-10 hidden h-0.5 w-9/12"></div>

          {/* Paragraphs */}
          <div className="text-font-light leading-relaxed lg:mt-0 lg:w-9/12">
            <motion.div
              className="flex flex-col gap-6 lg:w-10/12"
              viewport={{ once: true, amount: 0.3 }}
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
            >
              {/* items */}
              {aboutMeParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="font-extralight"
                  variants={goingUpAnimationItem}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <SectionLine />

      {/* SERVICES */}
      <div className="container mx-auto w-10/12 max-w-6xl">
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={serviceAnimationContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card */}
          {services.map((service, index) => (
            <>
              <ServiceItem
                key={index}
                data={service}
                variants={goingUpAnimationItem}
              />
            </>
          ))}
        </motion.div>
      </div>

      <SectionLine />

      {/* TECHNOLOGIES */}
      <div className="container mx-auto mt-36 w-10/12 max-w-5xl">
        <motion.h2
          className="mb-32 max-w-lg text-center text-xl leading-relaxed md:mx-auto md:w-10/12 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Below are the technologies I have worked with and am still learning
        </motion.h2>

        <div className="mt-10 flex flex-col gap-12">
          {technologies.map((technology, index) => (
            <div key={index} className="">
              <TechHeading heading={technology.type} />

              {/* Tech Items */}
              <TechItemParent>
                {/* item */}
                {technology.programs.map((tech, index) => (
                  <TechItem
                    key={index}
                    techName={tech.name}
                    icon={tech.svg}
                    color={tech.color}
                  />
                ))}
              </TechItemParent>
            </div>
          ))}
        </div>
      </div>

      <SectionLine />

      {/* WORK EXPERIENCE */}
      <div className="container mx-auto mt-36 w-10/12 max-w-5xl">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT */}
          <div className="border-border-superlight flex h-[40vh] w-full items-center justify-center rounded-t-lg border-1 bg-white/5 text-center lg:h-[60vh] lg:rounded-s-lg lg:rounded-r-none">
            <motion.h2
              className="text-2xl font-semibold uppercase md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Work experience
            </motion.h2>
          </div>
          {/* RIGHT */}
          <div className="border-border-superlight flex h-[60vh] w-full flex-col justify-between rounded-b-lg border-1 bg-black px-4 py-10 md:px-5 lg:rounded-s-none lg:rounded-e-lg">
            <div
              className="flex flex-col gap-5"
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // trigger when 30% is visible
            >
              <motion.div variants={listInterestVariants}>
                {/* Item */}
                <WorkItem
                  workName="Freelance Web Developer"
                  workDate="Jan 2023 - Mar 2024"
                />
              </motion.div>

              <motion.div variants={listInterestVariants}>
                {/* Item */}
                <WorkItem
                  workName="Freelance Web Developer"
                  workDate="Jan 2023 - Mar 2024"
                />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="mb-2">Help me to add more?</p>
              <div className="mx-auto w-fit rounded-lg bg-white px-4 py-2 text-black uppercase">
                Get in touch
              </div>
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
          <p className="mb-5 uppercase">get in touch (Click to copy)</p>
          <p
            className="hover:text-primary cursor-pointer text-lg font-bold text-white transition md:text-4xl lg:text-5xl"
            onClick={() => {
              copyToClipboard("wilhelmus.olejr@gmail.com");
            }}
          >
            {isCopied ? "Email copied!" : "wilhelmus.olejr@gmail.com"}
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
4;
