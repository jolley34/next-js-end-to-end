import { db } from "@/prisma/db";
import { Card } from "../Card";
import { FeatureGridLayout } from "./layout";

interface TypesProps {
  id: string;
}

export default async function FeatureGrid({ id }: TypesProps) {
  const events = await db.event.findMany({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  return (
    <>
      <FeatureGridLayout />

      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "45%",
          overflowX: "scroll",
          scrollSnapType: "mandatory",
          gap: "2rem",
        }}
      >
        {events.map((event) => (
          <Card
            isVerified
            key={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            user={event.user?.username}
          />
        ))}
      </div>
    </>
  );
}
