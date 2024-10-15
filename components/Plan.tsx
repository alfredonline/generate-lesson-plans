"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "lucide-react";
import { useState } from "react";
import { LessonPlan, Section } from "@prisma/client";

import React from "react";
import { Button } from "./ui/button";
import ClassicDesign from "./designs/Classic";
import ModernDesign from "./designs/Modern";
import MinimalDesign from "./designs/Minimal";

const designs = [
  {
    name: "Classic",
    component: ClassicDesign,
  },
  {
    name: "Modern",
    component: ModernDesign,
  },
  {
    name: "Minimal",
    component: MinimalDesign,
  },
];

type LessonPlanWithSections = LessonPlan & { sections: Section[] };

const Plan = ({ lessonPlan }: { lessonPlan: LessonPlanWithSections }) => {
  const [activeDesign, setActiveDesign] = useState<number>(0);
  const [isDesignSwitcherOpen, setIsDesignSwitcherOpen] =
    useState<boolean>(false);

  const ActiveDesign = designs[activeDesign].component;

  return (
    <div className="relative">
      <Button
        variant={"outline"}
        size={"icon"}
        className="fixed top-12 right-2 md:top-4 md:right-4 z-50"
        onClick={() => setIsDesignSwitcherOpen(!isDesignSwitcherOpen)}
      >
        <Layout className="h-4 w-4" />
      </Button>
      <AnimatePresence>
        {isDesignSwitcherOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed right-0 top-0 h-full w-64 bg-background shadow-lg z-40 p-4"
          >
            <h3 className="text-lg font-semibold mb-4">Choose design</h3>
            <div className="space-y-2">
              {designs.map((design, index) => (
                <Button
                  key={design.name}
                  variant={activeDesign === index ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveDesign(index);
                    setIsDesignSwitcherOpen(false);
                  }}
                >
                  {design.name}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ActiveDesign lessonPlan={lessonPlan} />
    </div>
  );
};

export default Plan;
