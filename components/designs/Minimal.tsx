"use client";
import { LessonPlan, Section } from "@prisma/client";
import { motion } from "framer-motion";

const MinimalDesign = ({ lessonPlan }: { lessonPlan: any }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{lessonPlan.title}</h1>
        <div className="text-sm text-muted-foreground space-x-4">
          <span>{lessonPlan.duration} minutes</span>
          <span>•</span>
          <span>{lessonPlan.subject}</span>
          <span>•</span>
          <span>{lessonPlan.studentLevel}</span>
        </div>
      </motion.div>

      {lessonPlan.sections?.map((section: Section, index: number) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-8 pb-8 border-b last:border-b-0"
        >
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-sm text-muted-foreground mb-4">{section.duration} minutes</p>
          <p className="text-muted-foreground">{section.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MinimalDesign;
