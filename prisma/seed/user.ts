import { PrismaClient } from "@prisma/client";

export async function seedUsers(db: PrismaClient) {
  const user1 = await db.user.upsert({
    where: { id: "clwgbsd2g00049q81pzvugkn1" },
    update: {},
    create: {
      id: "clwgbsd2g00049q81pzvugkn1",
      name: "Hello",
      email: "jolle@gmail.com",
      isAdmin: true,
      isVerified: false,
      image: "",
      username: "jolle",
      password: "secret",
    },
  });

  const user2 = await db.user.upsert({
    where: { id: "clwgbsder00089q814t1jch2a" },
    update: {},
    create: {
      id: "clwgbsder00089q814t1jch2a",
      name: "Bye",
      email: "noob@gmail.com",
      isAdmin: false,
      isVerified: true,
      image: "",
      username: "nooben",
      password: "imnotnoob",
    },
  });

  console.log({ user1 });
  console.log({ user2 });
}
