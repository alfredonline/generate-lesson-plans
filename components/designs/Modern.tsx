"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, User } from "lucide-react";
import { LessonPlan, Section } from "@prisma/client";
import { motion } from "framer-motion";

const ModernDesign = ({ lessonPlan }: { lessonPlan: any }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">{lessonPlan.title}</h1>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary" className="text-sm py-1 px-2">
            <Clock className="w-4 h-4 mr-1" />
            {lessonPlan.duration} minutes
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-2">
            <BookOpen className="w-4 h-4 mr-1" />
            {lessonPlan.subject}
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-2">
            <User className="w-4 h-4 mr-1" />
            {lessonPlan.studentLevel}
          </Badge>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessonPlan.sections?.map((section: Section, index: number) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {section.duration} minutes
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ModernDesign;
