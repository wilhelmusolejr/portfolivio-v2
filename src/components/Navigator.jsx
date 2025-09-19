import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import NavigatorLink from "./NavigatorLink";

import { motion, AnimatePresence } from "framer-motion";

export default function Navigator() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resume_link = `https://drive.google.com/file/d/1OYfzSr7biSVoiTU052svmt24gvcfev4p/view?usp=sharing`;

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <nav className="sticky top-5 z-20 container mx-auto my-14 w-10/12 rounded-md px-5 py-7 shadow-lg md:px-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link
              to="/"
              className="text-lg font-bold tracking-wider text-white uppercase sm:text-2xl"
            >
              Wilhelmus Ole
            </Link>
          </div>

          {/* Nav Link */}
          <div className="text-tertiary-white font-light tracking-wide uppercase">
            <div className="md:hidden" onClick={handleOpenMenu}>
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </div>
            <div className="hidden items-center justify-center gap-5 text-xl md:flex">
              {/* about */}
              <NavigatorLink CurrentPath={location.pathname} location="about" />

              {/* project */}
              <NavigatorLink
                CurrentPath={location.pathname}
                location="projects"
              />

              <div className="bg-tertiary-white h-7 w-px"></div>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1OYfzSr7biSVoiTU052svmt24gvcfev4p/view?usp=sharing"
                target="_blank"
                className="transition-colors duration-200 hover:text-yellow-400 hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-black uppercase"
            initial={{ opacity: 0, y: -20 }} // when mounting
            animate={{ opacity: 1, y: 0 }} // when open
            exit={{ opacity: 0, y: -20 }} // when closing
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* about */}
            <NavigatorLink CurrentPath={location.pathname} location="about" />

            {/* project */}
            <NavigatorLink
              CurrentPath={location.pathname}
              location="projects"
            />

            <div className="bg-tertiary-white my-5 h-px w-7"></div>

            {/* Resume */}
            <a
              href={resume_link}
              target="_blank"
              className="transition-colors duration-200 hover:text-yellow-400 hover:underline"
            >
              Resume
            </a>

            {/* close button */}
            <div
              className="absolute top-5 right-5 md:hidden"
              onClick={handleCloseMenu}
            >
              <FontAwesomeIcon icon={faClose} className="text-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
