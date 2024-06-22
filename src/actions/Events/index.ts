"use server";
import { db } from "@/prisma/db";

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
