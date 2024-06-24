import { db } from "../../prisma/db";

export async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Cannot reseed outside the test environment");
  }

  // ============= RESET ============= //
  await db.event.deleteMany({});
  // Ta bort från alla tabeller

  // ============== SEED ============= //
  await db.event.upsert({
    where: { id: "" },
    update: {},
    create: {
      id: "1",
      title: "Hello World",
      description: "This is the first post!",
      image: "",
      video: "",
    },
  });

  return null;
}
