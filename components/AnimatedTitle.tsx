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
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        {title} {" "}
        <span className="text-indigo-600">{subtitle}</span>
      </h1>
    </motion.div>
  );
};

export default AnimatedTitle;
