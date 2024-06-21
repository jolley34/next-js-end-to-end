import { PrismaClient } from "@prisma/client";
import console from "console";
import { seedEvents } from "./seed/event";
import { seedUsers } from "./seed/user";

const db = new PrismaClient();

async function main() {
  await seedUsers(db);
  await seedEvents(db);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
