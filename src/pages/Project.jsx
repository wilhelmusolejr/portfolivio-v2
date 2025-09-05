import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";

import Navigator from "@components/Navigator";
import SectionLine from "../components/SectionLine";
import { getProject } from "../ProjectData";
import React from "react";
import ProjectScreenshotItem from "../components/ProjectScreenshotItem";
import Footer from "@components/Footer";

import { motion } from "framer-motion";

export default function Project() {
  const { name } = useParams();
  const [currentImage, setCurrentImage] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [isProjectImageLoaded, setIsProjectImageLoaded] = useState(false);
  const [isColorCopied, setIsColorCopied] = useState(false);

  const languagesColor = ["bg-blue-400", "bg-red-500", "bg-yellow-400"];

  const project = getProject(name);
  const navigate = useNavigate();

  const project_image = `/assets/${project.project_showcase.url}${project.project_showcase.project.banner_image}`;

  let album = project.project_showcase.project.screenshot;
  let albumLength = album.length;

  // Color related background
  function isNearWhiteOrBlack(hex) {
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    // Check near white (all channels high)
    if (r > 220 && g > 220 && b > 220) return "near white";

    // Check near black (all channels low)
    if (r < 35 && g < 35 && b < 35) return "near black";

    // Otherwise, it's a good color
    return "good color";
  }

  function getRandomColor() {
    let r, g, b;

    while (true) {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);

      // Reject near white
      if (r > 220 && g > 220 && b > 220) continue;

      // Reject near black
      if (r < 35 && g < 35 && b < 35) continue;

      // Passed test
      break;
    }

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  }

  let colors_background = [];

  if (project.design?.color) {
    if (project.design.color.length < 0) {
      colors_background = Array.from({ length: 5 }, getRandomColor);
    } else {
      colors_background = project.design.color.filter(
        (c) => isNearWhiteOrBlack(c) === "good color",
      );

      colors_background.unshift("#fff");
      colors_background.push("#fff");
      colors_background.push("#000");
    }
  }

  // ALBUM PREVIEW
  function closeImagePreview(e) {
    if (e.target.tagName === "IMG" || albumLength < 1) return;

    if (e.target.classList.contains("close-image-preview")) {
      setCurrentImage(null);
    }

    if (e.target.closest(".arrow-left")) {
      let currentIndex = album.indexOf(currentImage);

      currentIndex = currentIndex === 0 ? albumLength - 1 : currentIndex - 1;

      setCurrentImage(album[currentIndex]);
    }

    if (e.target.closest(".arrow-right")) {
      let currentIndex = album.indexOf(currentImage);

      currentIndex = currentIndex === albumLength - 1 ? 0 : currentIndex + 1;

      setCurrentImage(album[currentIndex]);
    }
  }

  // GITHUB Languages
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/wilhelmusolejr/${project.link.name}/languages`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const totalLines = Object.values(data).reduce(
          (acc, value) => acc + value,
          0,
        );

        const languageArray = Object.entries(data).map(([language, lines]) => ({
          language,
          percentage: ((lines / totalLines) * 100).toFixed(0), // Calculate percentage and format to 2 decimal places
        }));

        // Sort the array by percentage in descending order and take the top 3
        const topLanguages = languageArray
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 3);

        setLanguages(topLanguages);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };

    fetchLanguages();
  }, [project.link.name]);

  // animations for tags
  const tagsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // delay between each tag
      },
    },
  };

  const tagsItem = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setIsColorCopied(text);

    setTimeout(() => {
      setIsColorCopied(false);
    }, 2000);
  }

  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 mb-10 w-10/12 max-w-5xl md:mb-16">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 flex cursor-pointer items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>

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
      <div className="relative flex min-h-[40vh] items-center justify-center px-10 py-15 md:h-[60vh]">
        {/* container-image */}
        <div className="relative flex h-full w-[600px] items-center justify-center rounded-2xl">
          {/* Spinner / Loader */}
          {!isProjectImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/5">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            </div>
          )}

          {/* actual image */}
          <motion.img
            src={project_image}
            alt="Project banner showcase"
            loading="lazy" // native lazy loading
            onLoad={() => setIsProjectImageLoaded(true)}
            className={`${isProjectImageLoaded ? "opacity-100" : "opacity-0"} border-light-white z-10 h-full w-auto rounded-2xl border-1 object-cover transition-opacity duration-500`}
          />
        </div>

        {/* bg */}
        <div className="absolute inset-0 shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.1),inset_0px_-2px_0px_0px_rgba(255,255,255,0.1)]">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: `linear-gradient(to top right, ${colors_background.join(",")})`,
            }}
          ></div>
        </div>
      </div>

      {/* details */}
      <div className="s container mx-auto mt-24 mb-12 flex w-10/12 max-w-5xl flex-col gap-12">
        {/* ITEM - Overview */}
        {project.information.description && (
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
        )}

        {/* ITEM - Features */}
        {project.information.features && (
          <>
            <div className="">
              {/* HEADING */}
              <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
                Features
              </h2>

              <ul className="text-tertiary-white ms-5 flex list-disc flex-col gap-2 leading-relaxed font-light">
                {project.information.features?.map((feature, index) => (
                  <li key={index} className="">
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

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
        {project.link.external && (
          <div className="">
            {/* HEADING */}
            <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
              Demo
            </h2>

            <a
              href={project.link.external}
              target="_blank"
              className="text-tertiary-white font-light lowercase underline"
            >
              {project.link.external
                ? project.link.external
                : "No demo available"}
            </a>
          </div>
        )}
      </div>

      {/* tags */}
      {project.information.tags.technology && (
        <div className="container mx-auto my-32 max-w-5xl">
          <motion.div
            className="mx-auto flex w-10/12 flex-wrap items-center justify-center gap-3"
            variants={tagsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.information.tags.technology.map((tag, index) => (
              <motion.a
                variants={tagsItem}
                href={`https://www.google.com/search?q=${tag}`}
                target="_blank"
                key={index}
                className="border-light-white bg-third-black hover:bg-lightdark w-fit rounded-md border px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white"
              >
                <p className="text-tertiary-white font-light">{tag}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      )}

      {/* album */}
      {albumLength > 0 && (
        <div className="scrollbar-hide mx-auto w-10/12 max-w-5xl overflow-x-auto lg:overflow-x-visible">
          {/* parent */}
          <div className="flex gap-5 lg:grid lg:grid-cols-4 lg:flex-wrap lg:justify-center">
            {album.map((screenshot, index) => (
              <ProjectScreenshotItem
                src={`/assets/${project.project_showcase.url}${screenshot}`}
                index={index}
                setCurrentImage={setCurrentImage}
                image={screenshot}
              />
            ))}
          </div>
        </div>
      )}

      {/* <SectionLine /> */}

      {currentImage && (
        <div
          onClick={closeImagePreview}
          className="close-image-preview fixed inset-0 z-20 flex items-center justify-center bg-black/50"
        >
          <div className="arrow-left flex flex-1 cursor-pointer items-center justify-center text-xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img
            src={`/assets/${project.project_showcase.url}${currentImage}`}
            alt="CourseMatch showcase"
            className="w-8/12"
          />
          <div className="arrow-right flex flex-1 cursor-pointer items-center justify-center text-xl">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />

      <SectionLine />

      {/* infos */}
      <div className="container mx-auto mb-32 w-10/12 max-w-5xl">
        <div className="flex flex-wrap gap-15 md:justify-center lg:gap-20">
          {/* FONTS */}
          {project.design?.font && (
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
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div className="w-60">
              <h3 className="mb-7 text-2xl">Languages</h3>

              {/* graph color */}
              <div className="mb-5 flex h-2 gap-1">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    style={{ width: `${lang.percentage}%` }}
                    className={`h-2 ${index === 0 ? "rounded-s-lg" : ""} ${index === 2 ? "rounded-e-lg" : ""} ${languagesColor[index]}`}
                  ></div>
                ))}
              </div>

              {/* programming name */}
              <div className="mt-4 flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {/* circle */}
                    <div
                      className={`h-3 w-3 rounded-full ${languagesColor[index]}`}
                    ></div>
                    {/* data */}
                    <div className="flex items-center gap-2">
                      <p>{lang.language}</p>
                      <p className="text-xs">{lang.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {project.design?.color && (
            <div className="">
              <h3 className="mb-7 text-2xl">Colors</h3>
              <div className="flex flex-col gap-4">
                {project.design.color.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    onClick={() => copyToClipboard(color)}
                    title="Click to copy"
                  >
                    {/* box */}
                    <div
                      className={`h-10 w-20 cursor-pointer rounded-lg border-2 border-black/50`}
                      style={{ backgroundColor: color }}
                    ></div>
                    {/* name */}
                    <p className="text-tertiary-white cursor-pointer font-light tracking-wider">
                      {isColorCopied === color ? "Copied!" : color}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

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

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
