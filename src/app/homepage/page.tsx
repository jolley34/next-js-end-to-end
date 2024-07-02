import { auth } from "@/auth";
import { getAllCategories } from "@/src/actions/Events";
import EventForm from "@/src/components/CreateEvent/form";
import FeatureGrid from "@/src/components/Feature-grid";
import { FollowCompanies } from "@/src/components/FollowCompanyBar";
import { HypedGrid } from "@/src/components/Hyped-grid";

export default async function Homepage() {
  const session = await auth();
  const categories = await getAllCategories();

  return (
    <div style={{ padding: "4rem 6rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {session?.user && <EventForm categories={categories} />}
        <FeatureGrid />
        <FollowCompanies />
        <HypedGrid />
      </div>
    </div>
  );
}
