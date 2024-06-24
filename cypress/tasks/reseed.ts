import { db } from "../../prisma/db";

export async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Cannot reseed outside the test environment");
  }

  // ============= RESET ============= //
  await db.post.deleteMany({});
  // Ta bort från alla tabeller

  // ============== SEED ============= //
  await db.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Hello World",
      content: "This is the first post!",
    },
  });

  return null;
}
