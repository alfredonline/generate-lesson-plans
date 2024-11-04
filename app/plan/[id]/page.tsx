import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Plan from "@/components/Plan";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import React from "react";
import { LessonPlan, Section } from "@prisma/client";

//Logging Improvements
//Added logging messages to give insight into the flow of the function, especially for success and error paths.
//Utilized info, warn, and error methods for different log levels, making it easier to determine the type of log.
//Better Error Handling
//Wrapped both user fetching and lesson plan fetching in try-catch blocks to catch any errors that may arise during these operations.

// Optional: you can use a logging library, e.g. Winston, to manage logs better
const logger = {
  info: console.log,
  error: console.error,
};

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  logger.info("Fetching user session.");

  const { getUser } = getKindeServerSession();
  let user;

  try {
    user = await getUser();
    logger.info("User fetched successfully.");
  } catch (error) {
    logger.error("Error fetching user session:", error);
    redirect("/");
    return; // Ensure early return after redirect
  }

  if (!user) {
    logger.warn("User not found, redirecting to home.");
    redirect("/");
    return; // Ensure early return after redirect
  }

  logger.info(`Fetching lesson plan for user ID: ${user.id} and lesson plan ID: ${params.id}`);

  let lessonPlan;
  
  try {
    lessonPlan = await prisma.lessonPlan.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
      include: {
        sections: true,
      },
    });
    logger.info("Lesson plan fetched successfully.");
  } catch (error) {
    logger.error("Error fetching lesson plan:", error);
    return notFound(); // You may also want to return an error page or log this
  }

  if (!lessonPlan) {
    logger.warn(`Lesson plan not found for ID: ${params.id}`);
    return notFound();
  }

  logger.info("Lesson plan data:", lessonPlan);

  return (
    <MaxWidthWrapper>
      <Plan lessonPlan={lessonPlan as LessonPlan & { sections: Section[] }} />
    </MaxWidthWrapper>
  );
};

export default page;
