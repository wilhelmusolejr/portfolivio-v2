import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "@pages/Home.jsx";
import About from "@pages/About";
import Projects from "@pages/Projects.jsx";
import Project from "@pages/Project.jsx";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import PageAnimation from "./PageAnimation";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
