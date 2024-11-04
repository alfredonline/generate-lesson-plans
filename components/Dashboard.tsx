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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">Your Lesson Plans</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <Select onValueChange={value => setSubjectFilter(value === "all" ? null : value)}>
          <SelectTrigger className="w-[200px] bg-white border border-blue-800 rounded-md shadow-md hover:shadow-lg transition duration-200">
            <SelectValue placeholder="Filter by subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map(subject => (
              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={value => setDurationFilter(value === "all" ? null : parseInt(value))}>
          <SelectTrigger className="w-[200px] bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition duration-200">
            <SelectValue placeholder="Filter by Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            {durations.map(duration => (
              <SelectItem key={duration} value={duration.toString()}>{duration} mins</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {subscribed ? (
          <Link href={manage_link} className={buttonVariants({ variant: "default" })}>
            <Settings className="mr-2 h-4 w-4" />
            Manage Subscription
          </Link>
        ) : (
          <Link href={checkout_link} className={buttonVariants({ variant: "default" })}>
            <Package className="mr-2 h-4 w-4" />
            Upgrade to Pro
          </Link>
        )}
      </div>
      {filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlans.map(plan => (
            <div key={plan.id} className="transition-transform transform hover:scale-105">
              <Card className="overflow-hidden shadow-lg rounded-lg">
                <Link href={`/plan/${plan.id}`}>
                  <CardContent className="p-6 bg-white h-40 flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg mb-2 text-teal-600">{plan.title}</h3>
                    <p className="text-sm text-gray-600">{plan.subject}</p>
                    <p className="text-sm text-gray-600">{plan.duration} minutes</p>
                  </CardContent>
                  <CardFooter className="p-4 bg-gray-50 text-xs text-gray-500 rounded-b-lg">
                    <span>{new Date(plan.createdAt).toLocaleDateString()}</span>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No lesson plans found. Please adjust your filters.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
