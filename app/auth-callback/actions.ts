"use server";

import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function CreateUserIfNull() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (user) {
      const existingUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });

      if (existingUser) return { success: true };

      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: user.id,
            email: user.email!,
            name: user.given_name + " " + user.family_name,
          },
        });
      }

      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
