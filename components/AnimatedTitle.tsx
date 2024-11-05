"use client";
import { motion } from "framer-motion";

const AnimatedTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.75, ease: [0.5, 1.25, 0.75, 1] }} 
      className="text-center mb-8 px-4 md:px-0"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight tracking-tight">
        {title}{" "}
        <span className="text-indigo-600 text-5xl sm:text-6xl transition duration-300 transform hover:-translate-y-1">
          {subtitle}
        </span>
      </h1>
    </motion.div>
  );
};

export default AnimatedTitle;
