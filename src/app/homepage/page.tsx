import { getAllCategories } from "@/src/actions/Events";
import EventForm from "@/src/components/CreateEvent/form";
import FeatureGrid from "@/src/components/Feature-grid";
import { FollowCompanies } from "@/src/components/FollowCompanyBar";

export default async function Homepage() {
  const categories = await getAllCategories();

  return (
    <div style={{ padding: "4rem 6rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <EventForm />
        <FeatureGrid />
        <FollowCompanies />
      </div>
    </div>
  );
}
