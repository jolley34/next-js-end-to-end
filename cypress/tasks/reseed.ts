import { db } from "../../prisma/db";
import { seedEvents } from "../../prisma/seed/event";
import { seedUsers } from "../../prisma/seed/user";

export async function reseed() {
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Cannot reseed outside the test environment");
  }

  // ============= RESET ============= //
  // Ta bort data från alla tabeller du vill återställa
  await db.event.deleteMany({});
  await db.user.deleteMany({});
  // Lägg till fler deleteMany-anrop om du har fler tabeller att återställa

  // ============== SEED ============= //
  // Kör de befintliga seed-funktionerna
  await seedUsers(db);
  await seedEvents(db);

  // Koppla från databasen efter att seeding är klar
  await db.$disconnect();

  return null;
}
