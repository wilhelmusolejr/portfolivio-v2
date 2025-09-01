import React from "react";
import { motion } from "framer-motion";

export default function TechItem({ techName = "", icon, color }) {
  return (
    <motion.div
      className="border-border-light flex items-center gap-2 rounded-sm border-1 bg-white/5 p-2 md:gap-5 md:p-3"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <div
        className={`h-10 w-10 rounded-md p-2`}
        style={{ backgroundColor: `${color}20` }}
      >
        <div className="" dangerouslySetInnerHTML={{ __html: icon }}></div>
      </div>

      <p className="text-tertiary-white text-xs capitalize sm:text-sm md:text-lg">
        {techName}
      </p>
    </motion.div>
  );
}
