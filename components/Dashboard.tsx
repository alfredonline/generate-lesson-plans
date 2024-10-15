"use client";

import { useState } from "react";
import { LessonPlan } from "@prisma/client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buttonVariants } from "./ui/button";
import { Package, Settings } from "lucide-react";
import Link from "next/link";

const Dashboard = ({
  lessonPlans,
  subscribed,
  manage_link,
  checkout_link,
}: {
  lessonPlans: LessonPlan[];
  subscribed: boolean;
  manage_link: string;
  checkout_link: string;
}) => {
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null);
  const [durationFilter, setDurationFilter] = useState<number | null>(null);

  const subjects = Array.from(new Set(lessonPlans.map((plan) => plan.subject)));
  const durations = Array.from(
    new Set(lessonPlans.map((plan) => plan.duration))
  );

  const filteredPlans = lessonPlans.filter((plan) => {
    if (subjectFilter && plan.subject !== subjectFilter) return false;
    if (durationFilter && plan.duration !== durationFilter) return false;
    return true;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Lesson Plans</h1>
      <div className="flex space-x-4 mb-6">
        <Select
          onValueChange={(value) =>
            setSubjectFilter(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) =>
            setDurationFilter(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            {durations.map((duration) => (
              <SelectItem key={duration} value={duration.toString()}>
                {duration}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {subscribed ? (
          <Link
            href={manage_link}
            className={buttonVariants({
              variant: "default",
            })}
          >
            <Settings className="mr-2 h-4 w-4" />
            Manage subscription
          </Link>
        ) : (
          <Link
            href={checkout_link}
            className={buttonVariants({
              variant: "default",
            })}
          >
            <Package className="mr-2 h-4 w-4" />
            Upgrade to pro
          </Link>
        )}
      </div>
      {filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <div key={plan.id}>
              <Card className="overflow-hidden">
                <Link href={`/plan/${plan.id}`}>
                  <CardContent className="p-6 bg-gray-50 h-40 flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                    <p className="text-sm text-gray-600">{plan.subject}</p>
                    <p className="text-sm text-gray-600">
                      {plan.duration} minutes
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 bg-white text-xs text-gray-500">
                    <span>{new Date(plan.createdAt).toLocaleDateString()}</span>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-xl text-gray-600">No lesson plans available.</p>
          <p className="text-gray-500 mt-2">
            Create your first lesson plan to get started!
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
