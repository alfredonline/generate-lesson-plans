"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";
import { Clock, BookOpen, User, ChevronDown } from "lucide-react";
import { LessonPlan, Section } from "@prisma/client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type LessonPlanWithSections = LessonPlan & { sections: Section[] };

const Classic = ({ lessonPlan }: { lessonPlan: LessonPlanWithSections }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8 overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-3xl font-bold">
            {lessonPlan.title}
          </CardTitle>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
            <Badge variant={"secondary"} className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {lessonPlan.duration}
            </Badge>
            <Badge variant={"secondary"} className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> {lessonPlan.subject}
            </Badge>
            <Badge variant={"secondary"} className="flex items-center gap-1">
              <User className="h-4 w-4" /> {lessonPlan.studentLevel}
            </Badge>
          </div>
        </CardHeader>
      </Card>
      {lessonPlan?.sections?.map((section: Section, index: number) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="mb-4 overflow-hidden">
            <CardHeader
              className="cursor-pointer bg-secondary/10 hover:bg-secondary/20 transition-colors"
              onClick={() =>
                setExpandedSection(
                  expandedSection === section.id ? null : section.id
                )
              }
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">
                  {section.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{section.duration} minutes</Badge>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </CardHeader>
            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Separator />
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">{section.content}</p>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Classic;
