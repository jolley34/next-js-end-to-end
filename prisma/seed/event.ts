import { PrismaClient } from "@prisma/client";

export async function seedEvents(db: PrismaClient) {
  const cars = await db.category.upsert({
    where: { name: "Cars" },
    update: {},
    create: {
      name: "Cars",
    },
  });

  const teslaRoadster = await db.event.upsert({
    where: { id: "clwj7bhe3000108jzdby5gvwewey3" },
    update: {},
    create: {
      title: "Tesla Roadster",
      createdAt: new Date(),
      description:
        "Tesla Roadster release date is here, are you ready for the future?",
      image:
        "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__bpnjhcrxofqu_xlarge_2x.png",
      video:
        "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
      categories: {
        connect: [{ id: cars.id }],
      },
      user: {
        connect: { id: "clwgbsd2g00049q81pzvugkn1" },
      },
    },
  });

  console.log(teslaRoadster);
}
