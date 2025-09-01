import React from "react";
import { motion } from "framer-motion";

export default function TechItemParent({ children }) {
  return (
    <motion.div
      className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
