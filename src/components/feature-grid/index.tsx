import { db } from "@/prisma/db";
import { Card } from "../Card";
import { FeatureGridLayout } from "./layout";

export default async function FeatureGrid() {
  const events = await db.event.findMany({
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
        data-cy="featured-events-grid"
      >
        {events.map((event) => (
          <Card
            isVerified
            key={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            user={event.user?.name}
          />
        ))}
      </div>
    </>
  );
}
