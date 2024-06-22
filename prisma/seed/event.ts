import { PrismaClient } from "@prisma/client";

export async function seedEvents(db: PrismaClient) {
  const cars = await db.category.upsert({
    where: { name: "Cars" },
    update: {},
    create: {
      name: "Cars",
    },
  });

  const tvSeries = await db.category.upsert({
    where: { name: "TvSeries" },
    update: {},
    create: {
      name: "TvSeries",
    },
  });

  const tech = await db.category.upsert({
    where: { name: "Tech" },
    update: {},
    create: {
      name: "Tech",
    },
  });

  const teslaRoadster = await db.event.upsert({
    where: { id: "clwj7bhe3000108jzdby5gvwewey3" },
    update: {},
    create: {
      title: "Tesla Roadster",
      isFeatured: false,
      createdAt: new Date(),
      description:
        "Tesla Roadster release date is here, are you ready for the future?",
      image:
        "https://www.hdcarwallpapers.com/walls/2020_tesla_roadster_4k_3-HD.jpg",
      video:
        "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/roadster-loop-metric-kilometer.mp4",
      categories: {
        connect: [{ id: cars.id }],
      },
      user: {
        connect: { id: "clwgbsd2g00049q81pzvugkn1" },
      },
    },
  });

  const spaceX = await db.event.upsert({
    where: { id: "eqreqrqeqrqereqrqqereq334" },
    update: {},
    create: {
      title: "Starship Launch",
      isFeatured: true,
      createdAt: new Date(),
      description: "The next launch is around the corner",
      image:
        "https://cdn.vox-cdn.com/thumbor/ZMbOBrlL0rWGWOhsDeGCrJDSp70=/0x0:3008x1731/3008x1731/filters:focal(1504x866:1505x867)/cdn.vox-cdn.com/uploads/chorus_asset/file/25480313/Starship_launch_4th_flight_test.jpg",
      video: "https://twitter.com/i/broadcasts/1OwxWYYrYNWGQ",
      categories: {
        connect: [{ id: tech.id }],
      },
      user: {
        connect: { id: "clwgbsder00089q814t1jch2a" },
      },
    },
  });

  const netflix = await db.event.upsert({
    where: { id: "eqreqrqeqrqereqrqqereq334" },
    update: {},
    create: {
      title: "Monsters: The Lyle and Erik Menendez Story",
      isFeatured: true,
      createdAt: new Date(),
      description:
        "Cooper Koch and Nicholas Alexander Chavez have been cast as the brothers who infamously murdered their wealthy parents, Jose and Kitty Menendez, in their Beverly Hills home in 1989.",
      image:
        "https://static.digitecgalaxus.ch/Files/7/5/0/2/5/4/4/6/Monsters_Netflix_Announcement_Big221.png",
      video: "https://twitter.com/i/broadcasts/1OwxWYYrYNWGQ",
      categories: {
        connect: [{ id: tvSeries.id }],
      },
      user: {
        connect: { id: "clwgbsder00089q814twerwrqweqweqe1jch2a" },
      },
    },
  });

  console.log(teslaRoadster);
  console.log(spaceX);
  console.log(netflix);
}
