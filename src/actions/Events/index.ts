"use server";

import { auth } from "@/auth";
import { db } from "@/prisma/db";
import { EventFormData } from "@/src/app/api/validation/validation";

export async function getEventsByCategory(categoryName: string) {
  const events = await db.event.findMany({
    where: {
      categories: {
        some: { name: categoryName },
      },
    },
    orderBy: { id: "asc" },
  });
  return { events };
}

export async function AddNewEvent(data: EventFormData) {
  try {
    const session = await auth();

    const newEvent = await db.event.create({
      data: {
        ...data,
        isFeatured: false,
        categories: {
          connect: data.categories.map((categoryId) => ({ id: categoryId })),
        },
        user: {
          connect: { id: session?.user.id },
        },
      },
    });

    return newEvent;
  } catch (error) {
    console.error("Error adding new event:", error);
    throw new Error("Failed to add new event");
  }
}

export async function getAllCategories() {
  return await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: { id: "asc" },
  });
}
