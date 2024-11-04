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
      transition={{ duration: 0.75, ease: [0.5, 1.25, 0.75, 1] }} // Changed duration and eased to a custom cubic-bezier⚡️
      className="text-center mb-8 px-4 md:px-0"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
        {title}{" "}
        <span className="text-indigo-600 text-7xl sm:text-8xl md:text-9xl lg:text-[5rem] transition duration-300 transform hover:-translate-y-1">
          {subtitle}
        </span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400">
        Your modern tagline or description goes here.
      </p>
    </motion.div>
  );
};

export default AnimatedTitle;
