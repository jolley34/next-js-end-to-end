import { auth } from "@/auth";
import UploadEventButton from "@/src/components/CreateEvent/components/UploadEventButton";
import FeatureGrid from "@/src/components/Feature-grid";
import { FollowCompanies } from "@/src/components/FollowCompanyBar";
import { HypedGrid } from "@/src/components/Hyped-grid";

export default async function Homepage() {
  const session = await auth();

  return (
    <div style={{ padding: "4rem 6rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {session?.user && <UploadEventButton />}
        <FeatureGrid />
        <FollowCompanies />
        <HypedGrid />
      </div>
    </div>
  );
}
