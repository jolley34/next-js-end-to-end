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
      isVerified: true,
      image: "",
      username: "Tesla",
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
      isVerified: false,
      image: "",
      username: "SpaceX",
      password: "imnotnoob",
    },
  });

  const user3 = await db.user.upsert({
    where: { id: "clwgbsder00089q814t1jch2rwera" },
    update: {},
    create: {
      id: "clwgbsder00089q814twerwrqweqweqe1jch2a",
      name: "netflixorso",
      email: "netflix@gmail.com",
      isAdmin: false,
      isVerified: false,
      image: "",
      username: "Netflix",
      password: "imnotnetflix",
    },
  });

  console.log({ user1 });
  console.log({ user2 });
  console.log({ user3 });
}
