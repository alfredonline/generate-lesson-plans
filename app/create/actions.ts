"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import openai from "openai";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { zodResponseFormat } from "openai/helpers/zod";

const openaiClient = new openai({
  apiKey: process.env.OPENAI_API_KEY,
});

const lessonPlanSchema = z.object({
  topic: z.string(),
  subtopic: z.string(),
  duration: z.string(),
  studentLevel: z.string(),
  objective: z.string(),
  sections: z.array(
    z.object({
      title: z.string(),
      content: z.string(),
      duration: z.string(),
    })
  ),
});

export async function CreateLessonPlan(formData: FormData) {
  const topic = formData.get("topic");
  const subtopic = formData.get("subtopic");
  const duration = formData.get("duration");
  const studentLevel = formData.get("studentLevel");
  const objective = formData.get("objective");

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      throw new Error("Unauthorized");
    }

    const userDB = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!userDB) {
      throw new Error("User not found.");
    }

    const response = await openaiClient.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates lesson plans for teachers.",
        },
        {
          role: "user",
          content: `Generate a lesson plan for ${topic} with the subtopic of ${subtopic} with a duration of ${duration} minutes for ${studentLevel} students wuth the objective of ${objective}. The sections of the lesson plan should have a duration but the sum of all section durations should not exceed ${duration} minutes.`,
        },
      ],
      response_format: zodResponseFormat(lessonPlanSchema, "lessonPlan"),
    });

    const lessonPlan = response.choices[0].message.parsed;

    if (!lessonPlan) {
      throw new Error("No lesson plan generated.");
    }

    const lessonPlanDB = await prisma.lessonPlan.create({
      data: {
        ...lessonPlan,
        userId: userDB.id,
        title: lessonPlan.topic,
        subject: lessonPlan.subtopic,
        duration: parseInt(lessonPlan.duration, 10),
        sections: {
          create: lessonPlan.sections.map((section) => ({
            ...section,
            duration: parseInt(section.duration, 10),
          })),
        },
      },
    });

    revalidatePath("/dashboard")

    return { success: true}

  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "An error occurred while creating the lesson plan.",
    };
  }
}
