import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Plan from "@/components/Plan";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import React from "react";
import { LessonPlan, Section } from "@prisma/client";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const lessonPlan = await prisma.lessonPlan.findFirst({
    where: {
      id: params.id,
      userId: user.id,
    },
    include: {
      sections: true,
    }
  });

  if (!lessonPlan) {
    return notFound();
  }

  console.log(lessonPlan)

  return (
    <MaxWidthWrapper>
      <Plan lessonPlan={lessonPlan as LessonPlan & { sections: Section[] }} />
    </MaxWidthWrapper>
  );
};

export default page;
